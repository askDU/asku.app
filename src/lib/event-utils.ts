const SUPABASE_URL = 'https://zwugnqsoehxwuugxnaql.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp3dWducXNvZWh4d3V1Z3huYXFsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjMxMTM5MzYsImV4cCI6MjA3ODY4OTkzNn0.uq2iy-E8zR0-AJed4t22SIclU8HNzTsFIWyFMdvRSI4'

export interface EventData {
  title: string
  startTime: string
  endTime?: string
  location?: string
  description?: string
  originalEventId?: string
  imageUrl?: string
}

const ABBREVIATIONS: [string, string][] = [
  ['Spiritual Life Center at Gilpatrick House', 'Gilpatrick'],
  ['Eisner Center for the Performing Arts', 'Eisner Center'],
  ['Michael D. Eisner Center for the Performing Arts', 'Eisner Center'],
  ['Michael D. Eisner Center', 'Eisner Center'],
  ['Burton D. Morgan Center', 'Morgan Center'],
  ['Slayter Union Auditorium', 'Slayter Union'],
  ['Slayter Alcove Convenience Store', 'Slayter Market'],
  ['Mitchell Recreation Center', 'Mitchell Center'],
  ['Hoaglin Wellness Center', 'Hoaglin'],
  ['Hoaglin Center', 'Hoaglin'],
  ['Knapp Performance Hall', 'Knapp Hall'],
  ['Higley Auditorium', 'Higley'],
  ['Doane Library and Archives', 'Doane Library'],
  ['F.W. Olin Science Hall', 'Olin Science'],
  ['Samson Talbot Hall of Biological Science', 'Talbot Hall'],
  ['Herrick Hall and Archives', 'Herrick Hall'],
  ['Barney-Davis Hall', 'Barney-Davis'],
  ['Swasey Chapel', 'Swasey'],
  ['Denison Community Association', 'Denison Comm.'],
  ['Residential Center Comm', 'Res Center'],
  ['Slayter Hall Student Union', 'Slayter Union'],
]

export function shortenLocation(location: string): string {
  if (!location) return ''
  let short = location
  const commaIdx = short.indexOf(', ')
  if (commaIdx !== -1) {
    const before = short.substring(0, commaIdx)
    const after = short.substring(commaIdx + 2)
    if (after.startsWith(before)) short = before
  }
  for (const [full, abbr] of ABBREVIATIONS) {
    if (short.startsWith(full)) {
      short = abbr + short.substring(full.length)
      break
    }
  }
  const nextComma = short.indexOf(',')
  if (nextComma !== -1) short = short.substring(0, nextComma)
  return short.trim().replace(/^[, ]+|[, ]+$/g, '')
}

export function cleanDescription(raw: string): string | null {
  if (!raw) return null
  let clean = raw
  const sepIdx = clean.indexOf('---')
  if (sepIdx !== -1) clean = clean.substring(0, sepIdx)
  clean = clean.replace(/https?:\/\/\S+/g, '')
  clean = clean.replace(/\\n/g, ' ').replace(/\n/g, ' ')
  clean = clean.replace(/Event Details:\s*/gi, '')
  clean = clean.replace(/\s+/g, ' ').trim()
  if (!clean) return null
  if (clean.length > 150) {
    const truncated = clean.substring(0, 150)
    const lastSpace = truncated.lastIndexOf(' ')
    clean = (lastSpace > 100 ? truncated.substring(0, lastSpace) : truncated) + '...'
  }
  return clean
}

export function formatDate(iso: string, endIso?: string): string {
  const date = new Date(iso)
  if (isNaN(date.getTime())) return ''
  const result = date.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  })
  if (endIso) {
    const end = new Date(endIso)
    if (!isNaN(end.getTime())) {
      return result + ' \u2013 ' + end.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
      })
    }
  }
  return result
}

export async function fetchEvent(token: string): Promise<EventData | null> {
  if (!token || !/^[a-z0-9]{12}$/.test(token)) return null
  try {
    const res = await fetch(
      `${SUPABASE_URL}/functions/v1/event-share?token=${token}&format=json`,
      {
        headers: {
          'Accept': 'application/json',
          'apikey': SUPABASE_ANON_KEY,
          'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
        },
        next: { revalidate: 300 },
      }
    )
    if (!res.ok) return null
    return await res.json()
  } catch {
    return null
  }
}

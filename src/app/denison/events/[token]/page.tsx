'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'

const SUPABASE_URL = 'https://zwugnqsoehxwuugxnaql.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp3dWducXNvZWh4d3V1Z3huYXFsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjMxMTM5MzYsImV4cCI6MjA3ODY4OTkzNn0.uq2iy-E8zR0-AJed4t22SIclU8HNzTsFIWyFMdvRSI4'
const APP_STORE_URL = 'https://apps.apple.com/app/asku-denison/id6744640581'

interface EventData {
  title: string
  startTime: string
  endTime?: string
  location?: string
  description?: string
  originalEventId?: string
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

function shortenLocation(location: string): string {
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

function formatDate(iso: string, endIso?: string): string {
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

export default function EventPage() {
  const params = useParams()
  const token = params.token as string
  const [event, setEvent] = useState<EventData | null>(null)
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!token || !/^[a-z0-9]{12}$/.test(token)) {
      setError(true)
      setLoading(false)
      return
    }

    fetch(`${SUPABASE_URL}/functions/v1/event-share?token=${token}&format=json`, {
      headers: {
        'Accept': 'application/json',
        'apikey': SUPABASE_ANON_KEY,
        'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
      },
    })
      .then(res => {
        if (!res.ok) throw new Error('Not found')
        return res.json()
      })
      .then(data => {
        setEvent(data)
        setLoading(false)
      })
      .catch(() => {
        setError(true)
        setLoading(false)
      })
  }, [token])

  const handleOpenApp = () => {
    if (!event) return
    const deepLink = event.originalEventId
      ? `asku://event/${event.originalEventId}`
      : 'asku://'
    const start = Date.now()
    window.location.href = deepLink
    setTimeout(() => {
      if (Date.now() - start < 2000) {
        window.location.href = APP_STORE_URL
      }
    }, 1500)
  }

  if (loading) {
    return (
      <div style={{ textAlign: 'center' }}>
        <div style={{
          width: 32,
          height: 32,
          border: '3px solid #333',
          borderTopColor: '#C41E3A',
          borderRadius: '50%',
          animation: 'spin 0.8s linear infinite',
        }} />
        <style>{`@keyframes spin { to { transform: rotate(360deg) } }`}</style>
      </div>
    )
  }

  if (error || !event) {
    return (
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: 24, fontWeight: 700, marginBottom: 12 }}>Event not found</h1>
        <p style={{ color: '#98989D', marginBottom: 24, fontSize: 15 }}>This link may have expired.</p>
        <a href={APP_STORE_URL} style={{ color: '#C41E3A', fontWeight: 600, textDecoration: 'none', fontSize: 15 }}>
          Get Union on the App Store
        </a>
      </div>
    )
  }

  const dateStr = formatDate(event.startTime, event.endTime)
  const location = event.location ? shortenLocation(event.location) : null
  const description = event.description ? event.description.substring(0, 150) : null

  return (
    <div style={{
      background: '#1C1C1E',
      borderRadius: 20,
      maxWidth: 420,
      width: '100%',
      overflow: 'hidden',
      boxShadow: '0 8px 40px rgba(0,0,0,0.4)',
      display: 'flex',
      flexDirection: 'row',
    }}>
      <div style={{
        width: 4,
        background: '#C41E3A',
        flexShrink: 0,
      }} />
      <div style={{
        padding: '28px 24px',
        flex: 1,
        minWidth: 0,
      }}>
        <div style={{
          fontSize: 13,
          fontWeight: 700,
          color: '#C41E3A',
          letterSpacing: 0.3,
          marginBottom: 16,
          textTransform: 'uppercase' as const,
        }}>
          Denison
        </div>
        <h1 style={{
          fontSize: 26,
          fontWeight: 700,
          lineHeight: 1.2,
          marginBottom: 20,
          color: '#F5F5F7',
          letterSpacing: -0.3,
        }}>
          {event.title}
        </h1>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 10,
          marginBottom: 20,
        }}>
          {dateStr && (
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 14, color: '#98989D', lineHeight: 1.4 }}>
              <span style={{ fontWeight: 600, flexShrink: 0, minWidth: 16 }}>When</span>
              <span>{dateStr}</span>
            </div>
          )}
          {location && (
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 14, color: '#98989D', lineHeight: 1.4 }}>
              <span style={{ fontWeight: 600, flexShrink: 0, minWidth: 16 }}>Where</span>
              <span>{location}</span>
            </div>
          )}
        </div>
        {description && (
          <p style={{
            fontSize: 14,
            lineHeight: 1.55,
            color: '#98989D',
            marginBottom: 24,
          }}>
            {description}
          </p>
        )}
        <button
          onClick={handleOpenApp}
          style={{
            display: 'block',
            width: '100%',
            textAlign: 'center',
            background: '#C41E3A',
            color: '#fff',
            border: 'none',
            fontSize: 16,
            fontWeight: 600,
            padding: '14px 24px',
            borderRadius: 12,
            cursor: 'pointer',
            letterSpacing: -0.1,
          }}
        >
          Open in Union
        </button>
      </div>
    </div>
  )
}

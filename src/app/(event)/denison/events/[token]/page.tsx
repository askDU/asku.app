import type { Metadata } from 'next'
import { fetchEvent, shortenLocation, cleanDescription, formatDate } from '@/lib/event-utils'
import EventCard from './event-card'

const APP_STORE_URL = 'https://apps.apple.com/app/asku-denison/id6744640581'

type Props = {
  params: Promise<{ token: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { token } = await params
  const event = await fetchEvent(token)
  if (!event) {
    return { title: 'Event Not Found — Union' }
  }

  const location = event.location ? shortenLocation(event.location) : null
  const dateStr = formatDate(event.startTime, event.endTime)
  const ogDescParts: string[] = []
  if (dateStr) ogDescParts.push(dateStr)
  if (location) ogDescParts.push(location)
  const ogDescription = ogDescParts.join(' · ') || 'An event at Denison University'
  const deepLink = event.originalEventId ? `asku://event/${event.originalEventId}` : 'asku://'

  return {
    title: `${event.title} — Union`,
    description: ogDescription,
    openGraph: {
      title: event.title,
      description: ogDescription,
      url: `https://asku.app/denison/events/${token}`,
      siteName: 'Union',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: event.title,
      description: ogDescription,
    },
    other: {
      'apple-itunes-app': `app-id=6744640581, app-argument=${deepLink}`,
    },
  }
}

export default async function EventPage({ params }: Props) {
  const { token } = await params
  const event = await fetchEvent(token)

  if (!event) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-6">
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C41E3A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
        </div>
        <h1 className="text-2xl font-bold text-white mb-2">Event not found</h1>
        <p className="text-muted-foreground mb-7 text-sm">
          This link may have expired or been removed.
        </p>
        <a
          href={APP_STORE_URL}
          className="text-primary font-semibold text-sm px-6 py-3 rounded-xl border border-primary/30 hover:bg-primary/5 transition-colors"
        >
          Get Union on the App Store
        </a>
      </div>
    )
  }

  const dateStr = formatDate(event.startTime, event.endTime)
  const location = event.location ? shortenLocation(event.location) : null
  const description = event.description ? cleanDescription(event.description) : null

  return (
    <EventCard
      event={event}
      dateStr={dateStr}
      location={location}
      description={description}
    />
  )
}

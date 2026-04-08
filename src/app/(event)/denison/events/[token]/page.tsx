import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { fetchEvent, shortenLocation, cleanDescription, formatDate } from '@/lib/event-utils'
import OpenInUnionButton from './open-button'

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
  const description = event.description ? cleanDescription(event.description) : null
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
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: 24, fontWeight: 700, marginBottom: 12, color: '#F5F5F7' }}>
          Event not found
        </h1>
        <p style={{ color: '#98989D', marginBottom: 24, fontSize: 15 }}>
          This link may have expired.
        </p>
        <a
          href={APP_STORE_URL}
          style={{ color: '#C41E3A', fontWeight: 600, textDecoration: 'none', fontSize: 15 }}
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
    <div style={{
      background: '#1C1C1E',
      borderRadius: 20,
      maxWidth: 420,
      width: '100%',
      overflow: 'hidden',
      boxShadow: '0 8px 40px rgba(0,0,0,0.4)',
      display: 'flex',
      flexDirection: 'row' as const,
    }}>
      <div style={{ width: 4, background: '#C41E3A', flexShrink: 0 }} />
      <div style={{ padding: '28px 24px', flex: 1, minWidth: 0 }}>
        <div style={{
          fontSize: 13, fontWeight: 700, color: '#C41E3A',
          letterSpacing: 0.3, marginBottom: 16, textTransform: 'uppercase' as const,
        }}>
          Denison
        </div>
        <h1 style={{
          fontSize: 26, fontWeight: 700, lineHeight: 1.2,
          marginBottom: 20, color: '#F5F5F7', letterSpacing: -0.3,
        }}>
          {event.title}
        </h1>
        <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 10, marginBottom: 20 }}>
          {dateStr && (
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 14, color: '#98989D', lineHeight: 1.4 }}>
              <span style={{ fontWeight: 600, flexShrink: 0 }}>When</span>
              <span>{dateStr}</span>
            </div>
          )}
          {location && (
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 14, color: '#98989D', lineHeight: 1.4 }}>
              <span style={{ fontWeight: 600, flexShrink: 0 }}>Where</span>
              <span>{location}</span>
            </div>
          )}
        </div>
        {description && (
          <p style={{ fontSize: 14, lineHeight: 1.55, color: '#98989D', marginBottom: 24 }}>
            {description}
          </p>
        )}
        <OpenInUnionButton eventId={event.originalEventId} />
      </div>
    </div>
  )
}

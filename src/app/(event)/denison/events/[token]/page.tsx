import type { Metadata } from 'next'
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
      <div style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <div style={{
          width: 48, height: 48, borderRadius: 12,
          background: 'rgba(196,30,58,0.1)', display: 'flex',
          alignItems: 'center', justifyContent: 'center',
          margin: '0 auto 20px',
        }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C41E3A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
        </div>
        <h1 style={{ fontSize: 22, fontWeight: 700, marginBottom: 8, color: '#F5F5F7' }}>
          Event not found
        </h1>
        <p style={{ color: '#636366', marginBottom: 28, fontSize: 15, lineHeight: 1.5 }}>
          This link may have expired or been removed.
        </p>
        <a
          href={APP_STORE_URL}
          style={{
            color: '#C41E3A', fontWeight: 600, textDecoration: 'none',
            fontSize: 15, padding: '12px 28px', borderRadius: 10,
            border: '1px solid rgba(196,30,58,0.3)',
            transition: 'all 0.2s',
          }}
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
    <div style={{ position: 'relative', zIndex: 1, width: '100%', maxWidth: 440 }}>
      {/* Card */}
      <div style={{
        background: 'linear-gradient(165deg, rgba(30,30,34,0.95) 0%, rgba(22,22,26,0.98) 100%)',
        borderRadius: 24,
        overflow: 'hidden',
        boxShadow: '0 4px 24px rgba(0,0,0,0.3), 0 20px 60px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.04)',
        border: '1px solid rgba(255,255,255,0.06)',
      }}>
        {/* Accent strip */}
        <div style={{
          height: 3,
          background: 'linear-gradient(90deg, #C41E3A 0%, #E8233A 50%, #C41E3A 100%)',
        }} />

        {/* Content */}
        <div style={{ padding: '32px 28px 28px' }}>
          {/* Brand */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: 8,
            marginBottom: 20,
          }}>
            <div style={{
              width: 6, height: 6, borderRadius: '50%',
              background: '#C41E3A',
              boxShadow: '0 0 8px rgba(196,30,58,0.4)',
            }} />
            <span style={{
              fontSize: 12, fontWeight: 700, color: '#C41E3A',
              letterSpacing: 1.5, textTransform: 'uppercase' as const,
            }}>
              Denison University
            </span>
          </div>

          {/* Title */}
          <h1 style={{
            fontSize: 28, fontWeight: 700, lineHeight: 1.2,
            marginBottom: 24, color: '#F5F5F7', letterSpacing: -0.4,
            margin: '0 0 24px 0',
          }}>
            {event.title}
          </h1>

          {/* Meta section */}
          <div style={{
            display: 'flex', flexDirection: 'column' as const, gap: 0,
            marginBottom: 24,
            background: 'rgba(255,255,255,0.03)',
            borderRadius: 14,
            border: '1px solid rgba(255,255,255,0.04)',
            overflow: 'hidden',
          }}>
            {dateStr && (
              <div style={{
                display: 'flex', alignItems: 'flex-start', gap: 14,
                padding: '14px 16px',
                fontSize: 14, color: '#AEAEB2', lineHeight: 1.45,
              }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#636366" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginTop: 2, flexShrink: 0 }}>
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                <span>{dateStr}</span>
              </div>
            )}
            {location && (
              <div style={{
                display: 'flex', alignItems: 'flex-start', gap: 14,
                padding: '14px 16px',
                fontSize: 14, color: '#AEAEB2', lineHeight: 1.45,
                borderTop: '1px solid rgba(255,255,255,0.04)',
              }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#636366" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginTop: 2, flexShrink: 0 }}>
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>{location}</span>
              </div>
            )}
          </div>

          {/* Description */}
          {description && (
            <p style={{
              fontSize: 14, lineHeight: 1.6, color: '#636366',
              marginBottom: 28, margin: '0 0 28px 0',
            }}>
              {description}
            </p>
          )}

          {/* CTA */}
          <OpenInUnionButton eventId={event.originalEventId} />
        </div>
      </div>

      {/* Footer */}
      <div style={{
        textAlign: 'center' as const, marginTop: 20,
        fontSize: 12, color: '#3A3A3C', fontWeight: 500,
        letterSpacing: 0.3,
      }}>
        Union · Denison University
      </div>
    </div>
  )
}

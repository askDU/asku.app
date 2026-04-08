import { ImageResponse } from 'next/og'
import { fetchEvent, shortenLocation, cleanDescription, formatDate } from '@/lib/event-utils'

export const runtime = 'edge'
export const alt = 'Event at Denison University'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function OGImage({
  params,
}: {
  params: Promise<{ token: string }>
}) {
  const { token } = await params
  const event = await fetchEvent(token)

  if (!event) {
    return new ImageResponse(
      (
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#0C0C0F',
            color: '#F5F5F7',
            fontSize: 36,
            fontWeight: 700,
          }}
        >
          Event not found
        </div>
      ),
      { ...size }
    )
  }

  const dateStr = formatDate(event.startTime, event.endTime)
  const location = event.location ? shortenLocation(event.location) : null
  const description = event.description ? cleanDescription(event.description) : null

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'row',
          background: 'linear-gradient(135deg, #1A0A0F 0%, #0C0C0F 50%, #1C0810 100%)',
          fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", sans-serif',
        }}
      >
        {/* Left accent bar */}
        <div
          style={{
            width: 6,
            height: '100%',
            background: '#C41E3A',
            flexShrink: 0,
          }}
        />

        {/* Content */}
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            padding: '48px 56px',
            position: 'relative',
          }}
        >
          {/* Brand */}
          <div
            style={{
              fontSize: 16,
              fontWeight: 700,
              color: '#C41E3A',
              letterSpacing: 2,
              textTransform: 'uppercase',
              marginBottom: 24,
            }}
          >
            DENISON
          </div>

          {/* Title */}
          <div
            style={{
              fontSize: 44,
              fontWeight: 700,
              color: '#F5F5F7',
              lineHeight: 1.15,
              letterSpacing: -0.5,
              marginBottom: 28,
              maxHeight: 155,
              overflow: 'hidden',
            }}
          >
            {event.title.length > 80 ? event.title.substring(0, 80) + '...' : event.title}
          </div>

          {/* Meta rows */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 12,
              marginBottom: 20,
            }}
          >
            {dateStr && (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                  fontSize: 20,
                  color: '#98989D',
                }}
              >
                <span style={{ fontWeight: 600, color: '#78787C' }}>When</span>
                <span>{dateStr}</span>
              </div>
            )}
            {location && (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                  fontSize: 20,
                  color: '#98989D',
                }}
              >
                <span style={{ fontWeight: 600, color: '#78787C' }}>Where</span>
                <span>{location}</span>
              </div>
            )}
          </div>

          {/* Description */}
          {description && (
            <div
              style={{
                fontSize: 18,
                color: '#6E6E73',
                lineHeight: 1.5,
                maxHeight: 54,
                overflow: 'hidden',
              }}
            >
              {description}
            </div>
          )}

          {/* Bottom-right branding */}
          <div
            style={{
              position: 'absolute',
              bottom: 40,
              right: 56,
              fontSize: 14,
              fontWeight: 600,
              color: '#48484A',
              letterSpacing: 1,
            }}
          >
            Union
          </div>

          {/* Subtle decorative glow */}
          <div
            style={{
              position: 'absolute',
              top: -100,
              right: -100,
              width: 300,
              height: 300,
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(196,30,58,0.08) 0%, transparent 70%)',
            }}
          />
        </div>
      </div>
    ),
    { ...size }
  )
}

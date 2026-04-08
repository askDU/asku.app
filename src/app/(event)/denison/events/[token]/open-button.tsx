'use client'

const APP_STORE_URL = 'https://apps.apple.com/app/asku-denison/id6744640581'

export default function OpenInUnionButton({ eventId }: { eventId?: string }) {
  const handleClick = () => {
    const deepLink = eventId ? `asku://event/${eventId}` : 'asku://'
    const start = Date.now()
    window.location.href = deepLink
    setTimeout(() => {
      if (Date.now() - start < 2000) {
        window.location.href = APP_STORE_URL
      }
    }, 1500)
  }

  return (
    <button
      onClick={handleClick}
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
  )
}

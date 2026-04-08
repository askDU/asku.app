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
    <>
      <style>{`
        .union-cta {
          display: block;
          width: 100%;
          text-align: center;
          background: linear-gradient(135deg, #C41E3A 0%, #D4283F 100%);
          color: #fff;
          border: none;
          font-size: 16px;
          font-weight: 600;
          padding: 15px 24px;
          border-radius: 14px;
          cursor: pointer;
          letter-spacing: -0.1px;
          position: relative;
          overflow: hidden;
          transition: transform 0.15s ease, box-shadow 0.15s ease;
          box-shadow: 0 2px 12px rgba(196,30,58,0.25);
          font-family: inherit;
        }
        .union-cta:hover {
          transform: translateY(-1px);
          box-shadow: 0 4px 20px rgba(196,30,58,0.35);
        }
        .union-cta:active {
          transform: translateY(0) scale(0.98);
          box-shadow: 0 1px 8px rgba(196,30,58,0.2);
        }
      `}</style>
      <button onClick={handleClick} className="union-cta">
        Open in Union
      </button>
    </>
  )
}

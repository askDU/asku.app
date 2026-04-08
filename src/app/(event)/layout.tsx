import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Union',
}

export default function EventLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div
      style={{
        fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Helvetica Neue", Helvetica, Arial, sans-serif',
        background: '#08080A',
        color: '#F5F5F7',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px 20px',
        WebkitFontSmoothing: 'antialiased',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Ambient glow — top right */}
      <div
        style={{
          position: 'fixed',
          top: '-20%',
          right: '-10%',
          width: '50vw',
          height: '50vw',
          maxWidth: 600,
          maxHeight: 600,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(196,30,58,0.12) 0%, rgba(196,30,58,0.03) 40%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      {/* Ambient glow — bottom left */}
      <div
        style={{
          position: 'fixed',
          bottom: '-15%',
          left: '-10%',
          width: '40vw',
          height: '40vw',
          maxWidth: 500,
          maxHeight: 500,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(196,30,58,0.06) 0%, transparent 60%)',
          pointerEvents: 'none',
        }}
      />
      {children}
    </div>
  )
}

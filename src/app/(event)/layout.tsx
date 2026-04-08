export default function EventLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div style={{
      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Helvetica Neue", Helvetica, Arial, sans-serif',
      background: '#0C0C0F',
      color: '#F5F5F7',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '24px',
      WebkitFontSmoothing: 'antialiased',
    }}>
      {children}
    </div>
  )
}

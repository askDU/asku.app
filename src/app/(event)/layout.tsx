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
    <div className="dark min-h-screen bg-[#08080A] text-white antialiased font-sans relative overflow-hidden">
      {/* Ambient glow — top right */}
      <div
        className="fixed -top-[20%] -right-[10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(196,30,58,0.12) 0%, rgba(196,30,58,0.03) 40%, transparent 70%)',
        }}
      />
      {/* Ambient glow — bottom left */}
      <div
        className="fixed -bottom-[15%] -left-[10%] w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(196,30,58,0.06) 0%, transparent 60%)',
        }}
      />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}

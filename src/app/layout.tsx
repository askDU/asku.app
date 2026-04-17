import './globals.css'
import { satoshi } from './fonts'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={satoshi.variable}>
      <body>{children}</body>
    </html>
  )
}

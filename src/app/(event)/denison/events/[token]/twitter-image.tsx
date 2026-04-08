import { ImageResponse } from 'next/og'
import { fetchEvent, shortenLocation, cleanDescription, formatDate } from '@/lib/event-utils'

export const runtime = 'edge'
export const alt = 'Event at Denison University'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

// Same image as opengraph-image — duplicated because Next.js
// requires static exports for runtime/size/contentType
export { default } from './opengraph-image'

'use client'

import { useParams } from 'next/navigation'
import { redirect } from 'next/navigation'
import { useEffect } from 'react'

export default function LegacyEventRedirect() {
  const params = useParams()
  const token = params.token as string

  useEffect(() => {
    window.location.href = `/denison/events/${token}`
  }, [token])

  return null
}

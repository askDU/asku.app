import { NextRequest, NextResponse } from 'next/server'

export function middleware(req: NextRequest) {
    // Check if the route is /trust or under /trust
    const { pathname } = req.nextUrl

    // Note: The config.matcher handles the routing, but we double check here if needed.
    // We strictly protect /trust related routes.

    const basicAuth = req.headers.get('authorization')
    const user = process.env.TRUST_USER
    const pwd = process.env.TRUST_PASS

    if (!user || !pwd) {
        // Fail closed if env vars are missing
        console.error('Missing TRUST_USER or TRUST_PASS environment variables')
        return new NextResponse('Authentication Configuration Error', { status: 500 })
    }

    if (basicAuth) {
        const authValue = basicAuth.split(' ')[1]
        const [u, p] = atob(authValue).split(':')

        if (u === user && p === pwd) {
            return NextResponse.next()
        }
    }

    return new NextResponse('Authentication required', {
        status: 401,
        headers: {
            'WWW-Authenticate': 'Basic realm="Secure Area"',
        },
    })
}

export const config = {
    matcher: '/trust/:path*',
}

import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const PREVIEW_SECRET = 'generazione-dev-2024'
const PREVIEW_COOKIE = 'preview_bypass'

export function middleware(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl

  // Allow the coming soon page always
  if (pathname === '/comingsoon') {
    return NextResponse.next()
  }

  // Activate bypass: visiting /?preview=<secret> sets the cookie
  if (searchParams.get('preview') === PREVIEW_SECRET) {
    const response = NextResponse.redirect(new URL(pathname, request.url))
    response.cookies.set(PREVIEW_COOKIE, '1', { httpOnly: true, path: '/', maxAge: 60 * 60 * 24 * 7 })
    return response
  }

  // Allow through if bypass cookie is present
  if (request.cookies.get(PREVIEW_COOKIE)?.value === '1') {
    return NextResponse.next()
  }

  return NextResponse.redirect(new URL('/comingsoon', request.url))
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|css|js)).*)',
  ],
}

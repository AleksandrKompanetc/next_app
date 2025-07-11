import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const isLoggedIn = request.cookies.get('token')
  const protectedPaths = ['/profile']

  if(protectedPaths.includes(request.nextUrl.pathname) && !isLoggedIn) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  return NextResponse.next()
}
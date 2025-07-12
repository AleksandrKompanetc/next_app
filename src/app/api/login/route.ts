import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const {email, password} = await req.json()

  if(email === 'admin@example.com' && password === '123') {
    const response = NextResponse.json({success: true})
    response.cookies.set('token', 'mock-jwt-token')
    return response
  }

  return NextResponse.json({error: 'Wrong data'}, {status: 401})
}
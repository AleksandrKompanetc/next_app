import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const {email, password} = await req.json()

  if(email === 'admin@example.com' && password === '123') {
    
  }
}
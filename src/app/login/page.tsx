"use client"
import { useForm } from "react-hook-form"

export default function LoginPage() {
  const { register, handleSubmit } = useForm()

  const onSubmit = async (data: any) => {
    const res = await fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify(data)
    })

    if(res.ok) location.href = '/profile'
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <input {...register('email')} type="email" placeholder="Email" className="border p-2 w-full" />
      <input {...register('password')} type="password" placeholder="Password" className="border p-2 w-full" />
      <button className="bg-blue-500 text-white px-4 py-2 rounded" type="submit">Enter</button>
    </form>
  )
}
"use client"
import { useForm } from "react-hook-form"

export default function LoginPage() {
  const { register, handleSubmit } = useForm()

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <input {...register('email')} type="email" placeholder="Email" className="border p-2 w-full" />
      <input type="password" />
      <button></button>
    </form>
  )
}
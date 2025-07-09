"use client"
import { useForm } from "react-hook-form"

export default function LoginPage() {
  const { register, handleSubmit } = useForm()

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <input type="text" />
      <input type="text" />
      <button></button>
    </form>
  )
}
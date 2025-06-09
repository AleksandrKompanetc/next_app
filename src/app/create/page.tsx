import { useState } from "react"
import { useRouter } from "next/router"

export default function CreateUser() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const router = useRouter()

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1>Create</h1>
      <form action=""></form>
    </div>
  )
}
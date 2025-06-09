import { useState } from "react"
import { useRouter } from "next/router"

export default function CreateUser() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  return (
    <div>
      <h1>Create</h1>
    </div>
  )
}
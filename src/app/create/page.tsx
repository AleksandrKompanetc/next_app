import { useState } from "react"
import { useRouter } from "next/router"

export default function CreateUser() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const router = useRouter()

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-xl font-semibold mb-4">Create New User</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input 
          type="text"
          placeholder="Name"
          value={name}
          onChange={e => setName(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <input 
          type="text"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="w-full p-2 border rounded"
          required 
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Create</button>
      </form>
    </div>
  )
}
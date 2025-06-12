import { useEffect, useState } from "react"
import { useRouter } from "next/router";
import Link from "next/link"

interface User {
  id: number;
  name: string;
  email: string;
}

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([])
  const router = useRouter()

  const fetchUsers = () => {
    fetch('/api/users')
      .then(res => res.json())
      .then(setUsers)
  };

  useEffect(() => {
    fetchUsers()
  }, [])

  return (
    <div className="p-6">
      <h1 className="text-xl font-semibold mb-4">Users</h1>
      <div className="grid gap-4 md:grid-cols-2">
        {users.map(user => (
          <div key={user.id} className="p-4 border rounded shadow-sm">
            <h2 className="font-bold">{user.name}</h2>
            <p>{user.email}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
import Link from "next/link"

export default function Home() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Welcome to My App</h1>
      <nav className="space-x-4">
        <Link href="/users" className="text-blue-600">Users</Link>
        <Link href="/create" className="text-blue-600">Create User</Link>
      </nav>
    </main>
  )
}
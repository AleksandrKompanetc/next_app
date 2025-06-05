import Link from "next/link"

export const Navbar = () => {
  return (
    <nav className="flex gap-4 bg-white p-4 shadow mb-4">
      <Link href="/"></Link>
    </nav>
  )
}
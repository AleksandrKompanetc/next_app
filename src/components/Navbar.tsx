import Link from "next/link"

export const Navbar = () => {
  return (
    <nav className="flex gap-4 bg-white p-4 shadow mb-4">
      <div className="text-2xl font-bold">Logo</div>
      <div>
      <Link href="/" className="text-blue-600 hover:underline">Home</Link>
      <Link href="/about" className="text-blue-600 hover:underline">About</Link>
      <Link href="/contact" className="text-blue-600 hover:underline">Contact</Link>
      </div>
    </nav>
  )
}
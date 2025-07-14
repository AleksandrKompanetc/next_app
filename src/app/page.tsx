"use client"

import Link from "next/link"
import Image from "next/image"
import {Globe} from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <header className="sticky top-0 z-50 backdrop-blur-sm bg-black/70">
        <div className="flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2 ">
            <Globe className="h-5 w-5 text-blue-400" />
            <span className="text-sm font-medium">META-PWA</span>
            <div className="ml-2 rounded-full border border-zinc-800 bg-zinc-900/80 px-2 py-0.5 text-xs">v1.0</div>
          </div>
          <nav className="hidden md:flex md:gap-6 absolute left-1/2 transform -translate-x-1/2">
            
          </nav>
        </div>
      </header>
    </div>
  );
}

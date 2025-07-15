"use client"

import Link from "next/link"
import Image from "next/image"
import {Globe} from "lucide-react"
import { Button } from "@/components/ui/button"

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
            <Link href="#features" className="text-sm text-zinc-400 transition-all duration-300 hover:text-white relative after:absolute after:bottom-[-5px] after:left-0 after:h-[2px] after:W-0 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full">
              Возможности
            </Link>
            <Link href="#pricing" className="text-sm text-zinc-400 transition-all duration-300 hover:text-white relative after:absolute after:bottom-[-5px] after:left-0 after:h-[2px] after:w-0 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full">
              Тарифы
            </Link>
            <Link href="#contact" className="hidden text-sm text-zinc-400 transition-all duration-300 hover:text-white relative after:absolute after:bottom-[-5px] after:left-0 after:h-[2px] after:w-0 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full md:block">
              Контакты
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button size="sm" className="h-8 bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 transition-all duration-300 hover:shadow-md hover:shadow-blue-500/20" >
              Sign In
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="relative overflow-hidden">

        </section>
      </main>
    </div>
  );
}

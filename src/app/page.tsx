"use client"

import Link from "next/link"
import Image from "next/image"
import { Globe, Star } from "lucide-react"
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
        <section className="relative overflow-hidden bg-gradient-to-b from-black via-zinc-950 to-zinc-900/95 py-20 md:py-32">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(64,64,64,0.1),transparent_60%)] animate-pulse-slow"></div>
          <div className="relative px-4 md:px-6">
            <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
              <div className="mb-4 rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1 text-xs transition-all duration-300 hover:border-blue-500 hover:bg-zinc-800">
                META-PWA v1.0 уже доступно {" "}
                <Link href="#" className="ml-1 text-blue-400 hover:underline">
                  Узнать больше →
                </Link>
              </div>
              <h1 className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl text-transparent animate-gradient-x">
                META PWA{" "}
                <span className="mb-6 text-4xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl block">
                  Наиболее эффективный PWA сервис на рынке
                </span>
              </h1>
              <p className="mb-10 max-w-2xl text-zinc-400 md:text-xl">
                META-PWA помогает создавать молниеносные, работающие офлайн прогрессивные веб-приложения, которые 
                обезпечивают пользователям опит близкий к нативному.
              </p>
              <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button className="h-12 bg-gradient-to-r from-blue-500 to-blue-600 px-8 text-white hover:from-blue-600 hover:to-blue-700 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">Создать PWA</Button>
              </div>
              <div className="flex items-center justify-center gap-2">
                <div className="flex items-center ">
                  {[1,2,3,4,5].map((i) => (
                    <Star key={i} className="h-4 w-4 fill-white text-white" />
                  ))}
                </div>
                <span className="text-sm text-zinc-400">Используется 50+ разработчиками</span>
              </div>
            </div>
          </div>
        </section>
        
      </main>
    </div>
  );
}

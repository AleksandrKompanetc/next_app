"use client"

import Link from "next/link"
import Image from "next/image"
import { Globe, Star, Zap, Download, Wrench } from "lucide-react"
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
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="h-4 w-4 fill-white text-white" />
                  ))}
                </div>
                <span className="text-sm text-zinc-400">Используется 50+ разработчиками</span>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="relative bg-gradient-to-b from-zinc-900/95 via-black to-zinc-950/95 py-20 md:py-32">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(59,130,246,0.05),transparent_60%)]">
            <div className="px-4 md:px-6 relative z-10">
              <div className="mx-auto max-w-2xl text-center">
                <div className="mb-4 inline-block rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1 text-xs transition-all duration-300 hover:border-blue-500 hover:bg-zinc-800">
                  Возможности
                </div>
                <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
                  Все необходимое для создания современных PWA
                </h2>
                <p className="mb-10 text-zinc-400 md:text-lg">
                  META-PWA предоставляет комплексный набор инструментов для создания, оптимизации и развертывания
                  прогрессивных веб-приложений, которые безупречно работают на всех устройствах,
                  разработанный командой профессионалов с богатым опытом.
                </p>
              </div>
              <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
                <div className="col-span-1 md:col-span-2 rounded-xl border border-zinc-800 bg-gradient-to-br from-zinc-900/90 via-blue-950/20 to-zinc-900/80 p-6 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg hover:shadow-blue-900/20 group cursor-pointer">
                  <div className="flex items-start gap-4">
                    <div className="mb-4 min-w-[3rem] flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400 group-hover:bg-blue-500/20 transition-all duration-300 group-hover:scale-110">
                      <Zap className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="mb-2 text-xl font-medium">Молниеносная скорость</h3>
                      <p className="text-sm text-zinc-400">
                        Оптимизированная производительность с временем загрузки менее секунды и плавным взаимодействием даже в медленных сетях.
                        Наше решение использует передовые технологии для обеспечения максимально быстрой работы приложений.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border border-zinc-800 bg-gradient-to-br from-zinc-900/90 via-purple-950/20 to-zinc-900/80 p-6 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg hover:shadow-purple-900/20 group cursor-pointer">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400 group-hover:bg-blue-500/20 transition-all duration-300 group-hover:scale-110">
                    <Download className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-xl font-medium">100кк+ инсталлов</h3>
                  <p className="text-sm text-zinc-400">
                    100 миллионов установок — доверие пользователей, качество, скорость, удобство, инновации, успех!
                  </p>
                </div>

                <div
                  className="rounded-xl border border-zinc-800 bg-gradient-to-br from-zinc-900/90 via-emerald-950/20 to-zinc-900/80 p-6 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg hover:shadow-emerald-900/20 group cursor-pointer"
                  onClick={() => window.open("https://t.me/metapwa", "_blank")}
                >
                  <div className="flex h-full flex-col justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400 group-hover:bg-blue-500/20 transition-all duration-300 group-hover:scale-110">
                      <Wrench className="h-6 w-6" />
                    </div>
                    <div className="mt-4">
                      <h3 className="mb-2 text-xl font-medium">Стабильные сервера</h3>
                      <p className="text-sm text-zinc-200">Высокая производительность, надежность, доступность, безопасность.</p>
                    </div>
                  </div>
                </div>

                <div
                  className="rounded-xl border border-zinc-800 bg-gradient-to-br from-zinc-900/90 via-indigo-950/20 to-zinc-900/80 p-6 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg hover:shadow-indigo-900/20 group cursor-pointer"
                  onClick={() => window.open("https://t.me/metapwa", "_blank")}
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400 group-hover:bg-blue-500/20 transition-all duration-300 group-hover:scale-110">
                    <Code className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-xl font-medium">Современный стек</h3>
                  <p className="text-sm text-zinc-400">
                    Создано с использованием React, Next.js и современных веб-API для перспективной разработки.
                  </p>
                </div>

              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

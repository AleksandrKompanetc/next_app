"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle, Code, Github, Globe, Rocket, Star, Users, Zap, Wrench, DollarSign, Download, BellPlus, LayoutPanelLeft, Apple,  Lock } from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <header className="sticky top-0 z-50 backdrop-blur-sm bg-black/70">
        <div className="flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2">
            <Globe className="h-5 w-5 text-blue-400" />
            <span className="text-sm font-medium">META-PWA</span>
            <div className="ml-2 rounded-full border border-zinc-800 bg-zinc-900/80 px-2 py-0.5 text-xs">v1.0</div>
          </div>
          <nav className="hidden md:flex md:gap-6 absolute left-1/2 transform -translate-x-1/2">
            <Link href="#features" className="text-sm text-zinc-400 transition-all duration-300 hover:text-white relative after:absolute after:bottom-[-5px] after:left-0 after:h-[2px] after:w-0 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full">
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
            <Button size="sm" className="h-8 bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 transition-all duration-300 hover:shadow-md hover:shadow-blue-500/20" onClick={() => window.open("https://t.me/metapwa", "_blank")}>
              Sign In
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-black via-zinc-950 to-zinc-900/95 py-20 md:py-32">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(64,64,64,0.1),transparent_60%)] animate-pulse-slow"></div>
          <div className="relative px-4 md:px-6">
            <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
              <div className="mb-4 rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1 text-xs transition-all duration-300 hover:border-blue-500 hover:bg-zinc-800">
                META-PWA v1.0 уже доступно{" "}
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
                обеспечивают пользователям опыт, близкий к нативному.
              </p>
              <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button className="h-12 bg-gradient-to-r from-blue-500 to-blue-600 px-8 text-white hover:from-blue-600 hover:to-blue-700 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20" onClick={() => window.open("https://t.me/metapwa", "_blank")}>Создать PWA</Button>
              </div>
              <div className="flex items-center justify-center gap-2">
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="h-4 w-4 fill-white text-white" />
                  ))}
                </div>
                <span className="text-sm text-zinc-400">Используется 50+ разработчиками</span>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="relative bg-gradient-to-b from-zinc-900/95 via-black to-zinc-950/95 py-20 md:py-32">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(59,130,246,0.05),transparent_60%)]"></div>
          <div className="px-4 md:px-6 relative z-10">
            <div className="mx-auto max-w-2xl text-center">
              <div className="mb-4 inline-block rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1 text-xs transition-all duration-300 hover:border-blue-500 hover:bg-zinc-800">
                Возможности
              </div>
              <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
                Всё необходимое для создания современных PWA
              </h2>
              <p className="mb-10 text-zinc-400 md:text-lg">
                META-PWA предоставляет комплексный набор инструментов для создания, оптимизации и развертывания
                прогрессивных веб-приложений, которые безупречно работают на всех устройствах,
                разработанный командой профессионалов с богатым опытом.
              </p>
            </div>

            {/* Combined Bento Grid Layout for Features and Team Achievements */}
            <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
              {/* Feature 1 - Large Tile (Spans 2 columns) */}
              <div
                className="col-span-1 md:col-span-2 rounded-xl border border-zinc-800 bg-gradient-to-br from-zinc-900/90 via-blue-950/20 to-zinc-900/80 p-6 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg hover:shadow-blue-900/20 group cursor-pointer"
                onClick={() => window.open("https://t.me/metapwa", "_blank")}
              >
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

              {/* Feature 2 - Regular Tile */}
              <div
                className="rounded-xl border border-zinc-800 bg-gradient-to-br from-zinc-900/90 via-purple-950/20 to-zinc-900/80 p-6 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg hover:shadow-purple-900/20 group cursor-pointer"
                onClick={() => window.open("https://t.me/metapwa", "_blank")}
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400 group-hover:bg-blue-500/20 transition-all duration-300 group-hover:scale-110">
                  <Download className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-medium">100кк+ инсталлов</h3>
                <p className="text-sm text-zinc-400">
                  100 миллионов установок — доверие пользователей, качество, скорость, удобство, инновации, успех! 
                </p>
              </div>

              {/* Achievement 1 */}
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

              {/* Feature 3 - Regular Tile */}
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

              {/* Achievement 2 - Large Tile */}
              <div
                className="col-span-1 md:col-span-2 rounded-xl border border-zinc-800 bg-gradient-to-br from-zinc-900/90 via-amber-950/20 to-zinc-900/80 p-6 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg hover:shadow-amber-900/20 group cursor-pointer"
                onClick={() => window.open("https://t.me/metapwa", "_blank")}
              >
                <div className="flex items-start gap-4">
                  <div className="flex min-w-[3rem] h-12 w-12 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400 group-hover:bg-blue-500/20 transition-all duration-300 group-hover:scale-110">
                    <LayoutPanelLeft className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-medium">Кастомные решения для премиум пользователей</h3>
                    <p className="text-sm text-zinc-200">
                      Индивидуальные настройки, уникальные функции и эксклюзивный доступ для пользователей, ценящих высокий уровень сервиса и качества.
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature 4 - Regular Tile */}
              <div
                className="rounded-xl border border-zinc-800 bg-gradient-to-br from-zinc-900/90 via-cyan-950/20 to-zinc-900/80 p-6 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg hover:shadow-cyan-900/20 group cursor-pointer"
                onClick={() => window.open("https://t.me/metapwa", "_blank")}
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400 group-hover:bg-blue-500/20 transition-all duration-300 group-hover:scale-110">
                  <Rocket className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-medium">24/7 саппорт</h3>
                <p className="text-sm text-zinc-400">
                  Круглосуточная поддержка, мы всегда готовы помочь с любыми вопросами и проблемами в любое время.
                </p>
              </div>

              {/* Achievement 3 */}
              <div
                className="rounded-xl border border-zinc-800 bg-gradient-to-br from-zinc-900/90 via-rose-950/20 to-zinc-900/80 p-6 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg hover:shadow-rose-900/20 group cursor-pointer"
                onClick={() => window.open("https://t.me/metapwa", "_blank")}
              >
                <div className="flex h-full flex-col justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400 group-hover:bg-blue-500/20 transition-all duration-300 group-hover:scale-110">
                    <BellPlus className="h-6 w-6" />
                  </div>
                  <div className="mt-4">
                    <h3 className="mb-2 text-xl font-medium">Уникальная система настройки пушей</h3>
                    <p className="text-sm text-zinc-200">Полная настройка пушей под любые нужды.</p>
                  </div>
                </div>
              </div>

              {/* Feature 5 - Large Tile (Spans 2 columns) */}
              <div
                className="col-span-1 md:col-span-2 rounded-xl border border-zinc-800 bg-gradient-to-br from-zinc-900/90 via-sky-950/20 to-zinc-900/80 p-6 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg hover:shadow-sky-900/20 group cursor-pointer"
                onClick={() => window.open("https://t.me/metapwa", "_blank")}
              >
                <div className="flex items-start gap-4">
                  <div className="mb-4 min-w-[3rem] flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400 group-hover:bg-blue-500/20 transition-all duration-300 group-hover:scale-110">
                    <Apple className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-medium">Кросс-платформенность</h3>
                    <p className="text-sm text-zinc-400">
                      Работает на всех современных браузерах и устройствах с встроенным адаптивным дизайном.
                      Ваше приложение будет безупречно выглядеть и функционировать на любом устройстве от смартфонов до десктопов.
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature 6 - Regular Tile */}
              <div
                className="rounded-xl border border-zinc-800 bg-gradient-to-br from-zinc-900/90 via-teal-950/20 to-zinc-900/80 p-6 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg hover:shadow-teal-900/20 group cursor-pointer"
                onClick={() => window.open("https://t.me/metapwa", "_blank")}
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400 group-hover:bg-blue-500/20 transition-all duration-300 group-hover:scale-110">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-medium">SEO-оптимизация</h3>
                <p className="text-sm text-zinc-400">
                  Встроенные лучшие практики SEO и рендеринг на стороне сервера для максимальной обнаруживаемости.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* Why Us Section */}
        <section id="why-us" className="hidden relative bg-gradient-to-b from-zinc-950/95 via-zinc-900/70 to-black/95 py-20 md:py-32">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(59,130,246,0.05),transparent_50%)]"></div>
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="grid gap-12 md:grid-cols-2">
              <div>
                <div className="mb-4 inline-block rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1 text-xs transition-all duration-300 hover:border-blue-500 hover:bg-zinc-800">
                  Почему выбирают нас
                </div>
                <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">
                  Что отличает META-PWA от конкурентов
                </h2>
                <p className="mb-8 text-zinc-400 md:text-lg">
                  Мы создали META-PWA с фокусом на опыт разработчика, производительность и удовлетворенность
                  пользователей.
                </p>
                <ul className="space-y-6">
                  {[
                    {
                      title: "Экспертная поддержка",
                      description: "Наша команда экспертов по PWA доступна 24/7, чтобы помочь вам с любыми вопросами.",
                    },
                    {
                      title: "Доказанные результаты",
                      description:
                        "Наши клиенты отмечают в среднем 40% увеличение вовлеченности пользователей после внедрения META-PWA.",
                    },
                    {
                      title: "Постоянные инновации",
                      description:
                        "Мы постоянно обновляем нашу платформу, внедряя последние веб-технологии и лучшие практики.",
                    },
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-500/10 text-blue-400">
                        <CheckCircle className={`h-4 w-4 ${i % 2 === 0 ? 'rotate-12' : '-rotate-12'} transition-transform duration-300 hover:rotate-0`} />
                      </div>
                      <div>
                        <h3 className="mb-1 font-medium">{item.title}</h3>
                        <p className="text-sm text-zinc-400">{item.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/image.png"
                  width={800}
                  height={600}
                  alt="META-PWA в действии"
                  className="w-full rounded-xl object-cover relative z-10 transform rotate-3 hover:rotate-0 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="relative bg-gradient-to-b from-black/95 via-zinc-950/90 to-zinc-900/95 py-20 md:py-32">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(59,130,246,0.05),transparent_60%)]"></div>
          <div className="px-4 md:px-6 relative z-10">
            <div className="mx-auto max-w-2xl text-center">
              <div className="mb-4 inline-block rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1 text-xs transition-all duration-300 hover:border-blue-500 hover:bg-zinc-800">
                Тарифы
              </div>
              <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Простые и прозрачные цены</h2>
              <p className="mb-10 text-zinc-400 md:text-lg">
                Выберите план, который подходит для вашего проекта. Все планы включают основные функции.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
              {[
                {
                  name: "Стартовый",
                  price: "500 $",
                  period: "1 месяц",
                  description: "Идеально для небольших проектов и стартапов",
                  features: ["До 20 проектов", "Базовая аналитика", "Поддержка сообщества", "Основные функции PWA"],
                  popular: false,
                  gradient: "from-zinc-900/95 via-indigo-950/10 to-zinc-900/80"
                },
                {
                  name: "Профессиональный",
                  price: "1300 $",
                  period: "3 месяца",
                  description: "Для растущего бизнеса и команд",
                  features: [
                    "Неограниченное количество проектов",
                    "Расширенная аналитика",
                    "Приоритетная поддержка",
                    "Расширенные возможности офлайн-работы",
                    "Индивидуальный брендинг",
                  ],
                  popular: true,
                  gradient: "from-zinc-900/95 via-blue-950/20 to-zinc-900/80"
                },
                {
                  name: "Корпоративный",
                  price: "2400 $",
                  period: "6 месяцев",
                  description: "Для крупных организаций со сложными потребностями",
                  features: [
                    "Всё из Профессионального плана",
                    "Выделенный менеджер",
                    "Круглосуточная поддержка",
                    "Индивидуальные интеграции",
                    "Гарантии SLA",
                  ],
                  popular: false,
                  gradient: "from-zinc-900/95 via-purple-950/10 to-zinc-900/80"
                },
              ].map((plan, i) => (
                <div
                  key={i}
                  className={`relative rounded-xl border flex flex-col h-full ${plan.popular ? "border-blue-500/70" : "border-zinc-800/70"} bg-gradient-to-br ${plan.gradient} p-6 backdrop-blur-sm hover:shadow-lg ${plan.popular ? "hover:shadow-blue-900/30" : "hover:shadow-indigo-900/10"} transition-all duration-300 hover:translate-y-[-5px] group cursor-pointer`}
                  onClick={() => window.open("https://t.me/metapwa", "_blank")}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-blue-500 px-3 py-1 text-xs font-medium shadow-lg shadow-blue-500/20">
                      Популярный
                    </div>
                  )}
                  <div className="mb-4">
                    <h3 className="text-xl font-medium">{plan.name}</h3>
                    <div className="mt-2 flex items-baseline">
                      <span className="text-4xl font-bold bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">{plan.price}</span>
                      <span className="ml-1 text-sm text-zinc-400">/ {plan.period}</span>
                    </div>
                    <p className="mt-2 text-sm text-zinc-400">{plan.description}</p>
                  </div>
                  <ul className="mb-6 space-y-3">
                    {plan.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm">
                        <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-500/10 text-blue-400 group-hover:bg-blue-500/20 transition-all duration-300">
                          <CheckCircle className="h-3 w-3" />
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className="w-full transition-all duration-300 mt-auto bg-blue-500 text-white hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/20"
                    onClick={() => window.open("https://t.me/metapwa", "_blank")}
                  >
                    Связаться с отделом продаж
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="relative bg-gradient-to-b from-zinc-900/95 to-black py-20 md:py-32">
          <div className="absolute inset-0 bg-[radial-gradient(circle at 59% 30%,rgba(59,130,246,0.05),transparent 0%)]"></div>
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="grid gap-12 md:grid-cols-2">
              <div>
                <div className="mb-4 inline-block rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1 text-xs transition-all duration-300 hover:border-blue-500 hover:bg-zinc-800">
                  Свяжитесь с нами
                </div>
                <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">Свяжитесь с нашей командой</h2>
                <p className="mb-8 text-zinc-400 md:text-lg">
                  Есть вопросы о META-PWA? Наша команда готова помочь вам начать работу.
                </p>
                <div className="space-y-6">
                  {[
                    {
                      icon: (
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          width="24" 
                          height="24" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke="currentColor" 
                          strokeWidth="2" 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          className="h-5 w-5"
                        >
                          <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" /><path d="m21.854 2.147-10.94 10.939" />
                        </svg>
                      ),
                      title: "Телеграм",
                      content: "@metapwa",
                    },
                    {
                      icon: (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-5 w-5"
                        >
                          <rect width="20" height="16" x="2" y="4" rx="2" />
                          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                        </svg>
                      ),
                      title: "Email",
                      content: "creatorpwa@gmail.com",
                    },
                  ].map((contact, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-zinc-800 text-blue-400">
                        {contact.icon}
                      </div>
                      <div>
                        <h3 className="font-medium" >{contact.title}</h3>
                        <p className="text-sm text-zinc-400">
                          <a href="https://t.me/metapwa" target="_blank" className="text-sm text-zinc-400">{contact.content}</a>
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <div className="rounded-xl border border-zinc-800 bg-black p-6 cursor-pointer" onClick={() => window.open("https://t.me/metapwa", "_blank")}>
                  <h3 className="mb-4 text-xl font-medium">Отправьте нам сообщение</h3>
                  <form className="space-y-4">
                    <div>
                      <label htmlFor="name" className="mb-2 block text-sm font-medium">
                        Имя
                      </label>
                      <Input
                        id="name"
                        placeholder="Введите ваше имя"
                        className="border-zinc-800 bg-zinc-900 text-white placeholder:text-zinc-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="mb-2 block text-sm font-medium">
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Введите ваш email"
                        className="border-zinc-800 bg-zinc-900 text-white placeholder:text-zinc-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="mb-2 block text-sm font-medium">
                        Сообщение
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Введите ваше сообщение"
                        className="min-h-[120px] border-zinc-800 bg-zinc-900 text-white placeholder:text-zinc-500"
                      />
                    </div>
                    <Button className="w-full bg-blue-500 hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/20" onClick={() => window.open("https://t.me/metapwa", "_blank")}>Отправить сообщение</Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-zinc-800/30 bg-gradient-to-b from-black to-zinc-950 py-8">
        <div className="flex flex-col items-center justify-between gap-4 px-4 md:flex-row md:px-6">
          <div className="flex items-center gap-2">
            <Globe className="h-5 w-5" />
            <span className="text-sm font-medium">META-PWA</span>
          </div>
          <p className="text-center text-xs text-zinc-500 md:text-left">
            &copy; {new Date().getFullYear()} META-PWA. Все права защищены.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-xs text-zinc-500 hover:text-white">
              Условия
            </Link>
            <Link href="#" className="text-xs text-zinc-500 hover:text-white">
              Конфиденциальность
            </Link>
            <Link href="#" className="text-xs text-zinc-500 hover:text-white">
              Cookies
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

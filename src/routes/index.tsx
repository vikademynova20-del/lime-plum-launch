import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, MessageCircle, Mail, Sparkles, Zap, Layers, Rocket, CheckCircle2 } from "lucide-react";

import projectFlowers from "@/assets/project-flowers.jpg";
import projectFintech from "@/assets/project-fintech.jpg";
import projectCourse from "@/assets/project-course.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Виктория Дей — вайб-кодер и разработчик лендингов" },
      { name: "description", content: "Портфолио Виктории Дей: быстрый запуск лендингов, которые продают." },
      { property: "og:title", content: "Виктория Дей — вайб-кодер и разработчик лендингов" },
      { property: "og:description", content: "Портфолио Виктории Дей: быстрый запуск лендингов, которые продают." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const projects = [
  {
    title: "Цветочная доставка",
    category: "E-commerce",
    description: "Лендинг для премиального сервиса доставки букетов с калькулятором и онлайн-оплатой.",
    metric: "+34% заявок",
    image: projectFlowers,
    accent: "lime",
  },
  {
    title: "FinTech-стартап",
    category: "SaaS",
    description: "Посадочная страница для B2B-финтеха: демо-форма, социальные доказательства, интеграция CRM.",
    metric: "1200+ лидов",
    image: projectFintech,
    accent: "cyan",
  },
  {
    title: "Курс по дизайну",
    category: "Образование",
    description: "Продающая страница онлайн-курса с программой, отзывами и потоковой оплатой.",
    metric: "$18K выручки",
    image: projectCourse,
    accent: "pink",
  },
];

const services = [
  {
    icon: Sparkles,
    title: "Лендинг под ключ",
    description: "От идеи до запуска: копирайтинг, дизайн, вёрстка, анимации и базовая SEO-настройка.",
  },
  {
    icon: Zap,
    title: "Быстрый запуск",
    description: "MVP-лендинг за 3–5 дней. Проверяем гипотезу, собираем заявки, дорабатываем по фидбеку.",
  },
  {
    icon: Layers,
    title: "Дизайн + код",
    description: "Не просто красивые картинки, а продуманный UX, адаптив и чистый код на современном стеке.",
  },
  {
    icon: Rocket,
    title: "Апгрейд существующей страницы",
    description: "Пересобираю старые лендинги: ускоряю, улучшаю конверсию, добавляю интерактивность.",
  },
];

const steps = [
  { num: "01", title: "Бриф", description: "Обсуждаем цель, аудиторию, конкурентов и референсы." },
  { num: "02", title: "Структура", description: "Собираю скелет страницы: блоки, смыслы, призывы к действию." },
  { num: "03", title: "Дизайн", description: "Рисую UI в тёмной сливовой палитре с кислотным акцентом." },
  { num: "04", title: "Разработка", description: "Верстаю на React + Tailwind, подключаю формы и аналитику." },
  { num: "05", title: "Запуск", description: "Деплой, тесты, правки и передача готового лендинга вам." },
];

function Index() {
  return (
    <main className="relative overflow-hidden bg-background text-foreground">
      {/* Decorative background glows */}
      <div className="pointer-events-none absolute inset-0 grain" />
      <div className="pointer-events-none absolute -left-32 top-0 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[120px]" />
      <div className="pointer-events-none absolute right-0 top-[40%] h-[400px] w-[400px] rounded-full bg-cyan-glow/10 blur-[100px]" />

      {/* Hero */}
      <section className="relative px-4 pb-20 pt-24 sm:px-6 lg:px-8 lg:pb-32 lg:pt-40">
        <div className="mx-auto max-w-5xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-1.5 text-sm font-medium text-muted-foreground backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Доступна для новых проектов
          </div>
          <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl text-balance">
            Лендинги, которые <br className="hidden sm:block" />
            <span className="text-primary">запускаются за дни</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            Я Виктория, вайб-кодер. Создаю быстрые, стильные и продающие посадочные страницы для стартапов, экспертов и малого бизнеса.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://t.me/"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-xl bg-primary px-7 py-3.5 font-display text-base font-semibold text-primary-foreground transition-transform hover:scale-[1.02] hover:bg-primary/95"
            >
              Написать в Telegram
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="mailto:hello@victoriaday.dev"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-secondary px-7 py-3.5 font-display text-base font-semibold text-secondary-foreground transition-colors hover:bg-plum-lighter"
            >
              <Mail className="h-4 w-4" />
              hello@victoriaday.dev
            </a>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="relative px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between lg:mb-16">
            <div>
              <span className="font-display text-sm font-semibold uppercase tracking-wider text-primary">Портфолио</span>
              <h2 className="mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                Избранные проекты
              </h2>
            </div>
            <p className="max-w-md text-muted-foreground">Три разных кейса — один подход: скорость, визуал и результат.</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    width={1024}
                    height={768}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    className={`absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-semibold ${
                      project.accent === "lime"
                        ? "bg-primary text-primary-foreground"
                        : project.accent === "cyan"
                          ? "bg-cyan-glow text-plum"
                          : "bg-pink-glow text-plum"
                    }`}
                  >
                    {project.category}
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-xl font-bold">{project.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
                  <div className="mt-6 flex items-center justify-between">
                    <span className="font-display text-lg font-semibold text-foreground">{project.metric}</span>
                    <span
                      className={`flex h-8 w-8 items-center justify-center rounded-full ${
                        project.accent === "lime"
                          ? "bg-primary text-primary-foreground"
                          : project.accent === "cyan"
                            ? "bg-cyan-glow text-plum"
                            : "bg-pink-glow text-plum"
                      }`}
                    >
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="relative px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center lg:mb-16">
            <span className="font-display text-sm font-semibold uppercase tracking-wider text-primary">Услуги</span>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">Что я делаю</h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/30"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="relative px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 lg:mb-16">
            <span className="font-display text-sm font-semibold uppercase tracking-wider text-primary">Процесс</span>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">Как я работаю</h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((step, index) => (
              <div
                key={step.num}
                className="relative rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/30"
              >
                <span className="font-display text-4xl font-bold text-primary/40">{step.num}</span>
                <h3 className="mt-4 font-display text-lg font-bold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
                {index < steps.length - 1 && (
                  <div className="hidden lg:absolute lg:-right-3 lg:top-1/2 lg:block lg:h-px lg:w-6 lg:bg-border" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-border bg-card px-6 py-16 text-center sm:px-12 lg:py-20">
          <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-primary/20 blur-[80px]" />
          <div className="pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-cyan-glow/15 blur-[80px]" />

          <div className="relative z-10">
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Давайте запустим ваш <br className="hidden sm:block" />
              <span className="text-primary">следующий лендинг</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Расскажите о проекте — я отвечу в течение дня и предложу план работы.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="https://t.me/"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-7 py-4 font-display text-base font-semibold text-primary-foreground transition-transform hover:scale-[1.02] sm:w-auto"
              >
                <MessageCircle className="h-5 w-5" />
                Telegram
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="mailto:hello@victoriaday.dev"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-xl border border-border bg-secondary px-7 py-4 font-display text-base font-semibold text-secondary-foreground transition-colors hover:bg-plum-lighter sm:w-auto"
              >
                <Mail className="h-5 w-5" />
                Email
              </a>
            </div>
            <p className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <CheckCircle2 className="h-4 w-4 text-primary" />
              Ответ в течение 24 часов
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
          <span className="font-display text-lg font-bold">Виктория Дей</span>
          <p className="text-sm text-muted-foreground">© 2026 Виктория Дей. Вайб-кодинг с душой.</p>
        </div>
      </footer>
    </main>
  );
}

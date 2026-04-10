"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-[hsl(var(--background))] text-[hsl(var(--foreground))]">
      {/* Theme toggle */}
      <div className="fixed top-5 right-6 z-50">
        <ThemeToggle />
      </div>

      {/* Hero */}
      <section className="min-h-screen flex items-center px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid md:grid-cols-5 gap-12 md:gap-16 items-center">
            {/* Text - takes 3 cols */}
            <div
              className={`md:col-span-3 transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <p className="section-subtitle mb-6">Sungmin Lee</p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
                Software engineer
                <br />
                <span className="text-[hsl(var(--primary))]">&</span> guitarist
              </h1>
              <p className="text-lg text-[hsl(var(--muted-foreground))] leading-relaxed max-w-lg mb-10">
                I build web applications and teach classical & fingerstyle
                guitar. This is where both worlds live.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link href="/software" className="btn-primary">
                  Software Portfolio
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link href="/guitar" className="btn-secondary">
                  Guitar & Tabs
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Photo - takes 2 cols */}
            <div
              className={`md:col-span-2 transition-all duration-1000 delay-300 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/about.png"
                  alt="Sungmin Lee"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What I Do */}
      <section className="px-6 md:px-12 lg:px-20 py-24 bg-section">
        <div className="max-w-6xl mx-auto">
          <div
            className={`mb-16 transition-all duration-1000 delay-500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <p className="section-subtitle mb-3">What I Do</p>
            <h2 className="text-3xl md:text-4xl font-bold">
              Two paths, one site.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Software Card */}
            <Link
              href="/software"
              className={`group transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "600ms" }}
            >
              <div className="card p-8 h-full">
                <div className="w-12 h-12 rounded-xl bg-[hsl(var(--secondary))] flex items-center justify-center mb-6 group-hover:bg-[hsl(var(--primary))] group-hover:text-white transition-colors duration-300">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                  </svg>
                </div>

                <h3 className="text-xl font-bold mb-2 group-hover:text-[hsl(var(--primary))] transition-colors">
                  Software Engineering
                </h3>

                <div className="flex flex-wrap gap-2 mb-4">
                  {["React", "Next.js", "TypeScript", "Node.js"].map((t) => (
                    <span key={t} className="badge">{t}</span>
                  ))}
                </div>

                <p className="text-[hsl(var(--muted-foreground))] text-sm leading-relaxed mb-6">
                  3+ years building fullstack web apps. View projects, skills,
                  and client work.
                </p>

                <span className="text-sm font-semibold text-[hsl(var(--primary))] flex items-center gap-2 group-hover:gap-3 transition-all">
                  View Portfolio
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </Link>

            {/* Guitar Card */}
            <Link
              href="/guitar"
              className={`group transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "700ms" }}
            >
              <div className="card p-8 h-full">
                <div className="w-12 h-12 rounded-xl bg-[hsl(var(--secondary))] flex items-center justify-center mb-6 group-hover:bg-[hsl(var(--primary))] group-hover:text-white transition-colors duration-300">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                  </svg>
                </div>

                <h3 className="text-xl font-bold mb-2 group-hover:text-[hsl(var(--primary))] transition-colors">
                  Guitar
                </h3>

                <div className="flex flex-wrap gap-2 mb-4">
                  {["Lessons", "Tabs", "Fingerstyle", "Classical"].map((t) => (
                    <span key={t} className="badge">{t}</span>
                  ))}
                </div>

                <p className="text-[hsl(var(--muted-foreground))] text-sm leading-relaxed mb-6">
                  Bachelor&apos;s & Master&apos;s in performance. Book a lesson,
                  browse tabs, or check out my arrangements.
                </p>

                <span className="text-sm font-semibold text-[hsl(var(--primary))] flex items-center gap-2 group-hover:gap-3 transition-all">
                  Explore Guitar
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 md:px-12 lg:px-20 py-10 border-t border-[hsl(var(--border))]">
        <div className="max-w-6xl mx-auto text-center text-sm text-[hsl(var(--muted-foreground))]">
          &copy; {new Date().getFullYear()} Sungmin Lee
        </div>
      </footer>
    </div>
  );
}

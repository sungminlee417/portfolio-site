"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const paths = [
  {
    title: "Software Engineering",
    subtitle: "Fullstack Development & Client Work",
    description:
      "Over three years of experience building scalable web applications with React, Next.js, Node.js, and TypeScript. View my projects, technical skills, and client portfolio.",
    href: "/software",
    gradient: "from-yellow-400/20 to-orange-400/20",
    hoverGradient: "from-yellow-400/10 to-orange-400/10",
    textColor: "text-yellow-400",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
  },
  {
    title: "Guitar",
    subtitle: "Lessons, Tabs & Performance",
    description:
      "Classical and fingerstyle guitar instruction from a degreed performer. Browse my tab shop, book a lesson, or learn about my musical background.",
    href: "/guitar",
    gradient: "from-orange-400/20 to-red-400/20",
    hoverGradient: "from-orange-400/10 to-red-400/10",
    textColor: "text-orange-400",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
      </svg>
    ),
  },
];

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white overflow-x-hidden">
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-900/20 via-transparent to-transparent pointer-events-none" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-16">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-yellow-400/30 to-orange-400/30 backdrop-blur-xl shadow-2xl relative animate-float mb-8">
            <Image
              src="/guitar-code.png"
              alt="Sungmin Lee"
              fill
              className="object-contain p-3"
              priority
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
            <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
              Sungmin Lee
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-xl mx-auto">
            Software Engineer &middot; Guitarist
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl w-full">
          {paths.map((path, index) => (
            <Link
              key={path.title}
              href={path.href}
              className={`group relative transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
            >
              <div className="relative h-full glass-dark rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="p-8 flex flex-col h-full">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${path.gradient} rounded-xl mb-6 ${path.textColor} group-hover:scale-110 transition-transform duration-300`}
                  >
                    {path.icon}
                  </div>

                  <h2 className="text-2xl font-bold text-white mb-1 group-hover:text-yellow-400 transition-colors duration-200">
                    {path.title}
                  </h2>
                  <p className={`text-sm ${path.textColor} mb-4 font-medium`}>
                    {path.subtitle}
                  </p>

                  <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">
                    {path.description}
                  </p>

                  <div className="flex items-center gap-2 text-gray-300 group-hover:text-white text-sm font-medium transition-colors duration-200">
                    <span>Explore</span>
                    <svg
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                </div>

                <div
                  className={`absolute inset-0 bg-gradient-to-br ${path.hoverGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

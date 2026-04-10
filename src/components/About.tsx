"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef}>
      <div
        className={`transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="grid md:grid-cols-5 gap-10 items-start">
          <div className="md:col-span-3 space-y-5 text-[hsl(var(--muted-foreground))] leading-relaxed">
            <p className="section-subtitle">About</p>
            <h2 className="text-3xl font-bold text-[hsl(var(--foreground))]">
              A bit about me
            </h2>
            <p>
              I&apos;m a fullstack software engineer with over three years of
              experience building scalable, user-friendly web applications. I
              specialize in React, Next.js, Node, and TypeScript, and enjoy
              working across the entire stack.
            </p>
            <p>
              Before software, I pursued a deep passion for music as a classical
              guitarist. I hold both a Bachelor&apos;s and a Master&apos;s
              degree in Classical Guitar Performance.
            </p>
            <p>
              My background in music fuels my attention to detail and creativity,
              which I bring into every project. Over the years, I&apos;ve honed
              my skills with technologies like React/Redux, Express, Flask,
              Sequelize, and SQLAlchemy, always eager to learn and solve
              challenging problems.
            </p>
            <p>
              I&apos;ve worked in fast-paced startup environments where I led
              architecture discussions, developed modular UI components, and
              built secure, scalable backend services.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-primary text-sm">
                Download Resume
              </a>
              <a href="#contact" className="btn-secondary text-sm">
                Get in Touch
              </a>
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/about.png"
                alt="Sungmin Lee"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="grid grid-cols-2 gap-3 mt-4">
              <div className="card p-4 text-center !shadow-none">
                <div className="text-2xl font-bold text-[hsl(var(--primary))]">3+</div>
                <div className="text-xs text-[hsl(var(--muted-foreground))]">Years Experience</div>
              </div>
              <div className="card p-4 text-center !shadow-none">
                <div className="text-2xl font-bold text-[hsl(var(--primary))]">10+</div>
                <div className="text-xs text-[hsl(var(--muted-foreground))]">Projects Completed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

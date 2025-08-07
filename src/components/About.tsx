"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { handleSmoothScroll } from "@/utils/smoothScroll";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="relative py-20">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/5 via-transparent to-purple-900/5 rounded-3xl hidden md:block" />
      
      <div className="relative glass-dark rounded-3xl p-8 md:p-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <h2 className="text-5xl font-bold mb-8">
              <span className="text-gradient">About Me</span>
            </h2>

            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p>
                I&apos;m a fullstack software engineer with over three years of
                experience building scalable, user-friendly web applications. I
                specialize in React, Next.js, Node, and TypeScript, and enjoy
                working across the entire stack — from crafting intuitive frontends
                to building robust serverless APIs on AWS and Azure.
              </p>

              <p>
                Before diving into software development, I pursued a deep passion
                for music as a classical guitarist. I hold both a Bachelor&apos;s
                and a Master&apos;s degree in Classical Guitar Performance and have
                been honored with several awards and certifications along the way.
              </p>

              <p>
                My background in music fuels my attention to detail and creativity,
                which I bring into every project. Over the years, I&apos;ve honed my
                skills with technologies like React/Redux, Express, Flask,
                Sequelize, and SQLAlchemy, always eager to learn and solve
                challenging problems.
              </p>

              <p>
                I&apos;ve worked in fast-paced startup environments where I led
                architecture discussions, developed modular UI components, and built
                secure, scalable backend services. I thrive collaborating with
                cross-functional teams and delivering polished products that users
                love.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-full hover:bg-yellow-300 transition-all duration-200 hover:scale-105 shadow-lg"
              >
                Download Resume
              </a>
              <a
                href="#contact"
                onClick={(e) => handleSmoothScroll(e, "#contact")}
                className="px-6 py-3 glass text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-200 hover:scale-105 cursor-pointer"
              >
                Get in Touch
              </a>
            </div>
          </div>

          <div
            className={`relative transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition duration-500" />
              <Image
                src="/about.png"
                alt="Sungmin Lee"
                width={500}
                height={600}
                className="relative rounded-2xl shadow-2xl object-cover w-full hover-lift"
                priority
              />
            </div>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="glass rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-yellow-400">3+</div>
                <div className="text-sm text-gray-400">Years Experience</div>
              </div>
              <div className="glass rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-yellow-400">20+</div>
                <div className="text-sm text-gray-400">Projects Completed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

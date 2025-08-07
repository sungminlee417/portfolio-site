"use client";

import { useEffect, useRef, useState } from "react";

export default function Projects() {
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

  const projects = [
    {
      name: "Calorie Counter",
      description:
        "Track your daily nutrition and macros with customizable food entries and goals.",
      highlights: [
        "AI-powered food search and logging with Vercel AI SDK",
        "Supports sending images of foods to assist with AI recognition and logging",
        "Role-based access control via Supabase RLS",
        "Real-time macro progress visualizations",
      ],
      stack: ["Next.js", "Supabase", "TypeScript", "Zod", "Vercel AI SDK"],
      link: "https://calorie-counter-teal.vercel.app/",
      repo: "https://github.com/sungminlee417/calorie-counter",
      role: "Fullstack developer — designed backend API, AI integration, and UI",
      featured: true,
    },
    {
      name: "Portfolio Site",
      description:
        "This very site – built with Next.js to showcase software and music work.",
      stack: ["Next.js", "Tailwind CSS", "TypeScript", "Framer Motion"],
      repo: "https://github.com/sungminlee417/Portfolio_Site",
    },
  ];

  return (
    <section id="projects" ref={sectionRef} className="relative py-20">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold mb-4">
          <span className="text-gradient">Featured Projects</span>
        </h2>
        <p className="text-gray-400 text-lg">
          Some of the projects I&apos;ve worked on recently
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={project.name}
            className={`group relative transition-all duration-700 ${
              index === 0 ? "delay-0" : "delay-200"
            } ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="relative h-full glass-dark rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-200 hover:-translate-y-1">
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start gap-3">
                    <h3 className="text-2xl font-bold text-white group-hover:text-yellow-400 transition-colors duration-200">
                      {project.name}
                    </h3>
                    {project.featured && (
                      <span className="px-3 py-1 bg-yellow-400 text-black text-xs font-bold rounded-full">
                        FEATURED
                      </span>
                    )}
                  </div>
                  <div className="flex gap-3">
                    {project.repo && (
                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors"
                        aria-label="GitHub Repository"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </a>
                    )}
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors"
                        aria-label="Live Demo"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {project.highlights && (
                  <ul className="space-y-2 mb-6">
                    {project.highlights.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-400 text-sm">
                        <svg className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {project.role && (
                  <p className="text-sm text-gray-500 mb-6 italic">
                    {project.role}
                  </p>
                )}

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-white/10 text-gray-300 text-xs font-medium rounded-full border border-white/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 font-medium transition-colors duration-200 group/link"
                  >
                    <span>Visit Project</span>
                    <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                )}
              </div>

              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-orange-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none" />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <a
          href="https://github.com/sungminlee417"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 glass text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-200 hover:scale-105"
        >
          <span>View More on GitHub</span>
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        </a>
      </div>
    </section>
  );
}

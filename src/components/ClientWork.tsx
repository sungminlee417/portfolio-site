"use client";

import { useEffect, useRef, useState } from "react";

const projects = [
  {
    name: "Luke Benedict",
    description:
      "Professional website for innovative composer-pianist Luke Benedict, showcasing his modernistic compositions and concert performances.",
    client: "Composer & Pianist",
    year: "2024",
    link: "https://lukebenedict.com/",
    services: ["Web Design", "Development", "Content Strategy"],
    features: [
      "Showcase of modernistic compositions and concert repertoire",
      "Event calendar with upcoming performances",
      "Media gallery with recordings and press materials",
      "Responsive design optimized for all devices",
    ],
  },
  {
    name: "The Muse Duo",
    description:
      "Elegant website for The Muse Duo, a neo-classical guitar and piano ensemble founded at Eastman School of Music.",
    client: "Chamber Music Ensemble",
    year: "2024",
    link: "https://themuseduo.com/",
    services: ["Web Design", "Development", "Branding"],
    features: [
      "Ensemble biography and artist profiles",
      "Performance calendar and booking information",
      "Media section with audio and video recordings",
      "Cohesive visual branding and design system",
    ],
  },
];

export default function ClientWork() {
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
    <section id="client-work" ref={sectionRef}>
      <div
        className={`transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <p className="section-subtitle mb-3">Client Work</p>
        <h2 className="text-3xl font-bold mb-4">Sites I&apos;ve built for others</h2>
        <p className="text-[hsl(var(--muted-foreground))] mb-10 max-w-lg">
          Portfolio websites for fellow musicians and artists, helping them
          build their professional online presence.
        </p>

        <div className="space-y-6">
          {projects.map((project, index) => (
            <div
              key={project.name}
              className="card p-6 md:p-8"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold">{project.name}</h3>
                    <span className="badge">{project.year}</span>
                  </div>
                  <p className="text-sm text-[hsl(var(--primary))] font-medium mb-3">
                    {project.client}
                  </p>
                  <p className="text-sm text-[hsl(var(--muted-foreground))] leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.services.map((s) => (
                      <span key={s} className="badge">{s}</span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[hsl(var(--primary))] hover:underline"
                  >
                    View Live Site
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>

                <div>
                  <h4 className="text-sm font-semibold mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {project.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-[hsl(var(--muted-foreground))]">
                        <svg className="w-4 h-4 text-[hsl(var(--primary))] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 card p-8 text-center">
          <h3 className="text-xl font-bold mb-2">Need a professional website?</h3>
          <p className="text-sm text-[hsl(var(--muted-foreground))] mb-5">
            I specialize in creating beautiful websites for musicians, artists,
            and creative professionals.
          </p>
          <a href="#contact" className="btn-primary text-sm">
            Start Your Project
          </a>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";

const contactMethods = [
  {
    name: "Email",
    value: "sungminlee417@gmail.com",
    href: "mailto:sungminlee417@gmail.com",
  },
  {
    name: "LinkedIn",
    value: "Sungmin Lee",
    href: "https://www.linkedin.com/in/sungmin-lee-288801214/",
    external: true,
  },
  {
    name: "GitHub",
    value: "@sungminlee417",
    href: "https://github.com/sungminlee417",
    external: true,
  },
];

export default function Contact() {
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
    <section id="contact" ref={sectionRef}>
      <div
        className={`transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <p className="section-subtitle mb-3">Contact</p>
        <h2 className="text-3xl font-bold mb-4">Let&apos;s connect</h2>
        <p className="text-[hsl(var(--muted-foreground))] mb-10 max-w-lg">
          Whether you&apos;re interested in collaboration, have a project in
          mind, or just want to say hello — I&apos;d love to hear from you.
        </p>

        <div className="grid sm:grid-cols-3 gap-4 mb-10">
          {contactMethods.map((method) => (
            <a
              key={method.name}
              href={method.href}
              target={method.external ? "_blank" : undefined}
              rel={method.external ? "noopener noreferrer" : undefined}
              className="card p-5 text-center hover:!shadow-md group"
            >
              <p className="text-xs text-[hsl(var(--muted-foreground))] mb-1">
                {method.name}
              </p>
              <p className="text-sm font-semibold group-hover:text-[hsl(var(--primary))] transition-colors">
                {method.value}
              </p>
            </a>
          ))}
        </div>

        <div className="text-center">
          <a href="mailto:sungminlee417@gmail.com" className="btn-primary">
            Say Hello
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

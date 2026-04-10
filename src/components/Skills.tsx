"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "JavaScript", icon: "/javascript.png" },
      { name: "TypeScript", icon: "/typescript.svg.png" },
      { name: "React", icon: "/react.svg.png" },
      { name: "Next.js", icon: "/nextjs.svg" },
      { name: "Redux", icon: "/redux.svg" },
      { name: "Tailwind CSS", icon: "/tailwind.svg.png" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: "/nodejs.svg.png" },
      { name: "Express", icon: "/express.png" },
      { name: "Python", icon: "/python.svg.png" },
      { name: "Django", icon: "/django.svg.png" },
      { name: "Flask", icon: "/flask.png" },
    ],
  },
  {
    title: "Database & Cloud",
    skills: [
      { name: "PostgreSQL", icon: "/postgresql.png" },
      { name: "SQLite3", icon: "/sqlite3.svg.png" },
      { name: "Supabase", icon: "/supabase.png" },
      { name: "Sanity", icon: "/sanity.svg" },
      { name: "Decap CMS", icon: "/decap.jpg" },
      { name: "AWS", icon: "/aws.png" },
      { name: "Docker", icon: "/docker.svg" },
    ],
  },
];

export default function Skills() {
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
    <section id="skills" ref={sectionRef}>
      <div
        className={`transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <p className="section-subtitle mb-3">Skills</p>
        <h2 className="text-3xl font-bold mb-10">Technologies I work with</h2>

        <div className="space-y-10">
          {skillCategories.map((category) => (
            <div key={category.title}>
              <h3 className="text-sm font-semibold text-[hsl(var(--muted-foreground))] uppercase tracking-wider mb-4">
                {category.title}
              </h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="card flex flex-col items-center gap-2 p-4 !rounded-xl hover:!shadow-md"
                  >
                    <div className="relative w-8 h-8">
                      <Image
                        src={skill.icon}
                        alt={skill.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span className="text-xs font-medium text-[hsl(var(--muted-foreground))]">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

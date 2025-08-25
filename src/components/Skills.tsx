"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "JavaScript", icon: "/javascript.png", level: 95 },
      { name: "TypeScript", icon: "/typescript.svg.png", level: 90 },
      { name: "React", icon: "/react.svg.png", level: 95 },
      { name: "Next.js", icon: "/nextjs.svg", level: 90 },
      { name: "Redux", icon: "/redux.svg", level: 85 },
      { name: "Tailwind CSS", icon: "/tailwind.svg.png", level: 90 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: "/nodejs.svg.png", level: 90 },
      { name: "Express", icon: "/express.png", level: 85 },
      { name: "Python", icon: "/python.svg.png", level: 85 },
      { name: "Django", icon: "/django.svg.png", level: 80 },
      { name: "Flask", icon: "/flask.png", level: 80 },
    ],
  },
  {
    title: "Database & Cloud",
    skills: [
      { name: "PostgreSQL", icon: "/postgresql.png", level: 85 },
      { name: "SQLite3", icon: "/sqlite3.svg.png", level: 80 },
      { name: "Supabase", icon: "/supabase.png", level: 85 },
      { name: "Sanity", icon: "/sanity.svg", level: 85 },
      { name: "Decap CMS", icon: "/decap.jpg", level: 80 },
      { name: "AWS", icon: "/aws.png", level: 80 },
      { name: "Docker", icon: "/docker.svg", level: 75 },
    ],
  },
];

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
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
    <section id="skills" ref={sectionRef} className="relative py-20">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold mb-4">
          <span className="text-gradient">Technical Skills</span>
        </h2>
        <p className="text-gray-400 text-lg">
          Technologies I work with to build amazing products
        </p>
      </div>

      <div className="space-y-16">
        {skillCategories.map((category, categoryIndex) => (
          <div
            key={category.title}
            className={`transition-all duration-1000 ${
              categoryIndex === 0
                ? "delay-0"
                : categoryIndex === 1
                ? "delay-200"
                : "delay-400"
            } ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h3 className="text-2xl font-semibold text-yellow-400 mb-8">
              {category.title}
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
              {category.skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className={`group relative transition-all duration-500 ${
                    index === 0
                      ? "delay-0"
                      : index === 1
                      ? "delay-75"
                      : index === 2
                      ? "delay-150"
                      : index === 3
                      ? "delay-200"
                      : index === 4
                      ? "delay-300"
                      : "delay-500"
                  } ${
                    isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
                  }`}
                  onMouseEnter={() => setHoveredSkill(skill.name)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  <div className="relative glass rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 hover:scale-110 hover:shadow-2xl cursor-pointer">
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-orange-400/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="relative flex flex-col items-center gap-3">
                      <div className="relative w-12 h-12">
                        <Image
                          src={skill.icon}
                          alt={skill.name}
                          fill
                          className="object-contain group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>

                      <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300">
                        {skill.name}
                      </span>

                      {hoveredSkill === skill.name && (
                        <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-scaleIn">
                          <div
                            className="h-full bg-gradient-to-r from-yellow-300 to-orange-300 rounded-full"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <p className="text-gray-400">
          ...and always learning new technologies to stay current
        </p>
      </div>
    </section>
  );
}

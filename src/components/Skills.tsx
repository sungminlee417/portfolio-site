'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import type { SkillCategory } from '@/lib/sanity/types'

interface Props {
  skillCategories: SkillCategory[]
}

export default function Skills({ skillCategories }: Props) {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 },
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" ref={sectionRef}>
      <div
        className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
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
                    key={skill._id}
                    className="card flex flex-col items-center gap-2 p-4 !rounded-xl hover:!shadow-md"
                  >
                    <div className="relative w-8 h-8">
                      <Image
                        src={`/${skill.icon}`}
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
  )
}

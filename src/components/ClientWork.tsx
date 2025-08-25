"use client";

import { useEffect, useRef, useState } from "react";
import { handleSmoothScroll } from "@/utils/smoothScroll";

export default function ClientWork() {
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

  const featuredProjects = [
    {
      name: "Glenn Canin Guitars",
      description: "Professional website for master luthier Glenn Canin, showcasing handcrafted concert classical guitars with traditional Spanish construction methods and innovative doubletop design.",
      client: "Master Guitar Luthier",
      year: "2025",
      link: "https://glenn-canin-guitars-dpv5.vercel.app/",
      services: ["Web Design", "Development", "E-commerce Strategy"],
      features: [
        "Detailed guitar specifications and pricing for each instrument",
        "Professional photography gallery showcasing craftsmanship",
        "Custom guitar commissioning information and process",
        "Content management system powered by Sanity"
      ]
    },
    {
      name: "Collin Holloway",
      description: "Portfolio website for classical guitarist Collin Holloway, Eastman School graduate and co-founder of Off the Dock Chamber Music Festival.",
      client: "Classical Guitarist",
      year: "2025",
      link: "https://collin-holloway.netlify.app/",
      services: ["Web Design", "Development", "Portfolio Showcase"],
      features: [
        "Discography showcase with two studio albums",
        "Integrated YouTube video performance gallery",
        "Competition wins and festival performance history",
        "Professional booking contact form"
      ]
    }
  ];

  const otherProjects = [
    {
      name: "Luke Benedict",
      description: "Professional website for innovative composer-pianist Luke Benedict, showcasing his modernistic compositions and concert performances.",
      client: "Composer & Pianist",
      year: "2024",
      link: "https://lukebenedict.com/",
      services: ["Web Design", "Development", "Content Strategy"]
    },
    {
      name: "The Muse Duo",
      description: "Elegant website for The Muse Duo, a neo-classical guitar and piano ensemble founded at Eastman School of Music.",
      client: "Chamber Music Ensemble",
      year: "2024",
      link: "https://themuseduo.com/",
      services: ["Web Design", "Development", "Branding"]
    }
  ];

  return (
    <section id="client-work" ref={sectionRef} className="relative py-20">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold mb-4">
          <span className="text-gradient">Client Work</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Portfolio websites I&apos;ve created for fellow musicians and artists, 
          helping them establish their professional online presence.
        </p>
      </div>

      {/* Featured Projects Section */}
      <div className="mb-16">
        <h3 className="text-2xl font-semibold text-yellow-400 mb-8 text-center">
          Featured Projects
        </h3>
        <div className="space-y-12">
          {featuredProjects.map((project, index) => (
            <div
              key={project.name}
              className={`transition-all duration-1000 delay-${index * 200} ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="glass-dark rounded-3xl overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Content Side */}
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="mb-6">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-3xl font-bold text-white">
                          {project.name}
                        </h3>
                        <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs font-semibold rounded-full">
                          {project.year}
                        </span>
                      </div>
                      <p className="text-yellow-400 font-medium mb-4">
                        {project.client}
                      </p>
                      <p className="text-gray-300 leading-relaxed mb-6">
                        {project.description}
                      </p>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-3">
                        Services Provided:
                      </h4>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.services.map((service) => (
                          <span
                            key={service}
                            className="px-3 py-1 bg-white/10 text-gray-300 text-sm rounded-full border border-white/20"
                          >
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-3">
                        Key Features:
                      </h4>
                      <ul className="space-y-2">
                        {project.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-400 text-sm">
                            <svg className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex items-center gap-4">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-400 text-black font-semibold rounded-full hover:bg-yellow-300 transition-all duration-200 hover:scale-105 shadow-lg"
                      >
                        <span>View Live Site</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                  </div>

                  {/* Project Info Side */}
                  <div className="bg-gradient-to-br from-yellow-400/5 to-orange-400/5 p-8 lg:p-12 flex flex-col justify-center">
                    <div className="text-center">
                      <div className="mb-8">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-400/20 rounded-full mb-4">
                          <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <h4 className="text-xl font-semibold text-white mb-3">
                          Live Website
                        </h4>
                        <p className="text-gray-300 text-sm mb-4">
                          Professional portfolio website built with modern technologies and best practices.
                        </p>
                      </div>

                      <div className="space-y-4">
                        <div className="flex items-center justify-center gap-2">
                          <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-green-400 font-medium text-sm">Live & Deployed</span>
                        </div>
                        
                        <div className="flex items-center justify-center gap-2">
                          <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" clipRule="evenodd" />
                          </svg>
                          <span className="text-blue-400 font-medium text-sm">Fully Responsive</span>
                        </div>

                        <div className="flex items-center justify-center gap-2">
                          <svg className="w-5 h-5 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                          <span className="text-purple-400 font-medium text-sm">Custom Development</span>
                        </div>
                        
                        <p className="text-gray-500 text-xs mt-4">
                          Professional website solutions for musicians
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Other Projects Section */}
      <div className="mb-16">
        <h3 className="text-2xl font-semibold text-yellow-400 mb-8 text-center">
          Other Projects
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {otherProjects.map((project, index) => (
            <div
              key={project.name}
              className={`transition-all duration-1000 delay-${(index + 2) * 200} ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="glass-dark rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 h-full flex flex-col">
                <div className="flex items-start justify-between mb-3">
                  <h4 className="text-xl font-bold text-white">
                    {project.name}
                  </h4>
                  <span className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs font-semibold rounded-full">
                    {project.year}
                  </span>
                </div>
                
                <p className="text-yellow-400 font-medium text-sm mb-3">
                  {project.client}
                </p>
                
                <p className="text-gray-400 text-sm mb-4 flex-grow">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.services.map((service) => (
                    <span
                      key={service}
                      className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded-full border border-white/20"
                    >
                      {service}
                    </span>
                  ))}
                </div>
                
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 transition-colors duration-200 text-sm font-medium"
                >
                  <span>View Site</span>
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 text-center">
        <div className="glass-dark rounded-2xl p-8 max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-4">
            Need a Professional Website?
          </h3>
          <p className="text-gray-300 mb-6">
            I specialize in creating beautiful, professional websites for musicians, 
            artists, and creative professionals. Let&apos;s bring your vision to life.
          </p>
          <a
            href="#contact"
            onClick={(e) => handleSmoothScroll(e, "#contact")}
            className="inline-flex items-center gap-2 px-6 py-3 glass text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-200 hover:scale-105 cursor-pointer"
          >
            <span>Start Your Project</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
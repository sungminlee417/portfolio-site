"use client";

import { useEffect, useRef, useState } from "react";
import PageShell from "@/components/PageShell";

const CONTACT_EMAIL = "sungminleeguitar@gmail.com";

const pricingPlans = [
  {
    name: "Single Lesson",
    price: "$70",
    per: "/ session",
    description: "Perfect for trying things out or occasional tune-ups",
    features: [
      "60-minute private lesson",
      "In-person or online via Zoom",
      "Personalized feedback & exercises",
      "Lesson notes sent after each session",
    ],
    popular: false,
  },
  {
    name: "4-Lesson Pack",
    price: "$250",
    per: "/ 4 sessions",
    description: "The most popular choice — build momentum weekly",
    features: [
      "Four 60-minute lessons",
      "In-person or online via Zoom",
      "Custom practice plan between lessons",
      "Lesson notes & recordings",
      "Priority scheduling",
    ],
    popular: true,
    savings: "Save $30",
  },
  {
    name: "8-Lesson Pack",
    price: "$450",
    per: "/ 8 sessions",
    description: "Best value for committed students ready to level up",
    features: [
      "Eight 60-minute lessons",
      "In-person or online via Zoom",
      "Comprehensive progress tracking",
      "Lesson notes & recordings",
      "Priority scheduling",
      "Free repertoire consultation",
    ],
    popular: false,
    savings: "Save $110",
  },
];

const tabs: {
  title: string;
  artist?: string;
  description: string;
  price: string;
  difficulty: string;
  link?: string;
}[] = [
  {
    title: "Sparks",
    artist: "Coldplay",
    description:
      "Fingerstyle guitar arrangement of Coldplay's Sparks. Fully tabbed with standard notation.",
    price: "Free",
    difficulty: "Beginner",
    link: "/tabs/sparks.pdf",
  },
  {
    title: "From the Start",
    artist: "Laufey",
    description:
      "Fingerstyle guitar arrangement of Laufey's From the Start. Fully tabbed with standard notation.",
    price: "Free",
    difficulty: "Intermediate",
    link: "/tabs/from-the-start.pdf",
  },
];

const socialIconClass =
  "w-5 h-5 text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))] transition-colors";

export default function GuitarPage() {
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({});
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );
    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <PageShell
      variant="guitar"
      navActions={
        <a
          href="#tab-shop"
          className="btn-primary text-xs !py-2 !px-4"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
          </svg>
          Tabs
        </a>
      }
    >
      {/* Hero */}
      <section className="pt-16 pb-8 px-6 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto">
          <p className="section-subtitle mb-3">Guitar</p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Lessons, tabs <span className="text-[hsl(var(--primary))]">&</span> more.
          </h1>
          <p className="text-lg text-[hsl(var(--muted-foreground))] leading-relaxed max-w-2xl mb-6">
            Classical and fingerstyle guitar — whether you&apos;re just starting
            out or preparing for a recital, I&apos;m here to help.
          </p>

          {/* Socials */}
          <div className="flex gap-4 items-center mb-8">
            <a href="https://www.youtube.com/@sungminleeguitars" target="_blank" rel="noopener noreferrer" className={socialIconClass} aria-label="YouTube">
              <svg fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>
            <a href="https://www.instagram.com/sungminleeguitars" target="_blank" rel="noopener noreferrer" className={socialIconClass} aria-label="Instagram">
              <svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
            <a href="https://www.tiktok.com/@sungminleeguitar" target="_blank" rel="noopener noreferrer" className={socialIconClass} aria-label="TikTok">
              <svg fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86 4.46V13a8.28 8.28 0 005.58 2.17V11.7a4.83 4.83 0 01-3.77-1.24V6.69h3.77z"/></svg>
            </a>
            <a href={`mailto:${CONTACT_EMAIL}`} className={socialIconClass} aria-label="Email">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            </a>
          </div>

          <a href="#tab-shop" className="btn-primary">
            Browse Tabs
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </section>

      <main className="px-6 md:px-12 lg:px-20 py-8 space-y-24">
        <div className="max-w-4xl mx-auto space-y-24">
          {/* Background */}
          <section
            id="guitar-background"
            ref={(el) => { sectionRefs.current["guitar-background"] = el; }}
          >
            <div className={`transition-all duration-1000 ${isVisible["guitar-background"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <div className="grid md:grid-cols-2 gap-10">
                <div>
                  <p className="section-subtitle mb-3">Background</p>
                  <h2 className="text-3xl font-bold mb-6">My musical journey</h2>
                  <div className="space-y-4 text-[hsl(var(--muted-foreground))] leading-relaxed">
                    <p>
                      I hold both a Bachelor&apos;s and a Master&apos;s degree in
                      Classical Guitar Performance. My training spans traditional
                      classical repertoire from the Renaissance through the modern
                      era, as well as contemporary fingerstyle techniques.
                    </p>
                    <p>
                      I&apos;ve performed in solo recitals, chamber ensembles, and
                      masterclasses. Teaching has always been one of my greatest
                      joys — there&apos;s nothing better than watching a student
                      have that breakthrough moment.
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-[hsl(var(--muted-foreground))] mb-4">
                    What I Teach
                  </h3>
                  <ul className="space-y-2.5">
                    {[
                      "Proper right & left hand technique",
                      "Tone production & dynamic control",
                      "Classical repertoire (Renaissance to modern)",
                      "Fingerstyle arrangements of popular songs",
                      "Music theory & sight-reading",
                      "Performance preparation & stage confidence",
                      "Practice strategies that actually work",
                      "Guitar care & setup basics",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-[hsl(var(--muted-foreground))]">
                        <svg className="w-4 h-4 text-[hsl(var(--primary))] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Pricing */}
          <section
            id="guitar-lessons"
            ref={(el) => { sectionRefs.current["guitar-lessons"] = el; }}
          >
            <div className={`transition-all duration-1000 ${isVisible["guitar-lessons"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <p className="section-subtitle mb-3">Lessons</p>
              <h2 className="text-3xl font-bold mb-3">Pricing</h2>
              <p className="text-[hsl(var(--muted-foreground))] mb-10">
                All lessons are 60 minutes, available in-person or online via Zoom.
              </p>

              <div className="grid md:grid-cols-3 gap-5">
                {pricingPlans.map((plan) => (
                  <div
                    key={plan.name}
                    className={`card p-6 relative ${
                      plan.popular ? "ring-2 ring-[hsl(var(--primary))]" : ""
                    }`}
                  >
                    {plan.popular && (
                      <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-bold px-3 py-1 rounded-full bg-[hsl(var(--primary))] text-white">
                        MOST POPULAR
                      </span>
                    )}
                    {plan.savings && (
                      <span className="absolute -top-3 right-3 text-xs font-bold px-3 py-1 rounded-full bg-green-600 text-white">
                        {plan.savings}
                      </span>
                    )}
                    <div className="text-center mb-5 pt-1">
                      <h3 className="font-semibold mb-1">{plan.name}</h3>
                      <div className="flex items-baseline justify-center gap-1">
                        <span className="text-3xl font-bold text-[hsl(var(--primary))]">{plan.price}</span>
                        <span className="text-sm text-[hsl(var(--muted-foreground))]">{plan.per}</span>
                      </div>
                      <p className="text-xs text-[hsl(var(--muted-foreground))] mt-1">{plan.description}</p>
                    </div>
                    <ul className="space-y-2 mb-6">
                      {plan.features.map((f, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-[hsl(var(--muted-foreground))]">
                          <svg className="w-4 h-4 text-[hsl(var(--primary))] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                    <a
                      href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(`Interested in ${plan.name}`)}`}
                      className={`block w-full text-center py-2.5 rounded-full text-sm font-semibold transition-all duration-200 hover:scale-[1.02] ${
                        plan.popular
                          ? "btn-primary justify-center"
                          : "btn-secondary justify-center"
                      }`}
                    >
                      Get Started
                    </a>
                  </div>
                ))}
              </div>

              <div className="mt-10 card p-8 text-center">
                <h3 className="text-lg font-bold mb-2">Interested in lessons?</h3>
                <p className="text-sm text-[hsl(var(--muted-foreground))] mb-5">
                  Not sure where to start? Shoot me an email and we&apos;ll figure out the best plan.
                </p>
                <a href={`mailto:${CONTACT_EMAIL}`} className="btn-primary text-sm">
                  Email Me
                </a>
              </div>
            </div>
          </section>

          {/* Tab Shop */}
          <section
            id="tab-shop"
            ref={(el) => { sectionRefs.current["tab-shop"] = el; }}
          >
            <div className={`transition-all duration-1000 ${isVisible["tab-shop"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <p className="section-subtitle mb-3">Tab Shop</p>
              <h2 className="text-3xl font-bold mb-3">Tabs & sheet music</h2>
              <p className="text-[hsl(var(--muted-foreground))] mb-10">
                Professionally notated fingerstyle arrangements.
              </p>

              <div className={`grid gap-5 ${tabs.length === 1 ? "max-w-sm" : tabs.length === 2 ? "md:grid-cols-2 max-w-2xl" : "md:grid-cols-3"}`}>
                {tabs.map((tab) => (
                  <div key={tab.title} className="card p-6 group">
                    <div className="flex items-center gap-2 mb-3">
                      <svg className="w-5 h-5 text-[hsl(var(--primary))]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                      </svg>
                      <span className="badge text-xs">{tab.difficulty}</span>
                    </div>

                    <h3 className="text-lg font-bold mb-0.5 group-hover:text-[hsl(var(--primary))] transition-colors">
                      {tab.title}
                    </h3>
                    {tab.artist && (
                      <p className="text-sm text-[hsl(var(--primary))] font-medium mb-2">{tab.artist}</p>
                    )}
                    <p className="text-sm text-[hsl(var(--muted-foreground))] mb-4 leading-relaxed">{tab.description}</p>

                    <div className="flex items-center justify-end mb-4">
                      <span className="text-xl font-bold text-[hsl(var(--primary))]">{tab.price}</span>
                    </div>

                    {tab.link ? (
                      <a
                        href={tab.link}
                        download
                        className="btn-primary w-full justify-center text-sm"
                      >
                        {tab.price === "Free" ? "Download Free" : "Get Tab"}
                      </a>
                    ) : (
                      <span className="btn-secondary w-full justify-center text-sm cursor-default opacity-50">
                        Coming Soon
                      </span>
                    )}
                  </div>
                ))}
              </div>

              <p className="mt-6 text-center text-sm text-[hsl(var(--muted-foreground))]">
                More tabs and arrangements coming soon!
              </p>
            </div>
          </section>

          {/* FAQ */}
          <section
            id="guitar-faq"
            ref={(el) => { sectionRefs.current["guitar-faq"] = el; }}
          >
            <div className={`transition-all duration-1000 ${isVisible["guitar-faq"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <p className="section-subtitle mb-3">FAQ</p>
              <h2 className="text-3xl font-bold mb-8">Common questions</h2>
              <div className="space-y-3">
                {[
                  { q: "Do you offer online lessons?", a: "Yes! Lessons are available both in-person and online via Zoom. Online sessions work great — I can see your hands, share my screen for music, and record sessions for you to review later." },
                  { q: "What skill level do I need?", a: "All levels are welcome — from complete beginners to advanced players preparing for recitals or competitions." },
                  { q: "Do I need a classical guitar?", a: "A nylon-string classical guitar is ideal, but a steel-string acoustic works too, especially for fingerstyle. I can help you choose an instrument if you're looking to buy." },
                  { q: "What's your cancellation policy?", a: "I ask for 24 hours' notice for cancellations or rescheduling. Late cancellations may be charged the full session rate." },
                  { q: "What format are the tabs in?", a: "All tabs come as PDF files with standard notation and tablature. Some packs include Guitar Pro files as well." },
                ].map((faq, i) => (
                  <details key={i} className="group card !rounded-xl overflow-hidden">
                    <summary className="flex items-center justify-between p-5 cursor-pointer font-medium hover:text-[hsl(var(--primary))] transition-colors">
                      <span>{faq.q}</span>
                      <svg className="w-4 h-4 text-[hsl(var(--muted-foreground))] group-open:rotate-180 transition-transform flex-shrink-0 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <div className="px-5 pb-5 text-sm text-[hsl(var(--muted-foreground))] leading-relaxed">{faq.a}</div>
                  </details>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center">
            <div className="card p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-3">Ready to play?</h2>
              <p className="text-[hsl(var(--muted-foreground))] max-w-md mx-auto mb-6">
                Whether you want to book a lesson, grab some tabs, or just ask a
                question — reach out anytime.
              </p>
              <a href={`mailto:${CONTACT_EMAIL}`} className="btn-primary">
                Get in Touch
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </section>
        </div>
      </main>
    </PageShell>
  );
}

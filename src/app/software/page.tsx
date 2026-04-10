import PageShell from "@/components/PageShell";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import ClientWork from "@/components/ClientWork";
import Contact from "@/components/Contact";

export const metadata = {
  title: "Software Engineering — Sungmin Lee",
  description:
    "Fullstack software engineer with 3+ years of experience in React, Next.js, Node.js, and TypeScript. View projects, skills, and client work.",
};

export default function SoftwarePage() {
  return (
    <PageShell>
      <section className="pt-16 pb-8 px-6 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto">
          <p className="section-subtitle mb-3">Software Engineering</p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Building for the web.
          </h1>
          <p className="text-lg text-[hsl(var(--muted-foreground))] leading-relaxed max-w-2xl">
            Fullstack development with React, Next.js, Node.js, and TypeScript.
            From intuitive frontends to robust serverless APIs.
          </p>
        </div>
      </section>

      <main className="px-6 md:px-12 lg:px-20 py-8 space-y-20">
        <div className="max-w-4xl mx-auto space-y-20">
          <About />
          <Skills />
          <Projects />
          <ClientWork />
          <Contact />
        </div>
      </main>
    </PageShell>
  );
}

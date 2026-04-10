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
      <section className="pt-16 pb-8 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4">
            <span className="text-gradient">Software Engineering</span>
          </h1>
          <p className="text-lg text-gray-400 leading-relaxed">
            Fullstack development with React, Next.js, Node.js, and TypeScript.
            From crafting intuitive frontends to building robust serverless APIs.
          </p>
        </div>
      </section>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16 md:space-y-24">
        <About />
        <Skills />
        <Projects />
        <ClientWork />
        <Contact />
      </main>
    </PageShell>
  );
}

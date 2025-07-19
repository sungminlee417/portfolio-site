import Header from "@/components/Header";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 items-center p-2 lg:p-20 w-full min-h-screen bg-gradient-to-br from-slate-800 via-slate-900 to-black text-white">
      <Header />
      <main className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/10 backdrop-blur-md flex flex-col gap-14 rounded-2xl shadow-xl p-8 dark:bg-black/40 dark:backdrop-blur-lg">
          <About />
          <Skills />
          <Projects />
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}

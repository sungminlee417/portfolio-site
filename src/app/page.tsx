import Header from "@/components/Header";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import ClientWork from "@/components/ClientWork";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white overflow-x-hidden">
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-900/20 via-transparent to-transparent pointer-events-none" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent pointer-events-none" />
      
      <Navigation />
      
      <div className="relative z-10">
        <Header />
        
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16 md:space-y-24">
          <About />
          <Skills />
          <Projects />
          <ClientWork />
          <Contact />
        </main>
        
        <Footer />
      </div>
    </div>
  );
}

export default function Contact() {
  return (
    <section id="cta" className="flex flex-col items-center gap-6 text-center">
      <h2 className="text-3xl font-bold text-white">Get in Touch</h2>
      <p className="text-white/80 max-w-xl">
        Whether you’d like to collaborate, hire me, or just say hello — I’d love
        to hear from you!
      </p>
      <a
        href="mailto:sungminlee417@gmail.com"
        className="mt-4 inline-block rounded-full bg-white/10 px-6 py-3 text-white backdrop-blur-md transition hover:bg-white/20"
      >
        Say Hello
      </a>
    </section>
  );
}

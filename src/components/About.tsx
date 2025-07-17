import Image from "next/image";

export default function About() {
  return (
    <section id="intro" className="main mb-12">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
        {/* Text content */}
        <div className="flex-1 max-w-2xl text-gray-300 leading-relaxed">
          <header className="mb-6">
            <h2 className="text-4xl font-bold text-white">About Me</h2>
          </header>

          <p className="mb-4">
            I&apos;m a fullstack software engineer with over three years of
            experience building scalable, user-friendly web applications. I
            specialize in React, Next.js, Node, and TypeScript, and enjoy
            working across the entire stack — from crafting intuitive frontends
            to building robust serverless APIs on AWS and Azure.
          </p>

          <p className="mb-4">
            Before diving into software development, I pursued a deep passion
            for music as a classical guitarist. I hold both a Bachelor&apos;s
            and a Master&apos;s degree in Classical Guitar Performance and have
            been honored with several awards and certifications along the way.
          </p>

          <p className="mb-4">
            My background in music fuels my attention to detail and creativity,
            which I bring into every project. Over the years, I’ve honed my
            skills with technologies like React/Redux, Express, Flask,
            Sequelize, and SQLAlchemy, always eager to learn and solve
            challenging problems.
          </p>

          <p className="mb-4">
            I&apos;ve worked in fast-paced startup environments where I led
            architecture discussions, developed modular UI components, and built
            secure, scalable backend services. I thrive collaborating with
            cross-functional teams and delivering polished products that users
            love.
          </p>

          <a
            href="https://sungmin-portfolio-site.s3.us-west-1.amazonaws.com/Lee_Sungmin_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg shadow-md hover:bg-yellow-500 transition"
          >
            Download Resume
          </a>
        </div>
        <Image
          src="/about.png"
          alt="Sungmin Lee"
          width={400}
          height={500}
          className="rounded-xl shadow-lg object-cover w-full"
          priority
        />
      </div>
    </section>
  );
}

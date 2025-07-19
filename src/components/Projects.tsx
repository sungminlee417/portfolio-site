export default function Projects() {
  const projects = [
    {
      name: "Calorie Counter",
      description:
        "Track your daily nutrition and macros with customizable food entries and goals.",
      highlights: [
        "AI-powered food search and logging with Vercel AI SDK",
        "Role-based access control via Supabase RLS",
        "Real-time macro progress visualizations",
      ],
      stack: ["Next.js", "Supabase", "Typescript", "Zod", "Vercel AI SDK"],
      link: "https://calorie-counter-teal.vercel.app/",
      repo: "https://github.com/sungminlee417/calorie-counter",
      role: "Fullstack developer — designed backend API, AI integration, and UI",
    },
    {
      name: "Portfolio Site",
      description:
        "This very site – built with Next.js to showcase software and music work.",
      stack: ["Next.js", "Tailwind", "TypeScript"],
    },
  ];

  return (
    <section id="projects" className="flex flex-col gap-10">
      <h2 className="text-3xl font-bold text-white">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project.name}
            className="bg-white/10 rounded-xl p-6 shadow hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold text-white">{project.name}</h3>
            <p className="text-white/80 mt-2">{project.description}</p>
            {project.highlights && (
              <ul className="list-disc list-inside mt-2 text-white/70 text-sm">
                {project.highlights.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}
            <p className="text-sm text-white/60 mt-2 italic">
              {project.stack.join(" • ")}
            </p>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-yellow-300 hover:underline"
              >
                Visit Project →
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

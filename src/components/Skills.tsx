import Image from "next/image";

const skills = [
  { name: "JavaScript", icon: "/javascript.png" },
  { name: "TypeScript", icon: "/typescript.svg.png" },
  { name: "React", icon: "/react.svg.png" },
  { name: "Next.js", icon: "/nextjs.svg" },
  { name: "Redux", icon: "/redux.svg" },
  { name: "Node.js", icon: "/nodejs.svg.png" },
  { name: "Express", icon: "/express.png" },
  { name: "Python", icon: "/python.svg.png" },
  { name: "Django", icon: "/django.svg.png" },
  { name: "Flask", icon: "/flask.png" },
  { name: "PostgreSQL", icon: "/postgresql.png" },
  { name: "SQLite3", icon: "/sqlite3.svg.png" },
  { name: "Supabase", icon: "/supabase.png" },
  { name: "Tailwind CSS", icon: "/tailwind.svg.png" },
  { name: "AWS", icon: "/aws.png" },
  { name: "Docker", icon: "/docker.svg" },
];

export default function Skills() {
  return (
    <section id="skills" className="main mb-12">
      <header className="mb-6 text-center">
        <h2 className="text-4xl font-bold text-white">Skills</h2>
        <p className="text-gray-300 mt-2">Technologies I work with regularly</p>
      </header>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col items-center bg-white/10 rounded-lg p-4 shadow-md hover:bg-white/20 transition"
          >
            <Image
              src={skill.icon}
              alt={skill.name}
              width={48}
              height={48}
              className="w-12 h-12 mb-3 object-contain"
            />
            <span className="text-gray-200 text-lg font-semibold">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

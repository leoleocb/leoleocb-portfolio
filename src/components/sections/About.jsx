import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "React",
    "Angular",
    "Vue.js",
    "HTML5",
    "CSS3",
    "JavaScript",
    "TypeScript",
    "Tailwind CSS",
  ];
  const backendSkills = [
    "JavaScript",
    "Node.js",
    "Java",
    "C#",
    "Spring Boot",
    "Kotlin",
  ];

    const techIcons = [
    "https://cdn.simpleicons.org/openjdk/ED8B00",   // Java
    "https://cdn.simpleicons.org/dotnet/512BD4",    // C#
    "https://cdn.simpleicons.org/spring/6DB33F",    // Spring
    "https://cdn.simpleicons.org/mysql/4479A1",
    "https://cdn.simpleicons.org/react/61DAFB",
    "https://cdn.simpleicons.org/javascript/F7DF1E",
    "https://cdn.simpleicons.org/typescript/3178C6",
    "https://cdn.simpleicons.org/nodedotjs/5FA04E", // Node.js
    "https://cdn.simpleicons.org/tailwindcss/38BDF8",
    "https://cdn.simpleicons.org/html5/E34F26",
    ];


  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-green-500 to-cyan-400 bg-clip-text text-transparent text-center">
          About Me
        </h2>

        <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
          <p className="text-gray-300 mb-6">
            Software Engineering student passionate about building scalable web
            applications and crafting intelligent solutions. Skilled in modern
            technologies and frameworks for both frontend and backend
            development.
          </p>

          {/* Frontend y Backend */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl p-6 hover:translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {frontendSkills.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-green-500/10 text-green-500 py-1 px-3 rounded-full text-sm hover:bg-green-500/20
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-xl p-6 hover:translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {backendSkills.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-green-500/10 text-green-500 py-1 px-3 rounded-full text-sm hover:bg-green-500/20
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Carrusel de Tecnologías */}
        <div className="overflow-hidden py-10 relative">
          <div className="flex gap-16 animate-marquee">
            {techIcons.concat(techIcons).map((url, index) => (
              <img
                key={index}
                src={url}
                alt="tech-logo"
                className="h-12 w-12 opacity-80 hover:opacity-100 transition"
              />
            ))}
          </div>
        </div>

        {/* Educación y Certificaciones */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4">🏫 Education</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>
                <strong>Computing and IT</strong> – CIBERTEC 🔵 | PERU
                (2024–2026)
              </li>
              <li>
                <strong>Software Engineering</strong> – UPC 🔴 | PERU
                (2026–Present)
              </li>
            </ul>
          </div>

          <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4">
              📋 Courses and Certifications
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>
                <strong>Introductory Course on AI Development</strong> – BIG
                School (2025)
                <p>Certification in AI Fundamentals (6h)</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      </RevealOnScroll>
    </section>
  );
};

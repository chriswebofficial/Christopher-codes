const Skills = () => {
  const skillGroups = [
    {
      title: "Frontend",
      description:
        "Building responsive interfaces and interactive web experiences.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "TypeScript",
        "React",
        "Tailwind CSS",
      ],
    },
    {
      title: "Backend & Database",
      description:
        "Working with application logic, data, authentication, and backend services.",
      skills: [
        "Next.js",
        "Node.js",
        "MongoDB",
        "Mongoose",
        "Firebase",
      ],
    },
    {
      title: "Tools & Workflow",
      description:
        "Tools I use to build, manage, test, and deploy projects.",
      skills: [
        "Git",
        "GitHub",
        "Vite",
        "Vercel",
        "VS Code",
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-32 px-6 bg-black text-white"
    >
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div
          data-aos="fade-up"
          className="max-w-3xl mb-20"
        >
          <p className="text-gray-500 text-sm tracking-[0.25em] uppercase mb-5">
            Skills & Tools
          </p>

          <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            The tools I use to
            <span className="text-gray-500"> build.</span>
          </h2>

          <p className="text-gray-400 text-lg leading-8">
            My toolkit covers the different parts of building a web
            application, from creating the interface to working with
            data, backend services, and deployment.
          </p>
        </div>

        {/* SKILL GROUPS */}
        <div
          data-aos="fade-up"
          className="grid grid-cols-1 md:grid-cols-3 border-t border-white/10"
        >
          {skillGroups.map((group, index) => (
            <div
              key={group.title}
              className={`py-10 md:px-8 ${
                index !== 0
                  ? "border-t md:border-t-0 md:border-l border-white/10"
                  : ""
              }`}
            >
              <p className="text-sm text-gray-500 mb-4">
                0{index + 1}
              </p>

              <h3 className="text-2xl font-semibold mb-4">
                {group.title}
              </h3>

              <p className="text-gray-500 leading-7 mb-8">
                {group.description}
              </p>

              <div className="flex flex-wrap gap-x-3 gap-y-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm text-gray-300 border border-white/10 px-4 py-2 hover:border-white/30 hover:text-white transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
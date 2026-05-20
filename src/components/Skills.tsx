const Skills = () => {
  return (
    <section id="skills" className="py-32 px-6 bg-zinc-900">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-8">Skills</h2>

        <div className="flex flex-wrap gap-4">
          {["React", "TypeScript", "Tailwind", "JavaScript", "Next.js"].map(
            (skill) => (
              <div
                key={skill}
                className="bg-black px-6 py-3 rounded-full"
              >
                {skill}
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Skills;
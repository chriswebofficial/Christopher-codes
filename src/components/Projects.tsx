import luiseVideo from "../assets/luise.mp4";
import fonoVideo from "../assets/fono.mp4";
import translatorImage from "../assets/translator.png";

const Projects = () => {
  const projects = [
    {
      title: "Luise-Makeup-Place",
      description:
        "Luise Beauty Makeup Website (Frontend Demo) A responsive React & Tailwind CSS website demo for a makeup artist portfolio.",
      video: luiseVideo,
      tech: ["React", "TypeScript", "Tailwind"],
      github: "https://github.com/chriswebofficial/Luise-Makeup-Place",
      live: "https://luise-makeup-place.vercel.app",
    },

    {
      title: "Fono",
      description:
        "FONO – E-Commerce Web App. FONO is a modern, responsive e-commerce web application built using React, TypeScript, and Vite. It provides users with a smooth shopping experience including product search, filtering, and sorting.",
      video: fonoVideo,
      tech: ["React", "TypeScript", "Tailwind"],
      github: "https://github.com/chriswebofficial/FONO",
      live: "https://fono-two.vercel.app",
    },

    {
      title: "Text Translator",
      description:
        "This is a simple translator project that helps users translate languages from around the world.",
      image: translatorImage,
      tech: ["React", "JavaScript", "API"],
      github: "https://github.com/chriswebofficial/Text-Translator",
      live: "https://text-translator-ruby.vercel.app",
    },
  ];

  return (
    <section id="projects" className="py-32 px-6 bg-black text-white">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold">
            Live Projects
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-zinc-900 rounded-3xl overflow-hidden border border-white/10"
            >

              {/* VIDEO OR IMAGE */}
              {project.video ? (
                <video
                  src={project.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-56 object-cover"
                />
              ) : (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover"
                />
              )}

              {/* CONTENT */}
              <div className="p-6">

                <h3 className="text-2xl font-bold mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-5 leading-7">
                  {project.description}
                </p>

                {/* TECH STACK */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((item, i) => (
                    <span
                      key={i}
                      className="bg-black px-3 py-1 rounded-full text-sm border border-white/10"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* BUTTONS */}
                <div className="flex gap-4">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center bg-white text-black py-3 rounded-full font-semibold hover:scale-105 transition"
                  >
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center border border-white py-3 rounded-full font-semibold hover:bg-white hover:text-black transition"
                  >
                    Live
                  </a>

                </div>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Projects;
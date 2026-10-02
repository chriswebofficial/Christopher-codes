import luiseVideo from "../assets/luise.mp4";
import fonoVideo from "../assets/fono.mp4";
import translatorImage from "../assets/translator.png";
import vic3Video from "../assets/vic3.mp4";

const Projects = () => {
  const projects = [
    {
      number: "01",
      title: "Luise Makeup Place",
      type: "Business Website",
      description:
        "A responsive website created for a makeup business to showcase its services, work, and brand online. The project focuses on presenting the business clearly while keeping the experience simple across different screen sizes.",
      video: luiseVideo,
      tech: ["React", "TypeScript", "Tailwind CSS"],
      github:
        "https://github.com/chriswebofficial/Luise-Makeup-Place",
      live:
        "https://luise-makeup-place.vercel.app",
    },

    {
      number: "02",
      title: "FONO",
      type: "E-Commerce Web App",
      description:
        "An e-commerce web application for browsing and exploring phone and accessory products. It includes product search, filtering, sorting, and a responsive shopping interface.",
      video: fonoVideo,
      tech: ["React", "TypeScript", "Vite", "Tailwind CSS"],
      github:
        "https://github.com/chriswebofficial/FONO",
      live:
        "https://fono-two.vercel.app",
    },

    {
      number: "03",
      title: "VIC3 Productions Ltd",
      type: "Company Website",
      description:
        "A professional company website created for VIC3 Productions Ltd to showcase its services, team, work, and brand online. The project was built for real-world use and includes content management features.",
      video: vic3Video,
      tech: ["Next.js", "Tailwind CSS", "Firebase", "Cloudinary"],
      live:
        "https://vic3-productions-ltd-red.vercel.app/",
    },

    {
      number: "04",
      title: "Text Translator",
      type: "Web Application",
      description:
        "A simple translation application that connects users with language translation services through an API. The project focuses on creating a straightforward interface around an external service.",
      image: translatorImage,
      tech: ["React", "JavaScript", "API"],
      github:
        "https://github.com/chriswebofficial/Text-Translator",
      live:
        "https://text-translator-ruby.vercel.app",
    },
  ];

  return (
    <section
      id="projects"
      className="py-32 px-6 bg-black text-white"
    >
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div
          data-aos="fade-up"
          className="max-w-3xl mb-20"
        >
          <p className="text-gray-500 text-sm tracking-[0.25em] uppercase mb-5">
            Selected Work
          </p>

          <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Things I've
            <span className="text-gray-500"> built.</span>
          </h2>

          <p className="text-gray-400 text-lg leading-8">
            A selection of websites and applications I've worked on,
            from business websites to web applications and e-commerce
            projects.
          </p>
        </div>

        {/* PROJECTS */}
        <div className="space-y-24">

          {projects.map((project, index) => (
            <article
              key={project.title}
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center border-t border-white/10 pt-10"
            >

              {/* MEDIA */}
              <div
                className={`overflow-hidden border border-white/10 ${
                  index % 2 !== 0 ? "lg:order-2" : ""
                }`}
              >
                {project.video ? (
                  <video
                    src={project.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full aspect-video object-cover hover:scale-105 transition duration-700"
                  />
                ) : (
                  <img
                    src={project.image}
                    alt={`${project.title} project preview`}
                    className="w-full aspect-video object-cover hover:scale-105 transition duration-700"
                  />
                )}
              </div>

              {/* INFORMATION */}
              <div
                className={`${
                  index % 2 !== 0 ? "lg:order-1" : ""
                }`}
              >
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-gray-600 text-sm font-mono">
                    {project.number}
                  </span>

                  <span className="text-gray-500 text-sm uppercase tracking-widest">
                    {project.type}
                  </span>
                </div>

                <h3 className="text-3xl md:text-4xl font-bold mb-6">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-lg leading-8 mb-8 max-w-xl">
                  {project.description}
                </p>

                {/* TECH */}
                <div className="flex flex-wrap gap-x-5 gap-y-3 mb-10">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="text-sm text-gray-500"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* LINKS */}
                <div className="flex items-center gap-8">

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white font-medium border-b border-white pb-1 hover:text-gray-400 hover:border-gray-400 transition"
                  >
                    View Live ↗
                  </a>

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 font-medium border-b border-gray-700 pb-1 hover:text-white hover:border-white transition"
                    >
                      GitHub ↗
                    </a>
                  )}

                </div>
              </div>

            </article>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Projects;
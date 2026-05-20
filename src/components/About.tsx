const About = () => {
  return (
    <section
      id="about"
      className="py-32 px-6 bg-zinc-950 text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">

        {/* SECTION TITLE */}
        <div
          data-aos="fade-up"
          className="text-center mb-24"
        >
          <p className="text-blue-500 font-semibold tracking-[0.3em] uppercase mb-4">
            About Me
          </p>

          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            Passionate Frontend <br />
            Web Developer
          </h2>
        </div>

        {/* CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* LEFT SIDE */}
          <div data-aos="fade-right">
            <h3 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">
              Building Modern & Interactive
              Digital Experiences
            </h3>

            <p className="text-gray-400 leading-8 mb-6 text-lg">
              Hello! I'm{" "}
              <span className="text-white font-semibold">
                Balogun Christopher
              </span>
              , a passionate frontend developer focused on crafting
              modern, responsive, and visually engaging websites and
              web applications.
            </p>

            <p className="text-gray-400 leading-8 mb-6 text-lg">
              I specialize in building clean and scalable user
              interfaces using React, TypeScript, Tailwind CSS,
              JavaScript, and Next.js. My goal is to combine
              performance, functionality, and design to create smooth
              user experiences across all devices.
            </p>

            <p className="text-gray-400 leading-8 mb-6 text-lg">
              Beyond development, I also enjoy digital design and
              creative problem solving, blending creativity with code
              to build modern and impactful products.
            </p>

            <p className="text-gray-400 leading-8 text-lg">
              I’m continuously learning, improving my skills, and
              working toward becoming a professional frontend engineer
              capable of building high-quality web experiences.
            </p>
          </div>

          {/* RIGHT SIDE */}
          <div
            data-aos="fade-left"
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >

            {/* CARD */}
            <div className="group bg-zinc-900/70 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:border-blue-500/40 hover:-translate-y-2 transition duration-500 shadow-lg">
              <h4 className="text-5xl font-bold text-blue-500 mb-4 group-hover:scale-110 transition duration-300">
                2+
              </h4>

              <p className="text-gray-400 leading-7">
                Years Learning Frontend Development
              </p>
            </div>

            {/* CARD */}
            <div className="group bg-zinc-900/70 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:border-purple-500/40 hover:-translate-y-2 transition duration-500 shadow-lg">
              <h4 className="text-5xl font-bold text-purple-500 mb-4 group-hover:scale-110 transition duration-300">
                10+
              </h4>

              <p className="text-gray-400 leading-7">
                Personal & Practice Projects Built
              </p>
            </div>

            {/* CARD */}
            <div className="group bg-zinc-900/70 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:border-cyan-500/40 hover:-translate-y-2 transition duration-500 shadow-lg">
              <h4 className="text-5xl font-bold text-cyan-500 mb-4 group-hover:scale-110 transition duration-300">
                React
              </h4>

              <p className="text-gray-400 leading-7">
                Main Frontend Framework
              </p>
            </div>

            {/* CARD */}
            <div className="group bg-zinc-900/70 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:border-pink-500/40 hover:-translate-y-2 transition duration-500 shadow-lg">
              <h4 className="text-5xl font-bold text-pink-500 mb-4 group-hover:scale-110 transition duration-300">
                UI
              </h4>

              <p className="text-gray-400 leading-7">
                Responsive & Modern Interface Design
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
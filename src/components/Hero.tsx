import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section className="min-h-screen bg-black text-white flex items-center pt-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div
          data-aos="fade-right"
          className="text-center lg:text-left"
        >
          <p className="text-gray-500 text-sm md:text-base mb-5 tracking-[0.25em] uppercase">
            Full-Stack Web Developer
          </p>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight mb-8">
            Balogun
            <br />
            <span className="text-gray-400">
              Christopher
            </span>
          </h1>

          {/* TYPING TEXT */}
          <div className="min-h-14 mb-7">
            <h2 className="text-2xl md:text-4xl font-semibold text-white">
              <TypeAnimation
                sequence={[
                  "Full-Stack Web Developer",
                  2500,
                  "React & TypeScript Developer",
                  2500,
                  "Web Application Developer",
                  2500,
                  "Creative Web Developer",
                  2500,
                ]}
                wrapper="span"
                speed={45}
                repeat={Infinity}
              />
            </h2>
          </div>

          <p className="text-gray-400 text-lg leading-8 max-w-2xl mx-auto lg:mx-0">
            I build websites and web applications from the interface
            users see to the systems that power them. I work with
            modern frontend technologies, backend services, databases,
            and deployment tools to turn ideas into working products.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center lg:justify-start">

            {/* VIEW PROJECTS */}
            <a
              href="#projects"
              className="bg-white text-black px-8 py-4 font-semibold hover:bg-gray-200 transition duration-300"
            >
              View My Work
            </a>

            {/* DOWNLOAD CV */}
            <a
              href="/CV.pdf"
              download
              className="border border-white/20 px-8 py-4 font-semibold text-white hover:bg-white hover:text-black transition duration-300"
            >
              Download CV
            </a>

          </div>

          {/* TECHNOLOGY LINE */}
          <div className="mt-12 flex flex-wrap gap-x-6 gap-y-3 justify-center lg:justify-start text-sm text-gray-500">
            <span>React</span>
            <span>TypeScript</span>
            <span>Next.js</span>
            <span>Node.js</span>
            <span>MongoDB</span>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div
          data-aos="fade-left"
          className="flex justify-center lg:justify-end"
        >
          <div className="relative">

            {/* SIMPLE IMAGE FRAME */}
            <div className="absolute -inset-3 border border-white/10"></div>

            <img
              src="/profile.jpeg"
              alt="Balogun Christopher"
              className="relative w-72 md:w-96 lg:w-[430px] h-[420px] md:h-[520px] object-cover grayscale hover:grayscale-0 transition duration-700"
            />

            {/* SMALL LABEL */}
            <div className="absolute bottom-5 left-5 bg-black border border-white/10 px-5 py-3">
              <p className="text-xs text-gray-500 uppercase tracking-widest">
                Based in Nigeria
              </p>

              <p className="text-sm font-medium text-white mt-1">
                Available for Projects
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section className="min-h-screen bg-black text-white flex items-center pt-24 px-6 overflow-hidden relative ">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/20 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">

        {/* LEFT CONTENT */}
        <div
          data-aos="fade-right"
          className="text-center lg:text-left"
        >
          <p className="text-gray-400 text-sm md:text-base mb-5 tracking-[0.3em] uppercase">
            Frontend Developer
          </p>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight mb-6">
            Balogun <br />

            <span className="bg-linear-to-r from-white to-gray-500 bg-clip-text text-transparent">
              Christopher
            </span>
          </h1>

          {/* TYPING ANIMATION */}
          <div className="h-20 mb-8">
            <h2 className="text-2xl md:text-4xl font-bold bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              <TypeAnimation
                sequence={[
                  "Frontend Web Developer",
                  2000,
                  "React & TypeScript Engineer",
                  2000,
                  "Modern UI/UX Designer",
                  2000,
                  "Creative Web Developer",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </h2>
          </div>

          <p className="text-gray-400 text-lg leading-8 max-w-2xl mx-auto lg:mx-0">
            I design and build modern, responsive, and
            high-performance web applications focused on
            clean user experiences, smooth animations,
            and scalable frontend architecture using
            React, TypeScript, Tailwind CSS, and modern
            web technologies.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-5 mt-12 justify-center lg:justify-start">

            <a
            href="#projects"
             className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:scale-105 hover:bg-gray-200 transition duration-300 shadow-2xl">
              View Projects
            </a>

            {/* <a
            href="#Contact"
             className="border border-white/20 bg-white/5 backdrop-blur-sm px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-black transition duration-300">
              Contact Me
            </a> */}

          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div
          data-aos="fade-left"
          className="flex justify-center"
        >
          <div className="relative group">

            {/* ANIMATED GLOW */}
            <div className="absolute inset-0 bg-linear-to-r  blur-3xl opacity-30 rounded-[40px] animate-pulse"></div>

            {/* FLOATING BORDER */}
            <div className="absolute -inset-1 rounded-[40px] bg-linear-to-r opacity-40 blur-md"></div>

            {/* IMAGE */}
            <img
              src="/profile.jpeg"
              alt="ChrisToonz"
              className="relative w-72 md:w-108 m-7 rounded-[40px] object-cover border border-white/10 shadow-2xl group-hover:scale-105 transition duration-500"
            />

          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
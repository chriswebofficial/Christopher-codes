const About = () => {
  return (
    <section
      id="about"
      className="py-32 px-6 bg-zinc-950 text-white"
    >
      <div className="max-w-7xl mx-auto">

        {/* SECTION HEADER */}
        <div
          data-aos="fade-up"
          className="max-w-3xl mb-20"
        >
          <p className="text-gray-500 text-sm tracking-[0.25em] uppercase mb-5">
            About Me
          </p>

          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            I build websites from
            <span className="text-gray-500"> idea to deployment.</span>
          </h2>
        </div>

        {/* MAIN CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

          {/* STORY */}
          <div
            data-aos="fade-right"
            className="lg:col-span-2"
          >
            <p className="text-gray-300 text-xl leading-9 mb-8">
              I'm{" "}
              <span className="text-white font-semibold">
                Balogun Christopher Simileoluwa
              </span>
              , a full-stack web developer who enjoys turning ideas
              into useful digital products.
            </p>

            <p className="text-gray-400 text-lg leading-8 mb-6">
              My work covers both sides of web development. I build
              the interfaces people interact with and also work with
              backend services, databases, authentication, and APIs
              that make applications function behind the scenes.
            </p>

            <p className="text-gray-400 text-lg leading-8 mb-6">
              I mainly work with technologies such as React,
              TypeScript, JavaScript, Tailwind CSS, Next.js, MongoDB,
              Firebase, and other tools within the modern JavaScript
              ecosystem.
            </p>

            <p className="text-gray-400 text-lg leading-8">
              I'm also interested in design and digital creativity.
              That influences how I approach development because I
              don't just want a website to work — I want it to feel
              intentional, easy to use, and suited to the people
              using it.
            </p>
          </div>

          {/* QUICK INFORMATION */}
          <div
            data-aos="fade-left"
            className="border-l border-white/10 pl-8"
          >
            <div className="mb-10">
              <p className="text-xs text-gray-500 uppercase tracking-[0.2em] mb-3">
                What I Do
              </p>

              <h3 className="text-2xl font-semibold">
                Full-Stack Development
              </h3>
            </div>

            <div className="mb-10">
              <p className="text-xs text-gray-500 uppercase tracking-[0.2em] mb-3">
                Frontend
              </p>

              <p className="text-gray-400 leading-7">
                React, TypeScript, JavaScript, Tailwind CSS,
                responsive interfaces and interactive experiences.
              </p>
            </div>

            <div className="mb-10">
              <p className="text-xs text-gray-500 uppercase tracking-[0.2em] mb-3">
                Backend
              </p>

              <p className="text-gray-400 leading-7">
                APIs, authentication, databases and application
                logic using technologies such as Firebase,
                MongoDB and Next.js.
              </p>
            </div>

            <div>
              <p className="text-xs text-gray-500 uppercase tracking-[0.2em] mb-3">
                Currently
              </p>

              <p className="text-gray-400 leading-7">
                Studying Software and Web Development while
                continuing to build real projects and improve
                my development skills.
              </p>
            </div>
          </div>
        </div>

        {/* BOTTOM STRIP */}
        <div
          data-aos="fade-up"
          className="mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row md:items-center md:justify-between gap-6"
        >
          <p className="text-gray-500">
            Based in Nigeria · Available for web projects
          </p>

          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-500">
            <span>React</span>
            <span>TypeScript</span>
            <span>Next.js</span>
            <span>MongoDB</span>
            <span>Firebase</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
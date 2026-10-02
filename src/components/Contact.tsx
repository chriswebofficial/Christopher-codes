import {
  FaInstagram,
  FaWhatsapp,
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa6";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-32 px-6 bg-zinc-950 text-white"
    >
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div
          data-aos="fade-up"
          className="max-w-3xl mb-20"
        >
          <p className="text-gray-500 text-sm tracking-[0.25em] uppercase mb-5">
            Contact
          </p>

          <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Have a project
            <span className="text-gray-500"> in mind?</span>
          </h2>

          <p className="text-gray-400 text-lg leading-8 max-w-2xl">
            Whether you need a business website, web application,
            or help improving an existing project, feel free to
            reach out. I'm always open to discussing new ideas
            and opportunities.
          </p>
        </div>

        {/* CONTACT CONTENT */}
        <div
          data-aos="fade-up"
          className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-white/10 pt-10"
        >

          {/* EMAIL / PHONE */}
          <div>
            <p className="text-sm text-gray-500 uppercase tracking-widest mb-6">
              Get in touch
            </p>

            <div className="space-y-5">

              <a
                href="mailto:christoonz221@gmail.com"
                className="flex items-center gap-4 text-gray-300 hover:text-white transition"
              >
                <FaEnvelope className="text-xl" />
                <span>christoonz221@gmail.com</span>
              </a>

              <a
                href="tel:+2349039550193"
                className="flex items-center gap-4 text-gray-300 hover:text-white transition"
              >
                <FaPhone className="text-xl" />
                <span>+234 903 955 0193</span>
              </a>

              <a
                href="https://wa.me/2349039550193?text=Hello%20Christopher,%20I%20visited%20your%20portfolio."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-gray-300 hover:text-white transition"
              >
                <FaWhatsapp className="text-xl" />
                <span>Chat with me on WhatsApp</span>
              </a>

            </div>
          </div>

          {/* SOCIALS */}
          <div>
            <p className="text-sm text-gray-500 uppercase tracking-widest mb-6">
              Find me online
            </p>

            <div className="flex flex-wrap gap-6">

              <a
                href="https://www.instagram.com/official_chris_topher?igsh=OTMyeWJoa3h0cmhs"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-2xl text-gray-400 hover:text-white transition"
              >
                <FaInstagram />
              </a>

              <a
                href="https://x.com/ChrisToonz_"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
                className="text-2xl text-gray-400 hover:text-white transition"
              >
                <FaXTwitter />
              </a>

              <a
                href="https://github.com/chriswebofficial"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-2xl text-gray-400 hover:text-white transition"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/balogun-christopher-234ab7316/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-2xl text-gray-400 hover:text-white transition"
              >
                <FaLinkedin />
              </a>

            </div>

            <p className="text-gray-600 text-sm mt-8">
              Based in Nigeria · Open to freelance and web development projects.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
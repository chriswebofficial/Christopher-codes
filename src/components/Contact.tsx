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
    <section id="contact" className="py-32 px-6 bg-zinc-900 text-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Contact Me</h2>

        <p className="text-gray-400 mb-10">
          Let’s work together on your next project.
        </p>

        {/* Social Links */}
        <div className="flex flex-wrap justify-center gap-6 text-3xl mb-10">
          <a
            href="https://www.instagram.com/official_chris_topher?igsh=OTMyeWJoa3h0cmhs"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition"
          >
            <FaInstagram />
          </a>

          <a
            href="https://wa.me/2349039550193?text=Hello%20Christopher,%20I%20visited%20your%20portfolio."
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-500 transition"
          >
            <FaWhatsapp />
          </a>

          <a
            href="https://x.com/ChrisToonz_"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition"
          >
            <FaXTwitter />
          </a>

          <a
            href="https://github.com/chriswebofficial"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/balogun-christopher-234ab7316/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BBHwrWsynTkSh6USGYUq0HQ%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition"
          >
            <FaLinkedin />
          </a>

          <a
            href="tel:+2349039550193"
            className="hover:text-yellow-400 transition"
          >
            <FaPhone />
          </a>

          <a
          href="mailto:christoonz221@gmail.com"
          className="hover:text-red-500 transition"
        >
        <FaEnvelope />
        </a>
        </div>
{/* 
        <button className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
          Send Message
        </button> */}
      </div>
    </section>
  );
};

export default Contact;
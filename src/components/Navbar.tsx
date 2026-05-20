import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "About", path: "about" },
  { name: "Skills", path: "skills" },
  { name: "Projects", path: "projects" },
  { name: "Contact", path: "contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      let current = "";

      navLinks.forEach((link) => {
        const section = document.getElementById(link.path);

        if (section) {
          const top = section.offsetTop - 150;
          const bottom = top + section.offsetHeight;

          if (
            window.scrollY >= top &&
            window.scrollY < bottom
          ) {
            current = link.path;
          }
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-xl border-b border-white/10">

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">

          {/* LOGO */}
          <a
            href="#"
            className="text-2xl font-bold text-white tracking-wide hover:opacity-80 transition"
          >
            Christopher
          </a>

          {/* DESKTOP MENU */}
          <ul className="hidden md:flex items-center gap-10 text-white">

            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={`#${link.path}`}
                  className={`relative text-sm uppercase tracking-wider transition duration-300 after:absolute after:left-0 after:-bottom-2 after:h-0.5 after:transition-all after:duration-300
                  
                  ${
                    activeSection === link.path
                      ? "text-blue-400 after:w-full after:bg-blue-500"
                      : "text-white hover:text-blue-400 after:w-0 after:bg-blue-500 hover:after:w-full"
                  }`}
                >
                  {link.name}
                </a>
              </li>
            ))}

          </ul>

          {/* MOBILE BUTTON */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </button>

        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-6 px-6 py-8 bg-black/95 backdrop-blur-xl border-t border-white/10 text-white">

          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={`#${link.path}`}
                onClick={() => setIsOpen(false)}
                className={`block text-lg transition duration-300 ${
                  activeSection === link.path
                    ? "text-blue-400"
                    : "hover:text-blue-400"
                }`}
              >
                {link.name}
              </a>
            </li>
          ))}

        </ul>
      </div>

    </nav>
  );
};

export default Navbar;
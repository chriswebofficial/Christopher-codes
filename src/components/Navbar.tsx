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

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/90 border-b border-white/10">

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">

          {/* LOGO */}
          <a
            href="#"
            className="text-xl md:text-2xl font-bold text-white tracking-tight hover:text-gray-400 transition"
          >
            Christopher.
          </a>

          {/* DESKTOP MENU */}
          <ul className="hidden md:flex items-center gap-8">

            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={`#${link.path}`}
                  className={`text-sm transition duration-300 ${
                    activeSection === link.path
                      ? "text-white"
                      : "text-gray-500 hover:text-white"
                  }`}
                >
                  {link.name}
                </a>
              </li>
            ))}

          </ul>

          {/* MOBILE BUTTON */}
          <button
            aria-label={isOpen ? "Close menu" : "Open menu"}
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>

        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-6 px-6 py-7 bg-black border-t border-white/10">

          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={`#${link.path}`}
                onClick={() => setIsOpen(false)}
                className={`block text-base transition duration-300 ${
                  activeSection === link.path
                    ? "text-white"
                    : "text-gray-500 hover:text-white"
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
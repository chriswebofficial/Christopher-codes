import { FaWhatsapp } from "react-icons/fa6";

const WhatsappChat = () => {
  return (
    <a
      href="https://wa.me/2349039550193?text=Hello%20Christopher,%20I%20visited%20your%20portfolio."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Christopher on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 hover:scale-105 transition duration-300"
    >
      <FaWhatsapp size={28} />
    </a>
  );
};

export default WhatsappChat;
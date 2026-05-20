import { FaWhatsapp } from "react-icons/fa6";

const WhatsappChat = () => {
  return (
    <a
      href="https://wa.me/2349039550193?text=Hello%20Christopher,%20I%20visited%20your%20portfolio."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition duration-300 hover:scale-110 animate-bounce"
    >
      <FaWhatsapp size={32} />
    </a>
  );
};

export default WhatsappChat;
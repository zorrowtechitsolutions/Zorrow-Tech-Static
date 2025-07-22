import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MessageCircle,
  PhoneCallIcon,
  Youtube,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-transparent text-gray-600">
      <div className="container mx-auto py-12 px-4">
        <div className="">
          {/* Logo and Description */}
          <div className=" w-full">
            <div className="flex items-center justify-center">
              <img src="./logo1.png" alt="Logo" className="h-36 w-auto" />
            </div>
            <p className="text-sm mb-4 flex justify-center text-center">
              Innovative Tech Solutions for the Future. Empowering businesses
              with cutting-edge technology solutions and expert IT services.
            </p>
            <div className="flex space-x-4 justify-center mt-2">
              <a
                href="tel:+919400517720"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <PhoneCallIcon size={20} />
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=zorrowtech@gmail.com"
                target="_blank"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <Mail size={20} />
              </a>
              <a
                 href={`https://wa.me/+919400517720?text=${encodeURIComponent("Hello, I'm interested in your IT services. Please provide more details.")}`} 
                target="_blank"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <MessageCircle size={20} />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61573552041382"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/zorrowtechitsolutions/"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://www.youtube.com/@ZorrowTech"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-sm">
          <p>
            © {new Date().getFullYear()} Zorrow Tech IT Solutions. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

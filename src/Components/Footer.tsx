import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MessageCircle,
  PhoneCallIcon,
  Youtube,
} from "lucide-react";

const contactLinks = [
  {
    href: "tel:+919400517720",
    icon: <PhoneCallIcon size={20} />,
  },
  {
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=zorrowtech@gmail.com",
    icon: <Mail size={20} />,
    target: "_blank",
  },
  {
    href: "https://wa.me/9400517720",
    icon: <MessageCircle size={20} />,
    target: "_blank",
  },
  {
    href: "https://www.facebook.com/profile.php?id=61573552041382",
    icon: <Facebook size={20} />,
  },
  {
    href: "https://www.instagram.com/zorrowtechitsolutions/",
    icon: <Instagram size={20} />,
  },
  {
    href: "#",
    icon: <Linkedin size={20} />,
  },
  {
    href: "https://www.youtube.com/@ZorrowTech",
    icon: <Youtube size={20} />,
  },
];

const Footer = () => {
  return (
    <footer className="bg-transparent text-custom">
      <div className="container mx-auto py-12 px-4">
        <div className="">
          {/* Logo and Description */}
          <div className=" w-full">
            <div className="flex flex-col items-center justify-center">
              <img src="./logo.png" alt="Logo" className="h-32 w-auto block" />
              {/* <img src="./text.png" alt="Text" className="h-20 w-auto block" /> */}
            </div>
            <p className="text-sm mb-4 flex justify-center text-center">
              Innovative Tech Solutions for the Future. Empowering businesses
              with cutting-edge technology solutions and expert IT services.
            </p>
            <div className="flex space-x-4 justify-center mt-2">

              {contactLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target={link.target || "_self"}
                  className="text-custom hover:text-secondary-light transition-colors"
                >
                  {link.icon}
                </a>
              ))}

            </div>
          </div>
        </div>
        <div className="border-t-2 border-custom mt-8 pt-2 text-center text-sm">
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

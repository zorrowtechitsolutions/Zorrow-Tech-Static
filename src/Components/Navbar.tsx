import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "#home" },
    { name: "About", path: "#about" },
    { name: "Services", path: "#services" },
    { name: "Courses", path: "#courses" },
    { name: "Contact", path: "#contact" },
  ];

  return (
    <nav className="bg-gray-300 shadow-md fixed w-full z-50 pt-1">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-4">
            <div className="flex items-center">
              <img
                src="./logo.png"
                alt="Zorrow Tech Logo"
                className="h-20 w-auto"
              />
              <span className="flex items-center">
                <img
                  src="./text.png"
                  alt="Company name"
                  className="h-52 w-auto mt-1"
                />
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                href={item.path}
                className="text-primary-light hover:text-primary-dark hover:font-bold font-medium transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile Navigation Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden pb-6">
            {navItems.map((item) => (
              <a
                href={item.path}
                className="block py-3 text-gray-700 hover:text-primary font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

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
    <nav className="bg-gray-950 opacity-90 shadow-md fixed w-full z-50 pt-1">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <Link to="/" className="flex items-center space-x-4">
            <div className="flex items-center">
              <img
                src="./logo.png"
                alt="Zorrow Tech Logo"
                className="h-16 w-auto"
              />
              <span className="flex items-center">
                <img
                  src="./text.png"
                  alt="Company name"
                  className="h-32 w-auto mt-1"
                />
              </span>
            </div>
          </Link>

          {/* Mobile Menu Button (visible by default, hidden on md+) */}
          <button
            className="text-secondary-light md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Navigation (hidden by default, shown on md+) */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.path}
                className="text-secondary-light hover:text-secondary-dark font-medium transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>

        {/* Mobile Navigation Menu (visible only on small screens when open) */}
        {isOpen && (
          <div className="flex flex-col md:hidden pb-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.path}
                className="py-3 text-secondary-light hover:text-secondary-dark font-medium transition-colors"
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

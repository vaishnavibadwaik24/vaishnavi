import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import logo from "../assets/vblogo.png";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const menuItems = [
    { name: 'Home', to: 'hero' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'features' },
    { name: 'Portfolio', to: 'portfolio' },
    { name: 'Resume', to: 'resume' },
    { name: 'Contact', to: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerClass = `fixed w-full z-50 transition-all duration-300 ${
    isScrolled ? 'py-4 bg-secondary/90 backdrop-blur-md shadow-lg' : 'py-6'
  }`;

  return (
    <header className={headerClass}>
      <nav className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.a
      href="/"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="text-2xl font-bold rounded-full text-red-700 relative flex items-center justify-center"
    >
      <div className="relative">
        {/* Circle around the logo */}
        <div className="absolute inset-0 border-2 border-red-700 rounded-full flex items-center justify-center h-full w-full" />
        
        {/* Logo image */}
        <img src={logo} alt="Vaishnavi Badwaik" className="h-12 w-12 z-10 relative" />
      </div>
    </motion.a>

          {/* Desktop Menu */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="hidden md:flex items-center space-x-8"
          >
            {menuItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="text-text-light hover:text-primary cursor-pointer transition-colors duration-300 font-medium"
                activeClass="text-primary"
              >
                {item.name}
              </Link>
            ))}
            <a
              href="#contact"
              className="bg-card-gradient hover:bg-hover text-white px-6 py-3 rounded-lg shadow-button hover:text-primary transition-all duration-300 transform hover:-translate-y-1"
            >
              Hire Me
            </a>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-text-light hover:text-primary focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-4"
            >
              <div className="bg-card-dark rounded-lg shadow-card p-4 space-y-4">
                {menuItems.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    className="block text-text-light hover:text-primary cursor-pointer transition-colors duration-300"
                    activeClass="text-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <a
                  href="#contact"
                  className="block text-center bg-card-gradient hover:bg-hover text-white px-6 py-3 rounded-lg shadow-button hover:text-primary transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  Hire Me
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;

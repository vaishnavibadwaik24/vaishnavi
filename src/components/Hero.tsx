import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa';

const Hero: React.FC = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/vaishnavibadwaik24',
      icon: FaGithub,
      bgColor: 'bg-[#6e40c9]'
    },
    { 
      name: 'LinkedIn', 
      icon: FaLinkedinIn, 
      url: 'https://www.linkedin.com/in/vaishnavib24/',
      bgColor: 'bg-[#0A66C2]'
    },
    { 
      name: 'Facebook', 
      icon: FaFacebookF, 
      url: 'https://www.facebook.com/vaishnavi_bidwaik',
      bgColor: 'bg-[#1877f2]'
    },
    { 
      name: 'Twitter', 
      icon: FaTwitter, 
      url: 'https://x.com/vaishnavib24',
      bgColor: 'bg-[#1DA1F2]'
    }
  ];

  return (
    <section id="hero" className="min-h-screen flex items-center pt-20 pb-10 bg-secondary overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center lg:text-left"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-primary font-medium mb-4 block"
            >
              WELCOME
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
            >
              Hi, I'm <span className="text-primary">Vaishnavi Badwaik</span>
              <br />
              <span className="text-text-light">
                a Laravel Developer
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-text-light text-lg mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              I'm a web developer specializing in building exceptional digital experiences.
              Currently, I'm focused on building accessible, human-centered products.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8"
            >
              <Link
                to="portfolio"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="bg-card-gradient hover:bg-hover text-white px-8 py-4 rounded-lg shadow-button hover:text-primary transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
              >
                View My Works
              </Link>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="border border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 rounded-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
              >
                Contact Me
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex items-center justify-center lg:justify-start space-x-4 w-full"
            >
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 ${link.bgColor} rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300`}
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content (Image/Avatar) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="hidden lg:flex justify-center items-center"
          >
            <div className="relative w-64 max-w-md mx-auto">
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="relative z-10"
              >
                <div className="bg-card-gradient rounded-3xl p-6 shadow-card overflow-hidden">
                  <img
                    src="/vaishnavi.jpg"
                    alt="Vaishnavi Badwaik"
                    className="w-64 h-auto rounded-2xl"
                  />
                </div>
              </motion.div>
              
              {/* Background Elements */}
              <motion.div
                animate={{
                  rotate: 360,
                  transition: { duration: 20, repeat: Infinity, ease: "linear" }
                }}
                className="absolute top-0 right-0 w-72 h-72 bg-primary/20 rounded-full blur-3xl"
              />
              <motion.div
                animate={{
                  rotate: -360,
                  transition: { duration: 15, repeat: Infinity, ease: "linear" }
                }}
                className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
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
    },
  ];

  return (
    <footer className="bg-card-dark py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-text-light mb-4 md:mb-0"
          >
            {currentYear} Vaishnavi Badwaik. All rights reserved.
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex gap-4"
          >
            {socialLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className={`w-10 h-10 ${link.bgColor} rounded-lg flex items-center justify-center text-white`}
                >
                  <Icon className="w-[18px] h-[18px]" />
                </motion.a>
              );
            })}
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

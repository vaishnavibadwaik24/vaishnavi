import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const stats = [
    { label: 'Years of Experience', value: '1+' },
    { label: 'Projects Completed', value: '5+' },
    // { label: 'Satisfied Clients', value: '30+' },
  ];

  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-[#ff014f] text-lg font-medium mb-4">ABOUT ME</h2>
          <h3 className="text-4xl font-bold text-white mb-6">Way of Success</h3>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-gray-400 leading-relaxed">
              I am a passionate web developer with a strong foundation in both front-end and back-end development. 
              My journey in web development started with a curiosity about how websites work, and it has evolved into 
              a professional career where I create innovative digital solutions.
            </p>
            <p className="text-gray-400 leading-relaxed">
              I specialize in creating responsive, user-friendly websites and applications using modern technologies 
              like React, Laravel. My approach combines technical expertise with creative problem-solving 
              to deliver solutions that not only look great but also perform exceptionally.
            </p>
            
            <div className="grid grid-cols-3 gap-6 pt-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-card-dark p-6 rounded-lg text-center"
                >
                  <h4 className="text-3xl font-bold text-[#ff014f] mb-2">{stat.value}</h4>
                  <p className="text-gray-400 text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="w-full aspect-square bg-gradient-to-tr from-[#ff014f] to-purple-600 rounded-full opacity-20 absolute blur-3xl"></div>
            <img
              src="/about.png"
              alt="Yushabh Dhande"
              className="w-full rounded-2xl relative z-10"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

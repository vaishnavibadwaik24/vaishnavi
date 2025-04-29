import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// import portfolioImg from "/projects/portfolio.png";

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  link: string;
  description: string;
}

const Portfolio: React.FC = () => {
  const categories = ['All', 'Development', 'Design'];
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "Portfolio Website",
      category: "Design",
      image: "/projects/portfolio.png",
      link: "https://vaishnavi-badwaik.vercel.app/",
      description: "Creative portfolio design."
    },
    {
      id: 2,
      title: "NextGen UX",
      category: "Design",
      image: "/projects/nextgen.png",
      link: "next-gen-ux.netlify.app",
      description: "Learn UI/UX Design skills with NextGen UX. The latest online learning system and material that help you to be creative."
    },
    {
      id: 3,
      title: "TechNova Codes",
      category: "Design",
      image: "/projects/technova.png",
      link: "https://www.technovacodes.com/",
      description: "At TechNova Codes, transform your ideas into powerful digital solutions. From design to development, deliver innovation, quality, and excellence — let's create something extraordinary together."
    },
    {
      id: 4,
      title: "Janiv Jagruti Foundation",
      category: "Design",
      image: "/projects/ngo.png",
      link: "https://technovacodes-janiv-jagruti.vercel.app/",
      description: "Janiv Jagruti Foundation is a dedicated to developing youth potential and creating positive social change."
    },
    {
      id: 5,
      title: "FastFruits",
      category: "Development",
      image: "/projects/fastfruits.png",
      link: "https://play.google.com/store/apps/details?id=com.omegadisaster.restoration",
      description: "FastFruits brings you the freshest fruits, delivered fast and full of flavor. Enjoy farm-fresh goodness, anytime, anywhere!"
    },
    // {
    //   id: 5,
    //   title: "Influencer App",
    //   category: "Mobile App",
    //   image: "/portfolio/project5.jpg",
    //   link: "#",
    //   description: "Mobile application for selling clothing and footwear, earning commissions, connecting influencers and customers."
    // },
    // {
    //   id: 6,
    //   title: "Online Tiffin Service System (OTSS)",
    //   category: "Development",
    //   image: "/portfolio/project6.jpg",
    //   link: "#",
    //   description: "The Online Tiffin Service System is a web-based application designed to help administrators efficiently and securely manage all activities online. From a user's perspective, they can conveniently order food online on a daily, weekly, or monthly basis. Payment options include cash on delivery or online payment at the time of delivery. Additionally, after placing an order, users receive a QR code linked to the restaurant, allowing them to make payments and share the receipt seamlessly."
    // },
  ];

  const filteredProjects = projects.filter(project => 
    activeCategory === 'All' ? true : project.category === activeCategory
  );

  return (
    <section id="portfolio" className="section bg-secondary py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-primary text-lg font-medium mb-4">VISIT MY PORTFOLIO</h2>
          <h3 className="text-4xl font-bold text-white mb-6">My Projects</h3>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <motion.button
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-primary text-white'
                  : 'bg-card-gradient text-text-light hover:text-primary shadow-card'
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="bg-card-dark rounded-xl overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="px-6 py-3 bg-primary text-white rounded-lg transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                  >
                    View Project
                  </button>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-white mb-2">{project.title}</h4>
                <p className="text-text-light">{project.category}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-card-dark rounded-xl overflow-hidden max-w-3xl w-full"
              >
                <div className="relative">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-[400px] object-cover"
                  />
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black bg-opacity-50 text-white flex items-center justify-center hover:bg-opacity-75 transition-all"
                  >
                    ✕
                  </button>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-4">{selectedProject.title}</h3>
                  <p className="text-text-light mb-6">{selectedProject.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-primary font-medium">{selectedProject.category}</span>
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
                    >
                      Visit Project
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Portfolio;

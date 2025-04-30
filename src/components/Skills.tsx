import React from 'react';
import { motion } from 'framer-motion';

const Skills: React.FC = () => {
  const skills = [
    {
      category: 'Frontend Development',
      icon: '💻',
      description: 'Creating responsive and interactive user interfaces',
      technologies: ['HTML5', 'CSS3', 'Bootstrap', 'Tailwind CSS', 'React'],
      // technologies: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'HTML5', 'CSS3'],
    },
    {
      category: 'Backend Development',
      icon: '⚙️',
      description: 'Building robust server-side applications',
      technologies: ['Laravel', 'PHP', 'MySQL', 'MVC Architecture'],
      // technologies: ['Node.js', 'Express', 'MongoDB', 'RESTful APIs', 'GraphQL'],
    },
    {
      category: 'Tools & Methods',
      icon: '🛠',
      description: 'Using modern development tools and practices',
      technologies: ['Git', 'GitHub'],
    },
  ];

  return (
    <section id="features" className="py-20 bg-[#1e2024]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-[#ff014f] text-lg font-medium mb-4">FEATURES</h2>
          <h3 className="text-4xl font-bold text-white mb-6">What I Do</h3>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#212428] p-8 rounded-lg hover:shadow-xl transition-shadow group"
            >
              <div className="text-4xl mb-4">{skill.icon}</div>
              <h4 className="text-xl font-bold text-white mb-3 group-hover:text-[#ff014f] transition-colors">
                {skill.category}
              </h4>
              <p className="text-gray-400 mb-6">{skill.description}</p>
              <div className="flex flex-wrap gap-2">
                {skill.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="bg-[#1e2024] text-sm text-gray-300 px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 grid md:grid-cols-2 gap-8"
        >
          <div className="space-y-8">
            <h4 className="text-2xl font-bold text-white mb-6">Professional Skills</h4>
            {[
              { skill: 'Laravel', percentage: 80 },
              { skill: 'React', percentage: 60 },
              // { skill: 'UI/UX Design', percentage: 80 },
            ].map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between text-gray-400">
                  <span>{item.skill}</span>
                  <span>{item.percentage}%</span>
                </div>
                <div className="w-full h-2 bg-[#1e2024] rounded-full">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.percentage}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="h-full bg-[#ff014f] rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-8">
            <h4 className="text-2xl font-bold text-white mb-6">Tools I Use</h4>
            {[
              { skill: 'VS Code & DevTools', percentage: 80 },
              { skill: 'Git & GitHub', percentage: 75 },
              { skill: 'Windows', percentage: 85 },
              // { skill: 'Figma & Design Tools', percentage: 75 },
            ].map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between text-gray-400">
                  <span>{item.skill}</span>
                  <span>{item.percentage}%</span>
                </div>
                <div className="w-full h-2 bg-[#1e2024] rounded-full">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.percentage}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="h-full bg-[#ff014f] rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

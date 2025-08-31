// components/Skills.jsx
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Code, Database, Globe, Server, Palette } from 'lucide-react';
import { skills } from '../data/portfolioData.js';

const Skills = () => {
  const skillIcons = {
    'React & Next.js': <Code size={24} />,
    'Node.js & Express': <Server size={24} />,
    'JavaScript & TypeScript': <Code size={24} />,
    'PHP & Laravel': <Server size={24} />,
    'Python & Django': <Code size={24} />,
    'MongoDB & PostgreSQL': <Database size={24} />,
    'AWS & Docker': <Globe size={24} />,
    'HTML/CSS & Tailwind': <Palette size={24} />
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden scroll-mt-20">
      {/* Background geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-20 w-32 h-32 bg-blue-200/30 rounded-full"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 12, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-24 h-24 bg-purple-200/30 rotate-45"
          animate={{ 
            rotate: [45, 135, 45],
            y: [0, -20, 0]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Skills</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks I use to build exceptional applications
          </p>
        </motion.div>

        {/* Technical Skills */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-12">
            Technical Expertise
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.technical.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.03, y: -5 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 p-3 rounded-full">
                    <div className="text-blue-600">
                      {skillIcons[skill.name] || <Code size={24} />}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-800 mb-1">{skill.name}</h4>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-600">Proficiency</span>
                      <span className="text-sm font-medium text-blue-600">{skill.level}%</span>
                    </div>
                  </div>
                </div>
                
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <motion.div
                    className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Professional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-12">
            Professional Skills
          </h3>
          
          <div className="flex flex-wrap justify-center gap-4">
            {skills.professional.map((skill, index) => (
              <motion.div
                key={skill}
                className="bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-white/50 text-gray-800 font-medium"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -2 }}
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;  
// components/About.jsx
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Code, Database, Globe, Smartphone, Award, BookOpen } from 'lucide-react';
import { personalInfo } from '../data/portfolioData.js';
import profileImg from '../assets/portfolio-1.JPG';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.4
      }
    }
  };

  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-br from-slate-100 via-blue-50 to-purple-50 relative overflow-hidden scroll-mt-20">
      {/* Simplified background geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-20 w-32 h-32 bg-blue-200/20 rounded-full"
          animate={{ 
            scale: [1, 1.1, 1],
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-24 h-24 bg-purple-200/20 rotate-45"
          animate={{ 
            y: [0, -10, 0]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Me</span>
          </h2>
          <p className="text-2xl md:text-3xl text-gray-600 max-w-4xl mx-auto">
            AI Engineer passionate about creating intelligent systems and innovative machine learning solutions
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative">
              <motion.div
                className="w-80 h-80 rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-400/20 to-purple-400/20 backdrop-blur-sm border border-white/30"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                {/* Main image from assets */}
                <img
                  src={profileImg}
                  alt={`${personalInfo.name} portrait`}
                  className="w-full h-full object-cover"
                  style={{ objectPosition: personalInfo.avatarFocal || '50% 20%' }}
                />
              </motion.div>
              
              {/* Floating badges - simplified animations */}
              <motion.div
                className="absolute -top-4 -right-4 bg-blue-500 text-white p-3 rounded-full shadow-lg"
                animate={{ 
                  y: [0, -5, 0],
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Code size={24} />
              </motion.div>
              
              <motion.div
                className="absolute -bottom-4 -left-4 bg-purple-500 text-white p-3 rounded-full shadow-lg"
                animate={{ 
                  y: [0, 5, 0],
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Globe size={24} />
              </motion.div>
            </div>
          </motion.div>
          
          {/* Right Column - Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Hi, I'm {personalInfo.name}
              </h3>
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8">
                {personalInfo.bio}
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4">
              <div className="bg-white/70 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                <div className="flex items-center gap-3 mb-2">
                  <Award className="text-blue-500" size={24} />
                  <span className="font-semibold text-gray-800">Experience</span>
                </div>
                <p className="text-gray-600">3+ Years in AI</p>
              </div>
              
              <div className="bg-white/70 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                <div className="flex items-center gap-3 mb-2">
                  <BookOpen className="text-purple-500" size={24} />
                  <span className="font-semibold text-gray-800">AI Projects</span>
                </div>
                <p className="text-gray-600">20+ Completed</p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h4 className="text-xl font-semibold text-gray-800 mb-4">What I Do</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <Code className="text-blue-600" size={20} />
                  </div>
                  <span className="text-gray-700">Machine Learning</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <Database className="text-green-600" size={20} />
                  </div>
                  <span className="text-gray-700">RAG Applications</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-purple-100 p-2 rounded-lg">
                    <Globe className="text-purple-600" size={20} />
                  </div>
                  <span className="text-gray-700">GenAI Solutions</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-orange-100 p-2 rounded-lg">
                    <Smartphone className="text-orange-600" size={20} />
                  </div>
                  <span className="text-gray-700">Transformer Models</span>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <motion.button
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
              >
                Download Resume
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// components/Hero.jsx
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { ChevronDown, Download, Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolioData.js';
import profileImg from '../assets/portfolio-1.JPG';

export default function Hero() {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden pt-16 scroll-mt-20">
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-20 w-40 h-40 bg-blue-500/10 rounded-full"
          animate={{ 
            y: [0, -30, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/3 right-10 w-32 h-32 bg-purple-500/10 rotate-45"
          animate={{ 
            rotate: [45, 135, 45],
            x: [0, 20, 0]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-32 left-10 w-24 h-24 bg-pink-500/10 rounded-full"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.8, 0.3]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/3 w-20 h-20 bg-cyan-500/10"
          animate={{ 
            rotate: [0, 180, 360],
            y: [0, -20, 0]
          }}
          transition={{ 
            duration: 12, 
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10 flex items-center min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left Column - Text Content */}
          <motion.div
            className="text-white"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8"
            >
              <span className="text-xl md:text-2xl text-blue-400 font-medium">Hello, I'm</span>
            </motion.div>

            <motion.h1
              className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                {personalInfo.name.split(' ')[0]}
              </span>
              <br />
              <span className="text-white">
                {personalInfo.name.split(' ')[1]}
              </span>
            </motion.h1>

            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl text-white/80 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {personalInfo.title}
            </motion.h2>

            <motion.p
              className="text-xl md:text-2xl text-white/70 mb-10 max-w-2xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {personalInfo.bio}
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              className="flex flex-wrap gap-6 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <motion.button
                onClick={scrollToContact}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.button>
              
              <motion.button
                onClick={scrollToProjects}
                className="border-2 border-white/30 text-white px-10 py-4 rounded-xl font-semibold text-lg backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.button>

              <motion.button
                className="flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={18} />
                Resume
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/20 transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github size={20} />
              </motion.a>
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/20 transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin size={20} />
              </motion.a>
              <motion.a
                href={`mailto:${personalInfo.email}`}
                className="bg-white/10 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/20 transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Mail size={20} />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Column - Profile Image/Animation */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <motion.div
                className="w-80 h-80 md:w-96 md:h-96 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-white/20 overflow-hidden shadow-2xl"
                animate={{ 
                  rotateY: [0, 10, -10, 0],
                }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                {/* Replace with your actual image */}
                <div className="w-full h-full bg-gradient-to-br from-blue-400/30 to-purple-400/30 flex items-center justify-center">
                  <motion.div
                    className="text-center"
                    animate={{ 
                      y: [0, -10, 0],
                    }}
                    transition={{ 
                      duration: 4, 
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                     <img
                                      src={profileImg}
                                      alt={`${personalInfo.name} portrait`}
                                      className="w-full h-full object-cover"
                                    />

                    <div className="text-8xl mb-4">👨‍💻</div>
                    <span className="text-white/60 text-lg">Profile Photo</span>
                  </motion.div>
                </div>
              </motion.div>
              
              {/* Floating elements around image */}
              <motion.div
                className="absolute -top-4 -right-4 bg-blue-500/30 backdrop-blur-sm rounded-full p-3"
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                <span className="text-2xl">⚡</span>
              </motion.div>
              
              <motion.div
                className="absolute -bottom-4 -left-4 bg-purple-500/30 backdrop-blur-sm rounded-full p-3"
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, -10, 0]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <span className="text-2xl">🚀</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        <motion.div
          className="text-white/60 cursor-pointer"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <ChevronDown size={32} />
        </motion.div>
      </motion.div>
    </section>
  );
}
// components/Footer.jsx
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, Heart, ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/portfolioData.js';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-t from-slate-900 to-slate-800 text-white py-12 px-4 relative overflow-hidden">
      {/* Background geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <motion.div
          className="absolute top-10 left-10 w-24 h-24 bg-blue-400 rounded-full"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-20 h-20 bg-purple-400 rotate-45"
          animate={{ 
            rotate: [45, 135, 45],
            y: [0, -20, 0]
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column - Brand */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {personalInfo.name}
            </h3>
            <p className="text-white/70 text-lg">
              {personalInfo.title}
            </p>
            <p className="text-white/60 leading-relaxed">
              Creating exceptional digital experiences with passion and precision. 
              Let's build something amazing together!
            </p>
          </motion.div>
          
          {/* Center Column - Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-xl font-semibold text-white mb-4">Quick Links</h4>
            <div className="space-y-2">
              {['Home', 'About', 'Projects', 'Contact'].map((link) => (
                <motion.button
                  key={link}
                  onClick={() => {
                    const element = document.getElementById(link.toLowerCase());
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="block text-white/70 hover:text-white transition-colors duration-300"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {link}
                </motion.button>
              ))}
            </div>
          </motion.div>
          
          {/* Right Column - Contact & Social */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-xl font-semibold text-white mb-4">Let's Connect</h4>
            <div className="space-y-3">
              <motion.a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-3 text-white/70 hover:text-white transition-colors duration-300"
                whileHover={{ x: 5 }}
              >
                <Mail size={18} />
                <span>{personalInfo.email}</span>
              </motion.a>
              <div className="flex items-center gap-3 text-white/70">
                <span>📍 {personalInfo.location}</span>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur-sm p-3 rounded-full hover:bg-white/20 transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github size={20} />
              </motion.a>
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur-sm p-3 rounded-full hover:bg-white/20 transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin size={20} />
              </motion.a>
              <motion.a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur-sm p-3 rounded-full hover:bg-white/20 transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Twitter size={20} />
              </motion.a>
            </div>
          </motion.div>
        </div>
        
        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-white/10"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-white/60">
              <span>&copy; {currentYear} {personalInfo.name}.</span>
              <span>Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Heart className="text-red-400" size={16} fill="currentColor" />
              </motion.div>
              <span>& React</span>
            </div>
            
            {/* Back to Top Button */}
            <motion.button
              onClick={scrollToTop}
              className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <ArrowUp size={20} />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
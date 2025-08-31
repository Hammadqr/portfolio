// components/Navbar.jsx
import { useState, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Zap, Code, Brain } from 'lucide-react';
import { personalInfo } from '../data/portfolioData.js';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'projects', 'skills', 'certificates', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 100;
      window.scrollTo({ 
        top: offsetTop, 
        behavior: 'smooth' 
      });
      setIsOpen(false);
      setActiveSection(sectionId);
    }
  };

  const navItems = [
    { id: 'home', label: 'Home', icon: Zap },
    { id: 'about', label: 'About', icon: Brain },
    { id: 'projects', label: 'Projects', icon: Code },
    { id: 'skills', label: 'Skills', icon: Zap },
    { id: 'certificates', label: 'Certificates', icon: Brain },
    { id: 'contact', label: 'Contact', icon: Code }
  ];

  return (
    <>
      {/* Animated background gradient */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 z-50">
        <motion.div 
          className="h-full bg-gradient-to-r from-cyan-400 to-blue-500"
          style={{
            scaleX: scrolled ? 1 : 0,
            transformOrigin: "0%"
          }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: scrolled ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </div>

      <motion.nav
        className={`fixed w-full z-40 transition-all duration-500 ${
          scrolled 
            ? 'bg-gradient-to-r from-slate-900/95 via-slate-800/95 to-slate-900/95 backdrop-blur-lg shadow-2xl shadow-blue-500/10' 
            : 'bg-gradient-to-r from-slate-900/70 via-slate-800/70 to-slate-900/70 backdrop-blur-md'
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      >
        {/* Animated border */}
        <motion.div 
          className="absolute bottom-0 left-0 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 2, delay: 0.5 }}
        />

        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-20">
            {/* Logo with enhanced animation */}
            <motion.a
              href="#"
              className="relative group"
              onClick={() => scrollToSection('home')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="relative">
                <motion.div
                  className="absolute -inset-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-lg blur opacity-30 group-hover:opacity-50"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                <div className="relative bg-slate-900 rounded-lg px-4 py-2 border border-slate-700">
                  <span className="text-2xl md:text-3xl font-black bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    {personalInfo.name.split(' ')[0]}
                  </span>
                  <span className="text-lg md:text-xl font-light text-slate-300 ml-1">
                    AI
                  </span>
                </div>
              </div>
            </motion.a>
            
            {/* Desktop Navigation with enhanced styling */}
            <div className="hidden lg:flex items-center space-x-2">
              {navItems.map((item, index) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                return (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`relative px-4 py-2 rounded-xl font-medium transition-all duration-300 group ${
                      isActive 
                        ? 'text-white bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30' 
                        : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                    }`}
                    whileHover={{ y: -2 }}
                    whileTap={{ y: 0 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      delay: index * 0.1,
                      type: "spring", 
                      stiffness: 300, 
                      damping: 20 
                    }}
                  >
                    {/* Animated background */}
                    <motion.div
                      className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100"
                      layoutId={isActive ? "activeNav" : undefined}
                      transition={{ duration: 0.3 }}
                    />
                    
                    {/* Content */}
                    <div className="relative flex items-center space-x-2">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Icon size={16} className={isActive ? 'text-blue-400' : 'text-slate-400'} />
                      </motion.div>
                      <span className="text-sm font-semibold">{item.label}</span>
                    </div>
                    
                    {/* Active indicator */}
                    {isActive && (
                      <motion.div
                        className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-400 rounded-full"
                        layoutId="activeIndicator"
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                    )}
                  </motion.button>
                );
              })}
            </div>
            
            {/* Mobile menu button with enhanced animation */}
            <div className="lg:hidden">
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="relative p-3 rounded-xl bg-slate-800/50 border border-slate-700 text-white"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(30, 41, 59, 0.8)" }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <AnimatePresence mode="wait">
                  {isOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X size={24} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu size={24} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>
        
        {/* Enhanced Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="lg:hidden absolute top-full left-0 right-0 bg-gradient-to-br from-slate-900/98 via-slate-800/98 to-slate-900/98 backdrop-blur-xl border-t border-slate-700/50 shadow-2xl"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="px-6 py-8">
                <div className="grid gap-2">
                  {navItems.map((item, index) => {
                    const Icon = item.icon;
                    const isActive = activeSection === item.id;
                    return (
                      <motion.button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className={`flex items-center space-x-4 w-full p-4 rounded-xl transition-all duration-300 ${
                          isActive 
                            ? 'bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-white border border-blue-500/30' 
                            : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                        }`}
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.3 }}
                        whileHover={{ x: 10, scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <motion.div
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                          <Icon size={20} className={isActive ? 'text-blue-400' : 'text-slate-400'} />
                        </motion.div>
                        <span className="text-lg font-semibold">{item.label}</span>
                      </motion.button>
                    );
                  })}
                </div>
                
                {/* Mobile footer with social links effect */}
                <motion.div 
                  className="mt-8 pt-6 border-t border-slate-700/50"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <p className="text-center text-slate-400 text-sm">
                    <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-semibold">
                      AI Engineer & Full Stack Developer
                    </span>
                  </p>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
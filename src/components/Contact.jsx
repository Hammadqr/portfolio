// components/Contact.jsx
import { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { personalInfo } from '../data/portfolioData.js';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden scroll-mt-20">
      {/* Background geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-10 left-10 w-40 h-40 bg-blue-500/5 rounded-full"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-32 h-32 bg-purple-500/5 rotate-45"
          animate={{ 
            rotate: [45, 135, 45],
            y: [0, -30, 0]
          }}
          transition={{ 
            duration: 10, 
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
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-4">
            Let's Work Together
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Have a project in mind? Let's discuss how we can bring your ideas to life with cutting-edge technology and creative solutions.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Send Me a Message</h3>
            
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <CheckCircle className="text-green-400 mx-auto mb-4" size={48} />
                <h4 className="text-xl font-semibold text-white mb-2">Message Sent!</h4>
                <p className="text-white/80">Thank you for reaching out. I'll get back to you soon!</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-white/90 mb-2 font-medium">
                    Your Name
                  </label>
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"
                    placeholder="John Doe"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-white/90 mb-2 font-medium">
                    Email Address
                  </label>
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"
                    placeholder="john@example.com"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-white/90 mb-2 font-medium">
                    Your Message
                  </label>
                  <textarea 
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all resize-none"
                    placeholder="Tell me about your project..."
                    required
                  />
                </div>
                
                <motion.button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send size={20} />
                  Send Message
                </motion.button>
              </form>
            )}
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
              <div className="space-y-6">
                <motion.div 
                  className="flex items-center gap-4"
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="bg-blue-500/20 p-3 rounded-full">
                    <Mail className="text-blue-400" size={24} />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">Email</p>
                    <p className="text-white font-medium">{personalInfo.email}</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-center gap-4"
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="bg-green-500/20 p-3 rounded-full">
                    <Phone className="text-green-400" size={24} />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">Phone</p>
                    <p className="text-white font-medium">+92 300 1234567</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-center gap-4"
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="bg-purple-500/20 p-3 rounded-full">
                    <MapPin className="text-purple-400" size={24} />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">Location</p>
                    <p className="text-white font-medium">{personalInfo.location}</p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Call to Action */}
            <motion.div
              className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <h4 className="text-xl font-bold text-white mb-4">Ready to Start Your Project?</h4>
              <p className="text-white/80 mb-6 leading-relaxed">
                Whether you need a new website, web application, or want to discuss a custom project, 
                I'm here to help bring your vision to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg font-medium hover:bg-white/30 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Schedule a Call
                </motion.button>
                <motion.button
                  className="border border-white/30 text-white px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Portfolio
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16 pt-16 border-t border-white/10"
        >
          <p className="text-white/60 text-lg">
            Let's create something amazing together! 🚀
          </p>
        </motion.div>
      </div>
    </section>
  );
}
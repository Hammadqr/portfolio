// components/Certificates.jsx
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Award, ExternalLink, Calendar } from 'lucide-react';
import { certificates } from '../data/portfolioData.js';

export default function Certificates() {
  return (
    <section id="certificates" className="py-20 px-4 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 relative overflow-hidden scroll-mt-20">
      {/* Background geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-10 left-20 w-20 h-20 bg-purple-200/20 rounded-full"
          animate={{ 
            scale: [1, 1.3, 1],
            x: [0, 20, 0]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-32 right-16 w-16 h-16 bg-blue-200/20 rotate-45"
          animate={{ 
            rotate: [45, 225, 45],
            y: [0, -15, 0]
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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Certificates & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">Credentials</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional certifications and achievements in AI and machine learning
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50"
              whileHover={{ y: -5, scale: 1.02 }}
            >
              {/* Certificate Image */}
              <div className="w-full h-32 bg-gradient-to-br from-purple-400/20 to-blue-400/20 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                <Award className="text-purple-600" size={48} />
              </div>

              {/* Certificate Info */}
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-gray-800 line-clamp-2">
                  {cert.title}
                </h3>
                
                <p className="text-purple-600 font-semibold text-sm">
                  {cert.issuer}
                </p>

                <div className="flex items-center gap-2 text-gray-600 text-sm">
                  <Calendar size={16} />
                  <span>{cert.date}</span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="bg-purple-100 text-purple-800 px-2 py-1 rounded-md text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-2">
                  <span className="text-xs text-gray-500">
                    ID: {cert.credentialId}
                  </span>
                  <motion.button
                    className="text-purple-600 hover:text-purple-800 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ExternalLink size={16} />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

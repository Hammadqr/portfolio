import { useParams, useNavigate } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { ArrowLeft, Github, ExternalLink, Calendar, User, CheckCircle } from 'lucide-react';
import { projects } from '../data/portfolioData.js';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const project = projects.find(p => p.id === parseInt(id));
  
  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Project Not Found</h2>
          <button 
            onClick={() => navigate('/')}
            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition-colors"
          >
            Go Back Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Floating geometric shapes */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-blue-500/10 rounded-full"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-1/3 right-10 w-16 h-16 bg-purple-500/10 rotate-45"
          animate={{ rotate: [45, 90, 45] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 left-1/4 w-12 h-12 bg-pink-500/10 rounded-full"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10 pt-24 pb-12">
        <div className="max-w-6xl mx-auto px-4">
          {/* Back button */}
          <motion.button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-white/80 hover:text-white mb-8 group"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            Back to Portfolio
          </motion.button>

          {/* Project header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {project.title}
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
              {project.shortDescription}
            </p>
            
            {/* Action buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gray-800/50 hover:bg-gray-800/70 text-white px-6 py-3 rounded-lg backdrop-blur-sm transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github size={20} />
                View Code
              </motion.a>
              <motion.a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-blue-600/80 hover:bg-blue-600 text-white px-6 py-3 rounded-lg backdrop-blur-sm transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink size={20} />
                Live Demo
              </motion.a>
            </div>
          </motion.div>

          {/* Project image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </motion.div>

          {/* Project details grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Main content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:col-span-2"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-white mb-4">About This Project</h2>
                <p className="text-white/80 leading-relaxed mb-6">
                  {project.description}
                </p>
                
                <h3 className="text-xl font-semibold text-white mb-4">Key Features</h3>
                <div className="space-y-2">
                  {project.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                    >
                      <CheckCircle size={16} className="text-green-400 mt-1 flex-shrink-0" />
                      <span className="text-white/80">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                <h3 className="text-xl font-semibold text-white mb-4 mt-8">Challenges & Solutions</h3>
                <p className="text-white/80 leading-relaxed">
                  {project.challenges}
                </p>
              </div>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6"
            >
              {/* Project info */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Project Info</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Calendar size={16} className="text-blue-400" />
                    <div>
                      <span className="text-white/60 text-sm block">Duration</span>
                      <span className="text-white">{project.duration}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <User size={16} className="text-blue-400" />
                    <div>
                      <span className="text-white/60 text-sm block">Role</span>
                      <span className="text-white">{project.role}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Technologies */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <motion.span
                      key={tag}
                      className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white px-3 py-1 rounded-full text-sm border border-white/20"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;

import React from 'react';
import { ExternalLink, Smartphone, Monitor, BarChart3, Gamepad2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../hooks/useLanguage';
import { translations } from '../data/translations';

const Portfolio: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const projects = [
    {
      key: 'ecommerce',
      icon: Monitor,
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React', 'Node.js', 'Stripe'],
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      key: 'restaurant',
      icon: Smartphone,
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React Native', 'Firebase', 'Maps API'],
      gradient: 'from-green-500 to-teal-600'
    },
    {
      key: 'dashboard',
      icon: BarChart3,
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Vue.js', 'D3.js', 'PostgreSQL'],
      gradient: 'from-orange-500 to-red-600'
    },
    {
      key: 'game',
      icon: Gamepad2,
      image: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Three.js', 'WebGL', 'TypeScript'],
      gradient: 'from-purple-500 to-pink-600'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-br from-gray-50 to-purple-50 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-r from-blue-200/20 to-purple-200/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-10 left-10 w-40 h-40 bg-gradient-to-r from-green-200/20 to-teal-200/20 rounded-full blur-xl"
        />
      </div>

      {/* Section Divider */}
      <div className="absolute top-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 fill-white">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"></path>
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {t.portfolio.title}
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {t.portfolio.subtitle}
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map(({ key, icon: Icon, image, technologies, gradient }) => (
            <motion.div
              key={key}
              variants={itemVariants}
              className="group relative"
            >
              <motion.div
                className="relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
                whileHover={{ 
                  y: -10,
                  rotateY: 5,
                  rotateX: 5,
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden">
                  <motion.img
                    src={image}
                    alt={t.portfolio.projects[key as keyof typeof t.portfolio.projects].title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                  
                  {/* Gradient Overlay */}
                  <motion.div 
                    className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-60`}
                    initial={{ opacity: 0.6 }}
                    whileHover={{ opacity: 0.3 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Project Icon */}
                  <motion.div 
                    className="absolute top-4 right-4 p-3 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Icon className="h-6 w-6 text-gray-700" />
                  </motion.div>

                  {/* View Project Button */}
                  <motion.div 
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ scale: 0.8 }}
                    whileHover={{ scale: 1 }}
                  >
                    <motion.button 
                      className="bg-white text-gray-900 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center space-x-2 shadow-xl"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span>{t.portfolio.viewProject}</span>
                    </motion.button>
                  </motion.div>
                </div>

                {/* Project Info */}
                <motion.div 
                  className="p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {t.portfolio.projects[key as keyof typeof t.portfolio.projects].title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {t.portfolio.projects[key as keyof typeof t.portfolio.projects].description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {technologies.map((tech, index) => (
                      <motion.span
                        key={tech}
                        className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-sm rounded-full font-medium"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom Section Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 fill-white transform rotate-180">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Portfolio;
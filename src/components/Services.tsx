import React from 'react';
import { 
  Code, 
  Smartphone, 
  Bot, 
  ShoppingCart, 
  Gamepad2, 
  Palette, 
  Video, 
  Search, 
  Database 
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../hooks/useLanguage';
import { translations } from '../data/translations';

const Services: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const services = [
    {
      icon: Code,
      key: 'web',
      color: 'from-blue-500 to-blue-600',
      shadowColor: 'shadow-blue-500/25'
    },
    {
      icon: Smartphone,
      key: 'mobile',
      color: 'from-green-500 to-green-600',
      shadowColor: 'shadow-green-500/25'
    },
    {
      icon: Bot,
      key: 'ai',
      color: 'from-purple-500 to-purple-600',
      shadowColor: 'shadow-purple-500/25'
    },
    {
      icon: ShoppingCart,
      key: 'ecommerce',
      color: 'from-orange-500 to-orange-600',
      shadowColor: 'shadow-orange-500/25'
    },
    {
      icon: Gamepad2,
      key: 'games',
      color: 'from-red-500 to-red-600',
      shadowColor: 'shadow-red-500/25'
    },
    {
      icon: Palette,
      key: 'uiux',
      color: 'from-pink-500 to-pink-600',
      shadowColor: 'shadow-pink-500/25'
    },
    {
      icon: Video,
      key: 'content',
      color: 'from-indigo-500 to-indigo-600',
      shadowColor: 'shadow-indigo-500/25'
    },
    {
      icon: Search,
      key: 'seo',
      color: 'from-teal-500 to-teal-600',
      shadowColor: 'shadow-teal-500/25'
    },
    {
      icon: Database,
      key: 'database',
      color: 'from-gray-500 to-gray-600',
      shadowColor: 'shadow-gray-500/25'
    }
  ];

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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-200/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-teal-200/10 rounded-full blur-3xl"></div>
      </div>

      {/* Section Divider */}
      <div className="absolute top-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 fill-white">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"></path>
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
            {t.services.title}
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {t.services.subtitle}
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map(({ icon: Icon, key, color, shadowColor }) => (
            <motion.div
              key={key}
              variants={itemVariants}
              className="group relative"
            >
              <motion.div
                className={`p-8 bg-white rounded-2xl border border-gray-100 hover:border-gray-200 shadow-lg hover:shadow-2xl ${shadowColor} transition-all duration-500 transform hover:-translate-y-2 h-full`}
                whileHover={{ 
                  scale: 1.02,
                  rotateY: 5,
                  rotateX: 5,
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Icon */}
                <motion.div 
                  className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${color} text-white mb-6 shadow-lg ${shadowColor}`}
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 5,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <Icon className="h-8 w-8" />
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {t.services.items[key as keyof typeof t.services.items].title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {t.services.items[key as keyof typeof t.services.items].description}
                </p>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom Section Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 fill-white transform rotate-180">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Services;
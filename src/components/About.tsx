import React from 'react';
import { CheckCircle, User, Award, Target, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../hooks/useLanguage';
import { translations } from '../data/translations';

const About: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const stats = [
    { icon: Award, value: '50+', label: language === 'el' ? 'Επιτυχημένα Projects' : 'Successful Projects' },
    { icon: Target, value: '3+', label: language === 'el' ? 'Χρόνια Εμπειρίας' : 'Years Experience' },
    { icon: Zap, value: '24/7', label: language === 'el' ? 'Υποστήριξη' : 'Support' },
  ];

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 50,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 right-20 w-64 h-64 border border-blue-100 rounded-full opacity-30"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-20 left-20 w-48 h-48 border border-purple-100 rounded-full opacity-20"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image/Avatar Section */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="relative aspect-square bg-gradient-to-br from-blue-500 via-purple-600 to-teal-500 rounded-3xl flex items-center justify-center text-white shadow-2xl"
              whileHover={{ 
                scale: 1.02,
                rotateY: 10,
                rotateX: 5,
              }}
              transition={{ duration: 0.3 }}
            >
              <User className="h-32 w-32" />
              
              {/* Floating Elements */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-orange-500 rounded-2xl shadow-lg flex items-center justify-center"
              >
                <Award className="h-8 w-8 text-white" />
              </motion.div>
              
              <motion.div
                animate={{
                  y: [0, 10, 0],
                  rotate: [0, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute -bottom-4 -left-4 w-20 h-20 bg-green-500 rounded-2xl shadow-lg flex items-center justify-center"
              >
                <Zap className="h-10 w-10 text-white" />
              </motion.div>
            </motion.div>

            {/* Decorative Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-3xl transform rotate-6 -z-10"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-purple-200/20 to-teal-200/20 rounded-3xl transform -rotate-3 -z-20"></div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {t.about.title}
            </motion.h2>
            
            <motion.h3 
              className="text-xl text-blue-600 font-semibold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              {t.about.subtitle}
            </motion.h3>
            
            <motion.p 
              className="text-lg text-gray-600 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {t.about.description}
            </motion.p>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-3 gap-6 mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              {stats.map(({ icon: Icon, value, label }, index) => (
                <motion.div
                  key={index}
                  className="text-center p-4 bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <Icon className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">{value}</div>
                  <div className="text-sm text-gray-600">{label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* Experience/Skills */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                {t.about.experience}
              </h4>
              <div className="space-y-3">
                {t.about.experienceItems.map((item, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 5 }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.3 }}
                    >
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    </motion.div>
                    <span className="text-gray-700">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
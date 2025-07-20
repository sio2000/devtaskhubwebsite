import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send, Linkedin, Github, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../hooks/useLanguage';
import { translations } from '../data/translations';

const Contact: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Location',
      value: t.contact.info.location,
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      link: null
    },
    {
      icon: Phone,
      title: 'Phone',
      value: t.contact.info.phone,
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      link: 'tel:+306949719825'
    },
    {
      icon: Mail,
      title: 'Email',
      value: t.contact.info.email,
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
      link: 'mailto:info@devtaskhub.com'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 left-20 w-32 h-32 bg-blue-200/20 rounded-full blur-2xl"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-20 right-20 w-40 h-40 bg-purple-200/20 rounded-full blur-2xl"
        />
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
            {t.contact.title}
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {t.contact.subtitle}
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-500"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    {t.contact.form.name}
                  </label>
                  <motion.input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-gray-400"
                    whileFocus={{ scale: 1.02 }}
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    {t.contact.form.email}
                  </label>
                  <motion.input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-gray-400"
                    whileFocus={{ scale: 1.02 }}
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    {t.contact.form.message}
                  </label>
                  <motion.textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none hover:border-gray-400"
                    whileFocus={{ scale: 1.02 }}
                  />
                </motion.div>

                <motion.button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <Send className="h-5 w-5" />
                  <span>{t.contact.form.send}</span>
                </motion.button>
              </form>

              {/* Success Message */}
              <AnimatePresence>
                {isSubmitted && (
                  <motion.div 
                    className="mt-4 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center space-x-2"
                    initial={{ opacity: 0, scale: 0.9, y: -10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-green-800">{t.contact.success}</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>

          {/* Contact Information */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Contact Details */}
            <motion.div 
              className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-500"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="space-y-6">
                {contactInfo.map(({ icon: Icon, title, value, color, bgColor, link }, index) => (
                  <motion.div 
                    key={title}
                    className="flex items-center space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-colors duration-300"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 5 }}
                  >
                    <motion.div 
                      className={`flex-shrink-0 p-3 ${bgColor} rounded-xl`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Icon className={`h-6 w-6 bg-gradient-to-r ${color} bg-clip-text text-transparent`} />
                    </motion.div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{title}</h3>
                      {link ? (
                        <motion.a
                          href={link}
                          className={`bg-gradient-to-r ${color} bg-clip-text text-transparent hover:opacity-80 transition-opacity`}
                          whileHover={{ scale: 1.05 }}
                        >
                          {value}
                        </motion.a>
                      ) : (
                        <p className="text-gray-600">{value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-500"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="font-semibold text-gray-900 mb-6">Social Media</h3>
              <div className="flex space-x-4">
                <motion.a
                  href="https://linkedin.com/in/theocharis-siozos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-blue-50 hover:bg-blue-100 rounded-xl transition-colors duration-300 group"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Linkedin className="h-6 w-6 text-blue-600 group-hover:text-blue-700" />
                </motion.a>
                <motion.a
                  href="https://github.com/theocharis-siozos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors duration-300 group"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github className="h-6 w-6 text-gray-700 group-hover:text-gray-900" />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
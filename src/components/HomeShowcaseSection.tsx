import React from 'react';
import { motion } from 'framer-motion';
import { FaGem, FaBolt, FaBullseye, FaTools, FaRocket } from 'react-icons/fa';

const bullets = [
  {
    icon: <FaGem className="text-cyan-500 text-2xl md:text-3xl animate-pulse" />,
    text: 'Αριστοτεχνικός σχεδιασμός με προσοχή στη λεπτομέρεια',
  },
  {
    icon: <FaBolt className="text-yellow-400 text-2xl md:text-3xl animate-bounce" />,
    text: 'Ταχύτατη απόκριση και βελτιστοποίηση για κάθε συσκευή',
  },
  {
    icon: <FaBullseye className="text-pink-500 text-2xl md:text-3xl animate-pulse" />,
    text: 'Premium αποτέλεσμα σε λογικές τιμές',
  },
  {
    icon: <FaTools className="text-indigo-500 text-2xl md:text-3xl animate-spin-slow" />,
    text: 'Απόλυτη προσαρμογή στις ανάγκες του πελάτη',
  },
  {
    icon: <FaRocket className="text-blue-500 text-2xl md:text-3xl animate-bounce" />,
    text: 'Hosting, SEO και υποστήριξη — όλα σε ένα',
  },
];

const HomeShowcaseSection: React.FC = () => {
  return (
    <section
      className="relative py-24 md:py-32 bg-gradient-to-br from-blue-50 via-white to-indigo-50 overflow-hidden"
      aria-label="Εντυπωσιακές Ιστοσελίδες"
    >
      {/* Background gradients and glassmorphism shapes */}
      <motion.div
        className="absolute -top-32 -left-32 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl z-0"
        animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-200/30 rounded-full blur-2xl z-0"
        animate={{ scale: [1.1, 0.9, 1.1], rotate: [360, 180, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
      />
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        {/* Main Heading */}
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-700 to-indigo-600 bg-clip-text text-transparent mb-6 drop-shadow-lg"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Κατασκευάζουμε ιστοσελίδες που εντυπωσιάζουν.
          <motion.div
            className="h-1 w-32 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mx-auto mt-3 animate-pulse"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          />
        </motion.h2>
        {/* Subheading */}
        <motion.p
          className="text-lg md:text-2xl text-gray-700 max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Συνδυάζουμε αισθητική, ταχύτητα και λειτουργικότητα με προσιτό κόστος. Από απλές σελίδες παρουσίασης μέχρι δυναμικές web εφαρμογές.
        </motion.p>
        {/* Bullets */}
        <motion.ul
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 mb-12 w-full max-w-3xl mx-auto"
          initial="hidden"
          whileInView="visible"
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
          viewport={{ once: true }}
        >
          {bullets.map((b, i) => (
            <motion.li
              key={i}
              className="flex items-center gap-4 bg-white/80 backdrop-blur-lg rounded-xl shadow-lg border border-blue-100 px-6 py-5 text-lg font-medium text-gray-800 hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <span>{b.icon}</span>
              <span>{b.text}</span>
            </motion.li>
          ))}
        </motion.ul>
        {/* CTA Button */}
        <motion.a
          href="#portfolio"
          className="inline-block px-10 py-5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-lg shadow-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-400 hover:scale-105 active:scale-95"
          whileHover={{ scale: 1.07, boxShadow: '0 8px 32px 0 rgba(80, 80, 200, 0.18)' }}
          whileTap={{ scale: 0.98 }}
        >
          Δείτε Δείγματα Εργασιών
        </motion.a>
      </div>
    </section>
  );
};

export default HomeShowcaseSection; 
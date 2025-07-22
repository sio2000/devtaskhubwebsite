import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaCloud, FaDatabase, FaLock, FaChartLine, FaSyncAlt, FaCogs, FaClipboardList, FaTools, FaSearch, FaBolt, FaUsers, FaBuilding, FaChevronLeft, FaChevronRight, FaCheckCircle, FaHome } from 'react-icons/fa';
import { useLanguage } from '../hooks/useLanguage';
// import cloudLottie from '../assets/lottie-cloud.json';
const cloudLottie = {};
const hoverSfx = '';
const clickSfx = '';
// @ts-ignore: No types for aos
import AOS from 'aos';
import 'aos/dist/aos.css';

function playSound(src: string) {
  if (!src) return;
  const audio = new Audio(src);
  audio.volume = 0.15;
  audio.play();
}

const services = [
  {
    icon: <FaCloud className="text-blue-500 text-3xl" />,
    gr: 'Ρύθμιση Cloud Υποδομών',
    en: 'Cloud Infrastructure Setup',
  },
  {
    icon: <FaDatabase className="text-purple-500 text-3xl" />,
    gr: 'Βάσεις Δεδομένων SQL & NoSQL',
    en: 'SQL & NoSQL Database Management',
  },
  {
    icon: <FaLock className="text-pink-500 text-3xl" />,
    gr: 'Ασφάλεια Δεδομένων & Backup',
    en: 'Data Security & Backup Solutions',
  },
  {
    icon: <FaChartLine className="text-cyan-500 text-3xl" />,
    gr: 'Κλιμάκωση & Απόδοση',
    en: 'Scalability & Performance Optimization',
  },
  {
    icon: <FaSyncAlt className="text-green-500 text-3xl" />,
    gr: 'Μεταφορά σε Cloud',
    en: 'Cloud Migration',
  },
  {
    icon: <FaCogs className="text-yellow-500 text-3xl" />,
    gr: 'DevOps & Αυτοματισμοί',
    en: 'DevOps & Automation',
  },
];

const workflow = [
  {
    icon: <FaClipboardList className="text-blue-500 text-2xl" />,
    gr: 'Αξιολόγηση Αναγκών',
    en: 'Needs Assessment',
  },
  {
    icon: <FaCloud className="text-purple-500 text-2xl" />,
    gr: 'Σχεδιασμός Υποδομής',
    en: 'Infrastructure Design',
  },
  {
    icon: <FaTools className="text-pink-500 text-2xl" />,
    gr: 'Υλοποίηση & Παραμετροποίηση',
    en: 'Implementation & Configuration',
  },
  {
    icon: <FaSearch className="text-cyan-500 text-2xl" />,
    gr: 'Έλεγχος Ασφαλείας',
    en: 'Security Auditing',
  },
  {
    icon: <FaBolt className="text-green-500 text-2xl" />,
    gr: 'Παρακολούθηση & Υποστήριξη',
    en: 'Monitoring & Support',
  },
];

const clients = [
  {
    icon: <FaBuilding className="text-blue-500 text-3xl" />,
    gr: 'Επιχειρήσεις με μεγάλες ανάγκες δεδομένων',
    en: 'Businesses with large data needs',
  },
  {
    icon: <FaUsers className="text-purple-500 text-3xl" />,
    gr: 'Startups που απαιτούν ευέλικτες λύσεις',
    en: 'Startups needing flexible solutions',
  },
  {
    icon: <FaCogs className="text-pink-500 text-3xl" />,
    gr: 'Προγραμματιστές & DevOps teams',
    en: 'Developers & DevOps teams',
  },
];

const whyUs = [
  {
    gr: 'Εμπειρία σε cloud platforms (AWS, Azure, GCP)',
    en: 'Experience with AWS, Azure, GCP',
  },
  {
    gr: 'Ασφαλείς & αξιόπιστες υλοποιήσεις',
    en: 'Secure & reliable implementations',
  },
  {
    gr: 'Προσαρμογή στις ανάγκες σας',
    en: 'Custom-tailored solutions',
  },
  {
    gr: 'Υποστήριξη 24/7',
    en: '24/7 Support',
  },
  {
    gr: 'Συνεχής βελτιστοποίηση απόδοσης',
    en: 'Continuous performance tuning',
  },
];

export default function DatabaseCloudInfrastructurePage() {
  const { language, toggleLanguage } = useLanguage();
  useEffect(() => { AOS.init({ duration: 900, once: true }); }, []);
  return (
    <div className="bg-gradient-to-br from-white via-blue-50 to-gray-50 min-h-screen text-gray-900 font-sans">
      {/* Sticky Language Toggle */}
      <div className="fixed top-6 right-6 z-50">
        <button onClick={toggleLanguage} className="bg-white/90 border border-blue-100 px-4 py-2 rounded-full shadow hover:bg-blue-50 font-semibold text-blue-700 transition-all duration-200">
          {language === 'el' ? 'EN' : 'GR'}
        </button>
      </div>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pb-10 select-none">
        {/* Animated Background */}
        <motion.div className="absolute inset-0 z-0 pointer-events-none">
          {["Cloud", "DB", "SQL", "NoSQL", "AWS", "Azure", "GCP", "Scale", "Secure", "Infra"].map((kw, i) => (
            <motion.div
              key={kw}
              className="absolute z-10 opacity-20 text-lg md:text-2xl font-bold text-blue-400"
              style={{
                top: `${10 + 60 * Math.sin((i / 10) * 2 * Math.PI)}%`,
                left: `${10 + 80 * Math.cos((i / 10) * 2 * Math.PI)}%`,
                filter: 'drop-shadow(0 4px 24px rgba(80,80,200,0.10))',
              }}
              animate={{ y: [0, i % 2 === 0 ? 20 : -20, 0] }}
              transition={{ duration: 7 + i, repeat: Infinity, ease: 'easeInOut' }}
            >
              {kw}
            </motion.div>
          ))}
        </motion.div>
        {/* Hero Content */}
        <motion.div className="relative z-20 max-w-3xl mx-auto px-4 py-32 text-center flex flex-col items-center">
          <motion.h1 className="text-4xl md:text-5xl font-extrabold mb-6 drop-shadow-lg tracking-tight bg-gradient-to-r from-blue-700 to-gray-600 bg-clip-text text-transparent" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} style={{ fontFamily: "'Poppins', 'Roboto', 'Inter', sans-serif" }}>
            {language === 'el' ? 'Βάσεις Δεδομένων & Cloud Υποδομές' : 'Database & Cloud Infrastructure'}
          </motion.h1>
          <motion.p className="text-xl md:text-2xl text-gray-700 mb-10 font-medium max-w-2xl mx-auto" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}>
            {language === 'el' ? 'Διαχειρίζομαι βάσεις δεδομένων και υλοποιώ ασφαλείς, επεκτάσιμες cloud-based λύσεις.' : 'I manage databases and implement secure, scalable cloud-based solutions.'}
          </motion.p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <motion.button className="inline-block px-10 py-4 bg-gradient-to-r from-blue-600 to-gray-400 text-white rounded-full font-bold text-lg shadow-3xl border-2 border-transparent hover:border-blue-400 hover:shadow-[0_0_32px_0_#a78bfa] focus:outline-none focus:ring-2 focus:ring-blue-400 animate-fade-in flex items-center gap-2 relative overflow-hidden" whileHover={{ scale: 1.08, boxShadow: '0 0 32px 0 #a78bfa', filter: 'brightness(1.1)', borderColor: '#a78bfa' }} whileTap={{ scale: 0.97 }} onMouseEnter={() => playSound(hoverSfx)} onClick={() => { window.location.href = '/contactme'; }}><span className="relative z-10">{language === 'el' ? 'Ζητήστε Προσφορά' : 'Request a Quote'}</span></motion.button>
            <motion.button className="inline-block px-10 py-4 bg-gradient-to-r from-gray-400 to-blue-600 text-white rounded-full font-bold text-lg shadow-3xl border-2 border-transparent hover:border-gray-400 hover:shadow-[0_0_32px_0_#a78bfa] focus:outline-none focus:ring-2 focus:ring-blue-400 animate-fade-in flex items-center gap-2 relative overflow-hidden" whileHover={{ scale: 1.08, boxShadow: '0 0 32px 0 #a78bfa', filter: 'brightness(1.1)', borderColor: '#a78bfa' }} whileTap={{ scale: 0.97 }} onMouseEnter={() => playSound(hoverSfx)} onClick={() => { document.getElementById('services-section')?.scrollIntoView({ behavior: 'smooth' }); }}><span className="relative z-10">{language === 'el' ? 'Περισσότερα' : 'Learn More'}</span></motion.button>
          </div>
        </motion.div>
      </section>

      {/* Our Services */}
      <section id="services-section" className="max-w-7xl mx-auto py-24 px-4">
        <motion.h2 className="text-3xl md:text-4xl font-extrabold text-blue-700 mb-12 text-center bg-gradient-to-r from-blue-500 to-gray-500 bg-clip-text text-transparent drop-shadow-lg">{language === 'el' ? 'Οι Υπηρεσίες Μας' : 'Our Services'}</motion.h2>
        <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}>
          {services.map((s, idx) => (
            <motion.div key={s.gr} className="group bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl border border-blue-100/40 p-10 flex flex-col items-center text-center cursor-pointer transition-all duration-300 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-blue-200 relative overflow-hidden" initial={{ opacity: 0, y: 40, scale: 0.97 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} whileHover={{ scale: 1.08, boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.25)' }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.07 }} onMouseEnter={() => playSound(hoverSfx)} onClick={() => playSound(clickSfx)}><div className="mb-6 flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-blue-100 to-gray-100 shadow-inner group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 border-4 border-blue-200 group-hover:border-gray-300">{s.icon}</div><h4 className="text-xl font-bold text-blue-900 mb-2 group-hover:text-blue-700 transition-colors duration-300 tracking-tight">{language === 'el' ? s.gr : s.en}</h4></motion.div>
          ))}
        </motion.div>
      </section>

      {/* How We Work */}
      <section className="max-w-7xl mx-auto py-24 px-4">
        <motion.h2 className="text-3xl md:text-4xl font-extrabold text-blue-700 mb-12 text-center bg-gradient-to-r from-blue-500 to-gray-500 bg-clip-text text-transparent drop-shadow-lg">{language === 'el' ? 'Πώς Δουλεύουμε' : 'How We Work'}</motion.h2>
        <motion.div className="flex flex-col md:flex-row justify-center items-center gap-10" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}>
          {workflow.map((step, idx) => (
            <motion.div key={step.gr} className="flex flex-col items-center bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl border border-blue-100/40 p-10 group hover:shadow-2xl transition-all duration-300 relative overflow-hidden min-w-[180px]" initial={{ opacity: 0, y: 40, scale: 0.97 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} whileHover={{ scale: 1.08 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.07 }}><div className="mb-4 flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-blue-100 to-gray-100 shadow-inner group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 border-4 border-blue-200 group-hover:border-gray-300">{step.icon}</div><h4 className="text-base font-bold text-blue-900 mb-2 group-hover:text-blue-500 transition-colors duration-300 tracking-tight">{language === 'el' ? step.gr : step.en}</h4>{idx < workflow.length - 1 && <div className="w-1 h-10 bg-gradient-to-b from-blue-300 to-gray-200 mx-auto my-2 rounded-full" />}</motion.div>
          ))}
        </motion.div>
      </section>

      {/* Who We Serve */}
      <section className="max-w-7xl mx-auto py-24 px-4">
        <motion.h2 className="text-3xl md:text-4xl font-extrabold text-blue-700 mb-12 text-center bg-gradient-to-r from-blue-500 to-gray-500 bg-clip-text text-transparent drop-shadow-lg">{language === 'el' ? 'Σε Ποιους Απευθυνόμαστε' : 'Who We Serve'}</motion.h2>
        <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}>
          {clients.map((c, idx) => (
            <motion.div key={c.gr} className="group bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl border border-blue-100/40 p-10 flex flex-col items-center text-center cursor-pointer transition-all duration-300 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-blue-200 relative overflow-hidden" initial={{ opacity: 0, y: 40, scale: 0.97 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} whileHover={{ scale: 1.08, boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.25)' }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.07 }} onMouseEnter={() => playSound(hoverSfx)} onClick={() => playSound(clickSfx)}><div className="mb-6 flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-blue-100 to-gray-100 shadow-inner group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 border-4 border-blue-200 group-hover:border-gray-300">{c.icon}</div><h4 className="text-xl font-bold text-blue-900 mb-2 group-hover:text-blue-700 transition-colors duration-300 tracking-tight">{language === 'el' ? c.gr : c.en}</h4></motion.div>
          ))}
        </motion.div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-7xl mx-auto py-24 px-4">
        <motion.h2 className="text-3xl md:text-4xl font-extrabold text-blue-700 mb-12 text-center bg-gradient-to-r from-blue-500 to-gray-500 bg-clip-text text-transparent drop-shadow-lg">{language === 'el' ? 'Γιατί να Επιλέξετε Εμάς;' : 'Why Choose Us?'}</motion.h2>
        <motion.ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.10 } } }}>
          {whyUs.map((w, idx) => (
            <motion.li key={w.gr} className="flex items-center gap-4 bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl border border-blue-100/40 p-6 text-lg font-medium text-gray-800 hover:shadow-2xl transition-all duration-300" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} whileHover={{ scale: 1.04 }} viewport={{ once: true }}><FaCheckCircle className="text-green-500 text-2xl flex-shrink-0" /><span>{language === 'el' ? w.gr : w.en}</span></motion.li>
          ))}
        </motion.ul>
      </section>

      {/* Contact Us */}
      <section className="max-w-7xl mx-auto py-24 px-4 flex flex-col items-center text-center">
        <motion.div className="relative bg-gradient-to-br from-blue-100 via-white to-gray-100/80 backdrop-blur-lg rounded-3xl shadow-2xl border border-blue-100/40 p-12 flex flex-col items-center" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-6 tracking-tight">{language === 'el' ? 'Χρειάζεστε ασφαλείς, επεκτάσιμες λύσεις βάσεων δεδομένων και cloud; Επικοινωνήστε μαζί μας!' : 'Need secure, scalable database and cloud solutions? Contact us!'}</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-6">
            <motion.button className="inline-block px-10 py-4 bg-gradient-to-r from-blue-600 to-gray-400 text-white rounded-full font-bold text-lg shadow-3xl border-2 border-transparent hover:border-blue-400 hover:shadow-[0_0_32px_0_#a78bfa] focus:outline-none focus:ring-2 focus:ring-blue-400 animate-fade-in flex items-center gap-2 relative overflow-hidden" whileHover={{ scale: 1.08, boxShadow: '0 0 32px 0 #a78bfa', filter: 'brightness(1.1)', borderColor: '#a78bfa' }} whileTap={{ scale: 0.97 }} onMouseEnter={() => playSound(hoverSfx)} onClick={() => { window.location.href = '/contactme'; }}><span className="relative z-10">{language === 'el' ? 'Ζητήστε Προσφορά' : 'Request a Quote'}</span></motion.button>
            <motion.button className="inline-block px-10 py-4 bg-gradient-to-r from-gray-400 to-blue-600 text-white rounded-full font-bold text-lg shadow-3xl border-2 border-transparent hover:border-gray-400 hover:shadow-[0_0_32px_0_#a78bfa] focus:outline-none focus:ring-2 focus:ring-blue-400 animate-fade-in flex items-center gap-2 relative overflow-hidden" whileHover={{ scale: 1.08, boxShadow: '0 0 32px 0 #a78bfa', filter: 'brightness(1.1)', borderColor: '#a78bfa' }} whileTap={{ scale: 0.97 }} onMouseEnter={() => playSound(hoverSfx)} onClick={() => { window.location.href = '/'; }}><FaHome className="mr-2" />{language === 'el' ? 'Επιστροφή στην Αρχική' : 'Back to Home'}</motion.button>
          </div>
        </motion.div>
      </section>
    </div>
  );
} 
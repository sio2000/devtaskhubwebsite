import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaFacebook, FaTiktok, FaLinkedin, FaYoutube, FaTwitter, FaPinterest, FaRegLightbulb, FaRegImages, FaBullhorn, FaUsers, FaChartBar, FaRobot, FaChevronRight, FaChevronLeft, FaCheckCircle, FaRocket, FaChartLine, FaMagic, FaVideo } from 'react-icons/fa';
// import socialLottie from '../assets/lottie-socialmedia.json';
const socialLottie = {};
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
  { icon: <FaRegLightbulb className="text-yellow-400 text-3xl" />, title: 'Στρατηγική Περιεχομένου & Προγραμματισμός', desc: 'Αναλυτική στρατηγική, θεματολογία, ημερολόγιο και προγραμματισμένες αναρτήσεις.' },
  { icon: <FaRegImages className="text-pink-400 text-3xl" />, title: 'Δημιουργία Visual Περιεχομένου', desc: 'Graphics, Reels, Stories, videos και φωτογραφίες που ξεχωρίζουν.' },
  { icon: <FaBullhorn className="text-blue-400 text-3xl" />, title: 'Social Ads', desc: 'Meta Ads, TikTok, Instagram, LinkedIn — διαφημίσεις που φέρνουν αποτελέσματα.' },
  { icon: <FaUsers className="text-green-400 text-3xl" />, title: 'Community Management', desc: 'Αλληλεπίδραση, απαντήσεις, διαχείριση σχολίων & DM.' },
  { icon: <FaChartBar className="text-purple-400 text-3xl" />, title: 'Reports & Insights', desc: 'Αναλυτικά reports, στατιστικά και προτάσεις βελτίωσης.' },
  { icon: <FaRobot className="text-cyan-400 text-3xl" />, title: 'AI-Enhanced Content', desc: 'Χρήση AI για ιδέες, captions, hashtags και βελτιστοποίηση.' },
];

// Επαναφορά του platforms array όπως ήταν:
const platforms = [
  { icon: <FaInstagram className="text-pink-500 text-4xl" />, name: 'Instagram' },
  { icon: <FaFacebook className="text-blue-600 text-4xl" />, name: 'Facebook' },
  { icon: <FaTiktok className="text-black text-4xl" />, name: 'TikTok' },
  { icon: <FaLinkedin className="text-blue-700 text-4xl" />, name: 'LinkedIn' },
  { icon: <FaYoutube className="text-red-500 text-4xl" />, name: 'YouTube' },
  { icon: <FaTwitter className="text-blue-400 text-4xl" />, name: 'Twitter' },
  { icon: <FaPinterest className="text-red-400 text-4xl" />, name: 'Pinterest' },
];

const samples = [
  { img: '/src/assets/social1.jpg', title: 'Instagram Campaign', desc: 'Δημιουργία καμπάνιας με Reels & Stories.' },
  { img: '/src/assets/social2.jpg', title: 'Facebook Ads', desc: 'Στοχευμένες διαφημίσεις για αύξηση πωλήσεων.' },
  { img: '/src/assets/social3.jpg', title: 'TikTok Viral', desc: 'Viral video με πάνω από 1M views.' },
  { img: '/src/assets/social4.jpg', title: 'LinkedIn B2B', desc: 'Επαγγελματικό περιεχόμενο για B2B κοινό.' },
];

const stats = [
  { icon: <FaRocket className="text-pink-400 text-4xl" />, label: '+450% engagement', desc: 'Αύξηση αλληλεπίδρασης' },
  { icon: <FaChartLine className="text-blue-400 text-4xl" />, label: '+35% πωλήσεις', desc: 'Από Social Ads' },
  { icon: <FaMagic className="text-purple-400 text-4xl" />, label: '5M+ reach', desc: 'Μηνιαία απήχηση' },
];

const workflow = [
  { icon: <FaCheckCircle className="text-blue-500 text-2xl" />, title: 'Ανάλυση Προφίλ', desc: 'Έλεγχος παρουσίας & στόχων.' },
  { icon: <FaRegLightbulb className="text-yellow-400 text-2xl" />, title: 'Δημιουργία Στρατηγικής', desc: 'Σχεδιασμός πλάνου & θεματολογίας.' },
  { icon: <FaRegImages className="text-pink-400 text-2xl" />, title: 'Δημιουργικό & Περιεχόμενο', desc: 'Παραγωγή visuals, videos, captions.' },
  { icon: <FaUsers className="text-green-400 text-2xl" />, title: 'Ανάρτηση & Engagement', desc: 'Δημοσίευση & διαχείριση κοινού.' },
  { icon: <FaChartBar className="text-purple-400 text-2xl" />, title: 'Analytics & Βελτιστοποίηση', desc: 'Αναφορές & προτάσεις.' },
];

export default function SocialMediaManagementPage() {
  const [currentSample, setCurrentSample] = useState(0);
  useEffect(() => { AOS.init({ duration: 900, once: true }); }, []);
  // Typing effect για το hero
  const [typed, setTyped] = useState('');
  useEffect(() => {
    const full = 'Διαχείριση Social Media';
    let i = 0;
    setTyped('');
    const interval = setInterval(() => {
      setTyped(full.slice(0, i + 1));
      i++;
      if (i === full.length) clearInterval(interval);
    }, 60);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="bg-gradient-to-br from-white via-pink-50 to-blue-50 min-h-screen text-gray-900 font-sans">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pb-10 select-none">
        {/* Floating Social Icons */}
        <motion.div className="absolute inset-0 z-0 pointer-events-none">
          {platforms.map((p, i) => (
            <motion.div
              key={p.name}
              className={`absolute z-10 opacity-20 text-6xl`}
              style={{
                top: `${10 + 60 * Math.sin((i / platforms.length) * 2 * Math.PI)}%`,
                left: `${10 + 80 * Math.cos((i / platforms.length) * 2 * Math.PI)}%`,
                filter: 'drop-shadow(0 4px 24px rgba(200,80,200,0.10))',
              }}
              animate={{ y: [0, i % 2 === 0 ? 20 : -20, 0] }}
              transition={{ duration: 7 + i, repeat: Infinity, ease: 'easeInOut' }}
            >
              {p.icon}
            </motion.div>
          ))}
        </motion.div>
        {/* Hero Content */}
        <motion.div className="relative z-20 max-w-3xl mx-auto px-4 py-32 text-center flex flex-col items-center">
          <motion.h1 className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-lg tracking-tight bg-gradient-to-r from-pink-600 to-blue-600 bg-clip-text text-transparent" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} style={{ fontFamily: "'IBM Plex Sans', 'Inter', sans-serif" }}>
            {typed}
          </motion.h1>
          <motion.p className="text-xl md:text-2xl text-gray-700 mb-10 font-medium max-w-2xl mx-auto" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}>
            Στρατηγική & καθημερινή διαχείριση social προφίλ για επαγγελματίες και επιχειρήσεις. Παρέχουμε δημιουργικό περιεχόμενο, προγραμματισμένες δημοσιεύσεις, στρατηγική, κοινότητα, analytics και διαφήμιση — όλα με σκοπό την ανάπτυξη του brand σας και αύξηση της αλληλεπίδρασης.
          </motion.p>
          <motion.button className="inline-block px-12 py-5 bg-gradient-to-r from-pink-600 to-blue-400 text-white rounded-full font-bold text-xl shadow-3xl border-2 border-transparent hover:border-pink-400 hover:shadow-[0_0_32px_0_#a78bfa] focus:outline-none focus:ring-2 focus:ring-pink-400 animate-fade-in flex items-center gap-2 relative overflow-hidden" whileHover={{ scale: 1.08, boxShadow: '0 0 32px 0 #a78bfa', filter: 'brightness(1.1)', borderColor: '#a78bfa' }} whileTap={{ scale: 0.97 }} onMouseEnter={() => playSound(hoverSfx)} onClick={() => { window.location.href = '/contactme'; }}><span className="relative z-10">Ζητήστε Πρόταση</span></motion.button>
        </motion.div>
      </section>

      {/* Υπηρεσίες που προσφέρουμε */}
      <section className="max-w-7xl mx-auto py-24 px-4">
        <motion.h2 className="text-3xl md:text-4xl font-extrabold text-pink-700 mb-12 text-center bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent drop-shadow-lg">Υπηρεσίες που προσφέρουμε</motion.h2>
        <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}>
          {services.map((s, idx) => (
            <motion.div key={s.title} className="group bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl border border-pink-100/40 p-10 flex flex-col items-center text-center cursor-pointer transition-all duration-300 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-pink-200 relative overflow-hidden" initial={{ opacity: 0, y: 40, scale: 0.97 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} whileHover={{ scale: 1.08, boxShadow: '0 8px 32px 0 rgba(255, 80, 200, 0.18)' }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.07 }} onMouseEnter={() => playSound(hoverSfx)} onClick={() => playSound(clickSfx)}><div className="mb-6 flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-pink-100 to-blue-100 shadow-inner group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 border-4 border-pink-200 group-hover:border-blue-300">{s.icon}</div><h4 className="text-xl font-bold text-pink-900 mb-2 group-hover:text-pink-700 transition-colors duration-300 tracking-tight">{s.title}</h4><p className="text-gray-600 mb-6 text-base leading-relaxed">{s.desc}</p><motion.div className="absolute inset-0 rounded-3xl pointer-events-none border-2 border-transparent group-hover:border-pink-400 group-focus:border-pink-400 transition-all duration-300" initial={{ opacity: 0 }} whileHover={{ opacity: 1 }} transition={{ duration: 0.3 }} /></motion.div>
          ))}
        </motion.div>
      </section>

      {/* Πλατφόρμες που υποστηρίζουμε */}
      <section className="max-w-7xl mx-auto py-24 px-4">
        <motion.h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-12 text-center bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent drop-shadow-lg">Πλατφόρμες που υποστηρίζουμε</motion.h2>
        <motion.div className="flex flex-wrap justify-center gap-10 mb-12" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}>
          {platforms.map((p, idx) => (
            <motion.div key={p.name} className="flex flex-col items-center gap-2 bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border border-blue-100/40 group" initial={{ opacity: 0, y: 30, scale: 0.95 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} whileHover={{ scale: 1.1, boxShadow: '0 0 24px 0 #a5b4fc' }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.1 }}>
              {p.icon}
              <span className="text-base text-blue-900 font-semibold mt-2">{p.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Δείγματα Δουλειάς / Case Studies */}
      <section className="max-w-7xl mx-auto py-24 px-4">
        <motion.h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-12 text-center bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent drop-shadow-lg">Social Media Trends & Insights</motion.h2>
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}>
          {[
            {
              title: 'Αύξηση Video Content',
              desc: 'Το video content κυριαρχεί στα social media, αυξάνοντας το engagement και την απήχηση των brands.',
              icon: <FaVideo className="text-orange-400 text-4xl mb-4" />,
            },
            {
              title: 'Stories & Reels',
              desc: 'Τα Stories και τα Reels προσφέρουν άμεση αλληλεπίδραση και δημιουργούν πιστό κοινό.',
              icon: <FaRegImages className="text-pink-400 text-4xl mb-4" />,
            },
            {
              title: 'AI & Automation',
              desc: 'Η χρήση AI για προγραμματισμό, ανάλυση και αυτοματοποίηση περιεχομένου γίνεται πλέον απαραίτητη.',
              icon: <FaRobot className="text-blue-400 text-4xl mb-4" />,
            },
            {
              title: 'Micro-Influencers',
              desc: 'Οι micro-influencers φέρνουν αυθεντικότητα και υψηλότερο engagement σε εξειδικευμένα κοινά.',
              icon: <FaUsers className="text-emerald-400 text-4xl mb-4" />,
            },
            {
              title: 'Analytics & Insights',
              desc: 'Η ανάλυση δεδομένων οδηγεί σε καλύτερες αποφάσεις και βελτιστοποίηση στρατηγικής.',
              icon: <FaChartBar className="text-purple-400 text-4xl mb-4" />,
            },
            {
              title: 'Προσωποποιημένο Περιεχόμενο',
              desc: 'Το προσωποποιημένο περιεχόμενο αυξάνει την αλληλεπίδραση και τη σύνδεση με το brand.',
              icon: <FaMagic className="text-cyan-400 text-4xl mb-4" />,
            },
          ].map((trend, idx) => (
            <motion.div key={trend.title} className="bg-white/90 rounded-3xl shadow-xl border border-blue-100/40 p-10 flex flex-col items-center text-center hover:shadow-2xl transition-all duration-300" initial={{ opacity: 0, y: 40, scale: 0.97 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} whileHover={{ scale: 1.08 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.07 }}>
              {trend.icon}
              <h4 className="text-xl font-bold text-blue-900 mb-2">{trend.title}</h4>
              <p className="text-gray-600 mb-4 text-base leading-relaxed">{trend.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Πως δουλεύουμε / Ροή Εργασιών */}
      <section className="max-w-7xl mx-auto py-24 px-4">
        <motion.h2 className="text-3xl md:text-4xl font-extrabold text-pink-700 mb-12 text-center bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent drop-shadow-lg">Πως δουλεύουμε</motion.h2>
        <motion.div className="flex flex-col md:flex-row justify-center items-center gap-10" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}>
          {workflow.map((step, idx) => (
            <motion.div key={step.title} className="flex flex-col items-center bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl border border-pink-100/40 p-10 group hover:shadow-2xl transition-all duration-300 relative overflow-hidden min-w-[180px]" initial={{ opacity: 0, y: 40, scale: 0.97 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} whileHover={{ scale: 1.08 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.07 }}><div className="mb-4 flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-pink-100 to-blue-100 shadow-inner group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 border-4 border-pink-200 group-hover:border-blue-300">{step.icon}</div><h4 className="text-base font-bold text-pink-900 mb-2 group-hover:text-pink-500 transition-colors duration-300 tracking-tight">{step.title}</h4><p className="text-gray-600 mb-4 text-sm leading-relaxed">{step.desc}</p>{idx < workflow.length - 1 && <div className="w-1 h-10 bg-gradient-to-b from-pink-300 to-blue-200 mx-auto my-2 rounded-full" />}</motion.div>
          ))}
        </motion.div>
      </section>

      {/* Τελικό CTA */}
      <section className="max-w-7xl mx-auto py-24 px-4 flex flex-col items-center text-center">
        <motion.div className="relative bg-gradient-to-br from-pink-100 via-white to-blue-100/80 backdrop-blur-lg rounded-3xl shadow-2xl border border-pink-100/40 p-12 flex flex-col items-center" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h2 className="text-3xl md:text-4xl font-extrabold text-pink-900 mb-6 tracking-tight">Αναβαθμίστε τα social σας — Επικοινωνήστε τώρα.</h2>
          <motion.button className="inline-block px-12 py-5 bg-gradient-to-r from-pink-600 to-blue-400 text-white rounded-full font-bold text-xl shadow-3xl border-2 border-transparent hover:border-pink-400 hover:shadow-[0_0_32px_0_#a78bfa] focus:outline-none focus:ring-2 focus:ring-pink-400 animate-fade-in flex items-center gap-2 relative overflow-hidden mt-6" whileHover={{ scale: 1.08, boxShadow: '0 0 32px 0 #a78bfa', filter: 'brightness(1.1)', borderColor: '#a78bfa' }} whileTap={{ scale: 0.97 }} onMouseEnter={() => playSound(hoverSfx)} onClick={() => { window.location.href = '/contactme'; }}><span className="relative z-10">Ξεκινήστε Σήμερα</span></motion.button>
        </motion.div>
      </section>
    </div>
  );
} 
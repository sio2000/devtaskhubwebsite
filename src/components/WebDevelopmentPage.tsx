import React, { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { FaCode, FaMobileAlt, FaSearch, FaSyncAlt, FaCogs, FaCloud, FaPaintBrush, FaRocket } from 'react-icons/fa';
import { SiReact, SiNextdotjs, SiNodedotjs, SiTailwindcss, SiFigma, SiVercel } from 'react-icons/si';
import Lottie, { LottieRefCurrentProps } from 'lottie-react';
// import heroLottie from '../assets/lottie-webdev.json'; // Τοποθετήστε εδώ το Lottie JSON animation για το hero
// import ctaLottie from '../assets/lottie-cta.json'; // Τοποθετήστε εδώ το Lottie JSON animation για το CTA
const heroLottie = {};
const ctaLottie = {};
// import hoverSfx from '../assets/sounds/hover.mp3'; // Τοποθετήστε εδώ το ηχητικό hover
// import clickSfx from '../assets/sounds/click.mp3'; // Τοποθετήστε εδώ το ηχητικό click
// import successSfx from '../assets/sounds/success.mp3'; // Τοποθετήστε εδώ το ηχητικό success
const hoverSfx = '';
const clickSfx = '';
const successSfx = '';
// @ts-ignore: No types for aos
import AOS from 'aos';
import 'aos/dist/aos.css';
import gsap from 'gsap';
import codeImg from '../assets/code.jpg';

const floatingIcons = [
  { icon: <FaCode />, style: 'top-10 left-10 text-blue-400' },
  { icon: <FaMobileAlt />, style: 'top-1/2 left-4 text-pink-400' },
  { icon: <FaCogs />, style: 'top-20 right-16 text-purple-400' },
  { icon: <FaCloud />, style: 'bottom-10 left-1/3 text-cyan-400' },
  { icon: <FaPaintBrush />, style: 'bottom-16 right-10 text-yellow-400' },
  { icon: <FaRocket />, style: 'top-1/3 right-1/4 text-green-400' },
  { icon: <FaSearch />, style: 'bottom-1/4 left-1/4 text-pink-300' },
  { icon: <FaSyncAlt />, style: 'top-1/4 right-1/3 text-blue-300' },
  { icon: <FaCloud />, style: 'bottom-1/3 right-1/5 text-cyan-300' },
];

const features = [
  {
    icon: <FaPaintBrush className="text-blue-500 text-3xl" />,
    title: 'Εντυπωσιακό Design',
    desc: 'Η πρώτη εντύπωση μετράει. Αποκτήστε ιστοσελίδα που μαγνητίζει και ξεχωρίζει.'
  },
  {
    icon: <FaMobileAlt className="text-purple-500 text-3xl" />,
    title: 'Mobile-First Εμπειρία',
    desc: 'Απόλυτη απόδοση και ομορφιά σε κάθε συσκευή, για κάθε επισκέπτη.'
  },
  {
    icon: <FaSearch className="text-pink-500 text-3xl" />,
    title: 'SEO που Φέρνει Αποτελέσματα',
    desc: 'Ανεβείτε στην κορυφή της Google και αυξήστε τους πελάτες σας.'
  },
  {
    icon: <FaSyncAlt className="text-cyan-500 text-3xl" />,
    title: 'Συνεχής Υποστήριξη',
    desc: 'Είμαι δίπλα σας σε κάθε βήμα, με άμεση τεχνική υποστήριξη.'
  },
];

const techStack = [
  { icon: <SiReact className="text-blue-500 text-4xl" />, name: 'React' },
  { icon: <SiNextdotjs className="text-gray-900 text-4xl" />, name: 'Next.js' },
  { icon: <SiNodedotjs className="text-green-500 text-4xl" />, name: 'Node.js' },
  { icon: <SiTailwindcss className="text-cyan-500 text-4xl" />, name: 'Tailwind CSS' },
  { icon: <SiFigma className="text-pink-500 text-4xl" />, name: 'Figma' },
  { icon: <SiVercel className="text-black text-4xl" />, name: 'Vercel' },
];

const stats = [
  { label: 'Χρόνια εμπειρίας', value: 3, icon: <FaRocket className="text-purple-500 text-3xl" /> },
  { label: '100% Ικανοποίηση', value: 100, suffix: '%', icon: <FaCloud className="text-cyan-500 text-3xl" /> },
  { label: 'Υποστήριξη', value: 24, suffix: '/7', icon: <FaCogs className="text-pink-500 text-3xl" /> },
];

const unsplashHero = 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80';
const unsplashTech = 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80';
const unsplashWorkspace = 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=1200&q=80';

// const unsplashWhyMe = require('../assets/code.jpg');

function playSound(src: string) {
  const audio = new Audio(src);
  audio.volume = 0.18;
  audio.play();
}

export default function WebDevelopmentPage() {
  const lottieRef = useRef<LottieRefCurrentProps | null>(null);
  const [animatedStats, setAnimatedStats] = useState(stats.map(() => 0));
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const heroControls = useAnimation();

  useEffect(() => { AOS.init({ duration: 800, once: true }); }, []);

  // GSAP parallax effect for floating icons
  useEffect(() => {
    floatingIcons.forEach((_, i) => {
      gsap.to(`#float-icon-${i}`, {
        y: i % 2 === 0 ? 20 : -20,
        repeat: -1,
        yoyo: true,
        duration: 3 + i,
        ease: 'power1.inOut',
      });
    });
  }, []);

  // Animated counters for stats
  useEffect(() => {
    const timeouts: number[] = [];
    stats.forEach((b, i) => {
      timeouts.push(window.setTimeout(() => {
        let start = 0;
        const end = b.value;
        const duration = 1200;
        const step = Math.max(1, Math.ceil(end / 40));
        let current = 0;
        const interval = window.setInterval(() => {
          current += step;
          if (current >= end) {
            setAnimatedStats(prev => prev.map((v, idx) => idx === i ? end : v));
            clearInterval(interval);
          } else {
            setAnimatedStats(prev => prev.map((v, idx) => idx === i ? current : v));
          }
        }, duration / (end / step));
      }, 400 + i * 200));
    });
    return () => timeouts.forEach(clearTimeout);
  }, []);

  // Mouse parallax for hero
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMouse({ x: e.clientX, y: e.clientY });
      heroControls.start({
        x: (e.clientX - window.innerWidth / 2) / 30,
        y: (e.clientY - window.innerHeight / 2) / 30,
        transition: { type: 'spring', stiffness: 40, damping: 12 }
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [heroControls]);

  return (
    <div className="bg-gradient-to-br from-white via-blue-50 to-purple-50 min-h-screen text-gray-900 font-sans">
      {/* Hero Section (με Unsplash background) */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pb-10 select-none">
        {/* Animated Gradients/Particles */}
        <motion.div className="absolute inset-0 z-0 pointer-events-none">
          <motion.div
            className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-gradient-to-br from-blue-400/50 via-purple-400/40 to-white/0 rounded-full blur-3xl animate-spin-slow"
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
          />
          <motion.div
            className="absolute bottom-[-10%] right-[-10%] w-[32vw] h-[32vw] bg-gradient-to-br from-purple-400/50 via-blue-400/40 to-white/0 rounded-full blur-3xl animate-spin-slow"
            animate={{ rotate: -360 }}
            transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
          />
          {/* Soft particles */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/20 rounded-full blur-3xl"
            animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-white/20 rounded-full blur-3xl"
            animate={{ y: [0, 30, 0], rotate: [0, -5, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          />
        </motion.div>
        {/* Unsplash Hero Background */}
        <div className="absolute inset-0 w-full h-full z-0">
          <img src={unsplashTech} alt="Hero Background" className="w-full h-full object-cover object-center opacity-80" style={{mixBlendMode:'multiply'}} />
          <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-blue-50/80 to-purple-50/80" />
        </div>
        {/* Parallax Floating Icons */}
        {floatingIcons.map((f, i) => (
          <motion.div
            key={i}
            id={`float-icon-${i}`}
            className={`absolute z-10 text-5xl opacity-20 ${f.style}`}
            animate={{ y: [0, i % 2 === 0 ? 20 : -20, 0] }}
            transition={{ duration: 6 + i, repeat: Infinity, ease: 'easeInOut' }}
            style={{ filter: 'drop-shadow(0 4px 24px rgba(80,80,200,0.12))' }}
          >
            {f.icon}
          </motion.div>
        ))}
        {/* Hero Content */}
        <motion.div
          className="relative z-20 max-w-3xl mx-auto px-4 py-32 text-center flex flex-col items-center"
          animate={heroControls}
        >
          <motion.h1
            className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-lg tracking-tight bg-gradient-to-r from-blue-700 to-purple-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            style={{ fontFamily: "'IBM Plex Sans', 'Inter', sans-serif" }}
          >
            Κατασκευή Ιστοσελίδων που Εντυπωσιάζουν
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-gray-700 mb-10 font-medium max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Απογειώστε την επιχείρησή σας με μια ιστοσελίδα που ξεχωρίζει για την ταχύτητα, την αισθητική και την αποτελεσματικότητά της. Δημιουργώ premium web εμπειρίες που μετατρέπουν επισκέπτες σε πελάτες.
          </motion.p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button
              className="inline-block px-12 py-5 bg-gradient-to-r from-blue-600 to-purple-400 text-white rounded-full font-bold text-xl shadow-3xl border-2 border-transparent hover:border-blue-400 hover:shadow-[0_0_32px_0_#a78bfa] focus:outline-none focus:ring-2 focus:ring-blue-400 animate-fade-in flex items-center gap-2 relative overflow-hidden"
              whileHover={{ scale: 1.08, boxShadow: '0 0 32px 0 #a78bfa', filter: 'brightness(1.1)', borderColor: '#a78bfa' }}
              whileTap={{ scale: 0.97 }}
              onMouseEnter={() => playSound(hoverSfx)}
              onClick={() => { window.location.href = '/contactme'; }}
            >
              <span className="relative z-10">Ξεκινήστε το έργο σας</span>
            </motion.button>
            <motion.button
              className="inline-block px-12 py-5 bg-gradient-to-r from-purple-400 to-blue-600 text-white rounded-full font-bold text-xl shadow-3xl border-2 border-transparent hover:border-purple-400 hover:shadow-[0_0_32px_0_#a78bfa] focus:outline-none focus:ring-2 focus:ring-purple-400 animate-fade-in flex items-center gap-2 relative overflow-hidden"
              whileHover={{ scale: 1.08, boxShadow: '0 0 32px 0 #a78bfa', filter: 'brightness(1.1)', borderColor: '#a78bfa' }}
              whileTap={{ scale: 0.97 }}
              onMouseEnter={() => playSound(hoverSfx)}
              onClick={() => {
                const showcase = document.getElementById('showcase-section');
                if (showcase) showcase.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <span className="relative z-10">Δείγματα Έργων</span>
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* Γιατί να επιλέξετε εμένα (βελτιωμένο UI) */}
      <section className="max-w-5xl mx-auto py-16 px-4 text-center flex flex-col md:flex-row items-center gap-10">
        <motion.div className="relative w-full md:w-1/2 flex-shrink-0 flex items-center justify-center">
          <img src={codeImg} alt="Γιατί να επιλέξετε εμένα" className="rounded-3xl shadow-2xl object-cover w-full h-80 md:h-96" style={{objectPosition:'center'}} />
        </motion.div>
        <motion.div className="relative bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl border border-blue-100/40 p-10 flex flex-col items-center w-full md:w-1/2" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <motion.h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent drop-shadow-lg">Γιατί να επιλέξετε εμένα;</motion.h2>
          <motion.p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-2">Εξειδικεύομαι στη δημιουργία μοντέρνων, γρήγορων και αποδοτικών ιστοσελίδων που προσαρμόζονται απόλυτα στις ανάγκες σας.</motion.p>
          <motion.p className="text-lg md:text-xl text-blue-700 max-w-2xl mx-auto font-semibold">Από το πρώτο brief μέχρι την τελική παράδοση, προσφέρω <span className='bg-gradient-to-r from-blue-200 to-purple-200 px-2 rounded'>προσωπική υποστήριξη</span>, <span className='bg-gradient-to-r from-blue-100 to-purple-100 px-2 rounded'>διαφάνεια</span> και <span className='bg-gradient-to-r from-blue-300 to-purple-300 px-2 rounded'>κορυφαία ποιότητα</span>.</motion.p>
        </motion.div>
      </section>

      {/* Χαρακτηριστικά & Οφέλη (βελτιωμένο UI) */}
      <section className="max-w-7xl mx-auto py-24 px-4">
        <motion.h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-12 text-center bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent drop-shadow-lg">Χαρακτηριστικά & Οφέλη</motion.h2>
        <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}>
          {features.map((f, idx) => (
            <motion.div
              key={f.title}
              className="group bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl border border-blue-100/40 p-10 flex flex-col items-center text-center cursor-pointer transition-all duration-300 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-blue-200 relative overflow-hidden"
              initial={{ opacity: 0, y: 40, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ scale: 1.08, boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.25)' }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.07 }}
              onMouseEnter={() => playSound(hoverSfx)}
              onClick={() => playSound(clickSfx)}
            >
              <div className="mb-6 flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 shadow-inner group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 border-4 border-blue-200 group-hover:border-purple-300">
                {f.icon}
              </div>
              <h4 className="text-xl font-bold text-blue-900 mb-2 group-hover:text-blue-700 transition-colors duration-300 tracking-tight">
                {f.title}
              </h4>
              <p className="text-gray-600 mb-6 text-base leading-relaxed">{f.desc}</p>
              <motion.div className="absolute inset-0 rounded-3xl pointer-events-none border-2 border-transparent group-hover:border-blue-400 group-focus:border-blue-400 transition-all duration-300" initial={{ opacity: 0 }} whileHover={{ opacity: 1 }} transition={{ duration: 0.3 }} />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Δείγματα Έργων */}
      <section id="showcase-section" className="max-w-7xl mx-auto py-24 px-4">
        <motion.h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-12 text-center">Δείγματα Έργων</motion.h2>
        <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-12" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}>
          {[
            {
              img: '/src/assets/architecture.png',
              title: 'Αρχιτεκτονικό & Κατασκευαστικό Γραφείο',
              desc: 'Σύγχρονη παρουσίαση υπηρεσιών και portfolio για τεχνικό γραφείο.',
              url: 'https://in-mavridis.gr/'
            },
            {
              img: '/src/assets/hydrogen.png',
              title: 'Κέντρο Ευεξίας',
              desc: 'Ιστοσελίδα για wellness center με online κρατήσεις και δυναμικό περιεχόμενο.',
              url: 'https://hydrogenlife.eu/'
            },
            {
              img: '/src/assets/crypto.png',
              title: 'Προώθηση Custom CryptoCoin',
              desc: 'Landing page για την προώθηση custom κρυπτονομίσματος.',
              url: 'https://panitoscryptocoin.com/'
            }
          ].map((s, idx) => (
            <motion.div
              key={s.title}
              className="group relative bg-white/80 rounded-3xl shadow-2xl border border-blue-100/40 overflow-hidden flex flex-col hover:scale-105 hover:shadow-3xl transition-all duration-300 cursor-pointer focus:outline-none focus:ring-4 focus:ring-blue-200"
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ scale: 1.04, boxShadow: '0 8px 32px 0 rgba(80, 80, 200, 0.18)' }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div className="relative h-64 overflow-hidden">
                <motion.img
                  src={s.img}
                  alt={s.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
              </div>
              <div className="p-8 flex flex-col flex-1 relative z-10">
                <h4 className="text-2xl font-bold text-blue-900 mb-2 group-hover:text-blue-500 transition-colors duration-300 tracking-tight">
                  {s.title}
                </h4>
                <p className="text-gray-700 text-base mb-4 flex-1 leading-relaxed">{s.desc}</p>
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-auto px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-base focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  Δείτε το έργο
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Πορεία Υλοποίησης (βελτιωμένο UI) */}
      <section className="max-w-7xl mx-auto py-24 px-4">
        <motion.h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-12 text-center bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent drop-shadow-lg">Πορεία Υλοποίησης</motion.h2>
        <motion.div className="flex flex-col md:flex-row items-center justify-center gap-0 md:gap-4" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}>
          {[
            { icon: <FaSearch className="text-blue-500 text-2xl" />, title: 'Ανάλυση', desc: 'Κατανοούμε τις ανάγκες και τους στόχους σας.' },
            { icon: <FaPaintBrush className="text-purple-500 text-2xl" />, title: 'Σχεδίαση', desc: 'Δημιουργούμε wireframes και mockups.' },
            { icon: <FaCode className="text-pink-500 text-2xl" />, title: 'Υλοποίηση', desc: 'Αναπτύσσουμε το site με σύγχρονες τεχνολογίες.' },
            { icon: <FaRocket className="text-cyan-500 text-2xl" />, title: 'Παράδοση', desc: 'Παραδίδουμε και υποστηρίζουμε το έργο σας.' },
          ].map((w, idx, arr) => (
            <React.Fragment key={w.title}>
              <motion.div
                className="bg-gradient-to-br from-blue-50 via-white to-purple-50 rounded-2xl shadow-xl border border-blue-100/40 p-10 flex flex-col items-center text-center group hover:shadow-2xl transition-all duration-300 relative overflow-hidden min-w-[220px]"
                initial={{ opacity: 0, y: 40, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                whileHover={{ scale: 1.08 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.07 }}
              >
                <div className="mb-6 flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 shadow-inner group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 border-4 border-blue-200 group-hover:border-purple-300">
                  {w.icon}
                </div>
                <h4 className="text-xl font-bold text-blue-900 mb-2 group-hover:text-blue-500 transition-colors duration-300 tracking-tight">
                  {w.title}
                </h4>
                <p className="text-gray-600 mb-4 text-base leading-relaxed">{w.desc}</p>
              </motion.div>
              {/* Small arrow between bricks except after the last */}
              {idx < arr.length - 1 && (
                <div className="flex justify-center items-center w-full md:w-auto my-2 md:my-0">
                  <span className="text-blue-400 text-3xl md:text-4xl font-bold select-none">→</span>
                </div>
              )}
            </React.Fragment>
          ))}
        </motion.div>
      </section>

      {/* Τεχνολογίες */}
      <section className="max-w-7xl mx-auto py-24 px-4">
        <motion.h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-12 text-center">Τεχνολογίες & Εργαλεία</motion.h2>
        <motion.div className="flex flex-wrap justify-center gap-10" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}>
          {techStack.map((t, idx) => (
            <motion.div
              key={t.name}
              className="flex flex-col items-center gap-2 bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border border-blue-100/40 group"
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ scale: 1.1, boxShadow: '0 0 24px 0 #a5b4fc' }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              onMouseEnter={() => playSound(hoverSfx)}
              onClick={() => playSound(clickSfx)}
            >
              {t.icon}
              <span className="text-base text-blue-900 font-semibold mt-2">{t.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Στατιστικά */}
      <section className="max-w-7xl mx-auto py-24 px-4">
        <motion.h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-12 text-center bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent drop-shadow-lg">Αριθμοί που Μετράνε</motion.h2>
        <motion.div className="grid grid-cols-2 md:grid-cols-3 gap-10" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}>
          {stats.map((s, idx) => (
            <motion.div
              key={s.label}
              className="flex flex-col items-center bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl border border-blue-100/40 p-12 group hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.09, boxShadow: '0 8px 32px 0 #a5b4fc' }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              onMouseEnter={() => playSound(hoverSfx)}
            >
              <div className="mb-4 flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 shadow-inner group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 border-4 border-blue-200 group-hover:border-purple-300">
                {s.icon}
              </div>
              <span className="text-5xl font-extrabold text-blue-700 mb-2 animate-pulse">
                {animatedStats[idx]}{s.suffix}
              </span>
              <span className="text-blue-900 font-semibold text-lg text-center tracking-tight">{s.label}</span>
              <motion.div className="absolute inset-0 rounded-2xl pointer-events-none border-2 border-transparent group-hover:border-blue-400 group-focus:border-blue-400 transition-all duration-300" initial={{ opacity: 0 }} whileHover={{ opacity: 1 }} transition={{ duration: 0.3 }} />
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
} 
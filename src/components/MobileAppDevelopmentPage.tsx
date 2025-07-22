import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaApple, FaAndroid, FaReact, FaCloud, FaRocket, FaLock, FaPalette, FaBolt, FaStore, FaHeartbeat, FaGraduationCap, FaTruck, FaUsers, FaCode, FaSearch, FaPaintBrush, FaSyncAlt } from 'react-icons/fa';
import { SiFlutter, SiKotlin, SiSwift, SiFirebase, SiSupabase } from 'react-icons/si';
import Lottie from 'lottie-react';
// import mobileLottie from '../assets/lottie-mobiledev.json';
const mobileLottie = {};
const hoverSfx = '';
const clickSfx = '';
// @ts-ignore: No types for aos
import AOS from 'aos';
import 'aos/dist/aos.css';
import smartphoneImg from '../assets/smartphone.jpg';
import codeImg from '../assets/code.jpg';
import ui2Img from '../assets/ui2.png';
import ui3Img from '../assets/ui3.jpg';
import video2Img from '../assets/video2.jpg';
import video3Img from '../assets/video3.jpg';
import video4Img from '../assets/video4.jpg';
import phoneImg from '../assets/phone.jpg';
import appsImg from '../assets/apps.jpg';

const unsplashHero = smartphoneImg;
const unsplashTeam = codeImg;
const unsplashUX = ui2Img;
const unsplashCode = ui3Img;
const unsplashEcom = video2Img;
const unsplashHealth = video3Img;
const unsplashEdu = video4Img;
const unsplashOnDemand = video2Img;
const unsplashSocial = video3Img;

function playSound(src: string) {
  if (!src) return;
  const audio = new Audio(src);
  audio.volume = 0.15;
  audio.play();
}

const appTypes = [
  { icon: <FaApple className="text-blue-500 text-4xl" />, title: 'iOS Native', desc: 'Native apps για iPhone & iPad με Swift.' },
  { icon: <FaAndroid className="text-green-500 text-4xl" />, title: 'Android Native', desc: 'Native apps για Android με Kotlin.' },
  { icon: <SiFlutter className="text-cyan-500 text-4xl" />, title: 'Flutter', desc: 'Cross-platform apps με Flutter.' },
  { icon: <FaReact className="text-blue-400 text-4xl" />, title: 'React Native', desc: 'Cross-platform apps με React Native.' },
  { icon: <FaCloud className="text-purple-500 text-4xl" />, title: 'PWAs', desc: 'Progressive Web Apps για κάθε συσκευή.' },
];

const tools = [
  { icon: <SiFlutter className="text-cyan-500 text-3xl" />, name: 'Flutter' },
  { icon: <SiKotlin className="text-purple-500 text-3xl" />, name: 'Kotlin' },
  { icon: <SiSwift className="text-orange-500 text-3xl" />, name: 'Swift' },
  { icon: <FaReact className="text-blue-400 text-3xl" />, name: 'React Native' },
  { icon: <SiFirebase className="text-yellow-500 text-3xl" />, name: 'Firebase' },
  { icon: <SiSupabase className="text-green-500 text-3xl" />, name: 'Supabase' },
  { icon: <FaApple className="text-gray-900 text-3xl" />, name: 'App Store' },
  { icon: <FaAndroid className="text-green-500 text-3xl" />, name: 'Play Store' },
];

const advantages = [
  { icon: <FaBolt className="text-blue-500 text-3xl" />, title: 'Ταχύτητα & Απόδοση', desc: 'Εφαρμογές που φορτώνουν άμεσα και λειτουργούν άψογα.' },
  { icon: <FaLock className="text-purple-500 text-3xl" />, title: 'Ασφάλεια σε Πρώτο Πλάνο', desc: 'Κρυπτογράφηση, ασφαλής διαχείριση δεδομένων, GDPR.' },
  { icon: <FaPalette className="text-pink-500 text-3xl" />, title: 'Καταπληκτικό UI/UX Design', desc: 'Εμπειρία χρήστη που ξεχωρίζει και εντυπωσιάζει.' },
  { icon: <FaRocket className="text-yellow-500 text-3xl" />, title: 'App Store Ready', desc: 'Δημοσίευση & υποστήριξη από την πρώτη μέρα.' },
];

const process = [
  { icon: <FaPalette className="text-blue-400 text-2xl" />, title: 'Ανακάλυψη Ιδέας', desc: 'Συζήτηση, ανάλυση, στόχοι.' },
  { icon: <FaPalette className="text-pink-400 text-2xl" />, title: 'UI/UX Design', desc: 'Wireframes, πρωτότυπα, design.' },
  { icon: <FaCode className="text-purple-400 text-2xl" />, title: 'Υλοποίηση', desc: 'Development, testing, βελτιστοποίηση.' },
  { icon: <FaRocket className="text-yellow-400 text-2xl" />, title: 'Λανσάρισμα', desc: 'App Store, Google Play, υποστήριξη.' },
  { icon: <FaCloud className="text-blue-400 text-2xl" />, title: 'Υποστήριξη', desc: 'Συνεχής βελτίωση & updates.' },
];

const useCases = [
  { img: unsplashEcom, title: 'E-commerce', desc: 'Mobile apps για ηλεκτρονικά καταστήματα.' },
  { img: unsplashHealth, title: 'Health & Wellness', desc: 'Εφαρμογές για υγεία, fitness, wellness.' },
  { img: unsplashEdu, title: 'Education', desc: 'Εκπαιδευτικές εφαρμογές, e-learning, quizzes.' },
  { img: unsplashOnDemand, title: 'On-Demand', desc: 'Delivery, booking, υπηρεσίες κατ’ απαίτηση.' },
  { img: unsplashSocial, title: 'Social', desc: 'Social networking, chat, communities.' },
];

export default function MobileAppDevelopmentPage() {
  useEffect(() => { AOS.init({ duration: 900, once: true }); }, []);
  return (
    <div className="bg-gradient-to-br from-white via-blue-50 to-purple-50 min-h-screen text-gray-900 font-sans">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pb-10 select-none bg-gradient-to-br from-blue-50 via-white to-purple-50">
        {/* Animated Background Gradients/Particles */}
        <motion.div className="absolute inset-0 z-0 pointer-events-none">
          <motion.div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-gradient-to-br from-blue-400/40 via-purple-400/30 to-white/0 rounded-full blur-3xl animate-spin-slow" animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: 'linear' }} />
          <motion.div className="absolute bottom-[-10%] right-[-10%] w-[32vw] h-[32vw] bg-gradient-to-br from-purple-400/40 via-blue-400/30 to-white/0 rounded-full blur-3xl animate-spin-slow" animate={{ rotate: -360 }} transition={{ duration: 60, repeat: Infinity, ease: 'linear' }} />
          <motion.div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/20 rounded-full blur-3xl" animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }} />
          <motion.div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-white/20 rounded-full blur-3xl" animate={{ y: [0, 30, 0], rotate: [0, -5, 0] }} transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }} />
        </motion.div>
        {/* HERO CONTENT SPLIT LAYOUT */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 py-32 w-full flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Left: Text */}
          <motion.div className="flex-1 flex flex-col items-start md:items-start text-left" initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <motion.h1 className="text-4xl md:text-6xl font-extrabold mb-6 drop-shadow-lg tracking-tight bg-gradient-to-r from-blue-700 to-purple-600 bg-clip-text text-transparent" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} style={{ fontFamily: "'IBM Plex Sans', 'Inter', sans-serif" }}>
              Κατασκευή Mobile Εφαρμογών για Επιχειρήσεις & Startups
            </motion.h1>
            <motion.p className="text-lg md:text-2xl text-gray-700 mb-10 font-medium max-w-2xl" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}>
              Από την ιδέα στο App Store & Google Play. Εξειδίκευση σε iOS, Android & cross-platform λύσεις με έμφαση στην ταχύτητα, το design και την ασφάλεια.
            </motion.p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                className="inline-block px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-400 text-white rounded-full font-bold text-lg shadow-2xl border-2 border-transparent hover:border-blue-400 hover:shadow-[0_0_32px_0_#a78bfa] focus:outline-none focus:ring-2 focus:ring-blue-400 animate-fade-in flex items-center gap-2 relative overflow-hidden"
                whileHover={{ scale: 1.08, boxShadow: '0 0 32px 0 #a78bfa', filter: 'brightness(1.1)', borderColor: '#a78bfa' }}
                whileTap={{ scale: 0.97 }}
                onMouseEnter={() => playSound(hoverSfx)}
                onClick={() => { window.location.href = '/contactme'; }}
              >
                <span className="relative z-10">Ζητήστε Προσφορά</span>
              </motion.button>
            </div>
          </motion.div>
          {/* Right: Animated Phone Images */}
          <motion.div
            className="flex-1 flex items-center justify-center w-full md:w-auto mt-12 md:mt-0 gap-6"
            initial={{ opacity: 0, x: 60, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <motion.img
              src={phoneImg}
              alt="Mobile Phone"
              className="w-[160px] h-[260px] md:w-[220px] md:h-[360px] object-cover rounded-3xl shadow-2xl border-4 border-blue-100/60 bg-white/80"
              animate={{ y: [0, -18, 0, 18, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
              style={{ boxShadow: '0 8px 48px 0 rgba(80,80,200,0.13)' }}
            />
            <motion.img
              src={smartphoneImg}
              alt="Smartphone"
              className="w-[160px] h-[260px] md:w-[220px] md:h-[360px] object-cover rounded-3xl shadow-2xl border-4 border-blue-100/60 bg-white/80"
              animate={{ y: [0, 18, 0, -18, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
              style={{ boxShadow: '0 8px 48px 0 rgba(80,80,200,0.13)' }}
            />
          </motion.div>
        </div>
      </section>

      {/* Types of Mobile App Development */}
      <section className="max-w-7xl mx-auto py-24 px-4">
        <motion.h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-12 text-center bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent drop-shadow-lg">Τύποι Mobile Εφαρμογών</motion.h2>
        <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}>
          {appTypes.map((t, idx) => (
            <motion.div key={t.title} className="group bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl border border-blue-100/40 p-10 flex flex-col items-center text-center cursor-pointer transition-all duration-300 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-blue-200 relative overflow-hidden" initial={{ opacity: 0, y: 40, scale: 0.97 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} whileHover={{ scale: 1.08, boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.25)' }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.07 }} onMouseEnter={() => playSound(hoverSfx)} onClick={() => playSound(clickSfx)}><div className="mb-6 flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 shadow-inner group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 border-4 border-blue-200 group-hover:border-purple-300">{t.icon}</div><h4 className="text-xl font-bold text-blue-900 mb-2 group-hover:text-blue-700 transition-colors duration-300 tracking-tight">{t.title}</h4><p className="text-gray-600 mb-6 text-base leading-relaxed">{t.desc}</p><motion.div className="absolute inset-0 rounded-3xl pointer-events-none border-2 border-transparent group-hover:border-blue-400 group-focus:border-blue-400 transition-all duration-300" initial={{ opacity: 0 }} whileHover={{ opacity: 1 }} transition={{ duration: 0.3 }} /></motion.div>
          ))}
        </motion.div>
      </section>

      {/* Tools & Technologies */}
      <section className="max-w-7xl mx-auto py-24 px-4">
        <motion.h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-12 text-center bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent drop-shadow-lg">Εργαλεία & Τεχνολογίες</motion.h2>
        <motion.div className="flex flex-wrap justify-center gap-10 mb-12" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}>
          {tools.map((t, idx) => (
            <motion.div key={t.name} className="flex flex-col items-center gap-2 bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border border-blue-100/40 group" initial={{ opacity: 0, y: 30, scale: 0.95 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} whileHover={{ scale: 1.1, boxShadow: '0 0 24px 0 #a5b4fc' }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.1 }} onMouseEnter={() => playSound(hoverSfx)} onClick={() => playSound(clickSfx)}>{t.icon}<span className="text-base text-blue-900 font-semibold mt-2">{t.name}</span></motion.div>
          ))}
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <img src={appsImg} alt="Ομάδα Mobile Development" className="rounded-3xl shadow-2xl object-cover object-center w-full h-64 md:h-80" />
          <img src={unsplashUX} alt="Mobile UI/UX" className="rounded-3xl shadow-2xl object-cover object-center w-full h-64 md:h-80" />
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-7xl mx-auto py-24 px-4">
        <motion.h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-12 text-center bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent drop-shadow-lg">Γιατί να μας επιλέξετε</motion.h2>
        <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}>
          {advantages.map((a, idx) => (
            <motion.div key={a.title} className="group bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl border border-blue-100/40 p-10 flex flex-col items-center text-center cursor-pointer transition-all duration-300 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-blue-200 relative overflow-hidden" initial={{ opacity: 0, y: 40, scale: 0.97 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} whileHover={{ scale: 1.08, boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.25)' }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.07 }} onMouseEnter={() => playSound(hoverSfx)} onClick={() => playSound(clickSfx)}><div className="mb-6 flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 shadow-inner group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 border-4 border-blue-200 group-hover:border-purple-300">{a.icon}</div><h4 className="text-xl font-bold text-blue-900 mb-2 group-hover:text-blue-700 transition-colors duration-300 tracking-tight">{a.title}</h4><p className="text-gray-600 mb-6 text-base leading-relaxed">{a.desc}</p><motion.div className="absolute inset-0 rounded-3xl pointer-events-none border-2 border-transparent group-hover:border-blue-400 group-focus:border-blue-400 transition-all duration-300" initial={{ opacity: 0 }} whileHover={{ opacity: 1 }} transition={{ duration: 0.3 }} /></motion.div>
          ))}
        </motion.div>
      </section>

      {/* App Development Process */}
      <section className="max-w-7xl mx-auto py-24 px-4">
        <motion.h2 className="text-3xl md:text-4xl font-extrabold text-blue-700 mb-12 text-center bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent drop-shadow-lg">Διαδικασία Ανάπτυξης Εφαρμογής</motion.h2>
        <motion.div className="flex flex-col md:flex-row items-center justify-center gap-0 md:gap-4" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}>
          {[
            { icon: <FaSearch className="text-blue-500 text-2xl" />, title: 'Ανακάλυψη Ιδέας', desc: 'Συζήτηση, ανάλυση αναγκών και στόχων.' },
            { icon: <FaPaintBrush className="text-purple-500 text-2xl" />, title: 'UI/UX Design', desc: 'Wireframes, mockups και σχεδιασμός εμπειρίας.' },
            { icon: <FaCode className="text-pink-500 text-2xl" />, title: 'Υλοποίηση', desc: 'Ανάπτυξη native ή cross-platform εφαρμογής.' },
            { icon: <FaRocket className="text-cyan-500 text-2xl" />, title: 'Λανσάρισμα', desc: 'Δημοσίευση σε App Store/Google Play & υποστήριξη.' },
            { icon: <FaSyncAlt className="text-green-500 text-2xl" />, title: 'Υποστήριξη', desc: 'Συνεχής βελτίωση, updates και τεχνική υποστήριξη.' },
          ].map((step, idx, arr) => (
            <React.Fragment key={step.title}>
              <motion.div
                className="bg-gradient-to-br from-blue-50 via-white to-purple-50 rounded-2xl shadow-xl border border-blue-100/40 p-10 flex flex-col items-center text-center group hover:shadow-2xl transition-all duration-300 relative overflow-hidden min-w-[220px]"
                initial={{ opacity: 0, y: 40, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                whileHover={{ scale: 1.08 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.07 }}
              >
                <div className="mb-6 flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 shadow-inner group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 border-4 border-blue-200 group-hover:border-purple-300">
                  {step.icon}
                </div>
                <h4 className="text-xl font-bold text-blue-900 mb-2 group-hover:text-blue-500 transition-colors duration-300 tracking-tight">
                  {step.title}
                </h4>
                <p className="text-gray-600 mb-4 text-base leading-relaxed">{step.desc}</p>
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

      {/* Industry Use Cases */}
      <section className="max-w-7xl mx-auto py-24 px-4">
        <motion.h2 className="text-3xl md:text-4xl font-extrabold text-blue-700 mb-12 text-center bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent drop-shadow-lg">Χρήσεις & Κλάδοι</motion.h2>
        <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}>
          {[
            {
              img: unsplashEcom,
              title: 'E-commerce',
              desc: 'Δημιουργία mobile e-shop για πωλήσεις προϊόντων, διαχείριση παραγγελιών, push notifications και ασφαλείς πληρωμές. Ιδανικό για επιχειρήσεις λιανικής και χονδρικής.'
            },
            {
              img: unsplashHealth,
              title: 'Υγεία & Wellness',
              desc: 'Εφαρμογές για ραντεβού, παρακολούθηση υγείας, fitness tracking, τηλεϊατρική και διαχείριση πελατών σε κέντρα ευεξίας.'
            },
            {
              img: unsplashEdu,
              title: 'Εκπαίδευση',
              desc: 'Mobile πλατφόρμες για e-learning, quizzes, διαχείριση μαθημάτων, live video, ειδοποιήσεις και διαδραστικό περιεχόμενο.'
            },
            {
              img: unsplashOnDemand,
              title: 'On-Demand Υπηρεσίες',
              desc: 'Εφαρμογές για delivery, κρατήσεις, μεταφορές, υπηρεσίες κατ’ οίκον, με real-time tracking και πληρωμές.'
            },
            {
              img: unsplashSocial,
              title: 'Social Networking',
              desc: 'Δημιουργία κοινωνικών δικτύων, chat, groups, διαμοιρασμός περιεχομένου, ειδοποιήσεις και διαχείριση προφίλ.'
            },
            {
              img: unsplashUX,
              title: 'Custom Εφαρμογές',
              desc: 'Εξειδικευμένες λύσεις για startups, επιχειρήσεις, διασύνδεση με IoT, συστήματα ERP/CRM, ή οποιαδήποτε custom ανάγκη.'
            }
          ].map((u, idx) => (
            <motion.div key={u.title} className="group bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl border border-blue-100/40 p-10 flex flex-col items-center text-center cursor-pointer transition-all duration-300 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-blue-200 relative overflow-hidden" initial={{ opacity: 0, y: 40, scale: 0.97 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} whileHover={{ scale: 1.08, boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.25)' }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.07 }}>
              <div className="mb-6 flex items-center justify-center w-32 h-32 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100 shadow-inner group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 border-4 border-blue-200 group-hover:border-purple-300">
                <img src={u.img} alt={u.title} className="w-full h-full object-cover" />
              </div>
              <h4 className="text-xl font-bold text-blue-900 mb-2 group-hover:text-blue-700 transition-colors duration-300 tracking-tight">{u.title}</h4>
              <p className="text-gray-600 mb-6 text-base leading-relaxed">{u.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Final CTA Section */}
      <section className="max-w-7xl mx-auto py-24 px-4 flex flex-col items-center text-center">
        <motion.div className="relative bg-gradient-to-br from-blue-100 via-white to-purple-100/80 backdrop-blur-lg rounded-3xl shadow-2xl border border-blue-100/40 p-12 flex flex-col items-center" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-6 tracking-tight">Έχεις μια Ιδέα για Mobile App; Ας την Υλοποιήσουμε Μαζί.</h2>
          <motion.button className="inline-block px-12 py-5 bg-gradient-to-r from-blue-600 to-purple-400 text-white rounded-full font-bold text-xl shadow-3xl border-2 border-transparent hover:border-blue-400 hover:shadow-[0_0_32px_0_#a78bfa] focus:outline-none focus:ring-2 focus:ring-blue-400 animate-fade-in flex items-center gap-2 relative overflow-hidden mt-6" whileHover={{ scale: 1.08, boxShadow: '0 0 32px 0 #a78bfa', filter: 'brightness(1.1)', borderColor: '#a78bfa' }} whileTap={{ scale: 0.97 }} onMouseEnter={() => playSound(hoverSfx)} onClick={() => { window.location.href = '/contactme'; }}><span className="relative z-10">Ζήτησε Προσφορά</span></motion.button>
        </motion.div>
      </section>
    </div>
  );
} 
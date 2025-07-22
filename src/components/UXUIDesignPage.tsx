import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaMobileAlt, FaDesktop, FaFigma, FaUserFriends, FaRegObjectGroup, FaRegEdit, FaSyncAlt, FaCheckCircle, FaStar, FaChevronLeft, FaChevronRight, FaUserCircle, FaLayerGroup, FaRegEye } from 'react-icons/fa';
// import uiLottie from '../assets/lottie-ui.json';
const uiLottie = {};
const hoverSfx = '';
const clickSfx = '';
// @ts-ignore: No types for aos
import AOS from 'aos';
import 'aos/dist/aos.css';
import uiImg from '../assets/UI.png';
import ui2Img from '../assets/ui2.png';
import ui3Img from '../assets/ui3.jpg';
import ui4Img from '../assets/ui4.jpg';
import ui5Img from '../assets/ui5.jpg';
import ui6Img from '../assets/ui6.png';
import { useIsMobile } from '../hooks/useIsMobile';

function playSound(src: string) {
  if (!src) return;
  const audio = new Audio(src);
  audio.volume = 0.15;
  audio.play();
}

const services = [
  { icon: <FaDesktop className="text-blue-500 text-3xl" />, title: 'Σχεδιασμός Interfaces για Web & Mobile', desc: 'UI για ιστοσελίδες, εφαρμογές, SaaS, mobile.' },
  { icon: <FaFigma className="text-pink-500 text-3xl" />, title: 'Διαδραστικά Prototypes', desc: 'Figma, Adobe XD, clickable prototypes.' },
  { icon: <FaRegObjectGroup className="text-purple-500 text-3xl" />, title: 'User Flows & Wireframing', desc: 'Διαγράμματα ροής, wireframes, αρχιτεκτονική.' },
  { icon: <FaUserFriends className="text-green-500 text-3xl" />, title: 'UX Research & Personas', desc: 'Έρευνα χρηστών, personas, user journeys.' },
  { icon: <FaRegEdit className="text-yellow-500 text-3xl" />, title: 'Βελτιστοποίηση Υφιστάμενων UI', desc: 'Redesign, usability audit, βελτιώσεις.' },
  { icon: <FaSyncAlt className="text-cyan-500 text-3xl" />, title: 'Responsive Design', desc: 'Προσαρμογή για κάθε συσκευή & οθόνη.' },
  { icon: <FaRegEye className="text-blue-400 text-3xl" />, title: 'Testing & Iteration', desc: 'A/B testing, feedback, συνεχής βελτίωση.' },
];

const methodology = [
  { icon: <FaCheckCircle className="text-blue-500 text-2xl" />, title: 'Κατανόηση αναγκών', desc: 'Συζήτηση, στόχοι, ανάλυση.' },
  { icon: <FaUserFriends className="text-green-500 text-2xl" />, title: 'Έρευνα Χρηστών', desc: 'Personas, user journeys, pain points.' },
  { icon: <FaRegObjectGroup className="text-purple-500 text-2xl" />, title: 'Σχεδίαση Wireframes', desc: 'Δομή, flows, wireframes.' },
  { icon: <FaLayerGroup className="text-pink-500 text-2xl" />, title: 'Δημιουργία UI με design system', desc: 'Στυλ, components, consistency.' },
  { icon: <FaSyncAlt className="text-cyan-500 text-2xl" />, title: 'Προσαρμογή & Αξιολόγηση', desc: 'Testing, feedback, iteration.' },
];

const gallery = [
  { img: '/src/assets/ui2.png', title: 'Mobile App UI', desc: 'Σύγχρονο mobile interface.' },
  { img: '/src/assets/ui3.jpg', title: 'Web Dashboard', desc: 'Διαδραστικό web dashboard.' },
  { img: '/src/assets/UI.png', title: 'Responsive Layout', desc: 'UI για όλες τις συσκευές.' },
];

const testimonials = [
  { quote: 'Το UI που σχεδίασε ήταν εντυπωσιακό και αύξησε το engagement των χρηστών μας.', name: 'Ελένη Μ.', avatar: '', rating: 5 },
  { quote: 'Άψογη συνεργασία, προσοχή στη λεπτομέρεια και εξαιρετικό αποτέλεσμα.', name: 'Γιώργος Π.', avatar: '', rating: 5 },
];

export default function UXUIDesignPage() {
  const isMobile = useIsMobile();
  const [typed, setTyped] = useState('');
  const [currentGallery, setCurrentGallery] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  useEffect(() => { AOS.init({ duration: 900, once: true }); }, []);
  // Typing effect για το hero
  useEffect(() => {
    const full = 'UX/UI Design';
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
    <div className="bg-gradient-to-br from-white via-blue-50 to-purple-50 min-h-screen text-gray-900 font-sans">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pb-10 select-none">
        {/* Floating Wireframes / Layers: ΜΟΝΟ σε desktop */}
        {!isMobile && (
          <motion.div className="absolute inset-0 z-0 pointer-events-none">
            {["UI", "Figma", "Wireframe", "Button", "Card", "Modal", "Sketch", "Mobile", "Web", "Flow"].map((kw, i) => (
              <motion.div
                key={kw}
                className="absolute z-10 opacity-20 text-lg md:text-2xl font-bold text-purple-400"
                style={{
                  top: `${10 + 60 * Math.sin((i / 10) * 2 * Math.PI)}%`,
                  left: `${10 + 80 * Math.cos((i / 10) * 2 * Math.PI)}%`,
                  filter: 'drop-shadow(0 4px 24px rgba(160,80,200,0.10))',
                }}
                animate={{ y: [0, i % 2 === 0 ? 20 : -20, 0] }}
                transition={{ duration: 7 + i, repeat: Infinity, ease: 'easeInOut' }}
              >
                {kw}
              </motion.div>
            ))}
          </motion.div>
        )}
        {/* Hero Content */}
        <div className="relative z-20 max-w-3xl mx-auto px-4 py-32 text-center flex flex-col items-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-lg tracking-tight bg-gradient-to-r from-purple-700 to-blue-600 bg-clip-text text-transparent" style={{ fontFamily: "'IBM Plex Sans', 'Inter', sans-serif" }}>
            UX/UI Design
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-10 font-medium max-w-2xl mx-auto">
            Σχεδιάζουμε φιλικά προς τον χρήστη και αποδοτικά interfaces με έμφαση στη χρηστικότητα και την εμπειρία.
          </p>
          <button className="inline-block px-12 py-5 bg-gradient-to-r from-purple-600 to-blue-400 text-white rounded-full font-bold text-xl shadow-3xl border-2 border-transparent hover:border-purple-400 hover:shadow-[0_0_32px_0_#a78bfa] focus:outline-none focus:ring-2 focus:ring-purple-400 animate-fade-in flex items-center gap-2 relative overflow-hidden" onClick={() => { window.location.href = '/contactme'; }}><span className="relative z-10">Ζητήστε Προσφορά</span></button>
        </div>
      </section>

      {/* Υπηρεσίες UX/UI */}
      <section className="max-w-7xl mx-auto py-24 px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-purple-700 mb-12 text-center bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent drop-shadow-lg">Υπηρεσίες UX/UI</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {services.map((s, idx) => (
            <div key={s.title} className="group bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl border border-purple-100/40 p-10 flex flex-col items-center text-center cursor-pointer transition-all duration-300 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-purple-200 relative overflow-hidden">
              <div className="mb-6 flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-purple-100 to-blue-100 shadow-inner border-4 border-purple-200">
                {s.icon}
              </div>
              <h4 className="text-xl font-bold text-purple-900 mb-2 group-hover:text-purple-700 transition-colors duration-300 tracking-tight">{s.title}</h4>
              <p className="text-gray-600 mb-6 text-base leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Μεθοδολογία / Ροή Εργασίας */}
      <section className="max-w-7xl mx-auto py-24 px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-purple-700 mb-12 text-center bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent drop-shadow-lg">Μεθοδολογία</h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-10">
          {methodology.map((step, idx) => (
            <div key={step.title} className="flex flex-col items-center bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl border border-purple-100/40 p-10 group hover:shadow-2xl transition-all duration-300 relative overflow-hidden min-w-[180px]">
              <div className="mb-4 flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-purple-100 to-blue-100 shadow-inner border-4 border-purple-200">
                {step.icon}
              </div>
              <h4 className="text-base font-bold text-purple-900 mb-2 group-hover:text-purple-500 transition-colors duration-300 tracking-tight">{step.title}</h4>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">{step.desc}</p>
              {idx < methodology.length - 1 && <div className="w-1 h-10 bg-gradient-to-b from-purple-300 to-blue-200 mx-auto my-2 rounded-full" />}
            </div>
          ))}
        </div>
      </section>

      {/* Trends & Inspiration */}
      <section className="max-w-7xl mx-auto py-24 px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-12 text-center bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent drop-shadow-lg">UX/UI Design Trends & Inspiration</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            {
              title: 'Minimalism & Clarity',
              desc: 'Καθαρά layouts, άπλετο whitespace και εστίαση στη λειτουργικότητα για premium εμπειρία.',
              img: uiImg,
            },
            {
              title: 'Microinteractions',
              desc: 'Λεπτές κινήσεις, hover effects και animations που κάνουν το UI ζωντανό και engaging.',
              img: ui2Img,
            },
            {
              title: 'Glassmorphism',
              desc: 'Διαφάνειες, blur και layered cards για αίσθηση βάθους και πολυτέλειας.',
              img: ui3Img,
            },
            {
              title: 'Bold Typography',
              desc: 'Μεγάλοι τίτλοι, contrast και μοντέρνα fonts για άμεση προσοχή.',
              img: ui4Img,
            },
            {
              title: 'Vivid Gradients',
              desc: 'Χρήση gradients και χρωματικών transitions για δυναμικό, premium look.',
              img: ui5Img,
            },
            {
              title: 'Mobile-first Design',
              desc: 'Προτεραιότητα στη mobile εμπειρία, με touch-friendly στοιχεία και responsive layouts.',
              img: ui6Img,
            },
          ].map((trend, idx) => (
            <div key={trend.title} className="bg-white/90 rounded-3xl shadow-xl border border-blue-100/40 p-0 flex flex-col items-center text-center overflow-hidden">
              <img src={trend.img} alt={trend.title} className="w-full h-48 object-cover" />
              <div className="p-8 flex flex-col flex-1">
                <h4 className="text-xl font-bold text-blue-900 mb-2">{trend.title}</h4>
                <p className="text-gray-600 mb-4 text-base leading-relaxed">{trend.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Τελικό CTA */}
      <section className="max-w-7xl mx-auto py-24 px-4 flex flex-col items-center text-center">
        <div className="relative bg-gradient-to-br from-purple-100 via-white to-blue-100/80 backdrop-blur-lg rounded-3xl shadow-2xl border border-purple-100/40 p-12 flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-purple-900 mb-6 tracking-tight">Θέλετε να εντυπωσιάσετε τους χρήστες σας με άψογο design;</h2>
          <button className="inline-block px-12 py-5 bg-gradient-to-r from-purple-600 to-blue-400 text-white rounded-full font-bold text-xl shadow-3xl border-2 border-transparent hover:border-purple-400 hover:shadow-[0_0_32px_0_#a78bfa] focus:outline-none focus:ring-2 focus:ring-purple-400 animate-fade-in flex items-center gap-2 relative overflow-hidden mt-6" onClick={() => { window.location.href = '/contactme'; }}><span className="relative z-10">Ζητήστε Δωρεάν Συμβουλευτική</span></button>
        </div>
      </section>
    </div>
  );
} 
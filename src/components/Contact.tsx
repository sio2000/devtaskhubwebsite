import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send, Linkedin, Github, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../hooks/useLanguage';
import { translations } from '../data/translations';
import { FaLinkedin, FaGithub, FaEnvelope, FaUserCircle, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({ name: false, email: false, message: false });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const validate = () => {
    const newErrors = {
      name: !formData.name.trim(),
      email: !formData.email.trim() || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(formData.email),
      message: !formData.message.trim(),
    };
    setErrors(newErrors);
    return !Object.values(newErrors).some(Boolean);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: false });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    // Δημιουργώ το mailto link
    const subject = encodeURIComponent(formData.subject || 'Επικοινωνία μέσω DevTaskHub');
    const body = encodeURIComponent(`Όνομα: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`);
    window.location.href = `mailto:Devtaskhub@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleCopy = (value: string) => {
    navigator.clipboard.writeText(value);
    toast.info(language === 'el' ? 'Το email αντιγράφηκε!' : 'Email copied!');
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
      value: 'xsiwzos@gmail.com',
      color: 'from-pink-500 to-red-500',
      bgColor: 'bg-pink-50',
      link: 'mailto:xsiwzos@gmail.com'
    },
    {
      icon: Mail,
      title: 'Business Email',
      value: t.contact.info.email,
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
      link: 'mailto:info@devtaskhub.com'
    }
  ];

  return (
    <section id="contact" className="relative py-24 bg-gradient-to-br from-blue-50 via-white to-blue-100 overflow-hidden">
      {/* Hero Section (Contact-specific) */}
      <motion.div
      className="max-w-3xl mx-auto text-center mb-16 relative z-20"
      initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 shadow-lg mb-2 animate-bounce-slow">
          <FaEnvelope className="text-white text-4xl drop-shadow" />
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-700 to-purple-600 bg-clip-text text-transparent mb-2">Επικοινωνία</h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Είστε έτοιμοι να ξεκινήσουμε το επόμενο project σας ή έχετε απορίες;<br />
          Συμπληρώστε τη φόρμα ή επικοινωνήστε απευθείας μαζί μας για άμεση ανταπόκριση και τεχνική αξιοπιστία.
        </p>
      </div>
    </motion.div>
    {/* Icon background */}
    <motion.div
      className="absolute -top-20 -left-20 w-96 h-96 z-0"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 0.12, scale: 1 }}
      transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
    <FaEnvelope className="w-full h-full text-blue-300" />
    </motion.div>
  <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="bg-white/80 rounded-3xl shadow-2xl border border-blue-100 p-8 md:p-14 flex flex-col md:flex-row gap-12 items-stretch">
      {/* Form */}
      <motion.form
        onSubmit={handleSubmit}
        className="flex-1 flex flex-col gap-8 justify-center"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        autoComplete="off"
      >
        {/* Όνομα */}
        <div className="relative">
          <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
            className={`peer w-full px-4 py-4 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-transparent placeholder-transparent ${errors.name ? 'border-red-400' : 'border-gray-300'}`}
            placeholder="Όνομα"
            autoComplete="off"
          />
          <label htmlFor="name" className="absolute left-4 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm bg-white/80 px-1 rounded pointer-events-none">
            Όνομα
                  </label>
          {errors.name && <span className="text-xs text-red-500 absolute right-2 top-2">Απαιτείται</span>}
        </div>
        {/* Email */}
        <div className="relative">
          <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
            className={`peer w-full px-4 py-4 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-transparent placeholder-transparent ${errors.email ? 'border-red-400' : 'border-gray-300'}`}
            placeholder="Email"
            autoComplete="off"
          />
          <label htmlFor="email" className="absolute left-4 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm bg-white/80 px-1 rounded pointer-events-none">
            Email
          </label>
          {errors.email && <span className="text-xs text-red-500 absolute right-2 top-2">Έγκυρο email</span>}
        </div>
        {/* Θέμα */}
        <div className="relative">
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="peer w-full px-4 py-4 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-transparent placeholder-transparent border-gray-300"
            placeholder="Θέμα (προαιρετικό)"
            autoComplete="off"
          />
          <label htmlFor="subject" className="absolute left-4 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm bg-white/80 px-1 rounded pointer-events-none">
            Θέμα (προαιρετικό)
                  </label>
        </div>
        {/* Μήνυμα */}
        <div className="relative">
          <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
            className={`peer w-full px-4 py-4 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-transparent placeholder-transparent resize-none ${errors.message ? 'border-red-400' : 'border-gray-300'}`}
            placeholder="Μήνυμα"
          />
          <label htmlFor="message" className="absolute left-4 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm bg-white/80 px-1 rounded pointer-events-none">
            Μήνυμα
          </label>
          {errors.message && <span className="text-xs text-red-500 absolute right-2 top-2">Απαιτείται</span>}
        </div>
            <motion.button
              type="submit"
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-4 rounded-xl font-semibold flex items-center justify-center space-x-2 shadow-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed text-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          whileHover={{ scale: 1.04, boxShadow: '0 8px 32px 0 rgba(80, 80, 200, 0.18)' }}
              whileTap={{ scale: 0.98 }}
          disabled={loading}
        >
          {loading ? (
            <svg className="animate-spin h-5 w-5 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path></svg>
          ) : (
            <FaEnvelope className="h-5 w-5" />
          )}
          <span>{loading ? 'Αποστολή...' : 'Αποστολή'}</span>
            </motion.button>
        {success && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-green-600 text-center mt-2">Το μήνυμά σας στάλθηκε!</motion.div>}
      </motion.form>
      {/* Info */}
                  <motion.div 
        className="flex-1 flex flex-col gap-8 justify-center items-start md:pl-8 border-t md:border-t-0 md:border-l border-blue-100 mt-10 md:mt-0 pt-10 md:pt-0"
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <a href="mailto:Devtaskhub@gmail.com" className="flex items-center gap-4 text-blue-700 text-lg font-semibold hover:text-blue-500 transition-colors group">
          <FaEnvelope className="h-5 w-5 text-blue-500 group-hover:text-blue-700 transition-colors" />
          <span>Devtaskhub@gmail.com</span>
        </a>
        <a href="tel:+306971982563" className="flex items-center gap-4 text-green-700 text-lg font-semibold hover:text-green-500 transition-colors group">
          <FaPhoneAlt className="h-5 w-5 text-green-500 group-hover:text-green-700 transition-colors" />
          <span>+30 6971982563</span>
        </a>
        <div className="flex items-center gap-4 text-red-700 text-lg font-semibold">
          <FaMapMarkerAlt className="h-5 w-5 text-red-500" />
          <span>Θεσσαλονίκη, Ελλάδα</span>
          </div>
      </motion.div>
    </div>
  </div>
</section>
  );
};

export default Contact;
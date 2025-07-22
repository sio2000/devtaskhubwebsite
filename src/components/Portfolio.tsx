import React from 'react';
import { ExternalLink, Smartphone, Monitor, BarChart3, Gamepad2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../hooks/useLanguage';
import { translations } from '../data/translations';
import architectureImg from '../assets/architecture.png';
import hydrogenImg from '../assets/hydrogen.png';
import videoImg from '../assets/video.jpg';
import cryptoImg from '../assets/crypto.png';
import hotelImg from '../assets/Hotel.png';
import { useIsMobile } from '../hooks/useIsMobile';

const Portfolio: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const isMobile = useIsMobile();

  const projects = [
    {
      key: 'architecture',
      icon: Monitor,
      image: architectureImg,
      technologies: ['React', 'Tailwind', 'SEO'],
      gradient: 'from-blue-500 to-purple-600',
      title: 'Αρχιτεκτονικό & Κατασκευαστικό Γραφείο',
      description: 'Σύγχρονη παρουσίαση υπηρεσιών και portfolio για τεχνικό γραφείο.',
      url: 'https://in-mavridis.gr/'
    },
    {
      key: 'wellness',
      icon: Smartphone,
      image: hydrogenImg,
      technologies: ['Next.js', 'Booking', 'CMS'],
      gradient: 'from-green-500 to-teal-600',
      title: 'Κέντρο Ευεξίας',
      description: 'Ιστοσελίδα για wellness center με online κρατήσεις και δυναμικό περιεχόμενο.',
      url: 'https://hydrogenlife.eu/'
    },
    {
      key: 'hotel',
      icon: Monitor,
      image: hotelImg,
      technologies: ['React', 'Gallery', 'Booking'],
      gradient: 'from-blue-400 to-indigo-500',
      title: 'Ξενοδοχείο',
      description: 'Προωθητικό site ξενοδοχείου με gallery και φόρμα επικοινωνίας.',
      url: 'https://684ad438cfcdad7a5e3a8db8--serenity-hotel-lux.netlify.app/'
    },
    {
      key: 'crypto',
      icon: BarChart3,
      image: cryptoImg,
      technologies: ['React', 'Landing', 'Animation'],
      gradient: 'from-yellow-500 to-pink-500',
      title: 'Προώθηση Custom CryptoCoin',
      description: 'Landing page για την προώθηση custom κρυπτονομίσματος.',
      url: 'https://panitoscryptocoin.com/'
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-br from-gray-50 to-purple-50 relative overflow-hidden">
      {/* Background Decorations: ΜΟΝΟ σε desktop */}
      {!isMobile && (
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-r from-blue-200/20 to-purple-200/20 rounded-full blur-xl"
          />
          <motion.div
            animate={{ scale: [1.2, 1, 1.2], rotate: [360, 180, 0] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-10 left-10 w-40 h-40 bg-gradient-to-r from-green-200/20 to-teal-200/20 rounded-full blur-xl"
          />
        </div>
      )}
      {/* Section Divider: ΜΟΝΟ σε desktop */}
      {!isMobile && (
        <div className="absolute top-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 fill-white">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"></path>
          </svg>
        </div>
      )}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">{t.portfolio.title}</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">{t.portfolio.subtitle}</p>
        </div>
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map(({ key, icon: Icon, image, technologies, gradient, title, description, url }) => (
            <div
              key={key}
              className="group relative"
            >
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  {/* Project Icon */}
                  <div className="absolute top-4 right-4 p-3 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg">
                    <Icon className="h-6 w-6 text-gray-700" />
                  </div>
                  {/* View Project Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-gray-900 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center space-x-2 shadow-xl"
                    >
                      <span>Δείτε το έργο</span>
                    </a>
                  </div>
                </div>
                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {description}
                  </p>
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {technologies.map((tech, index) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-sm rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                {/* Hover Glow Effect: ΜΟΝΟ σε desktop */}
                {!isMobile && (
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Bottom Section Divider: ΜΟΝΟ σε desktop */}
      {!isMobile && (
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 fill-white transform rotate-180">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"></path>
          </svg>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
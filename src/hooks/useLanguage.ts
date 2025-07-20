import { useState, useEffect } from 'react';

export type Language = 'el' | 'en';

export const useLanguage = () => {
  const [language, setLanguage] = useState<Language>('el');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'el' || savedLanguage === 'en')) {
      setLanguage(savedLanguage);
    }
  }, []);

  const toggleLanguage = () => {
    const newLanguage = language === 'el' ? 'en' : 'el';
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
    document.documentElement.lang = newLanguage;
  };

  return { language, toggleLanguage };
};
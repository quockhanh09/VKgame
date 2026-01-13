import { createContext, useState, useContext } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  // Load language from localStorage on initial render, default to 'vi' if not found
  const [language, setLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem('preferredLanguage');
    return savedLanguage || 'vi';
  });

  const toggleLanguage = () => {
    setLanguage(prev => {
      const newLanguage = prev === 'vi' ? 'en' : 'vi';
      // Save to localStorage whenever language changes
      localStorage.setItem('preferredLanguage', newLanguage);
      return newLanguage;
    });
  };

  const value = {
    language,
    setLanguage: (newLang) => {
      setLanguage(newLang);
      localStorage.setItem('preferredLanguage', newLang);
    },
    toggleLanguage
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

'use client';

import { createContext, useState, useContext } from 'react';

// Step 1: Create the Context
export const LanguageContext = createContext({
  language: 'en',
  setLanguage: (lang) => {},
});

// Step 2: Provider Component
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Step 3: Custom Hook (Optional but clean)
export const useLanguage = () => useContext(LanguageContext);

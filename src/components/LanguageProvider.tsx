/**
 * Language provider component for managing internationalization context
 */

import React from 'react';
import { LanguageContext, useLanguageProvider } from '../hooks/useLanguage';

interface LanguageProviderProps {
  children: React.ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const languageState = useLanguageProvider();

  return (
    <LanguageContext.Provider value={languageState}>
      {children}
    </LanguageContext.Provider>
  );
};

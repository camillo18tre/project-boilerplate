import { createContext, useState } from 'react';
import { useRouter } from 'next/router';
import { translation as en } from '../locales/en';
import { translation as it } from '../locales/it';

export const TranslationContext = createContext();

const TranslationContextProvider = ({ children }) => {
  const router = useRouter();
  const { locale } = router;

  const t = locale === 'en' ? en : it;

  return (
    <TranslationContext.Provider value={{ t, locale }}>
      {children}
    </TranslationContext.Provider>
  );
};

export default TranslationContextProvider;

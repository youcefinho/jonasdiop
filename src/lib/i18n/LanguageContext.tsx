import { createContext, useContext, type ReactNode } from 'react';
import type { Locale } from './types';
import { DEFAULT_LOCALE } from './types';

type LanguageContextValue = {
  locale: Locale;
};

const LanguageContext = createContext<LanguageContextValue>({ locale: DEFAULT_LOCALE });

export function LanguageProvider({ locale, children }: { locale: Locale; children: ReactNode }) {
  return <LanguageContext.Provider value={{ locale }}>{children}</LanguageContext.Provider>;
}

export function useLanguageContext(): LanguageContextValue {
  return useContext(LanguageContext);
}

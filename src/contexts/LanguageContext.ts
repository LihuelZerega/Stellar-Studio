import { createContext, SetStateAction } from 'react';

interface LanguageContextProps {
  language: string;
  setLanguage: React.Dispatch<SetStateAction<string>>;
}

export const LanguageContext = createContext<LanguageContextProps>({
  language: 'es',
  setLanguage: () => {},
});

"use client";
import React, { useContext } from 'react';
import { LanguageContext } from '@/contexts/LanguageContext';
import ComponentSpanish from '@/app/es/page';
import ComponentPortuguese from '@/app/pt/page';
import ComponentEnglish from '@/app/en/page';

const Home: React.FC = () => {
  const { language } = useContext(LanguageContext);

  let componentToRender: JSX.Element;

  switch (language) {
    case 'es':
      componentToRender = <ComponentSpanish />;
      break;
    case 'pt':
      componentToRender = <ComponentPortuguese />;
      break;
    default:
      componentToRender = <ComponentEnglish />;
      break;
  }

  return (
    <div>
      {componentToRender}
    </div>
  );
};

export default Home;

"use client";
import React, { useEffect } from "react";
import NavBarEs from "@/components/NavBars/NavBarEs";
import FooterEs from "@/components/LandingPageComponents/Footers/FooterEs";
import HeroSectionCompania from "@/components/CompaniaComponents/Es/HeroSectionCompania";
import AboutStellarStudio from "@/components/CompaniaComponents/Es/AboutStellarStudio";
import ContactCompania from "@/components/CompaniaComponents/Es/ContactCompania";
import TecnologyCompania from "@/components/CompaniaComponents/Es/TecnologyCompania";

function Page() {
  const changePageTitle = () => {
    document.title = "Stellar Studio | Compañia";
  };

  useEffect(() => {
    changePageTitle();
  }, []);

  return (
    <div
      className="bg-cover bg-center bg-[#272526]"
      style={{
        backgroundImage:
          'url("https://res.cloudinary.com/dszjgdktf/image/upload/v1712251098/Stellar%20Studio/BackgroundServicesImage_hpumui.png")',
      }}
    >
      <NavBarEs />
      <HeroSectionCompania />
      <div id="sobrenosotros" className="bg-neutral-900 bg-opacity-30">
        <AboutStellarStudio />
      </div>
      <h1 id="tecnologia">
        <TecnologyCompania />
      </h1>
      <h1 id="contacto">
        <ContactCompania />
      </h1>
      <FooterEs />
    </div>
  );
}

export default Page;

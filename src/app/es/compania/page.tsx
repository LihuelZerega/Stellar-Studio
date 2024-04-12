"use client";
import React, { useEffect, useState } from "react";
import LoadingPage from "@/ui/LoadingPage";
import NavBarEs from "@/components/NavBars/NavBarEs";
import FooterEs from "@/components/LandingPageComponents/Footers/FooterEs";
import HeroSectionCompania from "@/components/CompaniaComponents/Es/HeroSectionCompania";
import AboutStellarStudio from "@/components/CompaniaComponents/Es/AboutStellarStudio";
import ContactCompania from "@/components/CompaniaComponents/Es/ContactCompania";
import TecnologyCompania from "@/components/CompaniaComponents/Es/TecnologyCompania";

function Page() {
  const [isLoading, setIsLoading] = useState(true);
  const changePageTitle = () => {
    document.title = "Stellar Studio | Compañia";
  };

  useEffect(() => {
    changePageTitle();
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-[#272526] z-50">
          <LoadingPage />
        </div>
      ) : (
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
      )}
    </>
  );
}

export default Page;

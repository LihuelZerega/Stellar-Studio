"use client";
import React, { useEffect, useState } from "react";
import LoadingPage from "@/ui/LoadingPage";
import NavBar from "@/app/es/home/NavBar";
import FooterEs from "@/components/LandingPageComponents/Footers/FooterEs";
import HeroSection from "./subcomps/HeroSection";
import AboutStellarStudio from "@/components/CompaniaComponents/Es/AboutStellarStudio";
import ContactCompania from "@/components/CompaniaComponents/Es/ContactCompania";
import TecnologyCompania from "@/components/CompaniaComponents/Es/TecnologyCompania";
import History from "./subcomps/History";
import Commitment from "./subcomps/Commitment";
import OurObjetive from "./subcomps/OurObjetive";
import Tecnology from "./subcomps/Tecnology";

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
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-neutral-50 z-50">
          <LoadingPage />
        </div>
      ) : (
        <div className="bg-cover bg-center bg-neutral-50">
          <NavBar />
          <HeroSection />
          <div id="sobrenosotros" className="bg-neutral-900 bg-opacity-30">
            <History />
          </div>
          <Commitment />
          <OurObjetive />
          <h1 id="tecnologia">
            <Tecnology />
          </h1>
          {/* <h1 id="contacto">
            <ContactCompania />
          </h1> */}
          <FooterEs />
        </div>
      )}
    </>
  );
}

export default Page;

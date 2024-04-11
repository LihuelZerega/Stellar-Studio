"use client";
import React, { useEffect } from "react";
import NavBarEs from "@/components/NavBars/NavBarEs";
import FooterEs from "@/components/LandingPageComponents/Footers/FooterEs";
import HeroSectionInformationEs from "@/components/InformacionComponents/Es/HeroSectionInformationEs";
import WebServices from "@/components/InformacionComponents/Es/WebServices";

function Page() {
  const changePageTitle = () => {
    document.title = "Stellar Studio | Información";
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
      <HeroSectionInformationEs />
      <WebServices />
      <h1 id="precios">Precios</h1>
      <h1 id="opiniones">Opiniones</h1>
      <h1 id="formasdepago">Formas de Pago</h1>
      <FooterEs />
    </div>
  );
}

export default Page;

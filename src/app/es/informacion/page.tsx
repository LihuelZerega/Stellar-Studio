"use client";
import React, { useEffect, useState } from "react";
import LoadingPage from "@/ui/LoadingPage";
import NavBarEs from "@/components/NavBars/NavBarEs";
import FooterEs from "@/components/LandingPageComponents/Footers/FooterEs";
import HeroSectionInformationEs from "@/components/InformacionComponents/Es/HeroSectionInformationEs";
import WebServices from "@/components/InformacionComponents/Es/WebServices";

function Page() {
  const [isLoading, setIsLoading] = useState(true);

  const changePageTitle = () => {
    document.title = "Stellar Studio | Información";
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
          <HeroSectionInformationEs />
          <WebServices />
          <h1 id="precios">Precios</h1>
          <h1 id="opiniones">Opiniones</h1>
          <h1 id="formasdepago">Formas de Pago</h1>
          <FooterEs />
        </div>
      )}
    </>
  );
}

export default Page;

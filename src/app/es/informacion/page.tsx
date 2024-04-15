"use client";
import React, { useEffect, useState } from "react";
import LoadingPage from "@/ui/LoadingPage";
import NavBarEs from "@/components/NavBars/NavBarEs";
import FooterEs from "@/components/LandingPageComponents/Footers/FooterEs";
import HeroSectionInformationEs from "@/components/InformacionComponents/Es/HeroSectionInformationEs";
import WebServices from "@/components/InformacionComponents/Es/WebServices";
import Payments from "@/components/InformacionComponents/Es/Payments";
import Testimonials from "@/components/InformacionComponents/Es/Testimonials";
import Faq from "@/components/InformacionComponents/Es/Faq";

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
          <div id="precios" className="text-transparent">
            <WebServices />
          </div>
          <div id="formasdepago" className="text-transparent">
            <Payments />
          </div>
          <div id="opinionesformasdepago" className="text-transparent">
            <Testimonials />
          </div>
          <div>
            <Faq />
          </div>
          <FooterEs />
        </div>
      )}
    </>
  );
}

export default Page;

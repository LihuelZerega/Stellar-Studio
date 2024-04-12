"use client";
import React, { useEffect, useState } from "react";
import LoadingPage from "@/ui/LoadingPage";
import NavBarEs from "@/components/NavBars/NavBarEs";
import HeroSectionWebPagesEs from "@/components/ServicesComponents/WebPagesComponents/PaginasWebComponents/HeroSectionWebPagesEs";
import PricesCradsEs from "@/components/ServicesComponents/WebPagesComponents/PaginasWebComponents/PricesCradsEs";
import ChatBotIAEs from "@/components/ServicesComponents/WebPagesComponents/PaginasWebComponents/Features/ChatBotIAEs";
import FeaturesEs from "@/components/ServicesComponents/WebPagesComponents/PaginasWebComponents/Features/FeaturesEs";
import FaqEs from "@/components/ServicesComponents/WebPagesComponents/PaginasWebComponents/FaqEs";
import FooterEs from "@/components/LandingPageComponents/Footers/FooterEs";

function Page() {
  const [isLoading, setIsLoading] = useState(true);

  const changePageTitle = () => {
    document.title = "Stellar Studio | Creá tu sitio web";
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
          <HeroSectionWebPagesEs />
          <div id="modelosweb">
            <PricesCradsEs />
          </div>
          <ChatBotIAEs />
          <div id="caracteristicasweb">
            <FeaturesEs />
          </div>
          <FaqEs />
          <FooterEs />
        </div>
      )}
    </>
  );
}

export default Page;

"use client";
import React, { useEffect, useState } from "react";
import LoadingPage from "@/ui/LoadingPage";
import NavBar from "@/app/es/home/NavBar";
import HeroSection from "@/app/es/servicios/paginasweb/subcomponents/HeroSection";
import PricesCrads from "@/app/es/servicios/paginasweb/subcomponents/PricesCrads";
import ChatBotIAEs from "@/components/ServicesComponents/WebPagesComponents/PaginasWebComponents/Features/ChatBotIAEs";
import FeaturesEs from "@/components/ServicesComponents/WebPagesComponents/PaginasWebComponents/Features/FeaturesEs";
import FaqEs from "@/components/ServicesComponents/WebPagesComponents/PaginasWebComponents/FaqEs";
import FooterEs from "@/components/LandingPageComponents/Footers/FooterEs";
import ReDesing from "@/components/ServicesComponents/WebPagesComponents/PaginasWebComponents/Features/ReDesing";
import Additionals from "./subcomponents/Additionals";
import CallToAction from "../../home/CallToAction";
import Features from "./subcomponents/Features";

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
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-neutral-50 z-50">
          <LoadingPage />
        </div>
      ) : (
        <div
          className="bg-cover bg-center bg-neutral-50"
          // style={{
          //   backgroundImage:
          //     'url("https://res.cloudinary.com/dszjgdktf/image/upload/v1712251098/Stellar%20Studio/BackgroundServicesImage_hpumui.png")',
          // }}
        >
          <NavBar />
          <HeroSection />
          <div id="modelosweb">
            <PricesCrads />
          </div>
          <Additionals />
          {/* <ReDesing />
          <ChatBotIAEs /> */}
          {/* <div id="caracteristicasweb">
            <FeaturesEs />
          </div>
          <FaqEs /> */}
          <Features />
          <CallToAction />
          <FooterEs />
        </div>
      )}
    </>
  );
}

export default Page;

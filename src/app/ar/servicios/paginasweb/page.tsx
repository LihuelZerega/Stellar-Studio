"use client";
import React, { useEffect, useState } from "react";
import LoadingPage from "@/ui/LoadingPage";
import NavBar from "@/app/ar/home/NavBar";
import HeroSection from "@/app/ar/servicios/paginasweb/subcomponents/HeroSection";
import PricesCrads from "@/app/ar/servicios/paginasweb/subcomponents/PricesCrads";
import ChatBotIAEs from "@/components/ServicesComponents/WebPagesComponents/PaginasWebComponents/Features/ChatBotIAEs";
import FeaturesEs from "@/components/ServicesComponents/WebPagesComponents/PaginasWebComponents/Features/FeaturesEs";
import FooterEs from "@/components/LandingPageComponents/Footers/FooterEs";
import ReDesing from "@/components/ServicesComponents/WebPagesComponents/PaginasWebComponents/Features/ReDesing";
import Additionals from "./subcomponents/Additionals";
import CallToAction from "../../home/CallToAction";
import Features from "./subcomponents/Features";
import Faq from "./subcomponents/Faq";
import WhyChooseUs from "./subcomponents/WhyChooseUs";

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
        <div className="bg-cover bg-center bg-neutral-50">
          <NavBar />
          <HeroSection />
          <div id="modelosweb">
            <PricesCrads />
          </div>
          <WhyChooseUs />
          <Additionals />
          <Features />
          <CallToAction />
          <Faq />
          <FooterEs />
        </div>
      )}
    </>
  );
}

export default Page;

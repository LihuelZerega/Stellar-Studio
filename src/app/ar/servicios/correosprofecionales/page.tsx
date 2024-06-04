"use client";
import React, { useEffect, useState } from "react";
import LoadingPage from "@/ui/LoadingPage";
import NavBar from "@/app/ar/home/NavBar";
import HeroSectionEmailCorporative from "@/components/ServicesComponents/EmailCorporativeComponents/Es/HeroSectionEmailCorporative";
import StepsEmailCorporative from "@/components/ServicesComponents/EmailCorporativeComponents/Es/StepsEmailCorporative";
import PricesCards from "@/components/ServicesComponents/EmailCorporativeComponents/Es/PricesCrads";
import Features from "./subcomponents/Features";
import FaqEs from "@/components/ServicesComponents/EmailCorporativeComponents/Es/FaqEs";
import FooterEs from "@/components/LandingPageComponents/Footers/FooterEs";
import HeroSection from "./subcomponents/HeroSection";
import AlertService from "./subcomponents/AlertService";
import CallToAction from "./subcomponents/CallToAction";
import Faq from "./subcomponents/Faq";
import Steps from "./subcomponents/Steps";

function Page() {
  const [isLoading, setIsLoading] = useState(true);

  const changePageTitle = () => {
    document.title = "Stellar Studio | Impulsá tu imagen profecional";
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
        >
          <NavBar />
          <HeroSection />
          <AlertService />
          <Steps />
          <div id="precioscorreos">
            <PricesCards />
          </div>
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

"use client";
import React, { useEffect, useState } from "react";
import LoadingPage from "@/ui/LoadingPage";
import NavBar from "@/app/es/home/NavBar";
import HeroSection from "@/app/es/servicios/dominios/subcomponents/HeroSection";
import PopularDomains from "@/app/es/servicios/dominios/subcomponents/PopularDomains";
import Tips from "@/components/ServicesComponents/DomainComponents/Es/Tips";
import Features from "@/components/ServicesComponents/DomainComponents/Es/Features";
import FooterEs from "@/components/LandingPageComponents/Footers/FooterEs";
import { motion } from "framer-motion";
import { MdClose } from "react-icons/md";
import AlertService from "./subcomponents/AlertService";
import DomainTips from "./subcomponents/DomainTips";
import CallToAction from "./subcomponents/CallToAction";
import Faq from "./subcomponents/Faq";

function Page() {
  const [isLoading, setIsLoading] = useState(true);

  const changePageTitle = () => {
    document.title = "Stellar Studio | Asegurá tu identidad en línea";
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
        <div>
          <NavBar />
          <AlertService />
          <div id="registrardominio">
            <HeroSection />
          </div>
          <div id="dominiospopulares">
            <PopularDomains />
          </div>
          <DomainTips />
          <CallToAction />
          <Faq />
          <FooterEs />
        </div>
      )}
    </>
  );
}

export default Page;

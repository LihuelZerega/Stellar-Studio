"use client";
import React, { useEffect, useState } from "react";
import NewHeroSection from "./home/NewHeroSection";
import FooterEs from "@/components/LandingPageComponents/Footers/FooterEs";
import StatsEs from "@/components/LandingPageComponents/Stats/StatsEs";
import LoadingPage from "@/ui/LoadingPage";
import NavBar from "./home/NavBar";
import Products from "./home/Products";
import CallToAction from "./home/CallToAction";
import Testimonials from "./home/Testimonials";
import Section from "./home/Section";
import DividerGray from "./home/DividerGray";
import DividerWhite from "./home/DividerWhite";
import ChatBotBubble from "./modules/Chatbotbubble";

function Page() {
  const [isLoading, setIsLoading] = useState(true);
  const changePageTitle = () => {
    document.title =
      "Stellar Studio | ¡La mejor opción para hacer crecer tu empresa en internet!";
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
          <ChatBotBubble />
          <div>
            <NewHeroSection />
            <StatsEs />
            <Products />
            <DividerGray />
            <Section />
            <DividerWhite />
            <Testimonials />
            <CallToAction />
          </div>
          <FooterEs />
        </div>
      )}
    </>
  );
}

export default Page;

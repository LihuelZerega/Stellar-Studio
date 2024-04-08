"use client";
import React from "react";
import NavBarEs from "@/components/NavBars/NavBarEs";
import HeroSectionWebPagesEs from "@/components/ServicesComponents/WebPagesComponents/PaginasWebComponents/HeroSectionWebPagesEs";
import PricesCradsEs from "@/components/ServicesComponents/WebPagesComponents/PaginasWebComponents/PricesCradsEs";
import ChatBotIAEs from "@/components/ServicesComponents/WebPagesComponents/PaginasWebComponents/Features/ChatBotIAEs";
import FeaturesEs from "@/components/ServicesComponents/WebPagesComponents/PaginasWebComponents/Features/FeaturesEs";
import FaqEs from "@/components/ServicesComponents/WebPagesComponents/PaginasWebComponents/FaqEs";
import FooterEs from "@/components/LandingPageComponents/Footers/FooterEs";

function page() {
  return (
    <div
      className="bg-cover bg-center bg-[#272526]"
      style={{
        backgroundImage:
          'url("https://res.cloudinary.com/dszjgdktf/image/upload/v1712251098/Stellar%20Studio/BackgroundServicesImage_hpumui.png")',
      }}
    >
      <NavBarEs />
      <HeroSectionWebPagesEs />
      <PricesCradsEs />
      <ChatBotIAEs />
      <FeaturesEs />
      <FaqEs />
      <FooterEs />
    </div>
  );
}

export default page;

"use client";
import React from "react";
import HeroSectionEs from "@/components/ServicesComponents/HeroSections/HeroSectionEs";
import PricesCradsEs from "@/components/ServicesComponents/WebPagesComponents/PaginasWebComponents/PricesCradsEs";
import FeaturesEs from "@/components/ServicesComponents/WebPagesComponents/PaginasWebComponents/Features/FeaturesEs";
import FooterEs from "@/components/LandingPageComponents/Footers/FooterEs";

function Page() {
  return (
    <div
      className="bg-cover bg-center bg-[#272526]"
      style={{
        backgroundImage:
          'url("https://res.cloudinary.com/dszjgdktf/image/upload/v1712251098/Stellar%20Studio/BackgroundServicesImage_hpumui.png")',
      }}
    >
      <HeroSectionEs />
      <PricesCradsEs />
      <FeaturesEs />
      <FooterEs />
    </div>
  );
}

export default Page;

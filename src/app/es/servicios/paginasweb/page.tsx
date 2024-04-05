"use client";
import React from "react";
import NavBarEs from "@/components/NavBars/NavBarEs";
import FooterEs from "@/components/LandingPageComponents/Footers/FooterEs";
import HeroSectionWebPagesEs from "@/components/ServicesComponents/WebPagesComponents/PaginasWebComponents/HeroSectionWebPagesEs";
import PricesCradsEs from "@/components/ServicesComponents/WebPagesComponents/PaginasWebComponents/PricesCradsEs";

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
      <FooterEs />
    </div>
  );
}

export default page;

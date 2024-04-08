"use client";
import React from "react";
import NavBarEs from "@/components/NavBars/NavBarEs";
import HeroSectionEmailCorporative from "@/components/ServicesComponents/EmailCorporativeComponents/Es/HeroSectionEmailCorporative";
import StepsEmailCorporative from "@/components/ServicesComponents/EmailCorporativeComponents/Es/StepsEmailCorporative";
import PricesCardsEs from "@/components/ServicesComponents/EmailCorporativeComponents/Es/PricesCradsEs";
import Features from "@/components/ServicesComponents/EmailCorporativeComponents/Es/Features";
import FaqEs from "@/components/ServicesComponents/EmailCorporativeComponents/Es/FaqEs";
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
      <HeroSectionEmailCorporative />
      <StepsEmailCorporative />
      <PricesCardsEs />
      <Features />
      <FaqEs />
      <FooterEs />
    </div>
  );
}

export default page;

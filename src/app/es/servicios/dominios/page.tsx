"use client";
import React from "react";
import NavBarEs from "@/components/NavBars/NavBarEs";
import HeroSectionDomain from "@/components/ServicesComponents/DomainComponents/Es/HeroSectionDomain";
import PopularDomains from "@/components/ServicesComponents/DomainComponents/Es/PopularDomains";
import Tips from "@/components/ServicesComponents/DomainComponents/Es/Tips";
import Features from "@/components/ServicesComponents/DomainComponents/Es/Features";
import FaqEs from "@/components/ServicesComponents/DomainComponents/Es/FaqEs";
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
      <HeroSectionDomain />
      <div className="lg:px-24 2xl:px-56">
        <PopularDomains />
        <Tips />
      </div>
      <Features />
      <FaqEs />
      <FooterEs />
    </div>
  );
}

export default page;

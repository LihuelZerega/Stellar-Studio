"use client";
import React from "react";
import NavBarEs from "@/components/NavBars/NavBarEs";
import HeroSectionEs from "@/components/LandingPageComponents/HeroSections/HeroSectionEs";
import BenefitsEs from "@/components/LandingPageComponents/Benefits/BenefitsEs";
import WorkProcessEs from "@/components/LandingPageComponents/WorksProcess/WorkProcessEs";
import TestimonialEs from "@/components/LandingPageComponents/Testimonials/TestimonialEs";
import FaqEs from "@/components/LandingPageComponents/Faqs/FaqEs";
import FooterEs from "@/components/LandingPageComponents/Footers/FooterEs";
import StatsEs from "@/components/LandingPageComponents/Stats/StatsEs";
import ChoosePlanEs from "@/components/LandingPageComponents/ChoosePlans/ChoosePlanEs";

function Page() {
  return (
    <div
      className="bg-cover bg-center bg-[#272526]"
      style={{
        backgroundImage:
          'url("https://res.cloudinary.com/dszjgdktf/image/upload/v1712257547/Stellar%20Studio/BackgroundHomeImage_hod7wp.png")',
      }}
    >
      <NavBarEs />
      <HeroSectionEs />
      <StatsEs />
      <ChoosePlanEs />
      <div className="pt-16">
        <BenefitsEs />
      </div>
      <div className="py-16">
        <WorkProcessEs />
      </div>
      <TestimonialEs />
      <div className="py-16">
        <FaqEs />
      </div>
      <FooterEs />
    </div>
  );
}

export default Page;

import React from "react";
import HeroSectionEs from "@/components/HeroSections/HeroSectionEs";
import BenefitsEs from "@/components/Benefits/BenefitsEs";
import WorkProcessEs from "@/components/WorksProcess/WorkProcessEs";
import TestimonialEs from "@/components/Testimonials/TestimonialEs";
import FaqEs from "@/components/Faqs/FaqEs";
import FooterEs from "@/components/Footers/FooterEs";
import StatsEs from "@/components/Stats/StatsEs";
import ChoosePlanEs from "@/components/ChoosePlans/ChoosePlanEs";

function Page() {
  return (
    <div className="bg-[#272526]">
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

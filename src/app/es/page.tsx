"use client";
import React, { useEffect, useState } from "react";
import NavBarEs from "@/components/NavBars/NavBarEs";
import HeroSectionEs from "@/components/LandingPageComponents/HeroSections/HeroSectionEs";
import HeroParallaxEs from "@/components/LandingPageComponents/HeroSections/HeroParallaxEs";
import NewHeroSection from "./home/NewHeroSection";
import BenefitsEs from "@/components/LandingPageComponents/Benefits/BenefitsEs";
import WorkProcessEs from "@/components/LandingPageComponents/WorksProcess/WorkProcessEs";
import TestimonialEs from "@/components/LandingPageComponents/Testimonials/TestimonialEs";
import FaqEs from "@/components/LandingPageComponents/Faqs/FaqEs";
import FooterEs from "@/components/LandingPageComponents/Footers/FooterEs";
import StatsEs from "@/components/LandingPageComponents/Stats/StatsEs";
import ChoosePlanEs from "@/components/LandingPageComponents/ChoosePlans/ChoosePlanEs";
import LoadingPage from "@/ui/LoadingPage";

import NavBar from "./home/NavBar";
import Herosection from "./home/Herosection";
import Brands from "./home/Brands";
import Products from "./home/Products";
import CallToAction from "./home/CallToAction";
import Testimonials from "./home/Testimonials";
import Section from "./home/Section";

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
        <div
          className="bg-cover bg-center bg-neutral-50"
          // style={{
          //   backgroundImage:
          //     'url("https://res.cloudinary.com/dszjgdktf/image/upload/v1712257547/Stellar%20Studio/BackgroundHomeImage_hod7wp.png")',
          // }}
        >
          <NavBar />
          {/* <div>
            <HeroParallaxEs />
            <div className="pt-16">
            <BenefitsEs />
            </div>
            <TestimonialEs />
            <div className="py-16">
            <FaqEs />
            </div>
          </div> */}
          <div>
            <NewHeroSection />
            <StatsEs />
            <Products />
            <Section />
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

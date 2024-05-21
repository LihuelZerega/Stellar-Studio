import React from "react";
import HeroSection from "./subcomponents/HeroSection";
import Features from "./subcomponents/Features";
import Solutions from "./subcomponents/Solutions";
import Resourses from "./subcomponents/Resourses";
import Pricing from "./subcomponents/Pricing";
import Footer from "./subcomponents/Footer";

function page() {
  return (
    <div>
      <HeroSection />
      <div id="features">
        <Features />
      </div>
      <div id="solutions">
        <Solutions />
      </div>
      <div id="resources">
        <Resourses />
      </div>
      <div id="pricing">
        <Pricing />
      </div>
      <Footer />
    </div>
  );
}

export default page;

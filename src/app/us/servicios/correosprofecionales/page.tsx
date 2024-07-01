"use client";
import React, { useEffect, useState } from "react";
import LoadingPage from "@/ui/LoadingPage";
import NavBar from "@/app/us/home/NavBar";
import PricesCards from "./subcomponents/PricesCrads";
import Features from "./subcomponents/Features";
import FooterEs from "@/components/LandingPageComponents/Footers/FooterEs";
import HeroSection from "./subcomponents/HeroSection";
import AlertService from "./subcomponents/AlertService";
import CallToAction from "./subcomponents/CallToAction";
import Faq from "./subcomponents/Faq";
import Steps from "./subcomponents/Steps";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function Page() {
  const [isLoading, setIsLoading] = useState(true);

  const changePageTitle = () => {
    document.title = "Stellar Studio | Impulsá tu imagen profecional";
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

  const [ref1, inView1] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [ref2, inView2] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [ref3, inView3] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <>
      {isLoading ? (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-neutral-50 z-50">
          <LoadingPage />
        </div>
      ) : (
        <div className="bg-cover bg-center bg-neutral-50">
          <NavBar />
          <HeroSection />
          <AlertService />
          <motion.div
            ref={ref1}
            initial="hidden"
            animate={inView1 ? "visible" : "hidden"}
            variants={itemVariants}
          >
            <Steps />
          </motion.div>
          <motion.div
            ref={ref2}
            initial="hidden"
            animate={inView2 ? "visible" : "hidden"}
            variants={itemVariants}
            id="precioscorreos"
          >
            <PricesCards />
          </motion.div>
          <motion.div
            ref={ref3}
            initial="hidden"
            animate={inView3 ? "visible" : "hidden"}
            variants={itemVariants}
          >
            <Features />
          </motion.div>
          <CallToAction />
          <Faq />
          <FooterEs />
        </div>
      )}
    </>
  );
}

export default Page;

"use client";
import React, { useEffect, useState } from "react";
import LoadingPage from "@/ui/LoadingPage";
import NavBar from "@/app/us/home/NavBar";
import FooterEs from "@/components/LandingPageComponents/Footers/FooterEs";
import HeroSection from "./subcomps/HeroSection";
import AboutStellarStudio from "@/components/CompaniaComponents/Es/AboutStellarStudio";
import ContactCompania from "@/components/CompaniaComponents/Es/ContactCompania";
import TecnologyCompania from "@/components/CompaniaComponents/Es/TecnologyCompania";
import History from "./subcomps/History";
import Commitment from "./subcomps/Commitment";
import OurObjetive from "./subcomps/OurObjetive";
import Tecnology from "./subcomps/Tecnology";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function Page() {
  const [isLoading, setIsLoading] = useState(true);
  const changePageTitle = () => {
    document.title = "Stellar Studio | Compañia";
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
  const [ref4, inView4] = useInView({
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
          <motion.div
            ref={ref1}
            initial="hidden"
            animate={inView1 ? "visible" : "hidden"}
            variants={itemVariants}
            id="sobrenosotros"
            className="bg-neutral-900 bg-opacity-30"
          >
            <History />
          </motion.div>
          <motion.div
            ref={ref2}
            initial="hidden"
            animate={inView2 ? "visible" : "hidden"}
            variants={itemVariants}
            id="valores"
          >
            <Commitment />
          </motion.div>
          <motion.div
            ref={ref3}
            initial="hidden"
            animate={inView3 ? "visible" : "hidden"}
            variants={itemVariants}
          >
            <OurObjetive />
          </motion.div>
          <motion.div
            ref={ref4}
            initial="hidden"
            animate={inView4 ? "visible" : "hidden"}
            variants={itemVariants}
            id="tecnologia"
          >
            <Tecnology />
          </motion.div>
          {/* <h1 id="contacto">
            <ContactCompania />
          </h1> */}
          <FooterEs />
        </div>
      )}
    </>
  );
}

export default Page;

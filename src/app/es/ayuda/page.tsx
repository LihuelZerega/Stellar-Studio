"use client";
import React, { useEffect, useState } from "react";
import LoadingPage from "@/ui/LoadingPage";
import NavBar from "../home/NavBar";
import Herosection from "./subcomps/HeroSection";
import FooterEs from "@/components/LandingPageComponents/Footers/FooterEs";
import HelpSteps from "@/app/es/ayuda/subcomps/HelpSteps";
import ContactForm from "@/app/es/ayuda/subcomps/ContactForm";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function Page() {
  const [isLoading, setIsLoading] = useState(true);
  const changePageTitle = () => {
    document.title = "Stellar Studio | Ayuda";
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

  return (
    <>
      {isLoading ? (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-neutral-50 z-50">
          <LoadingPage />
        </div>
      ) : (
        <div
          className="bg-cover bg-center bg-neutral-50"
          style={{
            backgroundImage:
              'url("https://res.cloudinary.com/dszjgdktf/image/upload/v1712251098/Stellar%20Studio/BackgroundServicesImage_hpumui.png")',
          }}
        >
          <NavBar />
          <Herosection />
          <motion.div
            ref={ref1}
            initial="hidden"
            animate={inView1 ? "visible" : "hidden"}
            variants={itemVariants}
            id="pasosayuda"
          >
            <HelpSteps />
          </motion.div>
          <motion.div
            ref={ref2}
            initial="hidden"
            animate={inView2 ? "visible" : "hidden"}
            variants={itemVariants}
            id="contactoayuda"
          >
            <ContactForm />
          </motion.div>
          <FooterEs />
        </div>
      )}
    </>
  );
}

export default Page;

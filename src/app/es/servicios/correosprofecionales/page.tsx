"use client";
import React, { useEffect, useState } from "react";
import NavBarEs from "@/components/NavBars/NavBarEs";
import HeroSectionEmailCorporative from "@/components/ServicesComponents/EmailCorporativeComponents/Es/HeroSectionEmailCorporative";
import StepsEmailCorporative from "@/components/ServicesComponents/EmailCorporativeComponents/Es/StepsEmailCorporative";
import PricesCardsEs from "@/components/ServicesComponents/EmailCorporativeComponents/Es/PricesCradsEs";
import Features from "@/components/ServicesComponents/EmailCorporativeComponents/Es/Features";
import FaqEs from "@/components/ServicesComponents/EmailCorporativeComponents/Es/FaqEs";
import FooterEs from "@/components/LandingPageComponents/Footers/FooterEs";
import { motion } from "framer-motion";
import { MdClose } from "react-icons/md";

function Page() {
  const changePageTitle = () => {
    document.title = "Stellar Studio | Impulsá tu imagen profecional";
  };

  const [maintenanceMode, setMaintenanceMode] = useState(true);

  const onClose = () => {
    setMaintenanceMode(false);
  };

  useEffect(() => {
    changePageTitle();
  }, []);

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
      <motion.div
        initial={{ opacity: 0, y: "50%" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ display: maintenanceMode ? "flex" : "none" }}
        className="fixed top-0 left-0 w-full h-full items-center justify-center bg-black bg-opacity-30 z-50"
      >
        <motion.div
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, type: "spring", stiffness: 120 }}
          className="bg-cover bg-center bg-white max-w-xs sm:max-w-md rounded-2xl overflow-hidden relative"
        >
          <button
            className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 focus:outline-none"
            onClick={onClose}
          >
            <MdClose size={24} />
          </button>
          <div
            className="p-8 rounded-lg"
            style={{
              backgroundImage:
                'url("https://res.cloudinary.com/dszjgdktf/image/upload/v1712688404/Stellar%20Studio/StellarStudioLogoMoon_n0vvcn.png")',
            }}
          >
            <h2 className="text-3xl text-gray-900 font-bold mb-4">
              Servicio de compra de{" "}
              <span className="text-[#a482fb]">correos profecionales</span> en
              mantenimiento
            </h2>
            <p className="text-lg text-gray-800">
              Estamos realizando mejoras en nuestro servicio de compra de
              dominios. Estará disponible pronto. Disculpa las molestias.
            </p>
          </div>
        </motion.div>
      </motion.div>
      <StepsEmailCorporative />
      <div id="prices">
        <PricesCardsEs />
      </div>
      <Features />
      <FaqEs />
      <FooterEs />
    </div>
  );
}

export default Page;

"use client";
import React from "react";
import { motion } from "framer-motion";
import { RxDoubleArrowDown } from "react-icons/rx";

function HeroSectionEmailCorporative() {
  return (
    <div className="mx-auto max-w-2xl 2xl:max-w-4xl py-48 2xl:py-56 px-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-center"
      >
        <h1 className="text-[#a482fb]">Correos Profecionales</h1>
        <h1 className="text-3xl font-bold tracking-tight text-white sm:text-3xl md:text-5xl xl:text-4xl 2xl:text-5xl">
          Impulsa tu imagen profesional en línea con un correo electrónico
          personalizado.
        </h1>
        <div className="mt-6 flex items-center justify-center gap-x-6">
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 2.5, repeat: Infinity }}
          >
            <RxDoubleArrowDown
              className="text-3xl text-white"
              aria-hidden="true"
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default HeroSectionEmailCorporative;
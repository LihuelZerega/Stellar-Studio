"use client";
import React from "react";
import { motion } from "framer-motion";
import { RxDoubleArrowDown } from "react-icons/rx";

function HeroSectionWebPagesEs() {
  return (
    <div className="mx-auto max-w-2xl 2xl:max-w-4xl py-48 2xl:py-56 px-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-center"
      >
        <h1 className="text-[#a482fb]">Paginas Web</h1>
        <h1 className="text-5xl font-bold tracking-tight text-white sm:text-5xl 2xl:text-6xl">
          Elija el modelo que se adapte a tus necesidades
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-400">
          Elija un modelo que incluya las mejores funciones para atraer a su
          audiencia, generar lealtad en los clientes e impulsar las ventas.
        </p>
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

export default HeroSectionWebPagesEs;

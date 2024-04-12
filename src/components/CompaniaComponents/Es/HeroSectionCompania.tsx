"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroSectionEs() {
  return (
    <div className="relative pt-48 pb-12 bg-transparent xl:pt-60 sm:pb-16 lg:pb-32 xl:pb-48 2xl:pb-56">
      <div className="absolute inset-0">
        <img
          className="object-cover w-full h-full"
          src="https://res.cloudinary.com/dszjgdktf/image/upload/v1712935670/Grupo_2_jxjdw5.png"
          alt=""
        />
      </div>

      <div className="relative">
        <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
          <div className="w-full lg:w-2/3 xl:w-1/2">
            <h1 className="text-[#a482fb] font-semibold">Compañia</h1>
            <p className="mt-6 tracking-tighter text-white">
              <span className="font-sans font-bold text-4xl sm:text-5xl lg:text-6xl">
                Descubre Nuestra{" "}
                <span className="text-[#a482fb]">Historia</span> y Nuestro{" "}
                <span className="text-[#a482fb]">Compromiso</span>
              </span>
            </p>
            <p className="mt-6 font-sans text-base font-normal leading-7 text-white text-opacity-70">
              Stellar Studio es el fruto de una visión audaz y una pasión por la
              tecnología y la innovación.
            </p>

            <div className="flex items-center mt-5 space-x-3 sm:space-x-4">
              <Link href="#sobrenosotros">
                <motion.button
                  whileTap={{ scale: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  className="w-fit rounded-xl bg-[#a482fb] px-4 h-12 text-xs sm:text-sm font-semibold text-white shadow-sm hover:bg-[#8e62fc] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a482fb]"
                >
                  Conoce Nuestra Historia
                </motion.button>
              </Link>

              <Link href="#tecnologia">
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  whileHover={{ scale: 1.05 }}
                  className="w-fit rounded-xl bg-tansparent border-2 border-[#a482fb] px-4 h-12 text-xs sm:text-sm font-semibold text-white shadow-sm hover:bg-[#8e62fc] hover:bg-opacity-10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a482fb]"
                >
                  Descubre Más
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

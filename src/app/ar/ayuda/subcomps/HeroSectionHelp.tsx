"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroSectionEs() {
  return (
    <div className="relative pt-48 pb-12 bg-transparent xl:pt-60 sm:pb-16 lg:pb-32 xl:pb-48 2xl:pb-56">
      <div className="absolute inset-0">
        <img
          className="object-cover w-full h-full"
          src="https://res.cloudinary.com/dszjgdktf/image/upload/v1712935668/Sin_t%C3%ADtulo-1_b63dss.png"
          alt=""
        />
      </div>

      <div className="relative">
        <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
          <div className="w-full lg:w-2/3 xl:w-1/2">
            <h1 className="text-[#a482fb] font-semibold">Ayuda</h1>
            <p className="mt-3 tracking-tighter text-white">
              <span className="font-sans font-bold text-4xl sm:text-5xl lg:text-6xl">
                Atencion al cliente
              </span>
            </p>

            <div className="flex items-center mt-8 space-x-3 sm:space-x-4">
              <Link href="#contactoayuda">
                <motion.button
                  whileTap={{ scale: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  className="w-fit rounded-xl bg-[#a482fb] px-4 h-12 text-xs sm:text-sm font-semibold text-white shadow-sm hover:bg-[#8e62fc] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a482fb]"
                >
                  Comunicate
                </motion.button>
              </Link>

              <Link href="#pasosayuda">
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

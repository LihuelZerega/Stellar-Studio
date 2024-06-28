"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import HomeHeroBgMobile from "@/images/HomeHeroBgMobile.jpg";
import HomeHeroBgDeskctop from "@/images/HomeHeroBgDeskctop.jpg";

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1.5 } },
};

const slideIn = {
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 1 } },
};

function NewHeroSection() {
  return (
    <div className="h-[100vh] w-full border-b border-ui-border-base relative bg-ui-bg-subtle bg-black">
      <div className="block xl:hidden">
        <Image
          src={HomeHeroBgMobile}
          alt=""
          className="w-full h-[100vh] object-cover"
        />
      </div>
      <div className="hidden xl:block">
        <Image
          src={HomeHeroBgDeskctop}
          alt=""
          className="w-full h-[100vh] object-cover"
        />
      </div>

      <motion.div
        className="absolute inset-0 z-10 bottom-64 sm:bottom-96 lg:bottom-[600px] xl:bottom-0 xl:-left-[620px] 2xl:-left-[800px] flex flex-col justify-center items-center text-left gap-6"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <motion.div
          className="mx-auto max-w-lg lg:max-w-2xl xl:max-w-2xl 2xl:max-w-2xl px-3 py-32 sm:py-48 lg:py-56"
          initial="hidden"
          animate="visible"
          variants={slideIn}
        >
          <div className="hidden sm:mb-4 sm:flex sm:justify-center xl:justify-start">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-neutral-200 ring-1 ring-neutral-200/10 hover:ring-neutral-200/20">
              Stellar Studio 2.0{" "}
            </div>
          </div>
          <div className="text-center xl:text-left">
            <h1 className="text-5xl font-bold tracking-tight text-neutral-100 sm:text-5xl lg:text-6xl 2xl:text-7xl">
              Impulsá tu presencia en línea hoy
            </h1>
            <p className="px-3 sm:px-0 mt-6 text-sm md:text-base 2xl:text-xl leading-4 md:leading-8 text-neutral-200">
              El camino hacia una presencia web espectacular comienza aquí.
              Descubre nuestras soluciones listas para usar.
            </p>
            <div className="mt-10 flex items-center justify-center xl:justify-start gap-x-6">
              <a
                href="/es/servicios/paginasweb"
                className="rounded-md bg-[#a482fb] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#a482fb] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a482fb]"
              >
                Comenzar ahora
              </a>
              <a
                href="#"
                className="text-sm font-semibold leading-6 text-neutral-200"
              >
                Leer mas <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default NewHeroSection;
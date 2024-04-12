"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

function HeroSectionWebPagesEs() {
  return (
    <>
      <section>
        <div className="relative bg-transparent py-36 2xl:py-64">
          <div className="absolute inset-0 hidden lg:block">
            <img
              className="object-cover object-right-bottom w-full h-full"
              src="https://res.cloudinary.com/dszjgdktf/image/upload/v1712939913/Sin_t%C3%ADtulo-3_hfowi3.png"
              alt=""
            />
          </div>

          <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="max-w-xl mx-auto text-center lg:max-w-md xl:max-w-xl 2xl:max-w-2xl lg:text-left lg:mx-0">
              <h1 className="text-3xl font-bold text-white sm:text-4xl xl:text-5xl 2xl:text-6xl xl:leading-tight">
                Destacá Tu <span className="text-[#a482fb]">presencia</span> en Línea con Nuestras <span className="text-[#a482fb]">Páginas Web</span>
              </h1>
              <p className="mt-8 text-base font-normal leading-7 text-gray-400 lg:max-w-md xl:pr-0 lg:pr-16">
                Elija un modelo que incluya las mejores funciones para atraer a
                su audiencia, generar lealtad en los clientes e impulsar las
                ventas.
              </p>

              <div className="flex items-center justify-center mt-8 space-x-5 xl:mt-16 lg:justify-start">
              <Link href="#modelosweb">
                <motion.button
                  whileTap={{ scale: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  className="w-fit rounded-xl bg-[#a482fb] px-4 h-12 text-xs sm:text-sm font-semibold text-white shadow-sm hover:bg-[#8e62fc] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a482fb]"
                >
                  Ver Modelos
                </motion.button>
              </Link>

              <Link href="#caracteristicasweb">
                <motion.button
                  whileTap={{ scale: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  className="w-fit rounded-xl bg-tansparent border-2 border-[#a482fb] px-4 h-12 text-xs sm:text-sm font-semibold text-white shadow-sm hover:bg-[#8e62fc] hover:bg-opacity-10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a482fb]"
                >
                  Beneficios
                </motion.button>
              </Link>
              </div>
            </div>
          </div>

          <div className="mt-8 lg:hidden">
            <img
              className="object-cover w-full h-full"
              src="https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/hero/1/bg.png"
              alt=""
            />
          </div>
        </div>
      </section>

      {/* <div className="mx-auto max-w-2xl 2xl:max-w-4xl py-48 2xl:py-56 px-6">
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
      </div> */}
    </>
  );
}

export default HeroSectionWebPagesEs;

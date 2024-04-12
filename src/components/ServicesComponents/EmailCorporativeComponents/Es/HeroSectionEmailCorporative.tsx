"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

function HeroSectionEmailCorporative() {
  return (
    <>
      <div className="relative bg-transparent py-36 md:py-24 2xl:py-36">
        <div className="absolute bottom-0 right-0 overflow-hidden lg:inset-y-0">
          <img
            className="w-auto h-full"
            src="https://d33wubrfki0l68.cloudfront.net/1e0fc04f38f5896d10ff66824a62e466839567f8/699b5/images/hero/3/background-pattern.png"
            alt=""
          />
        </div>

        <section className="relative py-12 sm:py-16 lg:pt-20 lg:pb-36">
          <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid grid-cols-1 gap-y-8 lg:items-center sm:gap-y-20 xl:grid-cols-5">
              <div className="text-center xl:col-span-2 xl:text-left md:px-16 lg:px-0">
                <div className="max-w-sm mx-auto md:max-w-full">
                  <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl sm:leading-tight lg:text-5xl lg:leading-tight">
                    Impulsá tu imagen con un{" "}
                    <span className="text-[#a482fb]">correo</span> electrónico
                    <span className="text-[#a482fb]"> profecional</span>
                  </h1>

                  <div className="mt-8 lg:mt-12">
                    <p className="mt-4 text-base sm:text-lg md:text-base lg:text-lg text-white">
                      Únase como más de{" "}
                      <span className="font-bold">
                        200 Pequeñas y Medianas empresas
                      </span>{" "}
                      que han mejoraron radicalmente su imagen profesional
                    </p>
                  </div>
                </div>

                <div className="mt-8 sm:flex sm:items-center sm:justify-center xl:justify-start space-x-2 sm:space-x-5 lg:mt-12">
                  <Link href="#precioscorreos">
                    <motion.button
                      whileTap={{ scale: 0.5 }}
                      whileHover={{ scale: 1.05 }}
                      className="w-fit rounded-xl bg-[#a482fb] px-4 h-12 text-xs sm:text-sm font-semibold text-white shadow-sm hover:bg-[#8e62fc] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a482fb]"
                    >
                      Ver Planes
                    </motion.button>
                  </Link>

                  <Link href="#caracteristicascorreos">
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

              <div className="xl:col-span-3">
                <img
                  className="w-full mx-auto scale-110"
                  src="https://d33wubrfki0l68.cloudfront.net/29c501c64b21014b3f2e225abe02fe31fd8f3a5c/f866d/images/hero/3/illustration.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default HeroSectionEmailCorporative;

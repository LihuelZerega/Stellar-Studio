"use client";
import React from "react";
import { motion } from "framer-motion";
import { RxDoubleArrowDown } from "react-icons/rx";
import Link from "next/link";

export default function HeroSectionEs() {
  return (
    // <div className="">
    //   <div className="relative isolate px-6 pt-14 lg:px-8">
    //     <div
    //       className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
    //       aria-hidden="true"
    //     >
    //       <div
    //         className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#a482fb] to-[#a482fb] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
    //         style={{
    //           clipPath:
    //             "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 88.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
    //         }}
    //       />
    //     </div>

    //     <div className="mx-auto max-w-2xl 2xl:max-w-4xl py-48 2xl:py-56">
    //       <motion.div
    //         initial={{ opacity: 0, y: -20 }}
    //         animate={{ opacity: 1, y: 0 }}
    //         transition={{ duration: 0.6, delay: 0.3 }}
    //         className="text-center"
    //       >
    //         <h1 className="text-[#a482fb]">Compania</h1>
    //         <h1 className="text-5xl font-bold tracking-tight text-white sm:text-5xl 2xl:text-6xl">
    //           ¿Quienes somos?
    //         </h1>
    //         <p className="mt-6 text-lg leading-8 text-gray-400">
    //           Stellar Studio es el fruto de una visión audaz y una pasión por la
    //           tecnología y la innovación.
    //         </p>
    //         <div className="mt-6 flex items-center justify-center gap-x-6">
    //           <motion.div
    //             animate={{ y: [0, 20, 0] }}
    //             transition={{ duration: 2.5, repeat: Infinity }}
    //           >
    //             <RxDoubleArrowDown
    //               className="text-3xl text-white"
    //               aria-hidden="true"
    //             />
    //           </motion.div>
    //         </div>
    //       </motion.div>
    //     </div>

    //     <div
    //       className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
    //       aria-hidden="true"
    //     >
    //       <div
    //         className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#a482fb] to-[#a482fb] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
    //         style={{
    //           clipPath:
    //             "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
    //         }}
    //       />
    //     </div>
    //   </div>
    // </div>

    <>
      <div className="relative pt-48 pb-12 bg-black xl:pt-60 sm:pb-16 lg:pb-32 xl:pb-48 2xl:pb-56">
        <div className="absolute inset-0">
          <img
            className="object-cover w-full h-full"
            src="https://res.cloudinary.com/dszjgdktf/image/upload/v1712580801/Stellar%20Studio/CTA_lqjt06.png"
            alt=""
          />
        </div>

        <div className="relative">
          <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
            <div className="w-full lg:w-2/3 xl:w-1/2">
              <h1 className="text-[#a482fb]">Compañia</h1>
              <p className="mt-6 tracking-tighter text-white">
                <span className="font-sans font-normal text-5xl sm:text-6xl lg:text-7xl">
                  Descubre Nuestra Historia y Nuestro Compromiso
                </span>
              </p>
              <p className="mt-6 font-sans text-base font-normal leading-7 text-white text-opacity-70">
                Stellar Studio es el fruto de una visión audaz y una pasión por
                la tecnología y la innovación.
              </p>

              <div className="flex items-center mt-5 space-x-3 sm:space-x-4">
                <Link href="#sobrenosotros">
                  <motion.button
                    whileTap={{ scale: 0.5 }}
                    whileHover={{ scale: 1.05 }}
                    className="w-fit rounded-xl bg-[#a482fb] px-4 h-12 text-sm font-semibold text-white shadow-sm hover:bg-[#8e62fc] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a482fb]"
                  >
                    Conoce Nuestra Historia
                  </motion.button>
                </Link>

                <Link href="#tecnologia">
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    whileHover={{ scale: 1.05 }}
                    className="w-fit rounded-xl bg-tansparent border-2 border-[#a482fb] px-4 h-12 text-sm font-semibold text-white shadow-sm hover:bg-[#8e62fc] hover:bg-opacity-10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a482fb]"
                  >
                    Descubre Más
                  </motion.button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

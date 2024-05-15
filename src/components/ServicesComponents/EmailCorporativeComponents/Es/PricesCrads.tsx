"use client";
import React from "react";
import { motion } from "framer-motion";
import { Chip } from "@nextui-org/react";

function PricesCrads() {
  return (
    <div className="bg-neutral-50">
      <section className="py-12 md:py-24 pb-4 border-t-1 border-neutral-200">
        <div className="px-4 mx-auto max-w-6xl sm:px-6 lg:px-8">
          <div className="grid max-w-md grid-cols-1 gap-24 mx-auto mt-8 text-left lg:max-w-full lg:grid-cols-2">
            {/* Card 1 */}

            <div className="overflow-hidden border-2 border-gray-200 bg-white rounded-2xl">
              <div className="p-8 xl:px-12">
                <h1 className="text-xl font-semibold text-[#a482fb]">
                  Emprendedor
                </h1>

                <div className="h-14">
                  <h1 className="text-base mt-4 text-gray-500">
                    Una solución eficiente y accesible para tus necesidades de
                    correo electrónico empresarial.
                  </h1>
                </div>

                <div className="flex flex-row items-end justify-start">
                  <p className="text-6xl font-bold text-neutral-700 mt-12">
                    $8
                  </p>
                  <p className="ml-2 mt-3 text-base text-gray-500">/Mes</p>
                </div>

                <motion.button
                  whileTap={{ scale: 0.95 }}
                  whileHover={{ scale: 1.01 }}
                  className="w-full inline-flex items-center justify-center px-10 py-4 mt-5 text-lg rounded-md font-semibold text-white transition-all bg-[#a482fb] shadow-sm hover:bg-[#8e62fc] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a482fb]"
                >
                  Comprar Ahora
                </motion.button>

                <div className="text-transparent border-b-1 border-neutral-400 select-none my-5">
                  s
                </div>

                <ul className="inline-flex flex-col items-start space-y-5 text-left my-6">
                  <li className="inline-flex items-center space-x-2">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-[#a482fb]"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span className="text-base font-medium text-gray-600">
                      {" "}
                      10 GB de almacenamiento en email{" "}
                    </span>
                  </li>

                  <li className="inline-flex items-center space-x-2">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-[#a482fb]"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span className="text-base font-medium text-gray-600">
                      {" "}
                      10 reglas de reenvío{" "}
                    </span>
                  </li>

                  <li className="inline-flex items-center space-x-2">
                    <svg
                      className="h-5 text-[#a482fb] flex-shrink-0w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span className="text-base font-medium text-gray-600">
                      {" "}
                      Alias de email{" "}
                    </span>
                  </li>

                  <li className="inline-flex items-center space-x-2">
                    <svg
                      className="h-5 text-[#a482fb] flex-shrink-0w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span className="text-base font-medium text-gray-600">
                      {" "}
                      Verificación antivirus{" "}
                    </span>
                  </li>

                  <li className="inline-flex items-center space-x-2">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-[#a482fb]"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span className="pb-0.5 text-base font-medium text-gray-600">
                      {" "}
                      Antispam avanzado{" "}
                    </span>
                  </li>

                  <li className="inline-flex items-center space-x-2">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-[#a482fb]"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span className="pb-0.5 text-base font-medium text-gray-600">
                      {" "}
                      Infraestructura basada en la nube{" "}
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Card 2 */}
            <div className="overflow-hidden border-2 border-gray-200 bg-white rounded-2xl">
              <div className="p-8 xl:px-12">
                <div className="flex flex-row items-center justify-between">
                  <h1 className="text-xl font-semibold text-[#a482fb]">
                    Corporativo
                  </h1>
                  <Chip className="bg-[#a482fb] text-white">Mas Vendido</Chip>
                </div>

                <div className="h-14">
                  <h1 className="text-base mt-4 text-gray-500">
                    Todo lo que necesitas y más, con espacio más que suficiente
                    para gestionar y características premium.
                  </h1>
                </div>

                <div className="flex flex-row items-end justify-start">
                  <p className="text-6xl font-bold text-neutral-700 mt-12">
                    $12
                  </p>
                  <p className="ml-2 mt-3 text-base text-gray-500">/Mes</p>
                </div>

                <motion.button
                  whileTap={{ scale: 0.95 }}
                  whileHover={{ scale: 1.01 }}
                  className="w-full inline-flex items-center justify-center px-10 py-4 mt-5 text-lg rounded-md font-semibold text-white transition-all bg-[#a482fb] shadow-sm hover:bg-[#b192ff] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a482fb]"
                >
                  Comprar Ahora
                </motion.button>

                <div className="text-transparent border-b-1 border-neutral-400 select-none my-5">
                  s
                </div>

                <ul className="inline-flex flex-col items-start space-y-5 text-left my-6">
                  <li className="inline-flex items-center space-x-2">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-[#a482fb]"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span className="text-base font-medium text-gray-600">
                      {" "}
                      50 GB de almacenamiento en email{" "}
                    </span>
                  </li>

                  <li className="inline-flex items-center space-x-2">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-[#a482fb]"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span className="text-base font-medium text-gray-600">
                      {" "}
                      50 reglas de reenvío{" "}
                    </span>
                  </li>

                  <li className="inline-flex items-center space-x-2">
                    <svg
                      className="h-5 text-[#a482fb] flex-shrink-0w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span className="text-base font-medium text-gray-600">
                      {" "}
                      Alias de email{" "}
                    </span>
                  </li>

                  <li className="inline-flex items-center space-x-2">
                    <svg
                      className="h-5 text-[#a482fb] flex-shrink-0w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span className="text-base font-medium text-gray-600">
                      {" "}
                      Verificación antivirus{" "}
                    </span>
                  </li>

                  <li className="inline-flex items-center space-x-2">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-[#a482fb]"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span className="pb-0.5 text-base font-medium text-gray-600">
                      {" "}
                      Antispam avanzado{" "}
                    </span>
                  </li>

                  <li className="inline-flex items-center space-x-2">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-[#a482fb]"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span className="pb-0.5 text-base font-medium text-gray-600">
                      {" "}
                      Infraestructura basada en la nube{" "}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PricesCrads;

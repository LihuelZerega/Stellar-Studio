"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Tabs, Tab } from "@nextui-org/react";
import { FiSearch } from "react-icons/fi";
import { PiMagicWand } from "react-icons/pi";
import useTypewriter from "react-typewriter-hook";

function HeroSectionDomain() {
  const placeholderTexts = [
    "StellarStudio.com",
    "TiendaDeportiva.shop",
    "PortalEducativo.edu",
    "SitioDeViajes.travel",
    "ConsultoriaLegal.law",
  ];

  const placeholderTextsIA = [
    "Plataforma de tutoría en línea para estudiantes de secundaria.",
    "Aplicación móvil para el seguimiento y gestión de hábitos saludables.",
    "Servicio de entrega de comestibles orgánicos directamente del productor al consumidor.",
    "Servicio de consultoría en línea para pequeñas empresas en crecimiento.",
  ];

  const [currentPlaceholderIndex, setCurrentPlaceholderIndex] = useState(0);
  const [currentPlaceholderIndexIA, setCurrentPlaceholderIndexIA] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentPlaceholderIndex((prevIndex) => {
        return (prevIndex + 1) % placeholderTexts.length;
      });
    }, 8000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentPlaceholderIndexIA((prevIndex) => {
        return (prevIndex + 1) % placeholderTexts.length;
      });
    }, 8000);

    return () => clearInterval(intervalId);
  }, []);

  const typewriterText = useTypewriter(
    placeholderTexts[currentPlaceholderIndex]
  );
  const typewriterTextIA = useTypewriter(
    placeholderTextsIA[currentPlaceholderIndexIA]
  );

  return (
    <>
      <section>
        <div className="relative py-44 2xl:py-64">
          <div className="absolute inset-0">
            <img
              className="object-cover object-right w-full h-full lg:object-center mt-12 opacity-40 sm:opacity-60"
              src="https://res.cloudinary.com/dszjgdktf/image/upload/v1712955380/Sin_t%C3%ADtulo-222_tvt3no.png"
              alt=""
            />
          </div>

          <div className="absolute inset-0 bg-rtansparent bg-opacity-40"></div>

          <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="max-w-lg mx-auto text-center xl:max-w-3xl">
              <h1 className="text-3xl font-bold text-white sm:text-4xl xl:text-5xl mb-12">
                ¡Asegura tu identidad en línea!
              </h1>
              <div className="mt-6 flex items-center justify-center gap-x-6">
                <div className="flex w-full flex-col">
                  <Tabs
                    aria-label="Options"
                    className="flex flex-row items-center justify-center"
                    radius="sm"
                  >
                    <Tab key="Encontrá un Dominio" title="Encontrá un Dominio">
                      <section className="flex flex-col items-center justify-center space-y-4 w-full ">
                        <div className="flex flex-row items-center justify-start space-x-3 bg-white h-12 px-3 rounded-xl w-full max-w-2xl">
                          <FiSearch className="text-2xl font-bold text-[#a482fb]" />
                          <input
                            className="flex flex-row items-center w-full focus:outline-white rounded-md text-gray-500"
                            placeholder={`Busca tu dominio ideal. Ej: ${
                              typewriterText ?? ""
                            }`}
                          />
                        </div>
                        <div className="w-full">
                          <motion.button
                            whileTap={{ scale: 0.95 }}
                            whileHover={{ scale: 1.05 }}
                            className="w-full max-w-2xl rounded-xl bg-[#a482fb] px-4 h-12 text-sm font-semibold text-white shadow-sm hover:bg-[#8e62fc] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a482fb]"
                          >
                            Buscar
                          </motion.button>
                        </div>
                      </section>
                    </Tab>

                    <Tab
                      key="Generá un dominio con IA"
                      title="Generá un dominio con IA"
                    >
                      <section className="flex flex-col items-center justify-center w-full">
                        <div className="flex flex-row items-start pt-4 justify-start space-x-3 bg-white h-24 px-3 rounded-xl w-full">
                          <PiMagicWand className="text-2xl text-[#a482fb]" />
                          <textarea
                            className="flex flex-row items-start w-full focus:outline-white rounded-md text-gray-500"
                            placeholder={`Dale una breve descripción de tu proyecto a la IA.\nEj: ${
                              typewriterTextIA ?? ""
                            }`}
                            style={{ resize: "none" }}
                          />
                          <hr />
                        </div>
                        <div className="w-full mt-4">
                          <motion.button
                            whileTap={{ scale: 0.95 }}
                            whileHover={{ scale: 1.05 }}
                            className="w-full rounded-xl bg-[#a482fb] px-4 h-12 text-sm font-semibold text-white shadow-sm hover:bg-[#8e62fc] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a482fb]"
                          >
                            Generar
                          </motion.button>
                        </div>
                      </section>
                    </Tab>
                  </Tabs>
                </div>
              </div>

              <div className="grid max-w-md grid-cols-2 mx-auto mt-8 md:mt-16 lg:mt-24 xl:mt-32 gap-x-6 grid-col-2">
                <div>
                  <p className="text-4xl font-bold text-white">38,942</p>
                  <p className="mt-2 text-sm font-medium text-gray-300">
                    Dominios buscados
                  </p>
                </div>

                <div>
                  <p className="text-4xl font-bold text-white">14,344</p>
                  <p className="mt-2 text-sm font-medium text-gray-300">
                    Generados con IA
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#a482fb] to-[#a482fb] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 88.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>

        <div className="mx-auto max-w-2xl 2xl:max-w-4xl py-48 2xl:py-56 px-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center"
          >
            <h1 className="text-[#a482fb]">Dominios</h1>
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-3xl md:text-5xl xl:text-4xl 2xl:text-5xl">
              ¡Asegura tu identidad en línea!
            </h1>
            <div className="mt-6 flex items-center justify-center gap-x-6">
              <div className="flex w-full flex-col">
                <Tabs
                  aria-label="Options"
                  className="flex flex-row items-center justify-center"
                  radius="sm"
                >
                  <Tab key="Encontrá un Dominio" title="Encontrá un Dominio">
                    <section className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0 sm:space-x-4 w-full">
                      <div className="flex flex-row items-center justify-start space-x-3 bg-white h-12 px-3 rounded-xl w-full">
                        <FiSearch className="text-2xl font-bold text-[#a482fb]" />
                        <input
                          className="flex flex-row items-center w-full focus:outline-white rounded-md text-gray-500"
                          placeholder={`Busca tu dominio ideal. Ej: ${
                            typewriterText ?? ""
                          }`}
                        />
                      </div>
                      <div>
                        <motion.button
                          whileTap={{ scale: 0.95 }}
                          whileHover={{ scale: 1.05 }}
                          className="rounded-xl bg-[#a482fb] px-4 h-12 text-sm font-semibold text-white shadow-sm hover:bg-[#8e62fc] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a482fb]"
                        >
                          Buscar
                        </motion.button>
                      </div>
                    </section>
                  </Tab>

                  <Tab
                    key="Generá un dominio con IA"
                    title="Generá un dominio con IA"
                  >
                    <section className="flex flex-col items-center justify-center w-full">
                      <div className="flex flex-row items-start pt-4 justify-start space-x-3 bg-white h-24 px-3 rounded-xl w-full">
                        <PiMagicWand className="text-2xl text-[#a482fb]" />
                        <textarea
                          className="flex flex-row items-start w-full focus:outline-white rounded-md text-gray-500"
                          placeholder={`Dale una breve descripción de tu proyecto a la IA.\nEj: ${
                            typewriterTextIA ?? ""
                          }`}
                          style={{ resize: "none" }}
                        />
                        <hr />
                      </div>
                      <div className="w-full mt-4">
                        <motion.button
                          whileTap={{ scale: 0.95 }}
                          whileHover={{ scale: 1.05 }}
                          className="w-full rounded-xl bg-[#a482fb] px-4 h-12 text-sm font-semibold text-white shadow-sm hover:bg-[#8e62fc] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a482fb]"
                        >
                          Generar
                        </motion.button>
                      </div>
                    </section>
                  </Tab>
                </Tabs>
              </div>
            </div>
          </motion.div>

          <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#a482fb] to-[#a482fb] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
        </div>
      </div> */}
    </>
  );
}

export default HeroSectionDomain;

"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import CreativeDesings from "@/images/CreativeDesignMockUp.png";
import WebPagesLandingMockup from "@/images/WebPagesLandingMockup.png";
import DomainLandingMockup from "@/images/DomainLandingMockup.png";
import ResponsiveDesings from "@/images/ResponsivenessMockup.png";
import SeoOptimized from "@/images/SeoMockup.png";
import { RiExternalLinkLine } from "react-icons/ri";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";

const BenefitsEs: React.FC = () => {
  const [ref1, inView1] = useInView({ threshold: 0.2 });
  const [ref2, inView2] = useInView({ threshold: 0.2 });
  const [ref3, inView3] = useInView({ threshold: 0.2 });
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();

  useEffect(() => {
    if (inView1) {
      controls1.start({ opacity: 1, y: 0 });
    } else {
      controls1.start({ opacity: 0, y: 20 });
    }
  }, [controls1, inView1]);

  useEffect(() => {
    if (inView2) {
      controls2.start({ opacity: 1, y: 0 });
    } else {
      controls2.start({ opacity: 0, y: 20 });
    }
  }, [controls2, inView2]);

  useEffect(() => {
    if (inView3) {
      controls3.start({ opacity: 1, y: 0 });
    } else {
      controls3.start({ opacity: 0, y: 20 });
    }
  }, [controls3, inView3]);

  return (
    <div className="flex flex-col items-center justify-center gap-y-16 mx-auto max-w-7xl px-6 lg:px-8">
      <motion.section
        ref={ref1}
        animate={controls1}
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className={`flex flex-col-reverse sm:flex-row-reverse items-center justify-between gap-6 lg:px-12 py-6 w-full`}
      >
        <div className="hidden sm:block justify-center w-full">
          <Image
            src={WebPagesLandingMockup}
            width={1000}
            height={1000}
            alt="WebPagesLandingMockup"
          />
        </div>
        <div className="w-full">
          <h1 className="font-bold text-5xl text-[#a482fb]">Paginas Web</h1>
          <p className="text-sm sm:text-base text-white mt-6">
            Desarrolla tu presencia online con una página web profesional y
            moderna. Consigue más clientes y haz crecer tu negocio.
          </p>
          <div className="grid grid-cols-2 gap-2 xl:grid-cols-1 lg:gap-0">
            <div className="max-w-md xl:max-w-2xl text-left">
              <div className="text-md text-gray-100 font-light mt-4">
                <div className="inline-flex xl:items-center justify-start space-x-2">
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
                  <h1 className="font-semibold text-sm md:text-md text-white">
                    Diseño y desarrollo personalizados
                  </h1>
                </div>
              </div>
            </div>

            <div className="max-w-md xl:max-w-2xl text-left">
              <div className="text-md font-light mt-4">
                <div className="inline-flex xl:items-center justify-start space-x-2">
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
                  <h1 className="font-semibold text-sm md:text-md text-white">
                    Seguridad y rendimiento
                  </h1>
                </div>
              </div>
            </div>

            <div className="max-w-md xl:max-w-2xl text-left">
              <div className="text-md font-light mt-4">
                <div className="inline-flex xl:items-center justify-start space-x-2">
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
                  <h1 className="font-semibold text-sm md:text-md text-white">
                    Estrategias de SEO y Posicionamiento
                  </h1>
                </div>
              </div>
            </div>

            <div className="max-w-md xl:max-w-2xl text-left">
              <div className="text-md font-light mt-4">
                <div className="inline-flex xl:items-center justify-start space-x-2">
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
                  <h1 className="font-semibold text-sm md:text-md text-white">
                    Innovación continua
                  </h1>
                </div>
              </div>
            </div>

            <Link href="es/servicios/paginasweb">
              <div className="flex flex-row items-center justify-center sm:justify-start space-x-1 mt-4 font-semibold text-base md:text-lg text-white hover:text-[#a482fb] hover:scale-105 transition-all duration-300 cursor-pointer">
                <h1>Ver planes</h1>
                <RiExternalLinkLine />
              </div>
            </Link>
          </div>
        </div>
      </motion.section>

      <motion.section
        ref={ref2}
        animate={controls2}
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className={`flex flex-col-reverse sm:flex-row items-center justify-between gap-6 lg:px-12 py-6 w-full`}
      >
        <div className="hidden sm:block justify-center w-full">
          <Image
            src={DomainLandingMockup}
            width={280}
            height={280}
            alt="DomainLandingMockup"
          />
        </div>
        <div className="w-full h-96">
          <h1 className="font-bold text-5xl text-[#a482fb]">Dominios</h1>
          <p className="text-sm sm:text-base text-white mt-6">
            Consigue el nombre perfecto para tu página web y correo electrónico.
            Protege tu marca y aumenta tu visibilidad online.
          </p>

          <div className="grid grid-cols-2 gap-2 xl:grid-cols-1 lg:gap-0">
            <div className="max-w-md xl:max-w-2xl text-left">
              <div className="text-md text-gray-100 font-light mt-4">
                <div className="inline-flex xl:items-center justify-start space-x-2">
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
                  <h1 className="font-semibold text-sm md:text-md text-white">
                    Diseño y desarrollo personalizados
                  </h1>
                </div>
              </div>
            </div>

            <div className="max-w-md xl:max-w-2xl text-left">
              <div className="text-md font-light mt-4">
                <div className="inline-flex xl:items-center justify-start space-x-2">
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
                  <h1 className="font-semibold text-sm md:text-md text-white">
                    Seguridad y rendimiento
                  </h1>
                </div>
              </div>
            </div>

            <div className="max-w-md xl:max-w-2xl text-left">
              <div className="text-md font-light mt-4">
                <div className="inline-flex xl:items-center justify-start space-x-2">
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
                  <h1 className="font-semibold text-sm md:text-md text-white">
                    Estrategias de SEO y Posicionamiento
                  </h1>
                </div>
              </div>
            </div>

            <div className="max-w-md xl:max-w-2xl text-left">
              <div className="text-md font-light mt-4">
                <div className="inline-flex xl:items-center justify-start space-x-2">
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
                  <h1 className="font-semibold text-sm md:text-md text-white">
                    Innovación continua
                  </h1>
                </div>
              </div>
            </div>

            <Link href="es/servicios/dominios">
              <div className="flex flex-row items-center justify-center sm:justify-start space-x-1 mt-4 font-semibold text-base md:text-lg text-white hover:text-[#a482fb] hover:scale-105 transition-all duration-300 cursor-pointer">
                <h1>Ver planes</h1>
                <RiExternalLinkLine />
              </div>
            </Link>
          </div>
          
        </div>
      </motion.section>

      <motion.section
        ref={ref3}
        animate={controls3}
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className={`flex flex-col-reverse sm:flex-row-reverse items-center justify-between gap-6 lg:px-12 py-6 w-full`}
      >
        <div className="hidden sm:flex justify-center w-full">
          <Image
            src="https://framerusercontent.com/images/U8BliLSYurKQHRyLYQC9YGr3sHU.png?scale-down-to=512"
            width={330}
            height={330}
            alt="WebPagesLandingMockup"
          />
        </div>
        <div className="w-full h-80">
          <h1 className="font-bold text-5xl text-[#a482fb]">
            Correo Profecional
          </h1>
          <p className="text-sm sm:text-base text-white mt-6">
            Da una imagen profesional a tu negocio con un correo electrónico
            personalizado. Mejora la comunicación con tus clientes y
            colaboradores.
          </p>

          <div className="grid grid-cols-2 gap-2 xl:grid-cols-1 lg:gap-0">
            <div className="max-w-md xl:max-w-2xl text-left">
              <div className="text-md text-gray-100 font-light mt-4">
                <div className="inline-flex xl:items-center justify-start space-x-2">
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
                  <h1 className="font-semibold text-sm md:text-md text-white">
                    Diseño y desarrollo personalizados
                  </h1>
                </div>
              </div>
            </div>

            <div className="max-w-md xl:max-w-2xl text-left">
              <div className="text-md font-light mt-4">
                <div className="inline-flex xl:items-center justify-start space-x-2">
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
                  <h1 className="font-semibold text-sm md:text-md text-white">
                    Seguridad y rendimiento
                  </h1>
                </div>
              </div>
            </div>

            <div className="max-w-md xl:max-w-2xl text-left">
              <div className="text-md font-light mt-4">
                <div className="inline-flex xl:items-center justify-start space-x-2">
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
                  <h1 className="font-semibold text-sm md:text-md text-white">
                    Estrategias de SEO y Posicionamiento
                  </h1>
                </div>
              </div>
            </div>

            <div className="max-w-md xl:max-w-2xl text-left">
              <div className="text-md font-light mt-4">
                <div className="inline-flex xl:items-center justify-start space-x-2">
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
                  <h1 className="font-semibold text-sm md:text-md text-white">
                    Innovación continua
                  </h1>
                </div>
              </div>
            </div>
          </div>

          <Link href="es/servicios/correosprofecionales">
            <div className="flex flex-row items-center justify-center sm:justify-start space-x-1 mt-4 font-semibold text-base md:text-lg text-white hover:text-[#a482fb] hover:scale-105 transition-all duration-300 cursor-pointer">
              <h1>Ver planes</h1>
              <RiExternalLinkLine />
            </div>
          </Link>
        </div>
      </motion.section>
    </div>
  );
};

export default BenefitsEs;

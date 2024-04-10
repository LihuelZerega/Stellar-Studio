"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import CreativeDesings from "@/images/CreativeDesignMockUp.png";
import WebPagesLandingMockup from "@/images/WebPagesLandingMockup.png";
import DomainLandingMockup from "@/images/DomainLandingMockup.png";
import ResponsiveDesings from "@/images/ResponsivenessMockup.png";
import SeoOptimized from "@/images/SeoMockup.png";
import {
  HiOutlineAtSymbol,
  HiOutlineCloud,
  HiOutlineDatabase,
  HiOutlineDesktopComputer,
  HiOutlineFingerPrint,
  HiOutlineGlobeAlt,
  HiOutlineLockClosed,
  HiOutlineMailOpen,
  HiOutlineMap,
  HiOutlineSparkles,
} from "react-icons/hi";
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
        className={`flex flex-col-reverse sm:flex-row-reverse items-center justify-between lg:px-12 py-6 w-full`}
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
          <div className="flex flex-row font-bold text-4xl lg:text-5xl space-x-2 items-center text-[#a482fb]">
            <HiOutlineDesktopComputer />
            <h1>Paginas Web</h1>
          </div>
          <p className="text-sm sm:text-base text-neutral-300 mt-6">
            Desarrolla tu presencia online con una página web profesional y
            moderna. Consigue más clientes y haz crecer tu negocio.
          </p>
          <div className="grid grid-cols-2 gap-2 xl:grid-cols-1 lg:gap-0">
            <div className="max-w-md xl:max-w-2xl text-left">
              <div className="text-md text-gray-100 font-light mt-4">
                <div className="inline-flex xl:items-center justify-start space-x-1 lg:space-x-2">
                  <HiOutlineSparkles className="text-[#a482fb] text-3xl lg:text-xl" />
                  <h1 className="font-semibold text-sm md:text-md text-white">
                    Diseño y desarrollo personalizados
                  </h1>
                </div>
              </div>
            </div>

            <div className="max-w-md xl:max-w-2xl text-left">
              <div className="text-md font-light mt-4">
                <div className="inline-flex xl:items-center justify-start space-x-1 lg:space-x-2">
                  <HiOutlineLockClosed className="text-[#a482fb] text-3xl lg:text-xl" />
                  <h1 className="font-semibold text-sm md:text-md text-white">
                    Seguridad y rendimiento
                  </h1>
                </div>
              </div>
            </div>

            <div className="max-w-md xl:max-w-2xl text-left">
              <div className="text-md font-light mt-4">
                <div className="inline-flex xl:items-center justify-start space-x-1 lg:space-x-2">
                  <HiOutlineMap className="text-[#a482fb] text-3xl lg:text-xl" />
                  <h1 className="font-semibold text-sm md:text-md text-white">
                    Estrategias de SEO y Posicionamiento
                  </h1>
                </div>
              </div>
            </div>

            <div className="max-w-md xl:max-w-2xl text-left">
              <div className="text-md font-light mt-4">
                <div className="inline-flex xl:items-center justify-start space-x-1 lg:space-x-2">
                  <HiOutlineFingerPrint className="text-[#a482fb] text-2xl lg:text-xl" />
                  <h1 className="font-semibold text-sm md:text-md text-white">
                    Innovación continua
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <Link href="es/servicios/paginasweb">
            <div className="flex flex-row items-center justify-center sm:justify-start space-x-1 mt-8 sm:mt-4 font-semibold text-base md:text-lg text-white hover:text-[#a482fb] hover:scale-105 transition-all duration-300 cursor-pointer">
              <h1>Ver planes</h1>
              <RiExternalLinkLine />
            </div>
          </Link>
        </div>
      </motion.section>

      <div className="w-full max-w-xs border-b border-neutral-400">
        <h1 className="text-transparent">g</h1>
      </div>

      <motion.section
        ref={ref2}
        animate={controls2}
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className={`flex flex-col-reverse sm:flex-row items-center justify-between lg:px-12 py-6 w-full`}
      >
        <div className="hidden sm:block justify-center w-full">
          <Image
            src={DomainLandingMockup}
            width={280}
            height={280}
            alt="DomainLandingMockup"
          />
        </div>
        <div className="w-full sm:h-72">
          <div className="flex flex-row font-bold text-4xl lg:text-5xl space-x-2 items-center text-[#a482fb]">
            <HiOutlineGlobeAlt />
            <h1>Dominios</h1>
          </div>
          <p className="text-sm sm:text-base text-white mt-6">
            Consigue el nombre perfecto para tu página web y correo electrónico.
            Protege tu marca y aumenta tu visibilidad online.
          </p>

          <div className="grid grid-cols-2 gap-2 xl:grid-cols-1 lg:gap-0">
            <div className="max-w-md xl:max-w-2xl text-left">
              <div className="text-md text-gray-100 font-light mt-4">
                <div className="inline-flex xl:items-center justify-start space-x-1 lg:space-x-2">
                  <HiOutlineSparkles className="text-[#a482fb] text-3xl lg:text-xl" />
                  <h1 className="font-semibold text-xs md:text-md text-white">
                    Dominios Populares / Generacon con IA
                  </h1>
                </div>
              </div>
            </div>

            <div className="max-w-md xl:max-w-2xl text-left">
              <div className="text-md font-light mt-4">
                <div className="inline-flex xl:items-center justify-start space-x-1 lg:space-x-2">
                  <HiOutlineSparkles className="text-[#a482fb] text-2xl lg:text-xl" />
                  <h1 className="font-semibold text-sm md:text-md text-white">
                    Aseguramos tu privacidad
                  </h1>
                </div>
              </div>
            </div>

            <div className="max-w-md xl:max-w-2xl text-left">
              <div className="text-md font-light mt-4">
                <div className="inline-flex xl:items-center justify-start space-x-1 lg:space-x-2">
                  <HiOutlineSparkles className="text-[#a482fb] text-xl lg:text-xl" />
                  <h1 className="font-semibold text-sm md:text-md text-white">
                    Disponibilidad
                  </h1>
                </div>
              </div>
            </div>

            <div className="max-w-md xl:max-w-2xl text-left">
              <div className="text-md font-light mt-4">
                <div className="inline-flex xl:items-center justify-start space-x-1 lg:space-x-2">
                  <HiOutlineSparkles className="text-[#a482fb] text-xl lg:text-xl" />
                  <h1 className="font-semibold text-sm md:text-md text-white">
                    Renovación
                  </h1>
                </div>
              </div>
            </div>
          </div>

          <Link href="es/servicios/dominios">
            <div className="flex flex-row items-center justify-center sm:justify-start space-x-1 mt-8 sm:mt-4 font-semibold text-base md:text-lg text-white hover:text-[#a482fb] hover:scale-105 transition-all duration-300 cursor-pointer">
              <h1>Ver planes</h1>
              <RiExternalLinkLine />
            </div>
          </Link>
        </div>
      </motion.section>

      <div className="w-full max-w-xs border-b border-neutral-400">
        <h1 className="text-transparent">g</h1>
      </div>

      <motion.section
        ref={ref3}
        animate={controls3}
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className={`flex flex-col-reverse sm:flex-row-reverse items-center justify-between lg:px-12 py-6 w-full`}
      >
        <div className="hidden sm:flex justify-center w-full">
          <Image
            src="https://framerusercontent.com/images/U8BliLSYurKQHRyLYQC9YGr3sHU.png?scale-down-to=512"
            width={330}
            height={330}
            alt="WebPagesLandingMockup"
          />
        </div>
        <div className="w-full">
          <div className="flex flex-row font-bold text-4xl lg:text-5xl space-x-2 items-center text-[#a482fb]">
            <HiOutlineMailOpen className="text-7xl" />
            <h1>Correos Profecionales</h1>
          </div>
          <p className="text-sm sm:text-base text-white mt-6">
            Da una imagen profesional a tu negocio con un correo electrónico
            personalizado. Mejora la comunicación con tus clientes y
            colaboradores.
          </p>

          <div className="grid grid-cols-2 gap-2 xl:grid-cols-1 lg:gap-0">
            <div className="max-w-md xl:max-w-2xl text-left">
              <div className="text-md text-gray-100 font-light mt-4">
                <div className="inline-flex xl:items-center justify-start space-x-1 lg:space-x-2">
                  <HiOutlineDatabase className="text-[#a482fb] text-2xl lg:text-xl" />
                  <h1 className="font-semibold text-sm md:text-md text-white">
                    Gran almacenamiento
                  </h1>
                </div>
              </div>
            </div>

            <div className="max-w-md xl:max-w-2xl text-left">
              <div className="text-md font-light mt-4">
                <div className="inline-flex xl:items-center justify-start space-x-1 lg:space-x-2">
                  <HiOutlineAtSymbol className="text-[#a482fb] text-xl lg:text-xl" />
                  <h1 className="font-semibold text-sm md:text-md text-white">
                    Alias de email
                  </h1>
                </div>
              </div>
            </div>

            <div className="max-w-md xl:max-w-2xl text-left">
              <div className="text-md font-light mt-4">
                <div className="inline-flex xl:items-center justify-start space-x-1 lg:space-x-2">
                  <HiOutlineLockClosed className="text-[#a482fb] text-3xl lg:text-xl" />
                  <h1 className="font-semibold text-sm md:text-md text-white">
                    Seguros, privados y sin anuncios
                  </h1>
                </div>
              </div>
            </div>

            <div className="max-w-md xl:max-w-2xl text-left">
              <div className="text-md font-light mt-4">
                <div className="inline-flex xl:items-center justify-start space-x-1 lg:space-x-2">
                  <HiOutlineCloud className="text-[#a482fb] text-3xl lg:text-xl" />
                  <h1 className="font-semibold text-sm md:text-md text-white">
                    Infraestructura basada en la nube
                  </h1>
                </div>
              </div>
            </div>
          </div>

          <Link href="es/servicios/correosprofecionales">
            <div className="flex flex-row items-center justify-center sm:justify-start space-x-1 mt-8 sm:mt-4 font-semibold text-base md:text-lg text-white hover:text-[#a482fb] hover:scale-105 transition-all duration-300 cursor-pointer">
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

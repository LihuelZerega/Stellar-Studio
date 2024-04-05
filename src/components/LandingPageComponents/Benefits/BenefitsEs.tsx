"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import CreativeDesings from "@/images/CreativeDesignMockUp.png";
import ResponsiveDesings from "@/images/ResponsivenessMockup.png";
import SeoOptimized from "@/images/SeoMockup.png";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

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
    <div className="flex flex-col items-center justify-center space-y-24 px-6 sm:px-12 lg:px-16 xl:px-24">
      <motion.section
        ref={ref1}
        animate={controls1}
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className={`flex flex-col-reverse sm:flex-row-reverse items-center gap-6 max-w-5xl 2xl:max-w-7xl`}
      >
        <div className="w-full sm:w-1/2">
          <Image
            src={CreativeDesings}
            width={500}
            height={500}
            alt="CreativeDesings"
          />
        </div>
        <div className="w-full sm:w-1/2 mb-0 md:mb-12 lg:mb-28 xl:mb-32">
          <h1 className="font-bold text-3xl xl:text-4xl 2xl:text-5xl text-[#a482fb] mb-2">
            Diseños creativos
          </h1>
          <p className="font-light text-sm mb-4 w-full max-w-xl text-white">
            Nuestro equipo de diseñadores altamente creativos dará vida a su
            visión en línea con diseños únicos y atractivos que captarán la
            atención de sus visitantes.
          </p>
        </div>
      </motion.section>

      <motion.section
        ref={ref2}
        animate={controls2}
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className={`flex flex-col-reverse sm:flex-row items-center gap-6`}
      >
        <div className="w-full sm:w-1/2">
          <Image src={ResponsiveDesings} width={600} height={600} alt={""} />
        </div>
        <div className="w-full sm:w-1/2 mb-0 md:mb-24 lg:mb-48 xl:mb-72">
          <h1 className="font-bold text-3xl xl:text-4xl 2xl:text-5xl text-[#a482fb] mb-2">
            Responsividad
          </h1>
          <p className="font-light text-sm mb-4 w-full max-w-xl text-white">
            Todos nuestros sitios web son totalmente responsivos, lo que
            significa que se verán y funcionarán perfectamente en cualquier
            dispositivo, desde computadoras de escritorio hasta teléfonos
            móviles.
          </p>
        </div>
      </motion.section>

      <motion.section
        ref={ref3}
        animate={controls3}
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className={`flex flex-col-reverse sm:flex-row-reverse items-center gap-6`}
      >
        <div className="w-full sm:w-1/2">
          <Image src={SeoOptimized} width={700} height={700} alt={""} />
        </div>
        <div className="w-full sm:w-1/2 mb-0 lg:mb-16 xl:mb-32">
          <h1 className="font-bold text-3xl xl:text-4xl 2xl:text-5xl text-[#a482fb] mb-2">
            Optimizacion de SEO
          </h1>
          <p className="font-light text-sm mb-4 w-full max-w-xl text-white">
            Implementamos estrategias de optimización de motores de búsqueda
            (SEO) para que tu sitio web aparezca en los principales resultados
            de búsqueda, aumentando tu visibilidad online.{" "}
          </p>
        </div>
      </motion.section>
    </div>
  );
};

export default BenefitsEs;

"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Astronaut10 from "@/images/Astronauts/Astronaut10.png";
import Astronaut11 from "@/images/Astronauts/Astronaut11.png";
import Astronaut12 from "@/images/Astronauts/Astronaut12.png";

function Features() {
  const [ref1, inView1] = useInView({ threshold: 0.2 });
  const [ref2, inView2] = useInView({ threshold: 0.2 });
  const [ref3, inView3] = useInView({ threshold: 0.2 });
  const [ref4, inView4] = useInView({ threshold: 0.2 });
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();
  const controls4 = useAnimation();

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

  useEffect(() => {
    if (inView4) {
      controls4.start({ opacity: 1, y: 0 });
    } else {
      controls4.start({ opacity: 0, y: 20 });
    }
  }, [controls4, inView4]);

  return (
    <>
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 space-y-24 my-32">
        <motion.div
          ref={ref1}
          animate={controls1}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row"
        >
          <div className="w-full md:w-1/2">
            <h1 className="text-3xl font-bold text-[#a482fb]">
              Aseguramos tu privacidad
            </h1>
            <p className="text-left mt-6 text-lg leading-8 text-gray-300">
              Protegé tus datos personales con Stellar Studio. Nuestro servicio
              de protección de privacidad de dominio es gratuito y mantendrá tu
              información personal oculta de los spammers.
            </p>
            <p className="text-left mt-6 text-lg leading-8 text-gray-300">
              Al registrar un dominio web, tu información personal queda visible
              al público en bases de datos como WHOIS.
            </p>
            <p className="text-left mt-6 text-lg leading-8 text-gray-300">
              Para asegurar una mayor seguridad, reemplazamos tus datos
              personales con información genérica del sitio.
            </p>
          </div>
          <div className="flex justify-center w-full md:w-1/2">
            <motion.div
              className="h-96 w-96"
              animate={{
                y: [-5, 5],
                scale: [1, 1.05, 1],
                rotate: [0, 2, 0],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            >
              <Image
                src={Astronaut10}
                width={2000}
                height={2000}
                alt="Astronaut10"
              />
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          ref={ref2}
          animate={controls2}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row-reverse"
        >
          <div className="w-full md:w-1/2">
            <h1 className="text-3xl font-bold text-[#a482fb]">
              Disponibilidad
            </h1>
            <p className="text-left mt-6 text-lg leading-8 text-gray-300">
              Encuentra el dominio perfecto que esté disponible y se ajuste a
              tus necesidades y preferencias. Con herramientas de búsqueda
              avanzada, verificarás fácilmente la disponibilidad y podrás
              registrar el dominio que elijas al instante.
            </p>
          </div>
          <div className="flex justify-center w-full md:w-1/2">
            <motion.div
              className="h-96 w-96"
              animate={{
                y: [-5, 5],
                scale: [1, 1.05, 1],
                rotate: [0, 2, 0],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            >
              <Image
                src={Astronaut12}
                width={2000}
                height={2000}
                alt="Astronaut12"
              />
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          ref={ref3}
          animate={controls3}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row"
        >
          <div className="w-full md:w-1/2">
            <h1 className="text-3xl font-bold text-[#a482fb]">Renovación</h1>
            <p className="text-left mt-6 text-lg leading-8 text-gray-300">
              Mantén tu dominio activo con sencillas opciones de renovación y
              gestión de registros. Programa recordatorios automáticos para
              renovar tu dominio a tiempo y evita la pérdida de tu presencia en
              línea.
            </p>
          </div>
          <div className="flex justify-center w-full md:w-1/2">
            <motion.div
              className="h-96 w-96"
              animate={{
                y: [-5, 5],
                scale: [1, 1.05, 1],
                rotate: [0, 2, 0],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            >
              <Image
                src={Astronaut11}
                width={2000}
                height={2000}
                alt="Astronaut11"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>

      <section className="p-6 my-10 sm:my-16 lg:my-24 mx-auto py-10 sm:py-16 lg:py-24 relative isolate overflow-hidden px-6 pt-16 shadow-2xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24">
        <div className="absolute inset-0">
          <img
            className="object-cover object-right w-full h-full lg:object-center opacity-40 sm:opacity-60"
            src="https://res.cloudinary.com/dszjgdktf/image/upload/v1713286589/CtaBackground2_ro5hyi.png"
            alt="Cta Background 2"
          />
        </div>

        <div className="relative flex flex-col items-center justify-center px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-col items-center justify-center text-center">
            <h2 className="text-3xl font-bold leading-light text-white sm:text-4xl lg:text-5xl mb-4">
              ¡Descubre nuestros planes ahora y lleva tu proyecto digital al
              siguiente nivel!
            </h2>
            <div className="max-w-lg my-4 text-gray-200">
              <p className="text-base font-medium">
                Explora nuestros planes de dominio y asegura tu presencia en
                línea de manera rápida y sencilla. Desde nombres de dominio
                estándar hasta extensiones especializadas, tenemos la solución
                perfecta para ti
              </p>
            </div>
          </div>

          <div className="my-6">
            <Link href="/es/servicios/dominios#dominiospopulares">
              <motion.button
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.05 }}
                className="rounded-md bg-[#a482fb] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#8e62fc] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a482fb]"
              >
                ¡Empieza ahora!
              </motion.button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Features;

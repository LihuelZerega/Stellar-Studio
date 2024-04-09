"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

function Features() {
  return (
    <>
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 space-y-24 my-32">
        <div className="flex flex-col md:flex-row">
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
          <div className="w-full md:w-1/2"></div>
        </div>

        <div className="flex flex-col md:flex-row-reverse">
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
          <div className="w-full md:w-1/2"></div>
        </div>

        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2">
            <h1 className="text-3xl font-bold text-[#a482fb]">Renovación</h1>
            <p className="text-left mt-6 text-lg leading-8 text-gray-300">
              Mantén tu dominio activo con sencillas opciones de renovación y
              gestión de registros. Programa recordatorios automáticos para
              renovar tu dominio a tiempo y evita la pérdida de tu presencia en
              línea.
            </p>
          </div>
          <div className="w-full md:w-1/2"></div>
        </div>
      </div>

      <section className="glass-container bg-opacity-5 backdrop-filter backdrop-blur-lg bg-[#a482fb] p-6 my-10 sm:my-16 lg:my-24 mx-auto py-10 sm:py-16 lg:py-24 relative isolate overflow-hidden px-6 pt-16 shadow-2xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24">
        <div className="flex flex-col items-center justify-center px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-col items-center justify-center text-center">
            <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl mb-4">
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
            <Link href="#domains">
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

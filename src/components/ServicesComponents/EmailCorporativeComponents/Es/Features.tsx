"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Astronaut4 from "@/images/Astronauts/Astronaut4.png";

function Features() {
  return (
    <>
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 space-y-24">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2">
            <h1 className="text-3xl font-bold text-[#a482fb]">
              Mail con dominio propio para tu negocio
            </h1>
            <p className="text-left mt-6 text-lg leading-8 text-gray-300">
              Mejorá tu identidad online e impulsá tu email marketing,
              inspirando confianza y profesionalismo en tus clientes al usar un
              mail empresarial.
            </p>
          </div>
          <div className="flex justify-center w-full md:w-1/2">
            <motion.div
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
                src={Astronaut4}
                width={2000}
                height={2000}
                alt="Astronaut4"
              />
            </motion.div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row-reverse">
          <div className="w-full md:w-1/2">
            <h1 className="text-3xl font-bold text-[#a482fb]">
              Emails seguros, privados y sin anuncios
            </h1>
            <p className="text-left mt-6 text-lg leading-8 text-gray-300">
              Con los planes de correo electrónico corporativo obtenés medidas
              de seguridad superiores para proteger tus datos de terceros no
              autorizados. Nuestros servidores cuentan con protección avanzada
              para prevenir ataques de spam, malware y phishing.
            </p>
          </div>
          <div className="flex justify-center w-full md:w-1/2">
            <motion.div
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
                src={Astronaut4}
                width={2000}
                height={2000}
                alt="Astronaut4"
              />
            </motion.div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2">
            <h1 className="text-3xl font-bold text-[#a482fb]">
              Amplio espacio de almacenamiento para impulsar tu sitio web
            </h1>
            <p className="text-left mt-6 text-lg leading-8 text-gray-300">
              Si querés hacer crecer tu negocio, necesitás los recursos
              adecuados. Nuestros servicios de email gestionado ofrecen hasta 50
              GB de almacenamiento: es muchísimo espacio para recibir y enviar
              correos electrónicos. Podés enviar 3000 emails por día y
              configurar hasta 50 reglas de reenvío automático para redirigir
              mensajes hacia otras cuentas.
            </p>
          </div>
          <div className="flex justify-center w-full md:w-1/2">
            <motion.div
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
                src={Astronaut4}
                width={2000}
                height={2000}
                alt="Astronaut4"
              />
            </motion.div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row-reverse">
          <div className="w-full md:w-1/2">
            <h1 className="text-3xl font-bold text-[#a482fb]">
              Manejá tus emails desde cualquier lugar
            </h1>
            <p className="text-left mt-6 text-lg leading-8 text-gray-300">
              Ya sea que quieras enviar correos electrónicos desde una
              computadora o un teléfono móvil, tenemos lo que buscás. El
              servicio de email hosting te permite conectarte a dispositivos
              móviles iOS o Android y a clientes de correo como Thunderbird y
              Outlook.
            </p>
          </div>
          <div className="flex justify-center w-full md:w-1/2">
            <motion.div
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
                src={Astronaut4}
                width={2000}
                height={2000}
                alt="Astronaut4"
              />
            </motion.div>
          </div>
        </div>
      </div>
      <section className="p-6 my-10 sm:my-16 lg:my-24 mx-auto py-10 sm:py-16 lg:py-24 relative isolate overflow-hidden px-6 pt-16 shadow-2xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24">
        <div className="absolute inset-0">
          <img
            className="object-cover object-right w-full h-full lg:object-center opacity-40 sm:opacity-60"
            src="https://res.cloudinary.com/dszjgdktf/image/upload/v1713356264/CtaBackground3_gxiooy.png"
            alt="Cta Background 3"
          />
        </div>

        <div className="relative flex flex-col items-center justify-center px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-col items-center justify-center text-center">
            <h2 className="text-3xl font-bold leading-light text-white sm:text-4xl lg:text-5xl mb-4">
              ¡Llevá tu comunicación empresarial al siguiente nivel!
            </h2>
            <div className="max-w-lg my-4 text-gray-200">
              <p className="text-base font-medium">
                Descubrí nuestros planes de correos electrónicos profesionales y
                llevá tu comunicación empresarial al siguiente nivel
              </p>
            </div>
          </div>

          <div className="my-6">
            <Link href="/es/servicios/correosprofecionales#precioscorreos">
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

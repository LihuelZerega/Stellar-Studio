"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

function Features() {
  return (
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 space-y-24">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl font-bold text-[#a482fb]">
            Mail con dominio propio para tu negocio
          </h1>
          <p className="text-left mt-6 text-lg leading-8 text-gray-300">
            Mejorá tu identidad online e impulsá tu email marketing, inspirando
            confianza y profesionalismo en tus clientes al usar un mail
            empresarial.
          </p>
        </div>
        <div className="w-full md:w-1/2"></div>
      </div>

      <div className="flex flex-col md:flex-row-reverse">
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl font-bold text-[#a482fb]">
            Emails seguros, privados y sin anuncios
          </h1>
          <p className="text-left mt-6 text-lg leading-8 text-gray-300">
            Con los planes de correo electrónico corporativo obtenés medidas de
            seguridad superiores para proteger tus datos de terceros no
            autorizados. Nuestros servidores cuentan con protección avanzada
            para prevenir ataques de spam, malware y phishing.
          </p>
        </div>
        <div className="w-full md:w-1/2"></div>
      </div>

      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl font-bold text-[#a482fb]">
            Amplio espacio de almacenamiento para impulsar tu sitio web
          </h1>
          <p className="text-left mt-6 text-lg leading-8 text-gray-300">
            Si querés hacer crecer tu negocio, necesitás los recursos adecuados.
            Nuestros servicios de email gestionado ofrecen hasta 50 GB de
            almacenamiento: es muchísimo espacio para recibir y enviar correos
            electrónicos. Podés enviar 3000 emails por día y configurar hasta 50
            reglas de reenvío automático para redirigir mensajes hacia otras
            cuentas.
          </p>
        </div>
        <div className="w-full md:w-1/2"></div>
      </div>

      <div className="flex flex-col md:flex-row-reverse">
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl font-bold text-[#a482fb]">
            Manejá tus emails desde cualquier lugar
          </h1>
          <p className="text-left mt-6 text-lg leading-8 text-gray-300">
            Ya sea que quieras enviar correos electrónicos desde una computadora
            o un teléfono móvil, tenemos lo que buscás. El servicio de email
            hosting te permite conectarte a dispositivos móviles iOS o Android y
            a clientes de correo como Thunderbird y Outlook.
          </p>
        </div>
        <div className="w-full md:w-1/2"></div>
      </div>

      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl font-bold text-[#a482fb]">
            Configuración rápida y simple
          </h1>
          <p className="text-left mt-6 text-lg leading-8 text-gray-300">
            Nuestro panel de control y la interfaz de correo corporativo cuentan
            con un diseño intuitivo, de manera que cualquier persona pueda
            usarlo fácilmente. Además, gracias a nuestra función de
            configuración automática, podrás tener tu correo en varios
            dispositivos.
          </p>
        </div>
        <div className="w-full md:w-1/2"></div>
      </div>

      <section className="bg-transparent bg-opacity-10 py-10 sm:py-16 lg:py-24 relative isolate overflow-hidden px-6 pt-16 sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
        <svg
          viewBox="0 0 1024 1024"
          className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
          aria-hidden="true"
        >
          <circle
            cx={512}
            cy={512}
            r={512}
            fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
            fillOpacity="0.7"
          />
          <defs>
            <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
              <stop stopColor="#7775D6" />
              <stop offset={1} stopColor="#E935C1" />
            </radialGradient>
          </defs>
        </svg>
        <div className="flex flex-col items-center justify-center px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-col items-center justify-center text-center">
            <h2 className="text-3xl font-bold leading-tight text-white sm:text-2xl lg:text-4xl mb-4">
              Da el siguiente paso hacia la profesionalidad con un correo
              electrónico propio
            </h2>
            <div className="max-w-lg my-4 text-gray-200">
              <p className="text-base font-medium">
                Descubre nuestros planes y elige el que mejor se adapte a tus
                necesidades para dar confianza y profesionalismo en tus clientes.
              </p>
            </div>
          </div>

          <div className="my-6">
            <Link href="#">
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
    </div>
  );
}

export default Features;

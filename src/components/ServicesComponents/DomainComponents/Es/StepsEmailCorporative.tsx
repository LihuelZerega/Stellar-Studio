import React from "react";
import { motion } from "framer-motion";

export default function StepsEmailCorporative() {
  return (
    <div className="py-6 sm:py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3 items-start justify-start">
          <motion.section
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex fle-row items-center space-x-2">
              <div>
                <h1 className="text-7xl font-bold text-[#a482fb]">01</h1>
              </div>
              <div className="flex flex-col items-start justify-start">
                <h1 className="text-2xl font-bold text-white">Elegí tu plan</h1>
                <h1 className="text-2xl font-bold text-white">de correo</h1>
              </div>
            </div>
            <p className="text-left mt-6 text-lg leading-8 text-gray-300">
              ¿Estás iniciando una empresa? Elegí el plan que mejor se adapte a
              sus necesidades, ya sea el Plan Emprendedor o el Plan Corporativo.
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="flex fle-row items-center space-x-2">
              <div>
                <h1 className="text-7xl font-bold text-[#a482fb]">02</h1>
              </div>
              <div className="flex flex-col items-start justify-start">
                <h1 className="text-2xl font-bold text-white">Asesoramiento</h1>
                <h1 className="text-2xl font-bold text-white">personalizado</h1>
              </div>
            </div>
            <p className="text-left mt-6 text-lg leading-8 text-gray-300">
              Una vez seleccionado el plan, nuestro equipo se pone en
              contacto. Guiaremos al cliente a través del proceso de compra,
              responde a sus preguntas y asegura que el plan elegido sea el más
              adecuado para sus requerimientos.
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <div className="flex fle-row items-center space-x-2">
              <div>
                <h1 className="text-7xl font-bold text-[#a482fb]">03</h1>
              </div>
              <div className="flex flex-col items-start justify-start">
                <h1 className="text-2xl font-bold text-white">
                  Adquisición del
                </h1>
                <h1 className="text-2xl font-bold text-white">
                  Correo Profesional
                </h1>
              </div>
            </div>
            <p className="text-left mt-6 text-lg leading-8 text-gray-300">
              Después del asesoramiento, confirmación del plan y proceso de
              compra, el cliente adquiere su correo profesional asociado al plan
              seleccionado de manera inmediata.
            </p>
          </motion.section>
        </div>
      </div>
    </div>
  );
}

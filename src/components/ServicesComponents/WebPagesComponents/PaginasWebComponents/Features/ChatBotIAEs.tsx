import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function ChatBotIAEs() {
  const [ref1, inView1] = useInView({ threshold: 0.2 });
  const controls1 = useAnimation();

  useEffect(() => {
    if (inView1) {
      controls1.start({ opacity: 1, y: 0 });
    } else {
      controls1.start({ opacity: 0, y: 20 });
    }
  }, [controls1, inView1]);

  return (
    <motion.div
      ref={ref1}
      animate={controls1}
      initial={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.6 }}
      className="px-4 py-4 mx-auto max-w-7xl sm:px-6 lg:px-8 mt-16"
    >
      <section className="glass-container bg-opacity-5 backdrop-filter backdrop-blur-lg bg-[#a482fb] shadow-lg p-6 border-2 rounded-2xl border-[#a482fb] my-10 sm:my-16 lg:my-24 mx-auto max-w-7xl">
        <div className="py-12 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-xl mx-auto text-center">
            <p className="text-sm font-semibold tracking-widest text-[#a482fb] uppercase">
              Proximamente...
            </p>

            <h2 className="mt-6 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              ChatBot con Inteligencia Artificial
            </h2>
          </div>

          <div className="flex mt-12 gap-y-10 lg:grid-cols-5 sm:mt-20 gap-x-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-4">
              <div className="max-w-md xl:max-w-2xl mx-auto text-left mt-4">
                <div className="text-md text-gray-100 font-light mt-4">
                  <div className="inline-flex items-center space-x-2">
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
                    <h1 className="font-semibold text-md text-white">
                      Atención instantánea
                    </h1>
                  </div>
                  <p className="text-gray-100">
                    Ofrece respuestas rápidas y precisas a las preguntas
                    frecuentes de los usuarios en tiempo real, mejorando la
                    experiencia del cliente.
                  </p>
                </div>
              </div>

              <div className="max-w-md xl:max-w-2xl mx-auto text-left mt-4">
                <div className="text-md text-gray-100 font-light mt-4">
                  <div className="inline-flex items-center space-x-2">
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
                    <h1 className="font-semibold text-md text-white">
                      Disponibilidad 24/7
                    </h1>
                  </div>
                  <p className="text-gray-100">
                    Disponibilidad para ayudar a los clientes en cualquier
                    momento del día, incluso fuera del horario laboral, lo que
                    aumenta la satisfacción del cliente.
                  </p>
                </div>
              </div>

              <div className="max-w-md xl:max-w-2xl mx-auto text-left mt-4">
                <div className="text-md text-gray-100 font-light mt-4">
                  <div className="inline-flex items-center space-x-2">
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
                    <h1 className="font-semibold text-md text-white">
                      Generación de leads
                    </h1>
                  </div>
                  <p className="text-gray-100">
                    Captura información de contacto de los visitantes del sitio
                    web y genera leads cualificados para tu empresa, aumentando
                    las oportunidades de venta.
                  </p>
                </div>
              </div>

              <div className="max-w-md xl:max-w-2xl mx-auto text-left mt-4">
                <div className="text-md text-gray-100 font-light mt-4">
                  <div className="inline-flex items-center space-x-2">
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
                    <h1 className="font-semibold text-md text-white">
                      Ahorro de tiempo
                    </h1>
                  </div>
                  <p className="text-gray-100">
                    Automatiza tareas repetitivas y de atención al cliente,
                    permitiendo a tu equipo enfocarse en actividades más
                    estratégicas y productivas.
                  </p>
                </div>
              </div>

              <div className="max-w-md xl:max-w-2xl mx-auto text-left mt-4">
                <div className="text-md text-gray-100 font-light mt-4">
                  <div className="inline-flex items-center space-x-2">
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
                    <h1 className="font-semibold text-md text-white">
                      Eficiencia
                    </h1>
                  </div>
                  <p className="text-gray-100">
                    Ayuda a los usuarios a encontrar rápidamente la información
                    que están buscando en tu sitio web, mejorando la navegación
                    y reduciendo la tasa de rebote.
                  </p>
                </div>
              </div>

              <div className="max-w-md xl:max-w-2xl mx-auto text-left mt-4">
                <div className="text-md text-gray-100 font-light mt-4">
                  <div className="inline-flex items-center space-x-2">
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
                    <h1 className="font-semibold text-md text-white">
                      Personalización
                    </h1>
                  </div>
                  <p className="text-gray-100">
                    Ofrece recomendaciones personalizadas y contenido relevante
                    a los usuarios, basado en sus intereses y comportamientos
                    anteriores.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}

export default ChatBotIAEs;

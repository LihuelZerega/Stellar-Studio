import React, { useState } from "react";
import { motion } from "framer-motion";
import { Chip } from "@nextui-org/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

function LandingPageCardPrice() {
  const [showMoreFeatures, setShowMoreFeatures] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
      className="overflow-hidden bg-transparent border-2 border-[#a482fb] rounded-2xl"
    >
      <div className="p-8 xl:px-12">
        <div className="flex flex-row items-center justify-between">
          <h1 className="text-xl font-semibold text-[#a482fb]">Landing Page</h1>
          <Chip className="bg-[#a482fb] text-white">Mas Vendido</Chip>
        </div>

        <div className="h-20">
          <h1 className="text-sm mt-4 text-gray-500">
            Ideal para quienes desean captar clientes potenciales interesados en
            sus servicios y convertirlos en clientes.
          </h1>
        </div>

        <div className="flex flex-row items-end justify-start">
          <p className="text-5xl font-bold text-white mt-7">$119</p>
          <p className="ml-2 mt-3 text-base text-gray-500">/Pago único</p>
        </div>

        <motion.button
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.05 }}
          className="w-full inline-flex items-center justify-center px-10 py-4 mt-5 text-lg rounded-md font-semibold text-[#a482fb] transition-all bg-white shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-100"
        >
          Comprar Ahora
        </motion.button>

        <hr className="my-5" />

        <ul className="inline-flex flex-col items-start space-y-5 text-left my-2 h-80">
          <li className="inline-flex items-center space-x-2">
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
            <span className="text-base font-medium text-gray-200">
              {" "}
              Diseño enfocado en la conversión{" "}
            </span>
          </li>

          <li className="inline-flex items-center space-x-2">
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
            <span className="text-base font-medium text-gray-200">
              {" "}
              Llamado a la acción claro y destacado{" "}
            </span>
          </li>

          <li className="inline-flex items-center space-x-2">
            <svg
              className="h-5 text-[#a482fb] flex-shrink-0w-5"
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
            <span className="text-base font-medium text-gray-200">
              {" "}
              Formulario de contacto o registro visible{" "}
            </span>
          </li>

          <li className="inline-flex items-center space-x-2">
            <svg
              className="h-5 text-[#a482fb] flex-shrink-0w-5"
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
            <span className="text-base font-medium text-gray-200">
              {" "}
              Testimonios o reseñas de clientes{" "}
            </span>
          </li>

          <li className="inline-flex items-center space-x-2">
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
            <span className="pb-0.5 text-base font-medium text-gray-200">
              {" "}
              Elementos visuales atractivos y relevantes{" "}
            </span>
          </li>
        </ul>

        <hr className="my-5" />

        {showMoreFeatures && (
          <>
            <ul className="inline-flex flex-col items-start space-y-5 text-left my-2">
              <span className="text-lg font-semibold text-[#a482fb]">
                {" "}
                Seguridad{" "}
              </span>

              <li className="text-base font-medium text-gray-200 my-2">
                <div className="inline-flex items-center space-x-1">
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
                  <h1 className="text-base font-medium text-gray-200">
                    Protección DDoS mejorada
                  </h1>
                </div>
              </li>

              <li className="text-base font-medium text-gray-200 my-2">
                <div className="inline-flex items-center space-x-1">
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
                  <h1 className="text-base font-medium text-gray-200">
                    Firewall de aplicaciones web
                  </h1>
                </div>
              </li>

              <li className="text-base font-medium text-gray-200 my-2">
                <div className="inline-flex items-center space-x-1">
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
                  <h1 className="text-base font-medium text-gray-200">
                    Proteccion de privacidad de datos (GDPR)
                  </h1>
                </div>
              </li>

              <li className="text-base font-medium text-gray-200 my-2">
                <div className="inline-flex items-center space-x-1">
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
                  <h1 className="text-base font-medium text-gray-200">
                    Altos estándares de seguridad y disponibilidad (SOC 2)
                  </h1>
                </div>
              </li>

              <li className="text-base font-medium text-gray-200 my-2">
                <div className="inline-flex items-center space-x-1">
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
                  <h1 className="text-base font-medium text-gray-200">
                    Altos estándares de gestión de la seguridad de la
                    información (ISO 27001)
                  </h1>
                </div>
              </li>
            </ul>

            <hr className="my-5" />

            <ul className="inline-flex flex-col items-start space-y-5 text-left my-2">
              <span className="text-lg font-semibold text-[#a482fb]">
                {" "}
                Rendimiento{" "}
              </span>

              <li className="text-base font-medium text-gray-200 my-2">
                <div className="inline-flex items-center space-x-1">
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
                  <h1 className="text-base font-medium text-gray-200">
                    Distribucion en una red global de servidores de alto
                    rendimiento y baja latencia
                  </h1>
                </div>
              </li>

              <li className="text-base font-medium text-gray-200 my-2">
                <div className="inline-flex items-center space-x-1">
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
                  <h1 className="text-base font-medium text-gray-200">
                    Optimizacion automatica de imagenes
                  </h1>
                </div>
              </li>

              <li className="text-base font-medium text-gray-200 my-2">
                <div className="inline-flex items-center space-x-1">
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
                  <h1 className="text-base font-medium text-gray-200">
                    Minificación y compresión de codigo
                  </h1>
                </div>
              </li>

              <li className="text-base font-medium text-gray-200 my-2">
                <div className="inline-flex items-center space-x-1">
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
                  <h1 className="text-base font-medium text-gray-200">
                    Almacenamiento en Caché para usuarios regresantes
                  </h1>
                </div>
              </li>

              <li className="text-base font-medium text-gray-200 my-2">
                <div className="inline-flex items-center space-x-1">
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
                  <h1 className="text-base font-medium text-gray-200">
                    Bases de datos de alto rendimiento y escalado automatico
                  </h1>
                </div>
              </li>
            </ul>

            <hr className="my-5" />

            <ul className="inline-flex flex-col items-start space-y-5 text-left my-2">
              <span className="text-lg font-semibold text-[#a482fb]">
                {" "}
                Estructura{" "}
                <span className="text-xs">(+2 paginas adicionales)</span>
              </span>

              <li className="text-base font-medium text-gray-200 my-2">
                <div className="inline-flex items-center space-x-1">
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
                  <h1 className="text-base font-medium text-gray-200">
                    Encabezado:
                  </h1>
                </div>
                <div className="ml-6">
                  <h1 className="text-sm font-light mb-2">
                    Título impactante que capte la atención del visitante.
                  </h1>
                  <h1 className="text-sm font-light">
                    Breve descripción del producto, servicio o oferta.
                  </h1>
                </div>
              </li>

              <li className="text-base font-medium text-gray-200 my-2">
                <div className="inline-flex items-center space-x-1">
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
                  <h1 className="text-base font-medium text-gray-200">
                    Beneficios:
                  </h1>
                </div>
                <div className="ml-6">
                  <h1 className="text-sm font-light mb-2">
                    Lista de beneficios clave de lo que se ofrece.
                  </h1>
                  <h1 className="text-sm font-light">
                    Iconos o imágenes para destacar cada beneficio.
                  </h1>
                </div>
              </li>

              <li className="text-base font-medium text-gray-200 my-2">
                <div className="inline-flex items-center space-x-1">
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
                  <h1 className="text-base font-medium text-gray-200">
                    Llamado a la acción (CTA):
                  </h1>
                </div>
                <div className="ml-6">
                  <h1 className="text-sm font-light mb-2">
                    Botón prominente que invita a los visitantes a realizar una
                    acción específica, como registrarse o comprar.
                  </h1>
                </div>
              </li>

              <li className="text-base font-medium text-gray-200 my-2">
                <div className="inline-flex items-center space-x-1">
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
                  <h1 className="text-base font-medium text-gray-200">
                    Formulario de Registro o Contacto:
                  </h1>
                </div>
                <div className="ml-6">
                  <h1 className="text-sm font-light mb-2">
                    Formulario integrado para que los visitantes proporcionen
                    información de contacto.
                  </h1>
                  <h1 className="text-sm font-light">
                    Campos simples y claros para maximizar la conversión.
                  </h1>
                </div>
              </li>

              <li className="text-base font-medium text-gray-200 my-2">
                <div className="inline-flex items-center space-x-1">
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
                  <h1 className="text-base font-medium text-gray-200">
                    Testimonios:
                  </h1>
                </div>
                <div className="ml-6">
                  <h1 className="text-sm font-light mb-2">
                    Sección con testimonios o reseñas de clientes satisfechos.
                  </h1>
                  <h1 className="text-sm font-light">
                    Breves citas y nombres de clientes.
                  </h1>
                </div>
              </li>

              <li className="text-base font-medium text-gray-200 my-2">
                <div className="inline-flex items-center space-x-1">
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
                  <h1 className="text-base font-medium text-gray-200">
                    Preguntas frecuentes (FAQ):
                  </h1>
                </div>
                <div className="ml-6">
                  <h1 className="text-sm font-light mb-2">
                    Sección que responde a preguntas comunes sobre el producto o
                    servicio.
                  </h1>
                  <h1 className="text-sm font-light">
                    Preguntas y respuestas claramente organizadas.
                  </h1>
                </div>
              </li>

              <li className="text-base font-medium text-gray-200 my-2">
                <div className="inline-flex items-center space-x-1">
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
                  <h1 className="text-base font-medium text-gray-200">
                    Pie de página:
                  </h1>
                </div>
                <div className="ml-6">
                  <h1 className="text-sm font-light mb-2">
                    Enlaces adicionales, información de copyright y redes
                    sociales.
                  </h1>
                </div>
              </li>
            </ul>
            <div>
              <h1 className="text-xs font-semibold text-gray-400 text-center my-2">
                (Todos los apartados de la estructura pueden ser personalizados)
              </h1>
            </div>
            <hr className="my-5" />
          </>
        )}

        <div
          className="flex items-center justify-center cursor-pointer w-full"
          onClick={() => setShowMoreFeatures(!showMoreFeatures)}
        >
          <h1 className="text-center text-lg lg:text-sm xl:text-lg font-semibold text-[#a482fb]">
            {showMoreFeatures
              ? "Ocultar características"
              : "Ver todas las características"}
          </h1>
          <div>
            <ChevronDownIcon
              className={`h-7 w-7 flex-none text-[#a482fb] transform transition-transform ${
                showMoreFeatures ? "rotate-180" : ""
              }`}
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default LandingPageCardPrice;

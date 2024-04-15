"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Chip } from "@nextui-org/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
} from "@nextui-org/react";

function PricesCradsEs() {
  const [showMoreFeatures, setShowMoreFeatures] = useState(false);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div>
      <section className="mt-16 lg:mt-56 pb-4">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid max-w-md grid-cols-1 gap-6 mx-auto mt-8 text-left lg:max-w-full lg:grid-cols-3">
            {/* Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="overflow-hidden bg-transparent border-2 border-gray-200 rounded-2xl"
            >
              <div className="p-8 xl:px-12">
                <h1 className="text-xl font-semibold text-[#a482fb]">
                  One Page
                </h1>

                <div className="h-20">
                  <h1 className="text-sm mt-4 text-gray-500">
                    Ideal para quienes desean tener una presencia en línea,
                    promocionar sus servicios y capturar clientes sin la
                    necesidad de un sitio web complejo.
                  </h1>
                </div>

                <div className="flex flex-row items-end justify-start">
                  <p className="text-5xl font-bold text-white mt-7">$79</p>
                  <p className="ml-2 mt-3 text-base text-gray-500">
                    /Pago único
                  </p>
                </div>

                <motion.button
                  whileTap={{ scale: 0.95 }}
                  whileHover={{ scale: 1.05 }}
                  className="w-full inline-flex items-center justify-center px-10 py-4 mt-5 text-lg rounded-md font-semibold text-white transition-all bg-[#a482fb] shadow-sm hover:bg-[#8e62fc] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a482fb]"
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
                      Diseño de página web de una sola página{" "}
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
                      Secciones desplazables con información clave{" "}
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
                      Llamado a la acción prominente{" "}
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
                      Navegación suave dentro de la misma página{" "}
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
                      Formulario de contacto integrado{" "}
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
                            Protección DDoS estándar
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
                            Altos estándares de seguridad y disponibilidad (SOC
                            2)
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
                            Bases de datos de alto rendimiento y escalado
                            automatico
                          </h1>
                        </div>
                      </li>
                    </ul>

                    <hr className="my-5" />

                    <ul className="inline-flex flex-col items-start space-y-5 text-left my-2">
                      <span className="text-lg font-semibold text-[#a482fb]">
                        {" "}
                        Estructura{" "}
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
                            Inicio:
                          </h1>
                        </div>
                        <div className="ml-6">
                          <h1 className="text-sm font-light mb-2">
                            Encabezado con logo y menú de navegación.
                          </h1>
                          <h1 className="text-sm font-light">
                            Introducción con información sobre la empresa y su
                            propósito.
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
                            Servicios:
                          </h1>
                        </div>
                        <div className="ml-6">
                          <h1 className="text-sm font-light mb-2">
                            Sección que detalla los servicios ofrecidos.
                          </h1>
                          <h1 className="text-sm font-light">
                            Breve descripción de cada servicio con iconos o
                            imágenes representativas.
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
                            Portafolio:
                          </h1>
                        </div>
                        <div className="ml-6">
                          <h1 className="text-sm font-light mb-2">
                            Sección que muestra ejemplos de trabajos realizados.
                          </h1>
                          <h1 className="text-sm font-light">
                            Galería de imágenes o carrusel de proyectos.
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
                            Sección con testimonios de clientes satisfechos.
                          </h1>
                          <h1 className="text-sm font-light">
                            Breves reseñas y nombres de clientes.
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
                            Contacto:
                          </h1>
                        </div>
                        <div className="ml-6">
                          <h1 className="text-sm font-light mb-2">
                            Formulario de contacto para consultas o solicitudes.
                          </h1>
                          <h1 className="text-sm font-light">
                            Información de contacto como dirección, teléfono y
                            correo electrónico.
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
                            Enlaces adicionales, información de copyright y
                            redes sociales.
                          </h1>
                        </div>
                      </li>
                    </ul>

                    <div>
                      <h1 className="text-xs font-semibold text-gray-400 text-center my-2">
                        (Todos los apartados de la estructura pueden ser
                        personalizados)
                      </h1>
                    </div>
                    <hr className="my-5" />
                  </>
                )}

                <div
                  className="flex items-center justify-center cursor-pointer w-full"
                  onClick={() => setShowMoreFeatures(!showMoreFeatures)}
                >
                  <h1 className="text-lg lg:text-sm xl:text-lg font-semibold text-[#a482fb]">
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

            {/* Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="overflow-hidden bg-transparent border-2 border-[#a482fb] rounded-2xl"
            >
              <div className="p-8 xl:px-12">
                <div className="flex flex-row items-center justify-between">
                  <h1 className="text-xl font-semibold text-[#a482fb]">
                    Landing Page
                  </h1>
                  <Chip className="bg-[#a482fb] text-white">Mas Vendido</Chip>
                </div>

                <div className="h-20">
                  <h1 className="text-sm mt-4 text-gray-500">
                    Ideal para quienes desean captar clientes potenciales
                    interesados en sus servicios y convertirlos en clientes.
                  </h1>
                </div>

                <div className="flex flex-row items-end justify-start">
                  <p className="text-5xl font-bold text-white mt-7">$119</p>
                  <p className="ml-2 mt-3 text-base text-gray-500">
                    /Pago único
                  </p>
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
                            Altos estándares de seguridad y disponibilidad (SOC
                            2)
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
                            Bases de datos de alto rendimiento y escalado
                            automatico
                          </h1>
                        </div>
                      </li>
                    </ul>

                    <hr className="my-5" />

                    <ul className="inline-flex flex-col items-start space-y-5 text-left my-2">
                      <span className="text-lg font-semibold text-[#a482fb]">
                        {" "}
                        Estructura{" "}
                        <span className="text-xs">
                          (+2 paginas adicionales)
                        </span>
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
                            Título impactante que capte la atención del
                            visitante.
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
                            Botón prominente que invita a los visitantes a
                            realizar una acción específica, como registrarse o
                            comprar.
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
                            Formulario integrado para que los visitantes
                            proporcionen información de contacto.
                          </h1>
                          <h1 className="text-sm font-light">
                            Campos simples y claros para maximizar la
                            conversión.
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
                            Sección con testimonios o reseñas de clientes
                            satisfechos.
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
                            Sección que responde a preguntas comunes sobre el
                            producto o servicio.
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
                            Enlaces adicionales, información de copyright y
                            redes sociales.
                          </h1>
                        </div>
                      </li>
                    </ul>
                    <div>
                      <h1 className="text-xs font-semibold text-gray-400 text-center my-2">
                        (Todos los apartados de la estructura pueden ser
                        personalizados)
                      </h1>
                    </div>
                    <hr className="my-5" />
                  </>
                )}

                <div
                  className="flex items-center justify-center cursor-pointer w-full"
                  onClick={() => setShowMoreFeatures(!showMoreFeatures)}
                >
                  <h1 className="text-lg lg:text-sm xl:text-lg font-semibold text-[#a482fb]">
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

            {/* Card 3 */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="overflow-hidden bg-transparent border-2 border-gray-200 rounded-2xl"
            >
              <div className="p-8 xl:px-12">
                <h1 className="text-xl font-semibold text-[#a482fb]">
                  E-Commerce
                </h1>

                <div className="h-20">
                  <h1 className="text-sm mt-4 text-gray-500">
                    Ideal para aquellos que venden productos y desean ampliar su
                    alcance y llegar a una audiencia global.
                  </h1>
                </div>

                <div className="flex flex-row items-end justify-start">
                  <p className="text-5xl font-bold text-white mt-7">$349</p>
                  <p className="ml-2 mt-3 text-base text-gray-500">
                    /Pago único
                  </p>
                </div>

                <motion.button
                  whileTap={{ scale: 0.95 }}
                  whileHover={{ scale: 1.05 }}
                  className="w-full inline-flex items-center justify-center px-10 py-4 mt-5 text-lg rounded-md font-semibold text-white transition-all bg-[#a482fb] shadow-sm hover:bg-[#8e62fc] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a482fb]"
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
                      Catálogo de productos con categorías{" "}
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
                      Carrito de compras y proceso de pago seguro{" "}
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
                      Opciones de búsqueda avanzada{" "}
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
                      Valoraciones y reseñas de productos{" "}
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
                      Gestión de inventario{" "}
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
                            Altos estándares de seguridad y disponibilidad (SOC
                            2)
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
                            Bases de datos de alto rendimiento y escalado
                            automatico
                          </h1>
                        </div>
                      </li>
                    </ul>

                    <hr className="my-5" />

                    <ul className="inline-flex flex-col items-start space-y-5 text-left my-2">
                      <span className="text-lg font-semibold text-[#a482fb]">
                        {" "}
                        Estructura{" "}
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
                            Catálogo de Productos:
                          </h1>
                        </div>
                        <div className="ml-6">
                          <h1 className="text-sm font-light mb-2">
                            Página principal que muestra categorías de
                            productos.
                          </h1>
                          <h1 className="text-sm font-light">
                            Vitrina de productos destacados o nuevos.
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
                            Página de Producto:
                          </h1>
                        </div>
                        <div className="ml-6">
                          <h1 className="text-sm font-light mb-2">
                            Detalles completos del producto, incluyendo
                            descripción, imágenes, precio y opciones de compra.
                          </h1>
                          <h1 className="text-sm font-light">
                            Botones de añadir al carrito y opciones de
                            personalización (si aplica).
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
                            Carrito de Compras:
                          </h1>
                        </div>
                        <div className="ml-6">
                          <h1 className="text-sm font-light mb-2">
                            Resumen de los productos seleccionados.
                          </h1>
                          <h1 className="text-sm font-light">
                            Opción para ajustar cantidades, aplicar cupones de
                            descuento y calcular costos de envío.
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
                            Página de Contacto y Soporte:
                          </h1>
                        </div>
                        <div className="ml-6">
                          <h1 className="text-sm font-light mb-2">
                            Formulario de contacto para consultas o problemas
                            con los pedidos.
                          </h1>
                          <h1 className="text-sm font-light">
                            Información de contacto adicional y enlaces a
                            políticas de devolución y términos de servicio.
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
                            Enlaces adicionales, información de copyright y
                            redes sociales.
                          </h1>
                        </div>
                      </li>
                    </ul>
                    <div>
                      <h1 className="text-xs font-semibold text-gray-400 text-center my-2">
                        (Todos los apartados de la estructura pueden ser
                        personalizados)
                      </h1>
                    </div>
                    <hr className="my-5" />
                  </>
                )}

                <div
                  className="flex items-center justify-center cursor-pointer w-full"
                  onClick={() => setShowMoreFeatures(!showMoreFeatures)}
                >
                  <h1 className="text-lg lg:text-sm xl:text-lg font-semibold text-[#a482fb]">
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
          </div>

          <div className="text-center my-6">
            <h1
              className="text-md font-semibold text-[#a482fb] cursor-pointer"
              onClick={onOpen}
            >
              Terminos de Pago
            </h1>

            <div className="flex flex-col gap-2">
              <Modal
                isOpen={isOpen}
                size="3xl"
                placement="center"
                onOpenChange={onOpenChange}
                className="bg-[#272526] text-white"
              >
                <ModalContent>
                  {(onClose) => (
                    <>
                      <ModalHeader className="flex flex-col gap-1 border-b text-xl text-[#a482fb]">
                        Terminos de Pago
                      </ModalHeader>
                      <ModalBody>
                        <div className="mb-3">
                          <h1 className="text-lg font-semibold">Pago Único</h1>
                          <p className="text-sm font-light text-gray-300">
                            El pago por nuestros servicios de desarrollo web es
                            unico.
                          </p>
                        </div>
                        <div className="mb-3">
                          <h1 className="text-lg font-semibold">
                            Adelanto del 30%
                          </h1>
                          <p className="text-sm font-light text-gray-300">
                            Para dar inicio al trabajo, se requiere un adelanto
                            del 30% del costo total del producto contratado.
                            Este adelanto se debe abonar antes de que comience
                            el proceso de diseño y desarrollo.
                          </p>
                        </div>
                        <div className="mb-3">
                          <h1 className="text-lg font-semibold">
                            Pago del Saldo Restante
                          </h1>
                          <p className="text-sm font-light text-gray-300">
                            El saldo restante del pago se deberá abonar una vez
                            que el producto contratado este entregado y
                            finalizado.
                          </p>
                        </div>
                        <div className="mb-1">
                          <h1 className="text-lg font-semibold">
                            Formas de Pago
                          </h1>
                          <p className="text-sm font-light text-gray-300">
                            Aceptamos pagos mediante transferencia bancaria,
                            Mercado Pago, PayPal, entre otros. Los detalles
                            específicos para realizar el pago se proporcionarán
                            al momento de la contratación de nuestros servicios.
                            <Link
                              href="/es/informacion#opinionesformasdepago"
                              className="text-[#a482fb] hover:text-[#775fb6] ml-1"
                            >
                              Ver mas Metodos de Pago.
                            </Link>
                          </p>
                        </div>
                        <p className="text-sm font-light text-gray-300">
                          Por favor, ten en cuenta que los términos de pago
                          están sujetos a cambios y pueden variar según el tipo
                          de servicio contratado. Para más detalles o preguntas
                          relacionadas con los términos de pago, no dudes en
                          ponerte en contacto con nuestro equipo.
                          <Link
                            href="/es/informacion#opinionesformasdepago"
                            className="text-[#a482fb] hover:text-[#775fb6] ml-1"
                          >
                            Ver mas Informacion.
                          </Link>
                        </p>
                      </ModalBody>
                    </>
                  )}
                </ModalContent>
              </Modal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PricesCradsEs;

import React, { useState, Fragment } from "react";
import { motion } from "framer-motion";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { FiTrash2 } from "react-icons/fi";

function OnePageCardPrice() {
  const [open, setOpen] = useState(false);
  const [showMoreFeatures, setShowMoreFeatures] = useState(false);

  return (
    <>
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          open={open}
          onClose={setOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-neutral-800 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                    <Transition.Child
                      as={Fragment}
                      enter="ease-in-out duration-500"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="ease-in-out duration-500"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <div className="absolute left-0 top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4">
                        <button
                          type="button"
                          className="relative rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                          onClick={() => setOpen(false)}
                        >
                          <span className="absolute -inset-2.5" />
                          <span className="sr-only">Close panel</span>
                          <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                    </Transition.Child>
                    <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                      <div className="px-4 sm:px-6">
                        <Dialog.Title className="text-xl font-semibold leading-6 text-gray-900">
                          Carrito de Compra
                        </Dialog.Title>
                      </div>

                      <hr className="mt-4" />

                      <div className="relative mt-6 flex-1 px-4 sm:px-6">
                        <div className="flex flex-row bg-neutral-50 p-4 rounded-md shadow-sm">
                          <div className="bg-white rounded-md h-12 w-12">h</div>
                          <div className="flex flex-col items-center justify-between border-l ml-2 pl-2">
                            <div className="flex flex-row items-center justify-between text-base font-semibold text-gray-800">
                              <div>
                                One Page
                              </div>
                              <div>
                                $79
                              </div>
                            </div>
                            <div className="flex flex-row items-center justify-between text-sm text-gray-800">
                              <h1>
                                Cantidad: 1
                              </h1>
                              <div>
                                <FiTrash2 />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <hr />

                      <section className="flex flex-col mt-3">
                        <div className="ml-4 sm:mx-6">
                          <div className="flex flex-row items-center justify-between">
                            <h1 className="text-base font-medium text-neutral-500">
                              Subtotal
                            </h1>
                            <h1 className="text-base font-medium text-neutral-500">
                              $79{" "}
                            </h1>
                          </div>
                          <div className="flex flex-row items-center justify-between mt-3">
                            <h1 className="text-base font-semibold text-neutral-700">
                              Total
                            </h1>
                            <h1 className="text-base font-semibold text-neutral-700">
                              $79{" "}
                            </h1>
                          </div>
                        </div>
                        <div className="flex flex-col">
                          <button className="w-full max-w-sm mx-auto items-center justify-center py-4 ml-4 sm:ml-6 mt-5 text-sm rounded-md font-semibold text-white transition-all bg-[#a482fb] shadow-sm hover:bg-[#8e62fc] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a482fb]">
                            Comprar
                          </button>
                          <button className="w-full max-w-sm mx-auto items-center justify-center py-4 ml-4 sm:ml-6 mt-3 text-sm rounded-md font-semibold text-[#a482fb] transition-all border-2 border-[#a482fb] shadow-sm hover:bg-neutral-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a482fb]">
                            Continuar Comprando
                          </button>
                        </div>
                      </section>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="overflow-hidden bg-transparent border-2 border-gray-200 rounded-2xl"
      >
        <div className="p-8 xl:px-12">
          <h1 className="text-xl font-semibold text-[#a482fb]">One Page</h1>

          <div className="h-20">
            <h1 className="text-sm mt-4 text-gray-500">
              Ideal para quienes desean tener una presencia en línea,
              promocionar sus servicios y capturar clientes sin la necesidad de
              un sitio web complejo.
            </h1>
          </div>

          <div className="flex flex-row items-end justify-start">
            <p className="text-5xl font-bold text-white mt-7">$79</p>
            <p className="ml-2 mt-3 text-base text-gray-500">/Pago único</p>
          </div>

          <motion.button
            onClick={() => setOpen(true)}
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
                      Breve descripción de cada servicio con iconos o imágenes
                      representativas.
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
                      Información de contacto como dirección, teléfono y correo
                      electrónico.
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
    </>
  );
}

export default OnePageCardPrice;

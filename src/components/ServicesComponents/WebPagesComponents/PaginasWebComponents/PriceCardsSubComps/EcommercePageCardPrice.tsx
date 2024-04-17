import React, { useState, Fragment } from "react";
import { motion } from "framer-motion";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { FiTrash2 } from "react-icons/fi";
import { MdOutlineWebAsset, MdAlternateEmail } from "react-icons/md";
import { TbWorldWww } from "react-icons/tb";

function EcommercePageCardPrice() {
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
                          <div className="bg-white rounded-md p-2">
                            <MdOutlineWebAsset className="text-3xl text-[#a482fb]" />
                          </div>

                          <div className="flex flex-col items-left justify-between w-full border-l ml-2 pl-2">
                            <div className="flex flex-row items-center justify-between text-base font-semibold text-gray-800">
                              <h1>E-Commerce</h1>
                              <h1>$119.00</h1>
                            </div>

                            <div className="flex flex-row items-center justify-between text-sm text-gray-800">
                              <h1 className="">Cantidad: 1</h1>
                              <FiTrash2
                                className="hover:text-red-500 cursor-pointer"
                                onClick={() => setOpen(false)}
                              />
                            </div>
                          </div>
                        </div>

                        <hr className="my-4" />

                        <div className="flex flex-row items-center bg-neutral-50 p-4 rounded-md shadow-sm">
                          <div className="bg-white rounded-md p-2">
                            <TbWorldWww className="text-3xl text-[#a482fb]" />
                          </div>

                          <div className="flex flex-col items-left justify-between w-full border-l ml-2 pl-2">
                            <div className="flex flex-row items-center justify-between text-base font-semibold text-gray-800">
                              <h1>
                                Dominio{" "}
                                <span className="text-xs text-gray-600">
                                  (Anual)
                                </span>
                              </h1>
                              <h1>$15.99</h1>
                            </div>

                            <div className="flex flex-row items-center justify-between text-sm text-gray-800">
                              <div className="flex flex-col">
                                <h1 className="text-xs">Actual: .COM</h1>
                                <h1 className="text-xs font-normal hover:text-[#a482fb] hover:font-medium cursor-pointer">
                                  Elegir otro dominio
                                </h1>
                              </div>
                              <FiTrash2 className="hover:text-red-500 cursor-pointer" />
                            </div>
                          </div>
                        </div>

                        <hr className="my-4" />

                        <div className="flex flex-row items-center bg-neutral-50 p-4 rounded-md shadow-sm">
                          <div className="bg-white rounded-md p-2">
                            <MdAlternateEmail className="text-3xl text-[#a482fb]" />
                          </div>

                          <div className="flex flex-col items-left justify-between w-full border-l ml-2 pl-2">
                            <div className="flex flex-row items-center justify-between text-base font-semibold text-gray-800">
                              <h1>
                                Correo Profecional{" "}
                                <span className="text-xs text-gray-600">
                                  (Mensual)
                                </span>
                              </h1>
                              <h1>$8.00</h1>
                            </div>

                            <div className="flex flex-row items-center justify-between text-sm text-gray-800">
                              <div className="flex flex-col">
                                <h1 className="text-xs">Plan Emprendedor</h1>
                                <h1 className="text-xs font-normal hover:text-[#a482fb] hover:font-medium cursor-pointer">
                                  Elegir otro plan
                                </h1>
                              </div>
                              <FiTrash2 className="hover:text-red-500 cursor-pointer" />
                            </div>
                          </div>
                        </div>
                      </div>

                      <hr />

                      <section className="flex flex-col mt-3 mx-6">
                        <div className="">
                          <div className="flex flex-row items-center justify-between">
                            <h1 className="text-base font-medium text-neutral-500">
                              Subtotal
                            </h1>
                            <h1 className="text-base font-medium text-neutral-500">
                              $372.99{" "}
                            </h1>
                          </div>
                          <div className="flex flex-row items-center justify-between mt-3">
                            <h1 className="text-base font-semibold text-neutral-700">
                              Total
                            </h1>
                            <h1 className="text-base font-semibold text-neutral-700">
                              $372.99{" "}
                            </h1>
                          </div>
                        </div>
                        <div className="flex flex-col">
                          <button className="w-full items-center justify-center py-4 mt-5 text-sm rounded-md font-semibold text-white transition-all bg-[#a482fb] shadow-sm hover:bg-[#8e62fc] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a482fb]">
                            Comprar
                          </button>
                          <button
                            className="w-full items-center justify-center py-4 mt-3 text-sm rounded-md font-semibold text-[#a482fb] transition-all border-2 border-[#a482fb] shadow-sm hover:bg-neutral-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a482fb]"
                            onClick={() => setOpen(false)}
                          >
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
        transition={{ duration: 0.6, delay: 0.9 }}
        className="overflow-hidden bg-transparent border-2 border-gray-200 rounded-2xl"
      >
        <div className="p-8 xl:px-12">
          <h1 className="text-xl font-semibold text-[#a482fb]">E-Commerce</h1>

          <div className="h-20">
            <h1 className="text-sm mt-4 text-gray-500">
              Ideal para aquellos que venden productos y desean ampliar su
              alcance y llegar a una audiencia global.
            </h1>
          </div>

          <div className="flex flex-row items-end justify-start">
            <p className="text-5xl font-bold text-white mt-7">$349</p>
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
                      Catálogo de Productos:
                    </h1>
                  </div>
                  <div className="ml-6">
                    <h1 className="text-sm font-light mb-2">
                      Página principal que muestra categorías de productos.
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
                      Detalles completos del producto, incluyendo descripción,
                      imágenes, precio y opciones de compra.
                    </h1>
                    <h1 className="text-sm font-light">
                      Botones de añadir al carrito y opciones de personalización
                      (si aplica).
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
                      Formulario de contacto para consultas o problemas con los
                      pedidos.
                    </h1>
                    <h1 className="text-sm font-light">
                      Información de contacto adicional y enlaces a políticas de
                      devolución y términos de servicio.
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

export default EcommercePageCardPrice;

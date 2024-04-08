"use client";
import React from "react";
import { motion } from "framer-motion";
import { Chip } from "@nextui-org/react";

function PricesCradsEs() {
  return (
    <div>
      <section className="my-24 pb-4">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid max-w-md grid-cols-1 gap-6 mx-auto mt-8 text-left lg:max-w-full lg:grid-cols-2">
            {/* Card 1 */}

            <div className="overflow-hidden bg-transparent border-2 border-gray-200 rounded-2xl">
              <div className="p-8 xl:px-12">
                <h1 className="text-xl font-semibold text-[#a482fb]">
                  Emprendedor
                </h1>

                <div className="h-14">
                  <h1 className="text-base mt-4 text-gray-500">
                  Una solución eficiente y accesible para tus necesidades de correo electrónico empresarial.
                  </h1>
                </div>

                <div className="flex flex-row items-end justify-start">
                  <p className="text-5xl font-bold text-white mt-7">$8</p>
                  <p className="ml-2 mt-3 text-base text-gray-500">/Mes</p>
                </div>

                <motion.button
                  whileTap={{ scale: 0.95 }}
                  whileHover={{ scale: 1.05 }}
                  className="w-full inline-flex items-center justify-center px-10 py-4 mt-5 text-lg rounded-md font-semibold text-white transition-all bg-[#a482fb] shadow-sm hover:bg-[#8e62fc] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a482fb]"
                >
                  Comprar Ahora
                </motion.button>

                <hr className="my-5" />

                <ul className="inline-flex flex-col items-start space-y-5 text-left my-6">
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
                      10 GB de almacenamiento en email{" "}
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
                      10 reglas de reenvío{" "}
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
                      Alias de email{" "}
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
                      Verificación antivirus{" "}
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
                      Antispam avanzado{" "}
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
                      Infraestructura basada en la nube{" "}
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Card 2 */}
            <div className="overflow-hidden bg-transparent border-2 border-[#a482fb] rounded-2xl">
              <div className="p-8 xl:px-12">
                <div className="flex flex-row items-center justify-between">
                  <h1 className="text-xl font-semibold text-[#a482fb]">
                    Corporativo
                  </h1>
                  <Chip className="bg-[#a482fb] text-white">Mas Vendido</Chip>
                </div>

                <div className="h-14">
                  <h1 className="text-base mt-4 text-gray-500">
                  El favorito de nuestros clientes, todo lo que necesitas y más, con espacio más que suficiente para gestionar y características premium.
                  </h1>
                </div>

                <div className="flex flex-row items-end justify-start">
                  <p className="text-5xl font-bold text-white mt-7">$12</p>
                  <p className="ml-2 mt-3 text-base text-gray-500">/Mes</p>
                </div>

                <motion.button
                  whileTap={{ scale: 0.95 }}
                  whileHover={{ scale: 1.05 }}
                  className="w-full inline-flex items-center justify-center px-10 py-4 mt-5 text-lg rounded-md font-semibold text-[#a482fb] transition-all bg-white shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-100"
                >
                  Comprar Ahora
                </motion.button>

                <hr className="my-5" />

                <ul className="inline-flex flex-col items-start space-y-5 text-left my-6">
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
                      50 GB de almacenamiento en email{" "}
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
                      50 reglas de reenvío{" "}
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
                      Alias de email{" "}
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
                      Verificación antivirus{" "}
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
                      Antispam avanzado{" "}
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
                      Infraestructura basada en la nube{" "}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* <div className="text-center my-6">
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
                            El pago por nuestros servicios es único y se realiza
                            de forma anticipada.
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
                            El saldo restante del pago se deberá abonar antes de
                            la entrega final del producto contratado. La entrega
                            del producto finalizado se realizará una vez
                            recibido el pago completo.
                          </p>
                        </div>
                        <div className="mb-1">
                          <h1 className="text-lg font-semibold">
                            Formas de Pago
                          </h1>
                          <p className="text-sm font-light text-gray-300">
                            Aceptamos pagos mediante transferencia bancaria,
                            tarjeta de crédito, PayPal, entre otros. Los
                            detalles específicos para realizar el pago se
                            proporcionarán al momento de la contratación de
                            nuestros servicios.
                          </p>
                        </div>
                        <p className="text-sm font-light text-gray-300">
                          Por favor, ten en cuenta que los términos de pago
                          están sujetos a cambios y pueden variar según el tipo
                          de servicio contratado. Para más detalles o preguntas
                          relacionadas con los términos de pago, no dudes en
                          ponerte en contacto con nuestro equipo.
                        </p>
                      </ModalBody>
                    </>
                  )}
                </ModalContent>
              </Modal>
            </div>
          </div> */}
        </div>
      </section>
    </div>
  );
}

export default PricesCradsEs;

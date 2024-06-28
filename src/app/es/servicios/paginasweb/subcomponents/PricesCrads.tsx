"use client";
import React from "react";
import Link from "next/link";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
} from "@nextui-org/react";
import TailoredPageCardPrice from "./PriceCardsSubComps/TailoredPageCardPrice";
import OnePageCardPrice from "./PriceCardsSubComps/OnePageCardPrice";
import LandingPageCardPrice from "./PriceCardsSubComps/LandingPageCardPrice";
import EcommercePageCardPrice from "./PriceCardsSubComps/EcommercePageCardPrice";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function PricesCradsEs() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="bg-neutral-100">
      <section className="py-12 md:py-24 pb-4 border-t-1 border-neutral-200">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div ref={ref} className="grid max-w-md grid-cols-1 gap-6 mx-auto mt-8 text-left lg:max-w-full lg:grid-cols-3">
            {/* Card 1 */}
            <motion.div
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={itemVariants}
            >
              <OnePageCardPrice />
            </motion.div>
            {/* Card 2 */}
            <motion.div
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={itemVariants}
            >
              <LandingPageCardPrice />
            </motion.div>
            {/* Card 3 */}
            <motion.div
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={itemVariants}
            >
              <EcommercePageCardPrice />
            </motion.div>
          </div>

          <div className="max-w-md lg:max-w-full mx-auto my-6">
            {/* Card 4 */}
            <motion.div
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={itemVariants}
            >
              <TailoredPageCardPrice />
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
                className="bg-neutral-100 text-neutral-800"
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
                          <p className="text-sm font-light text-neutral-600">
                            El pago por nuestros servicios de desarrollo web es
                            unico.
                          </p>
                        </div>
                        <div className="mb-3">
                          <h1 className="text-lg font-semibold">
                            Adelanto del 30%
                          </h1>
                          <p className="text-sm font-light text-neutral-600">
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
                          <p className="text-sm font-light text-neutral-600">
                            El saldo restante del pago se deberá abonar una vez
                            que el producto contratado este entregado y
                            finalizado.
                          </p>
                        </div>
                        <div className="mb-1">
                          <h1 className="text-lg font-semibold">Formas de Pago</h1>
                          <p className="text-sm font-light text-neutral-600">
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
                        <p className="text-sm font-light text-neutral-600">
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
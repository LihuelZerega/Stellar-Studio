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
          <div
            ref={ref}
            className="grid max-w-md grid-cols-1 gap-6 mx-auto mt-8 text-left lg:max-w-full lg:grid-cols-3"
          >
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
              Payment terms
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
                        Payment terms
                      </ModalHeader>
                      <ModalBody>
                        <div className="mb-3">
                          <h1 className="text-lg font-semibold">
                            Single Payment
                          </h1>
                          <p className="text-sm font-light text-neutral-600">
                            Payment for our web development services is only.
                          </p>
                        </div>
                        <div className="mb-3">
                          <h1 className="text-lg font-semibold">30% advance</h1>
                          <p className="text-sm font-light text-neutral-600">
                            To start the work, an advance is required of 30% of
                            the total cost of the contracted product. This
                            advance must be paid before it begins the design and
                            development process.
                          </p>
                        </div>
                        <div className="mb-3">
                          <h1 className="text-lg font-semibold">
                            Payment of Remaining Balance
                          </h1>
                          <p className="text-sm font-light text-neutral-600">
                            The remaining balance of the payment must be paid
                            once that the contracted product is delivered and
                            finalized.
                          </p>
                        </div>
                        <div className="mb-1">
                          <h1 className="text-lg font-semibold">
                            Payment Methods
                          </h1>
                          <p className="text-sm font-light text-neutral-600">
                            We accept payments by bank transfer, Mercado Pago,
                            PayPal, among others. The details specifics to make
                            the payment will be provided at the time of
                            contracting our services.
                            <Link
                              href="/us/information#opinionesformasdepago"
                              className="text-[#a482fb] hover:text-[#775fb6] ml-1"
                            >
                              See more Payment Methods.
                            </Link>
                          </p>
                        </div>
                        <p className="text-sm font-light text-neutral-600">
                          Please note that the payment terms are subject to
                          change and may vary depending on the type of
                          contracted service. For more details or questions
                          related to payment terms, please feel free to Get in
                          touch with our team.
                          <Link
                            href="/us/information#opinionesformasdepago"
                            className="text-[#a482fb] hover:text-[#775fb6] ml-1"
                          >
                            See more information.
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

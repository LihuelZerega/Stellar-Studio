"use client";
import React, { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import Anvil from "@/images/TrustedBy/useanvil.png";
import Easy from "@/images/TrustedBy/easy.png";
import JotForm from "@/images/TrustedBy/jotform.png";
import Ledger from "@/images/TrustedBy/ledger-logo.png";
import Nezus from "@/images/TrustedBy/nezuslogo.png";
import Image from "next/image";

export default function StatsEs() {
  const [ref1, inView1] = useInView({ threshold: 0.2 });
  const [ref2, inView2] = useInView({ threshold: 0.2 });
  const [ref3, inView3] = useInView({ threshold: 0.2 });
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();

  useEffect(() => {
    if (inView1) {
      controls1.start({ opacity: 1, y: 0 });
    } else {
      controls1.start({ opacity: 0, y: 20 });
    }
  }, [controls1, inView1]);

  useEffect(() => {
    if (inView2) {
      controls2.start({ opacity: 1, y: 0 });
    } else {
      controls2.start({ opacity: 0, y: 20 });
    }
  }, [controls2, inView2]);

  useEffect(() => {
    if (inView3) {
      controls3.start({ opacity: 1, y: 0 });
    } else {
      controls3.start({ opacity: 0, y: 20 });
    }
  }, [controls3, inView3]);

  return (
    <div className="py-24 sm:pb-32">
      <div className="">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold leading-tight text-[#a482fb] sm:text-3xl">
            Contamos con la confiaza de mas de <br />
            200 clientes de rápido crecimiento
          </h2>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <Image
              className="col-span-2 max-h-12 w-36 items-center justify-center object-contain lg:col-span-1"
              src={Anvil}
              alt="Anvil"
              width={158}
              height={48}
            />
            <Image
              className="col-span-2 max-h-12 w-36 items-center justify-center object-contain lg:col-span-1"
              src={Easy}
              alt="Easy"
              width={158}
              height={48}
            />
            <Image
              className="col-span-2 max-h-12 w-36 items-center justify-center object-contain lg:col-span-1"
              src={JotForm}
              alt="JotForm"
              width={158}
              height={48}
            />
            <Image
              className="col-span-2 max-h-12 w-36 items-center justify-center object-contain sm:col-start-2 lg:col-span-1"
              src={Ledger}
              alt="Ledger"
              width={158}
              height={48}
            />
            <Image
              className="col-span-2 col-start-2 max-h-12 w-36 items-center justify-center object-contain sm:col-start-auto lg:col-span-1"
              src="https://tailwindui.com/img/logos/158x48/statamic-logo-white.svg"
              alt="Nezus"
              width={158}
              height={48}
            />
          </div>
        </div>
      </div>

      {/* <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.dl
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-1 gap-x-8 gap-y-24 sm:gap-y-32 text-center md:grid-cols-3"
        >
          <motion.div
            ref={ref1}
            animate={controls1}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="mx-auto flex max-w-xs flex-col gap-y-4"
          >
            <dt className="text-lg leading-7 text-[#a482fb]">
              Clientes satisfechos
            </dt>
            <dd className="order-first text-5xl font-semibold tracking-tight text-white">
              +200
            </dd>
          </motion.div>

          <motion.div
            ref={ref2}
            animate={controls2}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="mx-auto flex max-w-xs flex-col gap-y-4"
          >
            <dt className="text-lg leading-7 text-[#a482fb]">
              Interacciones mensuales
            </dt>
            <dd className="order-first text-5xl font-semibold tracking-tight text-white">
              +50.000
            </dd>
          </motion.div>

          <motion.div
            ref={ref3}
            animate={controls3}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="mx-auto flex max-w-xs flex-col gap-y-4"
          >
            <dt className="text-lg leading-7 text-[#a482fb]">
              Retencion de potenciales clientes
            </dt>
            <dd className="order-first text-5xl font-semibold tracking-tight text-white">
              80%
            </dd>
          </motion.div>
        </motion.dl>
      </div> */}
    </div>
  );
}

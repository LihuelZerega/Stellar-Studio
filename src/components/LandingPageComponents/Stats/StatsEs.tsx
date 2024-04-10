"use client";
import React, { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

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
    <div className="py-24 sm:pb-32 shadow-2xl">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
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
      </div>
    </div>
  );
}

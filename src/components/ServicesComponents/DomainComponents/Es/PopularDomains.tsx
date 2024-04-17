"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

function PopularDomains() {
  return (
    <section className="px-6">
      <h1 className="text-center text-white my-12 font-bold text-4xl">
        Dominios populares
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-x-6">
        <div className="flex flex-col glass-container bg-opacity-5 backdrop-filter backdrop-blur-lg bg-[#a482fb] shadow-lg p-6 border-2 rounded-2xl border-[#a482fb] my-3 sm:my-4 lg:my-6 mx-auto w-full h-72">
          <div>
            <h1 className="text-4xl font-bold text-[#a482fb] mb-2">.com</h1>
            <p className="text-gray-200 h-14">
              Inspirá confianza con este dominio reconocido
            </p>
          </div>
          <div className="flex flex-row items-end mb-2">
            <h1 className="text-5xl font-bold text-[#a482fb] mt-3">$15.99</h1>
            <h1 className="text-lg font-bold text-gray-200 mb-1">/año</h1>
          </div>

          <div className="w-full mt-4">
            <Link href="#registrardominio">
              <motion.button
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.05 }}
                className="w-full rounded-xl bg-[#a482fb] px-4 h-12 text-sm font-semibold text-white shadow-sm hover:bg-[#8e62fc] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a482fb]"
              >
                Registrar
              </motion.button>
            </Link>
          </div>
        </div>

        <div className="flex flex-col glass-container bg-opacity-5 backdrop-filter backdrop-blur-lg bg-[#a482fb] shadow-lg p-6 border-2 rounded-2xl border-[#a482fb] my-3 sm:my-4 lg:my-6 mx-auto w-full h-72">
          <div>
            <h1 className="text-4xl font-bold text-[#a482fb] mb-2">.net</h1>
            <p className="text-gray-200 h-14">
              Mostrá tu experiencia en los negocios con .net.
            </p>
          </div>
          <div className="flex flex-row items-end mb-2">
            <h1 className="text-5xl font-bold text-[#a482fb] mt-3">$18.99</h1>
            <h1 className="text-lg font-bold text-gray-200 mb-1">/año</h1>
          </div>

          <div className="w-full mt-4">
            <Link href="#registrardominio">
              <motion.button
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.05 }}
                className="w-full rounded-xl bg-[#a482fb] px-4 h-12 text-sm font-semibold text-white shadow-sm hover:bg-[#8e62fc] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a482fb]"
              >
                Registrar
              </motion.button>
            </Link>
          </div>
        </div>

        <div className="flex flex-col glass-container bg-opacity-5 backdrop-filter backdrop-blur-lg bg-[#a482fb] shadow-lg p-6 border-2 rounded-2xl border-[#a482fb] my-3 sm:my-4 lg:my-6 mx-auto w-full h-72">
          <div>
            <h1 className="text-4xl font-bold text-[#a482fb] mb-2">.online</h1>
            <p className="text-gray-200 h-14">
              Llevá tu proyecto a internet con los dominios .online
            </p>
          </div>
          <div className="flex flex-row items-end mb-2">
            <h1 className="text-5xl font-bold text-[#a482fb] mt-3">$34.99</h1>
            <h1 className="text-lg font-bold text-gray-200 mb-1">/año</h1>
          </div>

          <div className="w-full mt-4">
            <Link href="#registrardominio">
              <motion.button
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.05 }}
                className="w-full rounded-xl bg-[#a482fb] px-4 h-12 text-sm font-semibold text-white shadow-sm hover:bg-[#8e62fc] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a482fb]"
              >
                Registrar
              </motion.button>
            </Link>
          </div>
        </div>

        <div className="flex flex-col glass-container bg-opacity-5 backdrop-filter backdrop-blur-lg bg-[#a482fb] shadow-lg p-6 border-2 rounded-2xl border-[#a482fb] my-3 sm:my-4 lg:my-6 mx-auto w-full h-72">
          <div>
            <h1 className="text-4xl font-bold text-[#a482fb] mb-2">.io</h1>
            <p className="text-gray-200 h-14">
              Desarrollá tu web tecnológica con la extensión .io
            </p>
          </div>
          <div className="flex flex-row items-end mb-2">
            <h1 className="text-5xl font-bold text-[#a482fb] mt-3">$49.99</h1>
            <h1 className="text-lg font-bold text-gray-200 mb-1">/año</h1>
          </div>

          <div className="w-full mt-4">
            <Link href="#registrardominio">
              <motion.button
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.05 }}
                className="w-full rounded-xl bg-[#a482fb] px-4 h-12 text-sm font-semibold text-white shadow-sm hover:bg-[#8e62fc] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a482fb]"
              >
                Registrar
              </motion.button>
            </Link>
          </div>
        </div>

        <div className="flex flex-col glass-container bg-opacity-5 backdrop-filter backdrop-blur-lg bg-[#a482fb] shadow-lg p-6 border-2 rounded-2xl border-[#a482fb] my-3 sm:my-4 lg:my-6 mx-auto w-full h-72">
          <div>
            <h1 className="text-4xl font-bold text-[#a482fb] mb-2">.icu</h1>
            <p className="text-gray-200 h-14">
              Dale visibilidad a tus proyectos con un .icu
            </p>
          </div>
          <div className="flex flex-row items-end mb-2">
            <h1 className="text-5xl font-bold text-[#a482fb] mt-3">$13.99</h1>
            <h1 className="text-lg font-bold text-gray-200 mb-1">/año</h1>
          </div>

          <div className="w-full mt-4">
            <Link href="#registrardominio">
              <motion.button
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.05 }}
                className="w-full rounded-xl bg-[#a482fb] px-4 h-12 text-sm font-semibold text-white shadow-sm hover:bg-[#8e62fc] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a482fb]"
              >
                Registrar
              </motion.button>
            </Link>
          </div>
        </div>

        <div className="flex flex-col glass-container bg-opacity-5 backdrop-filter backdrop-blur-lg bg-[#a482fb] shadow-lg p-6 border-2 rounded-2xl border-[#a482fb] my-3 sm:my-4 lg:my-6 mx-auto w-full h-72">
          <div>
            <h1 className="text-4xl font-bold text-[#a482fb] mb-2">.xyz</h1>
            <p className="text-gray-200 h-14">
              Alcanzá el éxito en línea con una extensión única y popular
            </p>
          </div>
          <div className="flex flex-row items-end mb-2">
            <h1 className="text-5xl font-bold text-[#a482fb] mt-3">$24.99</h1>
            <h1 className="text-lg font-bold text-gray-200 mb-1">/año</h1>
          </div>

          <div className="w-full mt-4">
            <Link href="#registrardominio">
              <motion.button
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.05 }}
                className="w-full rounded-xl bg-[#a482fb] px-4 h-12 text-sm font-semibold text-white shadow-sm hover:bg-[#8e62fc] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a482fb]"
              >
                Registrar
              </motion.button>
            </Link>
          </div>
        </div>

        <div className="flex flex-col glass-container bg-opacity-5 backdrop-filter backdrop-blur-lg bg-[#a482fb] shadow-lg p-6 border-2 rounded-2xl border-[#a482fb] my-3 sm:my-4 lg:my-6 mx-auto w-full h-72">
          <div>
            <h1 className="text-4xl font-bold text-[#a482fb] mb-2">.pro</h1>
            <p className="text-gray-200 h-14">
              Demostrá tu destreza con un dominio .pro.
            </p>
          </div>
          <div className="flex flex-row items-end mb-2">
            <h1 className="text-5xl font-bold text-[#a482fb] mt-3">$24.99</h1>
            <h1 className="text-lg font-bold text-gray-200 mb-1">/año</h1>
          </div>

          <div className="w-full mt-4">
            <Link href="#registrardominio">
              <motion.button
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.05 }}
                className="w-full rounded-xl bg-[#a482fb] px-4 h-12 text-sm font-semibold text-white shadow-sm hover:bg-[#8e62fc] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a482fb]"
              >
                Registrar
              </motion.button>
            </Link>
          </div>
        </div>

        <div className="flex flex-col glass-container bg-opacity-5 backdrop-filter backdrop-blur-lg bg-[#a482fb] shadow-lg p-6 border-2 rounded-2xl border-[#a482fb] my-3 sm:my-4 lg:my-6 mx-auto w-full h-72">
          <div>
            <h1 className="text-4xl font-bold text-[#a482fb] mb-2">.cloud</h1>
            <p className="text-gray-200 h-14">
              Destacate en la nube con dominios .cloud
            </p>
          </div>
          <div className="flex flex-row items-end mb-2">
            <h1 className="text-5xl font-bold text-[#a482fb] mt-3">$34.99</h1>
            <h1 className="text-lg font-bold text-gray-200 mb-1">/año</h1>
          </div>

          <div className="w-full mt-4">
            <Link href="#registrardominio">
              <motion.button
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.05 }}
                className="w-full rounded-xl bg-[#a482fb] px-4 h-12 text-sm font-semibold text-white shadow-sm hover:bg-[#8e62fc] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a482fb]"
              >
                Registrar
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PopularDomains;

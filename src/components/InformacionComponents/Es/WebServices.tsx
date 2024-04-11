import React from "react";
import { motion } from "framer-motion";

function WebServices() {
  return (
    <div className="grid grid-col-1 lg:grid-cols-3 mx-auto gap-x-6 lg:max-w-7xl px-6 sm:px-32 lg:px-6">
      <div className="flex flex-col glass-container bg-opacity-5 backdrop-filter backdrop-blur-lg bg-[#a482fb] shadow-lg p-6 border-2 rounded-2xl border-[#a482fb] my-3 sm:my-4 lg:my-6 mx-auto w-full">
        <div>
          <h1 className="text-4xl font-bold text-[#a482fb] mb-2">
            Paginas Web
          </h1>
          <p className="text-gray-200 h-14">
            Consigue más clientes y haz crecer tu negocio.
          </p>
        </div>
        <div className="flex flex-col items-start mb-2">
          <h1 className="text-xl font-bold text-gray-200 mt-3">Desde</h1>
          <div className="flex flex-row items-end mb-2">
            <h1 className="text-5xl font-bold text-[#a482fb] mt-3">$79</h1>
            <h1 className="text-lg font-bold text-gray-200 mb-1">/pago unico</h1>
          </div>
        </div>

        <div className="w-full mt-4">
          <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
            className="w-full rounded-xl bg-[#a482fb] px-4 h-12 text-sm font-semibold text-white shadow-sm hover:bg-[#8e62fc] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a482fb]"
          >
            Registrar
          </motion.button>
        </div>
      </div>

      <div className="flex flex-col glass-container bg-opacity-5 backdrop-filter backdrop-blur-lg bg-[#a482fb] shadow-lg p-6 border-2 rounded-2xl border-[#a482fb] my-3 sm:my-4 lg:my-6 mx-auto w-full">
        <div>
          <h1 className="text-4xl font-bold text-[#a482fb] mb-2">Dominios</h1>
          <p className="text-gray-200 h-14">
            Protege tu marca y aumenta tu visibilidad online.
          </p>
        </div>
        <div className="flex flex-col items-start mb-2">
          <h1 className="text-xl font-bold text-gray-200 mt-3">Desde</h1>
          <div className="flex flex-row items-end mb-2">
            <h1 className="text-5xl font-bold text-[#a482fb] mt-3">$15.99</h1>
            <h1 className="text-lg font-bold text-gray-200 mb-1">/año</h1>
          </div>
        </div>

        <div className="w-full mt-4">
          <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
            className="w-full rounded-xl bg-[#a482fb] px-4 h-12 text-sm font-semibold text-white shadow-sm hover:bg-[#8e62fc] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a482fb]"
          >
            Registrar
          </motion.button>
        </div>
      </div>

      <div className="flex flex-col glass-container bg-opacity-5 backdrop-filter backdrop-blur-lg bg-[#a482fb] shadow-lg p-6 border-2 rounded-2xl border-[#a482fb] my-3 sm:my-4 lg:my-6 mx-auto w-full">
        <div>
          <h1 className="text-4xl font-bold text-[#a482fb] mb-2">
            Correos
          </h1>
          <p className="text-gray-200 h-14">
            Dale una imagen profesional a tu negocio
          </p>
        </div>
        <div className="flex flex-col items-start mb-2">
          <h1 className="text-xl font-bold text-gray-200 mt-3">Desde</h1>
          <div className="flex flex-row items-end mb-2">
            <h1 className="text-5xl font-bold text-[#a482fb] mt-3">$8</h1>
            <h1 className="text-lg font-bold text-gray-200 mb-1">/mensuales</h1>
          </div>
        </div>

        <div className="w-full mt-4">
          <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
            className="w-full rounded-xl bg-[#a482fb] px-4 h-12 text-sm font-semibold text-white shadow-sm hover:bg-[#8e62fc] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a482fb]"
          >
            Registrar
          </motion.button>
        </div>
      </div>
    </div>
  );
}

export default WebServices;

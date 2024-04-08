import React from "react";
import Image from "next/image";
import { BiGlobe, BiCartAdd } from "react-icons/bi";
import { TbMap2 } from "react-icons/tb";
import { GiSpeedometer } from "react-icons/gi";
import {
  MdOutlineAppShortcut,
  MdOutlineDomainVerification,
} from "react-icons/md";
import { GrDomain } from "react-icons/gr";

function Tips() {
  return (
    <section className="px-6 py-32">
      <div>
        <h1 className="text-center text-white my-12 font-bold text-4xl">
          6 Consejos para elegir tu Dominio
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-x-6 2xl:mx-24">
        <div className="flex flex-col items-center justify-center p-6">
          <BiGlobe className="text-[#a482fb] text-7xl text-center mb-4" />
          <div className="text-center">
            <h1 className="font-bold text-2xl text-[#a482fb] mb-4">Sé breve</h1>
            <p className="text-gray-200 max-w-xs">
              Los nombres de dominio cortos son más fáciles de leer y memorizar.
              Crea el tuyo con solo 2-3 pas
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center p-6">
          <div className="flex items-center justify-center">
            <GrDomain className="text-[#a482fb] text-7xl text-center mb-4" />
          </div>
          <div className="text-center">
            <h1 className="font-bold text-2xl text-[#a482fb] mb-4">
              Simplificá
            </h1>
            <p className="text-gray-200 max-w-xs">
              Evitá el uso de guiones, números y jerga en tu dominio. Mantenlo
              simple para facilitar su escritura y memorización.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center p-6">
          <div className="flex items-center justify-center">
            <MdOutlineDomainVerification className="text-[#a482fb] text-7xl text-center mb-4" />
          </div>
          <div className="text-center">
            <h1 className="font-bold text-2xl text-[#a482fb] mb-4">
              Investigá
            </h1>
            <p className="text-gray-200 max-w-xs">
              Antes de adquirir tu dominio, verifica que esté disponible y no
              esté registrado por otra entidad.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center p-6">
          <div className="flex items-center justify-center">
            <MdOutlineAppShortcut className="text-[#a482fb] text-7xl text-center mb-4" />
          </div>
          <div className="text-center">
            <h1 className="font-bold text-2xl text-[#a482fb] mb-4">
              Integrá tu marca
            </h1>
            <p className="text-gray-200 max-w-xs">
              Incorpora el nombre de tu marca en tu dominio para mejorar tu
              visibilidad en los buscadores y aumentar el tráfico hacia tu sitio
              web.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center p-6">
          <div className="flex items-center justify-center">
            <TbMap2 className="text-[#a482fb] text-7xl text-center mb-4" />
          </div>
          <div className="text-center">
            <h1 className="font-bold text-2xl text-[#a482fb] mb-4">
              Considerá lo local
            </h1>
            <p className="text-gray-200 max-w-xs">
              Piensa en utilizar extensiones de dominio específicas de tu país o
              región para fortalecer tu presencia local en línea.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center p-6">
          <GiSpeedometer className="text-[#a482fb] text-7xl text-center mb-4" />
          <div className="text-center">
            <h1 className="font-bold text-2xl text-[#a482fb] mb-4">
              Actuá con prontitud
            </h1>
            <p className="text-gray-200 max-w-xs">
              Los mejores nombres de dominio se agotan rápidamente. Utiliza
              nuestra herramienta de búsqueda y registra tu dominio cuanto
              antes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Tips;

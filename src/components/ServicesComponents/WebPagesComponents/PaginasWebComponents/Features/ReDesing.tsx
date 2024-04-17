import React from "react";
import Image from "next/image";
import Before from "@/images/Before.png";
import After from "@/images/After.png";
import { FaArrowRight, FaArrowDown } from "react-icons/fa6";

function ReDesing() {
  return (
    <div className="flex flex-col items-center justify-center px-6 mt-20">
      <div className="text-3xl md:text-4xl lg:text-5xl text-center font-bold text-[#a482fb] mb-6">
        Reemplace y Actualice su antigua Página Web
      </div>
      <p className="text-base sm:text-lg text-gray-300 text-center mb-8">
        Transformamos tu antigua página en una experiencia digital impresionante{" "}
        <br />
        que atraiga a tus clientes y destaque tu marca.
      </p>
      <div className="flex flex-col lg:flex-row mt-12">
        <div className="flex flex-col">
          <h1 className="text-xl text-white font-bold text-center mb-2">
            Antes
          </h1>
          <Image src={Before} width={550} height={550} alt="Antes" />
        </div>
        <div className="flex flex-col items-center justify-center my-8">
          <FaArrowDown className="block lg:hidden text-4xl text-[#a482fb]" />
        </div>
        <div>
          <FaArrowRight className="hidden lg:block text-[#a482fb]" />
        </div>
        <div className="flex flex-col">
          <h1 className="text-xl text-white font-bold text-center mb-2">
            Despues
          </h1>
          <Image src={After} width={550} height={550} alt="Despues" />
        </div>
      </div>
    </div>
  );
}

export default ReDesing;

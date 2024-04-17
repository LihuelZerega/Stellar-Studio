import React from "react";
import Image from "next/image";
import Before from "@/images/Before.png";
import After from "@/images/After.png";

function ReDesing() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="text-3xl sm:text-4xl lg:text-4xl text-center font-bold text-[#a482fb] mb-6">
        Reemplace y Actualice su antigua Página Web
      </div>
      <p className="text-base sm:text-lg text-gray-300 text-center mb-8">
        Transformamos tu antigua página en una experiencia digital impresionante{" "}
        <br />
        que atraiga a tus clientes y destaque tu marca.
      </p>
      <div className="flex flex-col md:flex-row mt-12">
        <div className="flex flex-col">
          <h1 className="text-xl font-bold text-center mb-2">Antes</h1>
          <Image src={Before} width={550} height={550} alt="Antes" />
        </div>
        <div className="flex flex-col">
          <h1 className="text-xl font-bold text-center mb-2">Despues</h1>
          <Image src={After} width={550} height={550} alt="Despues" />
        </div>
      </div>
    </div>
  );
}

export default ReDesing;

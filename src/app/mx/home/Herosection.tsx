import React from "react";
import { HoverBorderGradientDemo } from "@/ui/HoverBorderGradient";

function Herosection() {
  return (
    <div
      className="flex flex-col mx-auto col-span-1 overflow-x-hidden relative w-full pt-36 pb-24 md:pt-44 md:pb-24 bg-neutral-50 2xl:pt-64 2xl:pb-56 animate-fadeIn"
      style={{
        backgroundImage:
          'url("https://medusajs.com/_next/image/?url=%2Fimages%2Fhero-banner.png&w=3840&q=100")',
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <HoverBorderGradientDemo />
      <h1 className="text-center my-4 text-[56px] leading-[64px] md:text-[72px] md:leading-[88px] text-neutral-800 animate-fadeInUp">
        <span className="text-[#a482fb]">Impulsá</span> tu{" "}
        <br className="lg:hidden" /> presencia <br /> en línea{" "}
        <span className="text-[#a482fb]">hoy</span>
      </h1>

      <p
        className="text-center mb-0 text-lg text-neutral-600 animate-fadeInUp"
        data-label-id="0"
      >
        El camino hacia una presencia web espectacular comienza aquí. <br />{" "}
        Descubre nuestras soluciones <br className="block sm:hidden" /> listas
        para usar.
      </p>
    </div>
  );
}

export default Herosection;

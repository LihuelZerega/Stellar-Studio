import React from "react";
import { HoverBorderGradientDemo } from "@/ui/HoverBorderGradient";

function Herosection() {
  return (
    <div
      className="flex flex-col mx-auto col-span-1 overflow-x-hidden relative w-full pt-56 pb-24 md:pt-44 md:pb-24 bg-neutral-50 2xl:pt-64 2xl:pb-56 animate-fadeIn"
      style={{
        backgroundImage:
          'url("https://res.cloudinary.com/dszjgdktf/image/upload/v1715609605/HeroBackground_cf4tpz.png")',
      }}
    >
      <HoverBorderGradientDemo />
      <h1 className="text-center my-4 text-[44px] leading-[44px] md:text-[72px] md:leading-[88px] text-neutral-800 animate-fadeInUp">
        <span className="text-[#a482fb]">Impulsá</span> tu{" "}
        <br className="lg:hidden" /> presencia <br /> en línea{" "}
        <span className="text-[#a482fb]">hoy</span>
      </h1>

      <p
        className="text-center last:mb-0 mb-0 text-xlarge text-neutral-600 animate-fadeInUp"
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

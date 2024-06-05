import React from "react";
import { AnimatedTooltipPreview } from "./AnimatedTooltip";

function NewHeroSection() {
  return (
    <div className="h-[100vh] w-full border-b border-ui-border-base relative bg-ui-bg-subtle">
      <div className="block xl:hidden">
        <img
          src="https://res.cloudinary.com/dszjgdktf/image/upload/v1716815849/Sin_t%C3%ADtulo-2_lqha04.jpg"
          alt=""
          className="w-full h-[100vh] object-cover"
        />
      </div>
      <div className="hidden xl:block">
        <img
          src="https://res.cloudinary.com/dszjgdktf/image/upload/v1716815471/Capa_3_lsbg9t.jpg"
          alt=""
          className="w-full h-[100vh] object-cover"
        />
      </div>

      <div className="absolute inset-0 z-10 bottom-64 sm:bottom-96 lg:bottom-[600px] xl:bottom-0 xl:-left-[620px] 2xl:-left-[800px] flex flex-col justify-center items-center text-left gap-6">
        <div className="mx-auto max-w-lg lg:max-w-2xl xl:max-w-2xl 2xl:max-w-2xl px-3 py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-4 sm:flex sm:justify-center xl:justify-start">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-neutral-200 ring-1 ring-neutral-200/10 hover:ring-neutral-200/20">
              Stellar Studio 2.0{" "}
              {/* <a href="#" className="font-semibold text-[#a482fb]">
                <span className="absolute inset-0" aria-hidden="true" />
                Leer mas <span aria-hidden="true">&rarr;</span>
              </a> */}
            </div>
          </div>
          <div className="text-center xl:text-left">
            <h1 className="text-5xl font-bold tracking-tight text-neutral-100 sm:text-5xl lg:text-6xl 2xl:text-7xl">
              Impulsá tu presencia en línea hoy
            </h1>
            <p className="px-3 sm:px-0 mt-6 text-sm md:text-base 2xl:text-xl leading-4 md:leading-8 text-neutral-200">
              El camino hacia una presencia web espectacular comienza aquí.
              Descubre nuestras soluciones listas para usar.
            </p>
            <div className="mt-10 flex items-center justify-center xl:justify-start gap-x-6">
              <a
                href="/es/servicios/paginasweb"
                className="rounded-md bg-[#a482fb] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#a482fb] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a482fb]"
              >
                Comenzar ahora
              </a>
              <a
                href="#"
                className="text-sm font-semibold leading-6 text-neutral-200"
              >
                Leer mas <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewHeroSection;

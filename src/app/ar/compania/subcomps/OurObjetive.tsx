import React from "react";

function OurObjetive() {
  return (
    <div className="border-t-1 border-neutral-200 py-12 lg:py-24 bg-neutral-100 relative">
      <div className="absolute inset-0">
        <img
          className="object-cover object-right w-full h-full lg:object-center opacity-10 sm:opacity-10"
          src="https://res.cloudinary.com/dszjgdktf/image/upload/v1713356263/CtaBackground4_jercbc.png"
          alt="Cta Background 4"
        />
      </div>
      <div className="px-4 mx-auto max-w-5xl sm:px-6 lg:px-8">
        <section className="flex flex-col items-start justify-start w-full space-y-4 mb-12">
          <div className="space-y-4">
            <strong className="mb-4 text-[32px] leading-[44px] text-neutral-800 border-b-2 border-[#a482fb]">
              Nuestro Objetivo
            </strong>
            <p className="mb-0 text-neutral-600">
              Ser reconocidos como líderes en la industria tecnológica,
              proporcionando soluciones innovadoras y personalizadas que
              transformen la manera en que las empresas interactúan con sus
              clientes en línea.
            </p>
            <p className="mb-0 text-neutral-600">
              Nos esforzamos por ser pioneros en la adopción de tecnologías
              emergentes y por anticiparnos a las necesidades futuras de
              nuestros clientes. Visualizamos un futuro donde Stellar Studio sea
              sinónimo de excelencia en el diseño web, desarrollo de
              aplicaciones y estrategias digitales. Queremos ser la primera
              opción para las empresas que buscan expandir su presencia en línea
              y aumentar su impacto en el mundo digital. Nos vemos como un socio
              estratégico para nuestros clientes, brindándoles las herramientas
              y el conocimiento necesario para alcanzar el éxito en un entorno
              cada vez más competitivo.
            </p>
            <p className="mb-0 text-neutral-600">
              Además, aspiramos a crear un entorno de trabajo inclusivo y
              colaborativo donde nuestro equipo pueda crecer profesionalmente y
              desarrollar todo su potencial. Queremos ser reconocidos como
              empleadores de elección, atrayendo y reteniendo a los mejores
              talentos en la industria tecnológica.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default OurObjetive;

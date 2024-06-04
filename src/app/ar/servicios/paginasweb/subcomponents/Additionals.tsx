import React from "react";
import Image from "next/image";

function Additionals() {
  return (
    <div className="border-t-1 border-neutral-200 py-12 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <section className="flex flex-col items-center justify-center w-full text-center space-y-4 mb-12">
          <div
            data-sb-field-path=".0"
            className="transition-all bg-[#a482fb] bg-opacity-60 border-1 border-neutral-300 text-white h-7 px-3 text-sm leading-5 rounded-full font-medium flex gap-3 items-center"
          >
            <span>Adicionales</span>
          </div>
          <div className="space-y-4">
            <strong className="mb-4 text-[32px] leading-[44px] text-neutral-800">
              Cada seccion es unica, creamos tu web unica.
            </strong>
            <p className="mb-0 text-neutral-600 md:max-w-3xl">
              Trabajamos en conjunto para crear una web que genere impacto. En
              Stellar Studio nos encargamos de todo el proceso de creación de tu
              nueva web.
            </p>
          </div>
        </section>

        <section className="flex flex-col md:flex-row items-center justify-center gap-y-8 sm:gap-y-0 gap-x-8">
          <div>
            <div className="object-cover w-full h-1/2 border-2 border-gray-200 bg-white rounded-2xl select-none">
              <Image
                src="https://res.cloudinary.com/dszjgdktf/image/upload/v1715867130/RedesingMockup_hdk2um.png"
                width={1096}
                height={480}
                alt=""
              />
            </div>
            <div className="text-black mt-6 lg:mt-10">
              <strong>Actualice su antigua Página Web</strong>
              <p className="mt-2 text-neutral-500">
                Transformamos tu antigua página en una experiencia digital{" "}
                <br />
                impresionante que atraiga a tus clientes y destaque tu marca.
              </p>
            </div>
          </div>
          <div>
            <div className="object-cover w-full h-1/2 border-2 border-gray-200 bg-white rounded-2xl select-none">
              <Image
                src="https://res.cloudinary.com/dszjgdktf/image/upload/v1715869616/ChatBotMockup_rixlvn.png"
                width={1096}
                height={480}
                alt=""
              />
            </div>
            <div className="text-black mt-6 lg:mt-10">
              <div className="flex flex-row items-center space-x-2">
                <strong>ChatBot con Inteligencia Artificial </strong>
              </div>
              <p className="mt-2 text-neutral-500">
                Ofrece respuestas rápidas y precisas a las preguntas frecuentes
                de los usuarios en tiempo real, mejorando la experiencia del
                cliente.
              </p>
            </div>
          </div>
        </section>
        <section className="my-12">
          <div className="w-full h-1/2 border-2 border-gray-200 bg-white rounded-2xl select-none">
            <Image
              src="https://res.cloudinary.com/dszjgdktf/image/upload/v1715870536/CartExperienseMockup_uuyc3w.png"
              width={2272}
              height={960}
              alt=""
            />
          </div>
          <div className="text-black mt-6 lg:mt-10">
            <strong>Creamos experiencias de pago únicas</strong>
            <p className="mt-2 text-neutral-500">
              Flexibilidad para el vendedor de sus productos y el cliente.
              Creamos flujos de pago de manera simple y dinámica para tu
              negocio.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Additionals;

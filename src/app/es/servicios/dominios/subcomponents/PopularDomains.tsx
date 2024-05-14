import React from "react";
import Image from "next/image";

function PopularDomains() {
  return (
    <div className="border-t-1 border-neutral-200 py-12 lg:py-24 bg-neutral-100">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* <section className="flex flex-col items-center justify-center w-full text-center space-y-4 mb-12">
          <div className="transition-all bg-neutral-200 border-1 border-neutral-300 text-black h-7 px-3 text-sm leading-5 rounded-full font-medium flex gap-3 items-center">
            <span>Dominios Populares</span>
          </div>
          <div className="space-y-4">
            <strong className="mb-4 text-[32px] leading-[44px] text-neutral-800">
              Asegurá tu identidad en línea
            </strong>
            <p className="mb-0 text-neutral-600 md:max-w-3xl">
              Elegi el dominio que se adecue a la identidad de tu marca. <br /> Nos
              encargamos de todo el proceso de creación de tu nuevo dominio.
            </p>
          </div>
        </section> */}

        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          <div className="border-2 border-gray-200 bg-white rounded-2xl p-4 space-y-3">
            <Image
              src="https://assets.hostinger.com/images/domain-checker-2020/tlds-all/icon-com-f0ce55a39c.svg"
              width={158}
              height={48}
              alt="comIcon"
            />
            <p className="mt-2 text-neutral-500">
              Inspirá confianza con este dominio reconocido
            </p>
            <div className="flex flex-row items-center justify-between">
              <h1 className="text-2xl font-bold text-neutral-800">
                $15.99 <span className="text-neutral-500 text-base">/año</span>
              </h1>
              <a href="#registrardominio">
                <button className="bg-[#a482fb] hover:bg-[#a482fb]/90 text-white border-1 border-gray-200 rounded-md px-4 py-2">
                  Registrar
                </button>
              </a>
            </div>
          </div>

          <div className="border-2 border-gray-200 bg-white rounded-2xl p-4 space-y-3">
            <Image
              src="https://assets.hostinger.com/images/domain-checker-2020/tlds-all/icon-net-264487d754.svg"
              width={158}
              height={48}
              alt="comIcon"
            />
            <p className="mt-2 text-neutral-500">
              Mostrá tu experiencia en los negocios con .net.
            </p>
            <div className="flex flex-row items-center justify-between">
              <h1 className="text-2xl font-bold text-neutral-800">
                $18.99 <span className="text-neutral-500 text-base">/año</span>
              </h1>
              <a href="#registrardominio">
                <button className="bg-[#a482fb] hover:bg-[#a482fb]/90 text-white border-1 border-gray-200 rounded-md px-4 py-2">
                  Registrar
                </button>
              </a>
            </div>
          </div>

          <div className="border-2 border-gray-200 bg-white rounded-2xl p-4 space-y-3">
            <Image
              src="https://assets.hostinger.com/images/domain-checker-2020/tlds-all/icon-online-222b01e9cc.svg"
              width={158}
              height={48}
              alt="comIcon"
            />
            <p className="mt-2 text-neutral-500">
              Llevá tu proyecto a internet con los dominios .online
            </p>
            <div className="flex flex-row items-center justify-between">
              <h1 className="text-2xl font-bold text-neutral-800">
                $34.99 <span className="text-neutral-500 text-base">/año</span>
              </h1>
              <a href="#registrardominio">
                <button className="bg-[#a482fb] hover:bg-[#a482fb]/90 text-white border-1 border-gray-200 rounded-md px-4 py-2">
                  Registrar
                </button>
              </a>
            </div>
          </div>

          <div className="border-2 border-gray-200 bg-white rounded-2xl p-4 space-y-3">
            <Image
              src="https://assets.hostinger.com/images/domain-checker-2020/tlds-all/icon-io-98c7d4c690.svg"
              width={158}
              height={48}
              alt="comIcon"
            />
            <p className="mt-2 text-neutral-500">
              Desarrollá tu web tecnológica con la extensión .io
            </p>
            <div className="flex flex-row items-center justify-between">
              <h1 className="text-2xl font-bold text-neutral-800">
                $49.99 <span className="text-neutral-500 text-base">/año</span>
              </h1>
              <a href="#registrardominio">
                <button className="bg-[#a482fb] hover:bg-[#a482fb]/90 text-white border-1 border-gray-200 rounded-md px-4 py-2">
                  Registrar
                </button>
              </a>
            </div>
          </div>

          <div className="border-2 border-gray-200 bg-white rounded-2xl p-4 space-y-3">
            <Image
              src="https://assets.hostinger.com/images/domain-checker-2020/tlds-all/icon-icu-b7151fba15.svg"
              width={158}
              height={48}
              alt="comIcon"
            />
            <p className="mt-2 text-neutral-500">
              Dale visibilidad a tus proyectos con un .icu
            </p>
            <div className="flex flex-row items-center justify-between">
              <h1 className="text-2xl font-bold text-neutral-800">
                $13.99 <span className="text-neutral-500 text-base">/año</span>
              </h1>
              <a href="#registrardominio">
                <button className="bg-[#a482fb] hover:bg-[#a482fb]/90 text-white border-1 border-gray-200 rounded-md px-4 py-2">
                  Registrar
                </button>
              </a>
            </div>
          </div>

          <div className="border-2 border-gray-200 bg-white rounded-2xl p-4 space-y-3">
            <Image
              src="https://assets.hostinger.com/images/domain-checker-2020/tlds-all/icon-xyz-f5ea4ca77e.svg"
              width={158}
              height={48}
              alt="comIcon"
            />
            <p className="mt-2 text-neutral-500">
              Alcanzá el éxito con una extensión única y popular
            </p>
            <div className="flex flex-row items-center justify-between">
              <h1 className="text-2xl font-bold text-neutral-800">
                $24.99 <span className="text-neutral-500 text-base">/año</span>
              </h1>
              <a href="#registrardominio">
                <button className="bg-[#a482fb] hover:bg-[#a482fb]/90 text-white border-1 border-gray-200 rounded-md px-4 py-2">
                  Registrar
                </button>
              </a>
            </div>
          </div>

          <div className="border-2 border-gray-200 bg-white rounded-2xl p-4 space-y-3">
            <Image
              src="https://assets.hostinger.com/images/domain-checker-2020/tlds-all/icon-pro.svg"
              width={158}
              height={48}
              alt="comIcon"
            />
            <p className="mt-2 text-neutral-500">
              Demostrá tu destreza con un dominio .pro.
            </p>
            <div className="flex flex-row items-center justify-between">
              <h1 className="text-2xl font-bold text-neutral-800">
                $24.99 <span className="text-neutral-500 text-base">/año</span>
              </h1>
              <a href="#registrardominio">
                <button className="bg-[#a482fb] hover:bg-[#a482fb]/90 text-white border-1 border-gray-200 rounded-md px-4 py-2">
                  Registrar
                </button>
              </a>
            </div>
          </div>

          <div className="border-2 border-gray-200 bg-white rounded-2xl p-4 space-y-3">
            <Image
              src="https://assets.hostinger.com/images/domain-checker-2020/tlds-all/icon-cloud-54f394268c.svg"
              width={158}
              height={48}
              alt="comIcon"
            />
            <p className="mt-2 text-neutral-500">
              Destacate en la nube con dominios .cloud
            </p>
            <div className="flex flex-row items-center justify-between">
              <h1 className="text-2xl font-bold text-neutral-800">
                $34.99 <span className="text-neutral-500 text-base">/año</span>
              </h1>
              <a href="#registrardominio">
                <button className="bg-[#a482fb] hover:bg-[#a482fb]/90 text-white border-1 border-gray-200 rounded-md px-4 py-2">
                  Registrar
                </button>
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default PopularDomains;

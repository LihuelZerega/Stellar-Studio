import React from "react";
import Image from "next/image";
import { BsArrowRightShort } from "react-icons/bs";

function Products() {
  return (
    <div className="py-16 px-6 md:px-12 lg:px-24 bg-neutral-100 border-t border-neutral-200">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-row items-center justify-between border-b-1 border-neutral-300">
          <div className="flex flex-row items-center space-x-1 pb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              color="#b285ff"
              fill="none"
            >
              <path
                d="M11.5 22C7.49306 22 5.48959 22 4.2448 20.5355C3 19.0711 3 16.714 3 12C3 7.28596 3 4.92893 4.2448 3.46447C5.48959 2 7.49306 2 11.5 2C15.5069 2 17.5104 2 18.7552 3.46447C19.7572 4.64332 19.9527 6.40054 19.9908 9.5"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8 8H15M8 13H11"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M19.6092 18.1054C20.4521 17.4918 21 16.4974 21 15.375C21 13.511 19.489 12 17.625 12H17.375C15.511 12 14 13.511 14 15.375C14 16.4974 14.5479 17.4918 15.3908 18.1054M19.6092 18.1054C19.0523 18.5108 18.3666 18.75 17.625 18.75H17.375C16.6334 18.75 15.9477 18.5108 15.3908 18.1054M19.6092 18.1054L20.192 19.9404C20.4143 20.6403 20.5255 20.9903 20.4951 21.2082C20.4318 21.6617 20.0619 21.9984 19.6252 22C19.4154 22.0008 19.101 21.8358 18.4723 21.5059C18.2027 21.3644 18.0679 21.2936 17.93 21.252C17.649 21.1673 17.351 21.1673 17.07 21.252C16.9321 21.2936 16.7973 21.3644 16.5277 21.5059C15.899 21.8358 15.5846 22.0008 15.3748 22C14.9381 21.9984 14.5682 21.6617 14.5049 21.2082C14.4745 20.9903 14.5857 20.6403 14.808 19.9404L15.3908 18.1054"
                stroke="currentColor"
                stroke-width="1.5"
              />
            </svg>
            <h1 className="text-sm font-light text-neutral-600">Servicios</h1>
          </div>

          <div className="text-neutral-600 font-light hover:font-semibold hover:text-[#a482fb] cursor-pointer hidden sm:block">
            <h1 className="flex flex-row items-center text-sm">
              Consulte nuestros productos y servicios{" "}
              <BsArrowRightShort className="" />
            </h1>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-start justify-between md:space-x-12 pt-6 sm:pt-10 pb-12">
          <h1 className="text-3xl text-neutral-800 ">
            ¿Qué podemos construir en{" "}
            <span className="border-b-2 border-[#a482fb]">Stellar</span>{" "}
            <span className="border-b-2 border-[#a482fb]">Studio</span>?
          </h1>
          <p className="text-xl text-neutral-500 pt-4 md:pt-1">
            Nuestros modelos estan diseñados para ser utilizados en cualquier
            tipo de negocio.
          </p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
        <div className="bg-white rounded-xl border-neutral-300 border-1 shadow-sm p-1 cursor-pointer hover:shadow-md transition-shadow duration-75">
          <div>
            <Image
              src="https://medusajs.com/_next/image/?url=%2Fimages%2Frecipe-cards-1.png&w=3840&q=90"
              width={2160}
              height={960}
              alt=""
            />
          </div>
          <div className="p-3">
            <h1 className="font-bold text-neutral-800">One Page</h1>
            <p className="text-xs text-neutral-500">
              Presencia en linea simple, promocion de producto o servicio,
              captar clientes sin un sitio complejo.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl border-neutral-300 border-1 shadow-sm p-1 cursor-pointer hover:shadow-md hover:transition-300">
          <div>
            <Image
              src="https://medusajs.com/_next/image/?url=%2Fimages%2Frecipe-cards-1.png&w=3840&q=90"
              width={2160}
              height={960}
              alt=""
            />
          </div>
          <div className="p-3">
            <h1 className="font-bold text-neutral-800">Landing Page</h1>
            <p className="text-xs text-neutral-500">
              Sitio para atraer clientes potenciales interesados en sus
              servicios y convertirlos en clientes.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl border-neutral-300 border-1 shadow-sm p-1 cursor-pointer hover:shadow-md hover:transition-300">
          <div>
            <Image
              src="https://medusajs.com/_next/image/?url=%2Fimages%2Frecipe-cards-1.png&w=3840&q=90"
              width={2160}
              height={960}
              alt=""
            />
          </div>
          <div className="p-3">
            <h1 className="font-bold text-neutral-800">E-commerce</h1>
            <p className="text-xs text-neutral-500">
              Creado para vender productos y ampliar su alcance, audiencia y
              profesionalismo.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl border-neutral-300 border-1 shadow-sm p-1 cursor-pointer hover:shadow-md hover:transition-300">
          <div>
            <Image
              src="https://medusajs.com/_next/image/?url=%2Fimages%2Frecipe-cards-1.png&w=3840&q=90"
              width={2160}
              height={960}
              alt=""
            />
          </div>
          <div className="p-3">
            <h1 className="font-bold text-neutral-800">A medida</h1>
            <p className="text-xs text-neutral-500">
              Sitios únicos y personalizados que se adaptan a las necesidades
              específicas de tu negocio.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl border-neutral-300 border-1 shadow-sm p-1 cursor-pointer hover:shadow-md hover:transition-300">
          <div>
            <Image
              src="https://medusajs.com/_next/image/?url=%2Fimages%2Frecipe-cards-1.png&w=3840&q=90"
              width={2160}
              height={960}
              alt=""
            />
          </div>
          <div className="p-3">
            <h1 className="font-bold text-neutral-800">Dominios</h1>
            <p className="text-xs text-neutral-500">
              Deja que el mundo sepa que estas siempre online.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl border-neutral-300 border-1 shadow-sm p-1 cursor-pointer hover:shadow-md hover:transition-300">
          <div>
            <Image
              src="https://medusajs.com/_next/image/?url=%2Fimages%2Frecipe-cards-1.png&w=3840&q=90"
              width={2160}
              height={960}
              alt=""
            />
          </div>
          <div className="p-3">
            <h1 className="font-bold text-neutral-800">Correo Profesionales</h1>
            <p className="text-xs text-neutral-500">
              Consegui una imagen confiable y respetable de tu marca.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;

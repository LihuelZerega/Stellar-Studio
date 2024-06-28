import React from "react";
import Image from "next/image";
import Link from "next/link";
import StellarStudioLogo from "@/images/StellarStudioLogo.png";
import { FaXTwitter, FaWhatsapp } from "react-icons/fa6";

function FooterEs() {
  return (
    <div>
      <section className="py-10 sm:pt-16 lg:pt-24 border-t border-gray-200 bg-[#272526]">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-y-12 gap-x-8 xl:gap-x-12">
            <div className="col-span-2 md:col-span-4 xl:pr-8">
              <Image className="w-auto h-9" src={StellarStudioLogo} alt="" />
              <p className="text-base leading-relaxed text-gray-200 mt-7">
                Proveemos un servicio de desarrollo web de alta calidad con la
                mision de impulsar su crecimiento y presencia en linea.
              </p>
            </div>

            <div className=" hidden lg:block lg:col-span-2">
              <p className="text-base font-semibold text-transparent select-none">
                Servicios
              </p>
            </div>

            <div className="lg:col-span-2">
              <p className="text-base font-semibold text-[#a482fb]">
                Servicios
              </p>

              <ul className="mt-6 space-y-4">
                <li>
                  <a
                    href="/ar/servicios/paginasweb"
                    title=""
                    className="flex text-sm text-gray-100 transition-all duration-200 hover:text-gray-300 focus:text-gray-300"
                  >
                    {" "}
                    One Page{" "}
                  </a>
                </li>

                <li>
                  <a
                    href="/ar/servicios/paginasweb"
                    title=""
                    className="flex text-sm text-gray-100 transition-all duration-200 hover:text-gray-300 focus:text-gray-300"
                  >
                    {" "}
                    Landing Page{" "}
                  </a>
                </li>

                <li>
                  <a
                    href="/ar/servicios/paginasweb"
                    title=""
                    className="flex text-sm text-gray-100 transition-all duration-200 hover:text-gray-300 focus:text-gray-300"
                  >
                    {" "}
                    E-commerce{" "}
                  </a>
                </li>

                <li>
                  <a
                    href="/ar/servicios/paginasweb"
                    title=""
                    className="flex text-sm text-gray-100 transition-all duration-200 hover:text-gray-300 focus:text-gray-300"
                  >
                    {" "}
                    Personalizado{" "}
                  </a>
                </li>

                <li>
                  <a
                    href="/ar/servicios/dominios"
                    title=""
                    className="flex text-sm text-gray-100 transition-all duration-200 hover:text-gray-300 focus:text-gray-300"
                  >
                    {" "}
                    Comprar Dominio{" "}
                  </a>
                </li>

                <li>
                  <a
                    href="/ar/servicios/correosprofecionales"
                    title=""
                    className="flex text-sm text-gray-100 transition-all duration-200 hover:text-gray-300 focus:text-gray-300"
                  >
                    {" "}
                    Correo Profecional{" "}
                  </a>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-2">
              <p className="text-base font-semibold text-[#a482fb]">Compañia</p>

              <ul className="mt-6 space-y-5">
                <li>
                  <a
                    href="/ar/compania#sobrenosotros"
                    title=""
                    className="flex text-sm text-gray-100 transition-all duration-200 hover:text-gray-300 focus:text-gray-300"
                  >
                    {" "}
                    Sobre Stellar Studio{" "}
                  </a>
                </li>

                <li>
                  <a
                    href="/ar/compania#valores"
                    title=""
                    className="flex text-sm text-gray-100 transition-all duration-200 hover:text-gray-300 focus:text-gray-300"
                  >
                    {" "}
                    Misión, Visión y Valores{" "}
                  </a>
                </li>

                <li>
                  <a
                    href="/ar/compania#tecnologia"
                    title=""
                    className="flex text-sm text-gray-100 transition-all duration-200 hover:text-gray-300 focus:text-gray-300"
                  >
                    {" "}
                    Tecnolgia{" "}
                  </a>
                </li>

                <li>
                  <a
                    href="/ar/ayuda#contactoayuda"
                    title=""
                    className="flex text-sm text-gray-100 transition-all duration-200 hover:text-gray-300 focus:text-gray-300"
                  >
                    {" "}
                    Contactanos{" "}
                  </a>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-2">
              <p className="text-base font-semibold text-[#a482fb]">Ayuda</p>

              <ul className="mt-6 space-y-5">
                <li>
                  <a
                    href="/ar/ayuda#pasosayuda"
                    title=""
                    className="flex text-sm text-gray-100 transition-all duration-200 hover:text-gray-300 focus:text-gray-300"
                  >
                    {" "}
                    Atencion al cliente{" "}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <hr className="mt-16 mb-10 border-gray-200" />

          <div className="sm:flex sm:items-center sm:justify-between">
            <p className="text-sm text-gray-200">
              © Copyright 2024, All Rights Reserved by Stellar Studio
            </p>

            <ul className="flex items-center mt-5 space-x-3 md:order-3 sm:mt-0">
              <li>
                <a
                  href="https://wa.me/message/6QMHEP7ZRVXFA1"
                  title=""
                  className="flex items-center justify-center text-gray-100 transition-all duration-200 bg-transparent border border-gray-300 rounded-full w-7 h-7 focus:bg-[#a482fb] hover:text-white focus:text-white hover:bg-[#a482fb] hover:border-[#a482fb] focus:border-[#a482fb]"
                >
                  <FaWhatsapp />
                </a>
              </li>

              <li>
                <a
                  href="https://www.instagram.com/stellarstudioweb/"
                  title=""
                  className="flex items-center justify-center text-gray-100 transition-all duration-200 bg-transparent border border-gray-300 rounded-full w-7 h-7 focus:bg-[#a482fb] hover:text-white focus:text-white hover:bg-[#a482fb] hover:border-[#a482fb] focus:border-[#a482fb]"
                >
                  <svg
                    className="w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z"></path>
                    <circle cx="16.806" cy="7.207" r="1.078"></circle>
                    <path d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z"></path>
                  </svg>
                </a>
              </li>

              <li>
                <a
                  href="https://github.com/"
                  title=""
                  className="flex items-center justify-center text-gray-100 transition-all duration-200 bg-transparent border border-gray-300 rounded-full w-7 h-7 focus:bg-[#a482fb] hover:text-white focus:text-white hover:bg-[#a482fb] hover:border-[#a482fb] focus:border-[#a482fb]"
                >
                  <svg
                    className="w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
                    ></path>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FooterEs;

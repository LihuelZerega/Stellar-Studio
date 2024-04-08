import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import ExpandeTuNegocioMobileMockUp from "@/images/ExpandeTuNegocioMobileMockUp.png";
import FastestWebMockup from "@/images/FastestWebMockup.png";
import CloudSystem from "@/images/CloudSystem.png";
import SoporteTecnicoMobileMockup from "@/images/SoporteTecnicoMobileMockup.png";
import Link from "next/link";

function FeaturesEs() {
  return (
    <>
      <div className="px-4 py-4 mx-auto max-w-7xl sm:px-6 lg:px-8 mt-32">
        {/* <section className="px-4 py-4 mx-auto max-w-7xl rounded-xl sm:px-6 lg:px-8 2xl:py-24">
        <div className="px-4 mx-auto bg-[#a482fb] w-full sm:px-6 lg:px-8 2xl:rounded-xl">
          <div className="py-10 sm:py-16 lg:py-24 2xl:pl-24">
            <div className="grid items-center grid-cols-1 gap-y-8 lg:grid-cols-2 lg:gap-x-8 2xl:gap-x-20">
              <div className="lg:order-2 2xl:-mr-24">
                <img
                  className="w-full shadow-xl rounded-xl"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/cta/6/dashboard-screenshot.png"
                  alt=""
                />
              </div>

              <div className="lg:order-1">
                <h2 className="text-lg font-bold leading-tight text-white sm:text-2xl lg:text-3xl lg:leading-snug">
                Automatiza tus interacciones y ahorra tiempo con nuestro ChatBot inteligente.
                </h2>

                <ul className="grid grid-cols-1 mt-4 sm:mt-10 sm:grid-cols-2 gap-x-10 xl:gap-x-16 gap-y-4 xl:gap-y-6">
                  <li className="flex items-center">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-green-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span className="ml-3 font-medium text-white">
                      {" "}
                      120+ Coded Blocks{" "}
                    </span>
                  </li>

                  <li className="flex items-center">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-green-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span className="ml-3 font-medium text-white">
                      {" "}
                      Free Icons Included{" "}
                    </span>
                  </li>

                  <li className="flex items-center">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-green-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span className="ml-3 font-medium text-white">
                      {" "}
                      Made with TailwindCSS{" "}
                    </span>
                  </li>

                  <li className="flex items-center">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-green-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span className="ml-3 font-medium text-white">
                      {" "}
                      Dark & Light Mode{" "}
                    </span>
                  </li>

                  <li className="flex items-center">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-green-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span className="ml-3 font-medium text-white">
                      {" "}
                      Edit & Customize Easily{" "}
                    </span>
                  </li>

                  <li className="flex items-center">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-green-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span className="ml-3 font-medium text-white">
                      {" "}
                      Get Free Support{" "}
                    </span>
                  </li>
                </ul>

                <div className="flex flex-col items-start mt-8 sm:space-x-4 sm:flex-row sm:items-center lg:mt-12">
                  <a
                    href="#"
                    title=""
                    className="inline-flex items-center justify-center px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:bg-blue-700"
                    role="button"
                  >
                    <svg
                      className="w-5 h-5 mr-2 -ml-1"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                      />
                    </svg>
                    Download Now
                  </a>

                  <a
                    href="#"
                    title=""
                    className="inline-flex items-center justify-center px-4 py-4 mt-5 text-base font-semibold text-white transition-all duration-200 bg-transparent border border-white rounded-md sm:mt-0 hover:bg-white hover:text-black"
                    role="button"
                  >
                    {" "}
                    Explore UI Blocks{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

        <section className="grid grid-cols-1 lg:grid-cols-2">
          <div>
            <div className="lg:max-w-md text-center lg:text-left">
              <h1 className="text-center lg:text-left font-extrabold text-3xl md:text-4xl xl:text-5xl text-[#a482fb]">
                Expande tu negocio en la web
              </h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-2 lg:grid-cols-1 lg:gap-0">
              <div className="max-w-md xl:max-w-2xl mx-auto text-left mt-4">
                <div className="text-md text-gray-100 font-light mt-4">
                  <div className="inline-flex items-center space-x-2">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-[#a482fb]"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <h1 className="font-semibold text-md text-white">
                      Diseño y desarrollo personalizados:
                    </h1>
                  </div>
                  <p className="text-gray-100">
                    Creamos sitios web personalizados que se adaptan a las
                    necesidades específicas de tu negocio. Ya sea un sitio web
                    informativo, una tienda en línea o una aplicación web,
                    diseñamos y desarrollamos soluciones personalizadas que
                    reflejan su marca y sus objetivos.
                  </p>
                </div>
              </div>

              <div className="max-w-md xl:max-w-2xl mx-auto text-left mt-4">
                <div className="text-md font-light mt-4">
                  <div className="inline-flex items-center space-x-2">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-[#a482fb]"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <h1 className="font-semibold text-md text-white">
                      Seguridad y rendimiento:
                    </h1>
                  </div>
                  <p className="text-gray-100">
                    Mantenemos su sitio web seguro con funciones de seguridad
                    avanzadas, como protección DDoS y escaneo de malware.
                    Además, garantizamos un alto rendimiento para que su sitio
                    cargue rápidamente y ofrezca una experiencia excepcional a
                    sus visitantes.
                  </p>
                </div>
              </div>

              <div className="max-w-md xl:max-w-2xl mx-auto text-left mt-4">
                <div className="text-md font-light mt-4">
                  <div className="inline-flex items-center space-x-2">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-[#a482fb]"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <h1 className="font-semibold text-md text-white">
                      Estrategias de marketing digital:
                    </h1>
                  </div>
                  <p className="text-gray-100">
                    Te ayudamos a desarrollar estrategias efectivas de marketing
                    online para aumentar la visibilidad de tu negocio. A partir
                    de SEO y posicionamiento web, le brindamos las herramientas
                    para llegar a su público objetivo.
                  </p>
                </div>
              </div>

              <div className="max-w-md xl:max-w-2xl mx-auto text-left mt-4">
                <div className="text-md font-light mt-4">
                  <div className="inline-flex items-center space-x-2">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-[#a482fb]"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <h1 className="font-semibold text-md text-white">
                      Innovación continua:
                    </h1>
                  </div>
                  <p className="text-gray-100">
                    Mantenemos un enfoque constante en la innovación y la
                    mejora. Siempre estamos explorando nuevas tecnologías y
                    tendencias para garantizar que su negocio se mantenga a la
                    vanguardia en línea.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="flex justify-center">
              <Image
                src={ExpandeTuNegocioMobileMockUp}
                width={2000}
                height={2000}
                alt="ExpandeTuNegocioMobileMockUp"
              />
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-2 my-12 sm:my-44">
          <div className="hidden lg:block">
            <Image
              src={FastestWebMockup}
              width={2000}
              height={2000}
              alt="FastestWebMockup"
            />
          </div>
          <div>
            <div className="lg:max-w-md text-center lg:text-left">
              <h1 className="text-center lg:text-left font-extrabold text-3xl md:text-4xl xl:text-5xl text-[#a482fb]">
                Muy alto rendimiento
              </h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-2 lg:grid-cols-1 lg:gap-0">
              <div className="max-w-md xl:max-w-2xl mx-auto text-left mt-4">
                <div className="text-md text-gray-100 font-light mt-4">
                  <div className="inline-flex items-center space-x-2">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-[#a482fb]"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <h1 className="font-semibold text-md text-white">
                      Almacenamiento NVMe de alto rendimiento:
                    </h1>
                  </div>
                  <p className="text-gray-100">
                    utilizamos unidades de estado sólido NVMe (Non-Volatile
                    Memory Express) de alto rendimiento para almacenar sus datos
                    y archivos. Esto garantiza tiempos de carga rápidos y una
                    experiencia de usuario ágil.
                  </p>
                </div>
              </div>

              <div className="max-w-md xl:max-w-2xl mx-auto text-left mt-4">
                <div className="text-md font-light mt-4">
                  <div className="inline-flex items-center space-x-2">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-[#a482fb]"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <h1 className="font-semibold text-md text-white">
                      Ancho de banda ilimitado:
                    </h1>
                  </div>
                  <p className="text-gray-100">
                    Ofrecemos ancho de banda ilimitado para que su sitio web
                    pueda manejar cualquier cantidad de tráfico sin preocuparse
                    por las restricciones de datos. Esto es esencial para sitios
                    web con picos de tráfico o mucho contenido multimedia.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="block lg:hidden">
            <Image
              src={FastestWebMockup}
              width={2000}
              height={2000}
              alt="FastestWebMockup"
            />
          </div>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-2">
          <div>
            <div className="lg:max-w-md text-center lg:text-left">
              <h1 className="text-center lg:text-left font-extrabold text-3xl md:text-4xl xl:text-5xl text-[#a482fb]">
                Nos preocupamos por la seguridad
              </h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-2 lg:grid-cols-1 lg:gap-0">
              <div className="max-w-md xl:max-w-2xl mx-auto text-left mt-4">
                <div className="text-md text-gray-100 font-light mt-4">
                  <div className="inline-flex items-center space-x-2">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-[#a482fb]"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <h1 className="font-semibold text-md text-white">
                      Protección DDoS:
                    </h1>
                  </div>
                  <p className="text-gray-100">
                    Nuestra infraestructura de servidores cuenta con protección
                    DDoS estándar para detectar y mitigar ataques distribuidos
                    de denegación de servicio. Esto garantiza que su sitio web
                    permanezca en línea y accesible incluso en situaciones de
                    mucho tráfico malicioso.
                  </p>
                </div>
              </div>

              <div className="max-w-md xl:max-w-2xl mx-auto text-left mt-4">
                <div className="text-md font-light mt-4">
                  <div className="inline-flex items-center space-x-2">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-[#a482fb]"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <h1 className="font-semibold text-md text-white">
                      Seguridad y rendimiento:
                    </h1>
                  </div>
                  <p className="text-gray-100">
                    Mantenemos su sitio web seguro con funciones de seguridad
                    avanzadas, como protección DDoS y escaneo de malware.
                    Además, garantizamos un alto rendimiento para que su sitio
                    cargue rápidamente y ofrezca una experiencia excepcional a
                    sus visitantes.
                  </p>
                </div>
              </div>

              <div className="max-w-md xl:max-w-2xl mx-auto text-left mt-4">
                <div className="text-md font-light mt-4">
                  <div className="inline-flex items-center space-x-2">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-[#a482fb]"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <h1 className="font-semibold text-md text-white">
                      Firewall de aplicaciones web:
                    </h1>
                  </div>
                  <p className="text-gray-100">
                    Implementamos un firewall de aplicaciones web (WAF) que
                    monitorea y filtra el tráfico web entrante. Esto ayuda a
                    bloquear amenazas como inyecciones SQL, ataques de fuerza
                    bruta y otros intentos de explotar vulnerabilidades de
                    seguridad en su sitio.
                  </p>
                </div>
              </div>

              <div className="max-w-md xl:max-w-2xl mx-auto text-left mt-4">
                <div className="text-md font-light mt-4">
                  <div className="inline-flex items-center space-x-2">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-[#a482fb]"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <h1 className="font-semibold text-md text-white">
                      Servidores de nombres protegidos por Cloudflare:
                    </h1>
                  </div>
                  <p className="text-gray-100">
                    Utilizamos Cloudflare, un servicio de protección y
                    aceleración de sitios web líder en la industria. Cloudflare
                    protege su sitio de amenazas en línea y garantiza una
                    entrega de contenido rápida y confiable a nivel mundial.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex justify-center">
              <Image
                src={CloudSystem}
                width={2000}
                height={2000}
                alt="CloudSystem"
              />
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-2 my-12 sm:my-44">
          <div className="hidden lg:block">
            <Image
              src={SoporteTecnicoMobileMockup}
              width={2000}
              height={2000}
              alt="SoporteTecnicoMobileMockup"
            />
          </div>
          <div>
            <div className="lg:max-w-md text-center lg:text-left">
              <h1 className="text-center lg:text-left font-extrabold text-3xl md:text-4xl xl:text-5xl text-[#a482fb]">
                Soporte técnico dedicado
              </h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-2 lg:grid-cols-1 lg:gap-0">
              <div className="max-w-md xl:max-w-2xl mx-auto text-left mt-4">
                <div className="text-md text-gray-100 font-light mt-4">
                  <p className="text-gray-100">
                    Nuestro equipo de soporte técnico está altamente capacitado
                    y disponible para ayudarlo en cada paso del camino. Ya sea
                    que tenga preguntas, tenga problemas técnicos o necesite
                    orientación, estamos aquí para brindarle asistencia rápida y
                    efectiva.
                  </p>
                </div>
              </div>

              <div className="max-w-md xl:max-w-2xl mx-auto text-left mt-4">
                <div className="text-md font-light mt-4">
                  <p className="text-gray-100">
                    Le brindamos canales de comunicación fáciles de usar, como
                    chat en vivo, correo electrónico o soporte telefónico, para
                    que pueda comunicarse con nosotros de la manera que le
                    resulte más conveniente.
                  </p>
                </div>
              </div>

              <div className="max-w-md xl:max-w-2xl mx-auto text-left mt-4">
                <div className="text-md font-light mt-4">
                  <p className="text-gray-100">
                    Ya sea que sea nuevo en la creación de sitios web o un
                    usuario experimentado, nuestro equipo está listo para
                    ofrecerle orientación personalizada y soluciones técnicas
                    para garantizar el éxito de su proyecto.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="block lg:hidden">
            <Image
              src={SoporteTecnicoMobileMockup}
              width={2000}
              height={2000}
              alt="SoporteTecnicoMobileMockup"
            />
          </div>
        </section>
      </div>

      <section className="glass-container bg-opacity-5 backdrop-filter backdrop-blur-lg bg-[#a482fb] p-6 my-10 sm:my-16 lg:my-24 mx-auto py-10 sm:py-16 lg:py-24 relative isolate overflow-hidden px-6 pt-16 shadow-2xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24">
        <div className="flex flex-col items-center justify-center px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-col items-center justify-center text-center">
            <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl mb-4">
              ¡Haz que tu presencia en línea despegue ahora!
            </h2>
            <div className="max-w-lg my-4 text-gray-200">
              <p className="text-base font-medium">
                Descubre nuestros modelos y elige el que mejor se adapte a tus
                necesidades para impulsar tu presencia online.
              </p>
            </div>
          </div>

          <div className="my-6">
            <Link href="#">
              <motion.button
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.05 }}
                className="rounded-md bg-[#a482fb] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#8e62fc] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a482fb]"
              >
                ¡Empieza ahora!
              </motion.button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default FeaturesEs;

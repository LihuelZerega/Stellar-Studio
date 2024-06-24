"use client";
import React from "react";
import Image from "next/image";
import DiseñoyDesarrolloImage from "@/images/DiseñoyDesarrolloImage.png";
import DominiosPersonalizadosImage from "@/images/DominiosPersonalizadosImage.png";
import CorreosProfecionalesImage from "@/images/CorreoProfecionalesLandingMobile.png";
import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";
import {
  HiOutlineAtSymbol,
  HiOutlineChip,
  HiOutlineCloud,
  HiOutlineDatabase,
  HiOutlineDesktopComputer,
  HiOutlineFingerPrint,
  HiOutlineGlobeAlt,
  HiOutlineLockClosed,
  HiOutlineMailOpen,
  HiOutlineMap,
  HiOutlineRefresh,
  HiOutlineSearchCircle,
  HiOutlineShieldCheck,
  HiOutlineSparkles,
} from "react-icons/hi";

export default function Example() {
  return (
    <div className="relative isolate overflow-hidden bg-neutral-50 border-t px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            width="100%"
            height="100%"
            strokeWidth={0}
            fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
          />
        </svg>
      </div>

      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-[#a482fb]">
                Paginas Web
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Diseño y desarrollo web
              </h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
                Desarrolla tu presencia online con una página web profesional y
                moderna. Consigue más clientes y haz crecer tu negocio.
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-64 sm:-ml-12 md:-ml-56 2xl:-ml-56 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <Image
            className="w-[48rem] max-w-none rounded-xl sm:w-[57rem]"
            src={DiseñoyDesarrolloImage}
            alt=""
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <HiOutlineSparkles
                    className="mt-1 h-5 w-5 flex-none text-[#a482fb]"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Diseño y desarrollo personalizados
                    </strong>{" "}
                    Creamos sitios web personalizados que se adaptan a las
                    necesidades específicas de tu negocio. Ya sea un sitio web
                    informativo, una tienda en línea o una aplicación web,
                    diseñamos y desarrollamos soluciones personalizadas que
                    reflejan su marca y sus objetivos.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <LockClosedIcon
                    className="mt-1 h-5 w-5 flex-none text-[#a482fb]"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Seguridad y rendimiento
                    </strong>{" "}
                    Mantenemos su sitio web seguro con funciones de seguridad
                    avanzadas, como protección DDoS y escaneo de malware.
                    Además, garantizamos un alto rendimiento para que su sitio
                    cargue rápidamente y ofrezca una experiencia excepcional a
                    sus visitantes.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ServerIcon
                    className="mt-1 h-5 w-5 flex-none text-[#a482fb]"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Estrategias de SEO y Posicionamiento
                    </strong>{" "}
                    Te ayudamos a desarrollar estrategias efectivas de marketing
                    online para aumentar la visibilidad de tu negocio. A partir
                    de SEO y posicionamiento web, le brindamos las herramientas
                    para llegar a su público objetivo.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10 py-24">
        <div className="lg:col-span-2 lg:col-start-2 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-1 lg:gap-x-8 lg:px-8 2xl:pr-56">
          <div className="lg:pl-4">
            <div className="w-full">
              <p className="text-base font-semibold leading-7 text-[#a482fb]">
                Dominios
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Dominios personalizados
              </h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
                Consigue el nombre perfecto para tu página web y correo
                electrónico. Protege tu marca y aumenta tu visibilidad online.
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-40 xl:-ml-48 2xl:ml-16 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <Image
            className="w-[36rem] max-w-none rounded-xl sm:w-[57rem]"
            src={DominiosPersonalizadosImage}
            alt=""
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-2 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-1 lg:gap-x-8 lg:px-8">
          <div className="lg:pl-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <HiOutlineChip
                    className="mt-1 h-5 w-5 flex-none text-[#a482fb]"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Dominios Populares / Generacon con IA
                    </strong>{" "}
                    Asegurá tu presencia en línea de manera rápida y sencilla.
                    Desde nombres de dominio estándar hasta extensiones
                    especializadas, tenemos la solución perfecta.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <HiOutlineShieldCheck
                    className="mt-1 h-5 w-5 flex-none text-[#a482fb]"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Aseguramos tu privacidad
                    </strong>{" "}
                    Protegé tus datos personales con Stellar Studio. Nuestro
                    servicio de protección de privacidad de dominio es gratuito
                    y mantendrá tu información personal oculta de los spammers.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <HiOutlineSearchCircle
                    className="mt-1 h-5 w-5 flex-none text-[#a482fb]"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Disponibilidad
                    </strong>{" "}
                    Encontrá el dominio perfecto que esté disponible y se ajuste
                    a tus necesidades y preferencias. Con herramientas de
                    búsqueda avanzada, verificarás fácilmente la disponibilidad
                    y podrás registrar el dominio que elijas al instante.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-[#a482fb]">
                Correos
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Correos Profesionales
              </h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
                Da una imagen profesional a tu negocio con un correo electrónico
                personalizado. Mejora la comunicación con tus clientes y
                colaboradores.
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-40 xl:-ml-48 2xl:ml-16 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <Image
            className="w-[48rem] max-w-none rounded-xl bg-transparent sm:w-[48rem]"
            src={CorreosProfecionalesImage}
            alt=""
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <HiOutlineDatabase
                    className="mt-1 h-5 w-5 flex-none text-[#a482fb]"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Gran almacenamiento
                    </strong>{" "}
                    Si querés hacer crecer tu negocio, necesitás los recursos
                    adecuados. Nuestros servicios de email gestionado ofrecen
                    hasta 50 GB de almacenamiento
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <HiOutlineAtSymbol
                    className="mt-1 h-5 w-5 flex-none text-[#a482fb]"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Alias de email
                    </strong>{" "}
                    Mejorá tu identidad online e impulsá tu email marketing,
                    inspirando confianza y profesionalismo en tus clientes al
                    usar un mail empresarial.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <HiOutlineLockClosed
                    className="mt-1 h-5 w-5 flex-none text-[#a482fb]"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Seguros, privados y sin anuncios
                    </strong>{" "}
                    Con los planes de correo electrónico corporativo obtenés
                    medidas de seguridad superiores para proteger tus datos de
                    terceros no autorizados.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

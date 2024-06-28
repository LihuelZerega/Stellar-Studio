import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@medusajs/ui";
import RamosSoftClient from "@/images/RamosSoftClient.jpg";
import TecnicFmfClient from "@/images/TecnicfmfClient.png";
import CenterCarClient from "@/images/CenterCarClient.jpg";
import { Chip } from "@nextui-org/react";
import { BsArrowRightShort } from "react-icons/bs";

function Testimonials() {
  return (
    <div className="py-16 px-6 md:px-12 lg:px-24 border-t border-neutral-200 bg-neutral-100">
      <div className="flex flex-col items-center justify-between max-w-6xl mx-auto ">
        <div className="flex flex-row items-center space-x-1 pb-3 w-full border-b-1 border-neutral-300 mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            color="#b285ff"
            fill="none"
          >
            <path
              d="M22 11.5667C22 16.8499 17.5222 21.1334 12 21.1334C11.3507 21.1343 10.7032 21.0742 10.0654 20.9545C9.60633 20.8682 9.37678 20.8251 9.21653 20.8496C9.05627 20.8741 8.82918 20.9948 8.37499 21.2364C7.09014 21.9197 5.59195 22.161 4.15111 21.893C4.69874 21.2194 5.07275 20.4112 5.23778 19.5448C5.33778 19.0148 5.09 18.5 4.71889 18.1231C3.03333 16.4115 2 14.1051 2 11.5667C2 6.28357 6.47778 2 12 2C17.5222 2 22 6.28357 22 11.5667Z"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linejoin="round"
            />
            <path
              d="M11.9955 12H12.0045M15.991 12H16M8 12H8.00897"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <h1 className="text-sm font-light text-neutral-600">Clientes</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white rounded-xl border-neutral-300 border-1 shadow-sm p-2">
            <Link href="" className="bg-black cursor-pointer">
              <Image
                src={RamosSoftClient}
                width={400}
                height={300}
                alt="testimonail"
                className="rounded-md shadow-sm bg-black hover:opacity-80 transition-opacity duration-300"
              />
            </Link>
            <div className="px-1">
              <h1 className="font-semibold text-lg py-2 text-neutral-800">
                Ramos Soft Sillones
              </h1>
              <p className="font-light text-sm text-neutral-500 pr-4">
                Ramos Soft Sillones es una empresa familiar con 25 años de experiencia en el sector de la venta de sillones. Trabajamos un E-commerce para su marca aumentando sus ventas en un 30%.
              </p>
              <div className="flex flex-row items-center justify-between pt-12">
                <h1 className="flex flex-row items-center text-sm text-neutral-600 font-light hover:font-semibold hover:text-[#a482fb] cursor-pointer">
                  Leer mas <BsArrowRightShort className="" />
                </h1>
                <Chip size="sm">E-commerce</Chip>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl border-neutral-300 border-1 shadow-sm p-2">
            <Link href="" className="bg-black cursor-pointer">
              <Image
                src={CenterCarClient}
                width={400}
                height={300}
                alt="testimonail"
                className="rounded-md shadow-sm bg-black hover:opacity-80 transition-opacity duration-300"
              />
            </Link>
            <div className="px-1">
              <h1 className="font-semibold text-lg py-2 text-neutral-800">
                Center Car Automotores
              </h1>
              <p className="font-light text-sm text-neutral-500 pr-4">
                Trabajamos con conjunto con Tomas de Center Car Automotores un E-commerce totalmente autogestionado y 2 pestañas adicionales para sus clientes vendan sus autos y trabajen con ellos.
              </p>
              <div className="flex flex-row items-center justify-between pt-12">
                <h1 className="flex flex-row items-center text-sm text-neutral-600 font-light hover:font-semibold hover:text-[#a482fb] cursor-pointer">
                  Leer mas <BsArrowRightShort className="" />
                </h1>
                <Chip size="sm">E-commerce</Chip>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl border-neutral-300 border-1 shadow-sm p-2">
            <Link href="" className="bg-black cursor-pointer">
              <Image
                src={TecnicFmfClient}
                width={400}
                height={300}
                alt="testimonail"
                className="rounded-md shadow-sm bg-black hover:opacity-80 transition-opacity duration-300"
              />
            </Link>
            <div className="px-1">
              <h1 className="font-semibold text-lg py-2 text-neutral-800">
                TecnicFmf
              </h1>
              <p className="font-light text-sm text-neutral-500 pr-4">
                TecnicFmf nos contacto para que creemos su Landing Page ofreciendo sus servicios al publico trabajando en conjunto con una agencia de marketing digital, llevando el publico de las redes sociales a la web.
              </p>
              <div className="flex flex-row items-center justify-between pt-12">
                <Link href={""}>
                  <h1 className="flex flex-row items-center text-sm text-neutral-600 font-light hover:font-semibold hover:text-[#a482fb] cursor-pointer">
                    Leer mas <BsArrowRightShort className="" />
                  </h1>
                </Link>
                <Chip size="sm">Landing Page</Chip>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;

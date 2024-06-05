"use client";
import { Fragment, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Dialog } from "@headlessui/react";
import { usePathname } from "next/navigation";
import StellarStudioLogo from "@/images/StellarStudioLogo.png";
import StellarStudioLogoNegative from "@/images/StellarStudioLogoNegative.png";
import ArgentinaIcon from "@/images/Flags/argentina.png";
import BrasilIcon from "@/images/Flags/brasil.png";
import ColombiaIcon from "@/images/Flags/colombia.png";
import ChileIcon from "@/images/Flags/chile.png";
import MexicoIcon from "@/images/Flags/mexico.png";
import ItaliaIcon from "@/images/Flags/italia.png";
import FranciaIcon from "@/images/Flags/francia.png";
import UruguayIcon from "@/images/Flags/uruguay.png";
import AlemaniaIcon from "@/images/Flags/alemania.png";
import EEUUIcon from "@/images/Flags/estados-unidos.png";
import UnitedKingdom from "@/images/Flags/reino-unido.png";
import EspanaIcon from "@/images/Flags/espana.png";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import {
  MdOutlineWebAsset,
  MdAlternateEmail,
  MdHelpOutline,
  MdOutlineMessage,
  MdOutlineBiotech,
  MdOutlineSchool,
} from "react-icons/md";
import { TbWorldWww } from "react-icons/tb";

const services = [
  {
    name: "Paginas Web",
    description: "Expandí tu negocio y presencia en la web",
    href: "/es/servicios/paginasweb",
    icon: MdOutlineWebAsset,
  },
  {
    name: "Correos Profesionales",
    description: "Conseguí una imagen respetable y confiable",
    href: "/es/servicios/correosprofecionales",
    icon: MdAlternateEmail,
  },
  {
    name: "Dominios",
    description: "Dejá que el mundo sepa que estás siempre online.",
    href: "/es/servicios/dominios",
    icon: TbWorldWww,
  },
];

const compania = [
  {
    name: "Sobre Stellar Studio",
    description: "Conoce nuestra empresa, misión y valores.",
    href: "/es/compania",
    icon: MdOutlineSchool,
  },
  {
    name: "Nuestra Tecnología",
    description: "Explora que utilizamos para ofrecerte soluciones de calidad.",
    href: "/es/compania#tecnologia",
    icon: MdOutlineBiotech,
  },
  {
    name: "Contactanos",
    description: "Contáctanos y estaremos encantados de ayudarte.",
    href: "/es/compania#contacto",
    icon: MdOutlineMessage,
  },
];

const ayuda = [
  {
    name: "Atención al Cliente",
    description:
      "Nuestro equipo de atención al cliente está aquí para ayudarte en cualquier momento.",
    href: "/es/ayuda",
    icon: MdHelpOutline,
  },
];

function NavBarEs() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const logoSrc =
    pathname === "/es" ||
    pathname === "/ar" ||
    pathname === "/us" ||
    pathname === "/br"
      ? StellarStudioLogo
      : StellarStudioLogoNegative;
  const textColorClass =
    pathname === "/es" ||
    pathname === "/ar" ||
    pathname === "/us" ||
    pathname === "/br"
      ? "text-neutral-200"
      : "text-neutral-800";

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        {/* SELECT YOUR COUNTRY */}
        <div className="flex lg:flex-1">
          <a href="/es" className="-m-1.5 p-1.5">
            <span className="sr-only">Stellar Studio</span>
            <Image
              src={logoSrc}
              width={200}
              height={200}
              alt="Stellar Studio Logo"
            />
          </a>

          <div>
            <Popover.Group className="flex lg:gap-x-12">
              <Popover className="relative">
                <Popover.Button className="flex flex-row items-center ml-6 cursor-pointer focus:outline-none hover:scale-105 transition-all duration-300">
                  <Image
                    src={EEUUIcon}
                    width={25}
                    height={25}
                    alt="EEUUIcon"
                  />
                  <ChevronDownIcon
                    className="h-5 w-5 flex-none text-neutral-500"
                    aria-hidden="true"
                  />
                </Popover.Button>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel className="absolute -left-48 md:-left-8 top-full z-10 mt-3 w-screen max-w-xs md:max-w-lg overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-neutral-900/5">
                  <section className="p-4">
                      <h1 className="flex flex-col text-xl font-semibold mb-2 text-[#a482fb]">
                        Seleccioná tu País
                      </h1>

                      <hr />

                      <div className="grid grid-cols-2 sm:grid-cols-3 py-4">
                        <Link href="/ar">
                          <div className="flex flex-row items-center hover:scale-105 transition-all duration-300 space-x-1 mb-4">
                            <Image
                              src={ArgentinaIcon}
                              width={25}
                              height={25}
                              alt="ArgentinaIcon"
                            />
                            <p className="text-sm font-bold text-neutral-900">
                              Argentina
                            </p>
                          </div>
                        </Link>

                        <Link href="/es" className="cursor-pointer">
                          <div className="flex flex-row items-center hover:scale-105 transition-all duration-300 space-x-1 mb-4">
                            <Image
                              src={EspanaIcon}
                              width={25}
                              height={25}
                              alt="EspanaIcon"
                            />
                            <p className="text-sm font-bold text-neutral-900">
                              España
                            </p>
                          </div>
                        </Link>

                        <Link href="/us" className="cursor-pointer">
                          <div className="flex flex-row items-center hover:scale-105 transition-all duration-300 space-x-1">
                            <Image
                              src={EEUUIcon}
                              width={25}
                              height={25}
                              alt="EEUUIcon"
                            />
                            <p className="text-sm font-bold text-neutral-900">
                              United States
                            </p>
                          </div>
                        </Link>

                        <Link href="/mx">
                          <div className="flex flex-row items-center hover:scale-105 transition-all duration-300 space-x-1 mb-4">
                            <Image
                              src={MexicoIcon}
                              width={25}
                              height={25}
                              alt="MexicoIcon}"
                            />
                            <p className="text-sm font-bold text-neutral-900">
                              Mexico
                            </p>
                          </div>
                        </Link>
                      </div>

                      <hr />

                      <div>
                        <h1 className="mt-3 text-sm font-bold text-[#a482fb]">
                          Proximamente...
                        </h1>
                        <div className="grid grid-cols-2 sm:grid-cols-3 py-4">

                        <Link href="/br" className="cursor-not-allowed">
                            <div className="flex flex-row items-center hover:scale-105 transition-all duration-300 space-x-1 mb-4">
                              <Image
                                src={BrasilIcon}
                                width={25}
                                height={25}
                                alt="BrasilIcon"
                                className="opacity-40"
                              />
                              <div className="flex flex-col text-sm font-bold text-neutral-400 mx-2 leading-1">
                                <p>Brasil</p>
                              </div>
                            </div>
                          </Link>
                          
                          <Link href="/cl" className="cursor-not-allowed">
                            <div className="flex flex-row items-center hover:scale-105 transition-all duration-300 space-x-1 mb-4">
                              <Image
                                src={ChileIcon}
                                width={25}
                                height={25}
                                alt="ChileIcon"
                                className="opacity-40"
                              />
                              <p className="text-sm font-bold text-neutral-400">
                                Chile
                              </p>
                            </div>
                          </Link>

                          <Link href="/co" className="cursor-not-allowed">
                            <div className="flex flex-row items-center hover:scale-105 transition-all duration-300 space-x-1 mb-4">
                              <Image
                                src={ColombiaIcon}
                                width={25}
                                height={25}
                                alt="ColombiaIcon}"
                                className="opacity-40"
                              />
                              <p className="text-sm font-bold text-neutral-400">
                                Colombia
                              </p>
                            </div>
                          </Link>

                          <Link href="/de" className="cursor-not-allowed">
                            <div className="flex flex-row items-center hover:scale-105 transition-all duration-300 space-x-1 mb-4">
                              <Image
                                src={AlemaniaIcon}
                                width={25}
                                height={25}
                                alt="AlemaniaIcon"
                                className="opacity-40"
                              />
                              <div className="flex flex-col text-sm font-bold text-neutral-400 mx-2 leading-1">
                                <p>Deutshland</p>
                              </div>
                            </div>
                          </Link>

                          <Link href="/fr" className="cursor-not-allowed">
                            <div className="flex flex-row items-center hover:scale-105 transition-all duration-300 space-x-1 mb-4">
                              <Image
                                src={FranciaIcon}
                                width={25}
                                height={25}
                                alt="FranciaIcon"
                                className="opacity-40"
                              />
                              <div className="flex flex-col text-sm font-bold text-neutral-400 mx-2 leading-1">
                                <p>France</p>
                              </div>
                            </div>
                          </Link>

                          <Link href="/it" className="cursor-not-allowed">
                            <div className="flex flex-row items-center hover:scale-105 transition-all duration-300 space-x-1 mb-4">
                              <Image
                                src={ItaliaIcon}
                                width={25}
                                height={25}
                                alt="ItaliaIcon"
                                className="opacity-40"
                              />
                              <div className="flex flex-col text-sm font-bold text-neutral-400 mx-2 leading-1">
                                <p>Italia</p>
                              </div>
                            </div>
                          </Link>

                          <Link href="/ur" className="cursor-not-allowed">
                            <div className="flex flex-row items-center hover:scale-105 transition-all duration-300 space-x-1 mb-4">
                              <Image
                                src={UruguayIcon}
                                width={25}
                                height={25}
                                alt="UruguayIcon"
                                className="opacity-40"
                              />
                              <div className="flex flex-col text-sm font-bold text-neutral-400 mx-2 leading-1">
                                <p>Uruguay</p>
                              </div>
                            </div>
                          </Link>

                          <Link href="/en" className="cursor-not-allowed">
                            <div className="flex flex-row items-center hover:scale-105 transition-all duration-300 space-x-1 mb-4">
                              <Image
                                src={UnitedKingdom}
                                width={25}
                                height={25}
                                alt="UnitedKingdomIcon"
                                className="opacity-40"
                              />
                              <div className="flex flex-col text-sm font-bold text-neutral-400 mx-2 leading-1">
                                <p>United Kingdom</p>
                              </div>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </section>
                  </Popover.Panel>
                </Transition>
              </Popover>
            </Popover.Group>
          </div>
        </div>

        {/* MOBILE */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-neutral-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon
              className="text-neutral-200 h-6 w-6"
              aria-hidden="true"
            />
          </button>
        </div>

        {/* DESKTOP */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <div className="flex flex-row gap-x-6">
            <Popover.Group className="hidden lg:flex lg:gap-x-12">
              <Popover className="relative">
                <Popover.Button
                  className={`flex items-center gap-x-1 text-sm font-semibold leading-6 ${textColorClass} focus:outline-none`}
                >
                  Servicios
                  <ChevronDownIcon
                    className="h-5 w-5 flex-none text-neutral-500"
                    aria-hidden="true"
                  />
                </Popover.Button>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel className="absolute -left-36 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-neutral-900/5">
                    <div className="p-4">
                      {services.map((item) => (
                        <div
                          key={item.name}
                          className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-neutral-50"
                        >
                          <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-neutral-50 group-hover:bg-white">
                            <item.icon
                              className="h-6 w-6 text-neutral-600 group-hover:text-[#a482fb]"
                              aria-hidden="true"
                            />
                          </div>
                          <div className="flex-auto">
                            <a
                              href={item.href}
                              className="block font-semibold text-neutral-900"
                            >
                              {item.name}
                              <span className="absolute inset-0" />
                            </a>
                            <p className="mt-1 text-neutral-600">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Popover.Panel>
                </Transition>
              </Popover>
            </Popover.Group>

            <Popover.Group className="hidden lg:flex lg:gap-x-12">
              <Popover className="relative">
                <Popover.Button className={`flex items-center gap-x-1 text-sm font-semibold leading-6 ${textColorClass} focus:outline-none`}>
                  Compañía
                  <ChevronDownIcon
                    className="h-5 w-5 flex-none text-neutral-500"
                    aria-hidden="true"
                  />
                </Popover.Button>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel className="absolute -left-64 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-neutral-900/5">
                    <div className="p-4">
                      {compania.map((item) => (
                        <div
                          key={item.name}
                          className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-neutral-50"
                        >
                          <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-neutral-50 group-hover:bg-white">
                            <item.icon
                              className="h-6 w-6 text-neutral-600 group-hover:text-[#a482fb]"
                              aria-hidden="true"
                            />
                          </div>
                          <div className="flex-auto">
                            <a
                              href={item.href}
                              className="block font-semibold text-neutral-900"
                            >
                              {item.name}
                              <span className="absolute inset-0" />
                            </a>
                            <p className="mt-1 text-neutral-600">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Popover.Panel>
                </Transition>
              </Popover>
            </Popover.Group>

            <Popover.Group className="hidden lg:flex lg:gap-x-12">
              <Popover className="relative">
                <Popover.Button className={`flex items-center gap-x-1 text-sm font-semibold leading-6 ${textColorClass} focus:outline-none`}>
                  Ayuda
                  <ChevronDownIcon
                    className="h-5 w-5 flex-none text-neutral-500"
                    aria-hidden="true"
                  />
                </Popover.Button>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel className="absolute -left-96 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-neutral-900/5">
                    <div className="p-4">
                      {ayuda.map((item) => (
                        <div
                          key={item.name}
                          className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-neutral-50"
                        >
                          <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-neutral-50 group-hover:bg-white">
                            <item.icon
                              className="h-6 w-6 text-neutral-600 group-hover:text-[#a482fb]"
                              aria-hidden="true"
                            />
                          </div>
                          <div className="flex-auto">
                            <a
                              href={item.href}
                              className="block font-semibold text-neutral-900"
                            >
                              {item.name}
                              <span className="absolute inset-0" />
                            </a>
                            <p className="mt-1 text-neutral-600">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Popover.Panel>
                </Transition>
              </Popover>
            </Popover.Group>
          </div>
        </div>
      </nav>

      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-neutral-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Stellar Studio</span>
              <Image
                src={StellarStudioLogoNegative}
                width={200}
                height={200}
                alt="Stellar Studio Logo"
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-neutral-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <div className="mt-6 flow-root">
            <div className="-my-6 ">
              <div>
                <h1 className="text-xl font-semibold text-[#a482fb] border-t pt-2 mt-6 mb-2">
                  Servicios
                </h1>
                <div>
                  {services.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-3 rounded-lg my-2 py-2 text-sm leading-6 hover:bg-neutral-50"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-neutral-50 group-hover:bg-white">
                        <item.icon
                          className="h-6 w-6 text-neutral-600 group-hover:text-[#a482fb]"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="flex-auto">
                        <a
                          href={item.href}
                          className="block font-semibold text-neutral-900"
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-xs text-neutral-600">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h1 className="text-xl font-semibold text-[#a482fb] border-t pt-2 mt-6 mb-2">
                  Compañia
                </h1>
                <div>
                  {compania.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-3 rounded-lg my-2 py-2 text-sm leading-6 hover:bg-neutral-50"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-neutral-50 group-hover:bg-white">
                        <item.icon
                          className="h-6 w-6 text-neutral-600 group-hover:text-[#a482fb]"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="flex-auto">
                        <a
                          href={item.href}
                          className="block font-semibold text-neutral-900"
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-xs text-neutral-600">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-12 sm:mb-0">
                <h1 className="text-xl font-semibold text-[#a482fb] border-t pt-2 mt-6 mb-2">
                  Ayuda
                </h1>
                <div>
                  {ayuda.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-3 rounded-lg my-2 py-2 text-sm leading-6 hover:bg-neutral-50"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-neutral-50 group-hover:bg-white">
                        <item.icon
                          className="h-6 w-6 text-neutral-600 group-hover:text-[#a482fb]"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="flex-auto">
                        <a
                          href={item.href}
                          className="block font-semibold text-neutral-900"
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-xs text-neutral-600">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}

export default NavBarEs;

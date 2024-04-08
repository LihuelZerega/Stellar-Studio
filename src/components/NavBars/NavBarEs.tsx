"use client";
import { Fragment, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Dialog } from "@headlessui/react";
import StellarStudioLogo from "@/images/StellarStudioLogo.png";
import StellarStudioLogoNegative from "@/images/StellarStudioLogoNegative.png";
import ArgentinaIcon from "@/images/Flags/argentina.png";
import BrasilIcon from "@/images/Flags/brasil.png";
import ColombiaIcon from "@/images/Flags/colombia.png";
import ChileIcon from "@/images/Flags/chile.png";
import EEUUIcon from "@/images/Flags/estados-unidos.png";
import UnitedKingdom from "@/images/Flags/reino-unido.png";
import EspanaIcon from "@/images/Flags/espana.png";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { MdOutlineWebAsset, MdAlternateEmail } from "react-icons/md";
import { TbWorldWww } from "react-icons/tb";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
} from "@nextui-org/react";

const products = [
  {
    name: "Paginas Web",
    description: "Expandí tu negocio y presencia en la web",
    href: "/es/servicios/paginasweb",
    icon: MdOutlineWebAsset,
  },
  {
    name: "Correos Profecionales",
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

const navigation = [
  { name: "Paginas Web", href: "/es/servicios/paginasweb" },
  { name: "Correos Profecionales", href: "/es/servicios/correosprofecionales" },
  { name: "Dominios", href: "/es/servicios/dominios" },
  { name: "Caracteristicas", href: "#" },
  { name: "Sobre Nosotros", href: "#" },
  { name: "Contactanos", href: "#" },
];

function NavBarEs() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="/es" className="-m-1.5 p-1.5">
            <span className="sr-only">Stellar Studio</span>
            <Image
              src={StellarStudioLogo}
              width={200}
              height={200}
              alt="Stellar Studio Logo"
            />
          </a>

          <div>
            <div
              className="ml-6 flex flex-row items-center cursor-pointer"
              onClick={onOpen}
            >
              <Image src={EspanaIcon} width={25} height={25} alt="EspanaIcon" />
              <ChevronDownIcon
                className="h-5 w-5 flex-none text-gray-400"
                aria-hidden="true"
              />
            </div>
            <Modal
              isOpen={isOpen}
              size="xl"
              placement="center"
              onOpenChange={onOpenChange}
              className="bg-white text-[#272526]"
            >
              <ModalContent>
                {(onClose) => (
                  <>
                    <ModalHeader className="flex flex-col gap-1 border-b text-xl text-[#a482fb]">
                      Selecciona tu Pais
                    </ModalHeader>
                    <ModalBody>
                      <section className="grid grid-cols-2 sm:grid-cols-3 py-4">
                        <Link href="/ar">
                          <div className="flex flex-row items-center space-x-1 mb-4">
                            <Image
                              src={ArgentinaIcon}
                              width={25}
                              height={25}
                              alt="ArgentinaIcon"
                            />
                            <p className="text-sm font-bold text-neutral-900">
                              Argentina
                            </p>
                            <p className="text-sm text-neutral-400"> Español</p>
                          </div>
                        </Link>

                        <Link href="/br">
                          <div className="flex flex-row items-center space-x-1 mb-4">
                            <Image
                              src={BrasilIcon}
                              width={25}
                              height={25}
                              alt="BrasilIcon}"
                            />
                            <p className="text-sm font-bold text-neutral-900">
                              Brasil
                            </p>
                            <p className="text-sm text-neutral-400">
                              {" "}
                              Portugues
                            </p>
                          </div>
                        </Link>

                        <Link href="/es" className="cursor-not-allowed">
                          <div className="flex flex-row items-center space-x-1 mb-4">
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
                            <p className="text-sm text-neutral-400"> Español</p>
                          </div>
                        </Link>

                        <Link href="/cl" className="cursor-not-allowed">
                          <div className="flex flex-row items-center space-x-1 mb-4">
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
                            <p className="text-sm text-neutral-400"> Español</p>
                          </div>
                        </Link>

                        <Link href="/es" className="cursor-pointer">
                          <div className="flex flex-row items-center space-x-1 mb-4">
                            <Image
                              src={EspanaIcon}
                              width={25}
                              height={25}
                              alt="EspanaIcon"
                            />
                            <p className="text-sm font-bold text-neutral-900">
                              España
                            </p>
                            <p className="text-sm text-neutral-400"> Español</p>
                          </div>
                        </Link>

                        <Link href="/en" className="cursor-pointer">
                          <div className="flex flex-row items-center space-x-1 mb-4">
                            <Image
                              src={EEUUIcon}
                              width={25}
                              height={25}
                              alt="EEUUIcon"
                            />
                            <p className="text-sm font-bold text-neutral-900">
                              United States
                            </p>
                            <p className="text-sm text-neutral-400"> English</p>
                          </div>
                        </Link>

                        <Link href="/en"  className="cursor-not-allowed">
                          <div className="flex flex-row items-center mb-4">
                            <Image
                              src={UnitedKingdom}
                              width={25}
                              height={25}
                              alt="UnitedKingdomIcon"
                              className="opacity-40"
                            />
                            <div className="flex flex-col text-xs font-bold text-neutral-400 mx-2 leading-4">
                              <p>United</p>
                              <p>Kingdom</p>
                            </div>
                            <p className="text-sm text-neutral-400">English</p>
                          </div>
                        </Link>
                      </section>
                    </ModalBody>
                  </>
                )}
              </ModalContent>
            </Modal>
          </div>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <div className="flex flex-row gap-x-6">
            <Popover.Group className="hidden lg:flex lg:gap-x-12">
              <Popover className="relative">
                <Popover.Button className="flex items-center gap-x-1  text-sm font-semibold leading-6 text-white">
                  Servicios
                  <ChevronDownIcon
                    className="h-5 w-5 flex-none text-gray-400"
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
                  <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                    <div className="p-4">
                      {products.map((item) => (
                        <div
                          key={item.name}
                          className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                        >
                          <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                            <item.icon
                              className="h-6 w-6 text-gray-600 group-hover:text-[#a482fb]"
                              aria-hidden="true"
                            />
                          </div>
                          <div className="flex-auto">
                            <a
                              href={item.href}
                              className="block font-semibold text-gray-900"
                            >
                              {item.name}
                              <span className="absolute inset-0" />
                            </a>
                            <p className="mt-1 text-gray-600">
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

            <a href="#" className="text-sm font-semibold leading-6 text-white">
              Caracteristicas
            </a>
            <a href="#" className="text-sm font-semibold leading-6 text-white">
              Sobre Nosotros
            </a>
            <a href="#" className="text-sm font-semibold leading-6 text-white">
              Contactanos
            </a>
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
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
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
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}

export default NavBarEs;

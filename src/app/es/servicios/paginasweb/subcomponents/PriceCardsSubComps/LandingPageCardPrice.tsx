import React, { useState, Fragment } from "react";
import { motion } from "framer-motion";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Chip,
  useDisclosure,
} from "@nextui-org/react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { FiTrash2, FiChevronUp } from "react-icons/fi";
import { MdOutlineWebAsset, MdAlternateEmail } from "react-icons/md";
import LandingpagesDemos from "../DemoModals/LandingpagesDemos";

interface ShoppingCartProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

interface OnePageCardPriceProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ShoppingCart: React.FC<ShoppingCartProps> = ({ open, setOpen }) => {
  const [onePagePrice, setOnePagePrice] = useState<number>(249.0);
  const [domainPrice, setDomainPrice] = useState<number>(0.0);
  const [emailPrice, setEmailPrice] = useState<number>(0.0);

  const [onePageQuantity, setOnePageQuantity] = useState<number>(1);
  const [domainQuantity, setDomainQuantity] = useState<number>(1);
  const [emailQuantity, setEmailQuantity] = useState<number>(1);

  const subtotal =
    onePagePrice * onePageQuantity +
    (domainPrice ? domainPrice * domainQuantity : 0) +
    emailPrice * emailQuantity;

  const total = subtotal;

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" open={open} onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-neutral-800 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute left-0 top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4">
                      <button
                        type="button"
                        className="relative rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                        onClick={() => setOpen(false)}
                      >
                        <span className="absolute -inset-2.5" />
                        <span className="sr-only">Close panel</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                    <div className="px-4 sm:px-6">
                      <Dialog.Title className="text-xl font-semibold leading-6 text-gray-900">
                        Carrito de Compra
                      </Dialog.Title>
                    </div>

                    <hr className="mt-4" />

                    <div className="relative mt-6 flex-1 px-4 sm:px-6">
                      <ProductItem
                        icon={
                          <MdOutlineWebAsset className="text-3xl text-[#a482fb]" />
                        }
                        title="Landing Page"
                        price={onePagePrice}
                        quantity={onePageQuantity}
                        setQuantity={setOnePageQuantity}
                        setOpen={setOpen}
                        setDomainPrice={setDomainPrice}
                        setEmailPrice={setEmailPrice}
                      />
                    </div>

                    <hr />

                    <section className="flex flex-col mt-3 mx-6 select-none">
                      <div className="">
                        <div className="flex flex-row items-center justify-between">
                          <h1 className="text-base font-medium text-neutral-500">
                            Subtotal
                          </h1>
                          <h1 className="text-base font-medium text-neutral-500">
                            €{subtotal.toFixed(2)}{" "}
                          </h1>
                        </div>
                        <div className="flex flex-row items-center justify-between mt-3">
                          <h1 className="text-lg font-semibold text-neutral-700">
                            Total
                          </h1>
                          <h1 className="text-lg font-semibold text-neutral-700">
                            €{total.toFixed(2)}{" "}
                          </h1>
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <a href="/es/servicios/paginasweb/checkout/landingpage">
                          <button className="w-full items-center justify-center py-4 mt-5 text-sm rounded-md font-semibold text-white transition-all bg-[#a482fb] shadow-sm hover:bg-[#8e62fc] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a482fb]">
                            Comprar
                          </button>
                        </a>
                        <button
                          className="w-full items-center justify-center py-4 mt-3 text-sm rounded-md font-semibold text-[#a482fb] transition-all border-2 border-[#a482fb] shadow-sm hover:bg-neutral-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a482fb]"
                          onClick={() => setOpen(false)}
                        >
                          Continuar Comprando
                        </button>
                      </div>
                    </section>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

interface ProductItemProps {
  icon: JSX.Element;
  title: string;
  price: number;
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setDomainPrice: React.Dispatch<React.SetStateAction<number>>;
  setEmailPrice: React.Dispatch<React.SetStateAction<number>>;
}

interface Domain {
  name: string;
  price: number;
}

interface Email {
  name: string;
  price: number;
  feature1: string;
  feature2: string;
  feature3: string;
  feature4: string;
  feature5: string;
  feature6: string;
}

const ProductItem: React.FC<ProductItemProps> = ({
  icon,
  title,
  price,
  quantity,
  setQuantity,
  setOpen,
  setDomainPrice,
  setEmailPrice,
}) => {
  const handleAddQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleSubtractQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity - 1);
  };

  const {
    isOpen: isOpenDomain,
    onOpen: onOpenDomain,
    onClose: onCloseDomain,
  } = useDisclosure();

  const {
    isOpen: isOpenEmail,
    onOpen: onOpenEmail,
    onClose: onCloseEmail,
  } = useDisclosure();

  const handleChooseDomain = () => {
    onOpenDomain();
  };

  const handleChooseEmailPlan = () => {
    onOpenEmail();
  };

  const domains: Domain[] = [
    { name: ".COM", price: 15.99 },
    { name: ".NET", price: 18.99 },
    { name: ".ONLINE ", price: 34.99 },
    { name: ".IO ", price: 49.99 },
    { name: ".ICU ", price: 13.99 },
    { name: ".XYZ ", price: 24.99 },
    { name: ".PRO ", price: 9.99 },
    { name: ".CLOUD ", price: 9.99 },
  ];

  const emails: Email[] = [
    {
      name: "Emprendedor",
      price: 7.99,
      feature1: "10 GB de almacenamiento en email",
      feature2: "10 reglas de reenvío",
      feature3: "Alias de email",
      feature4: "Verificación antivirus",
      feature5: "Antispam avanzado",
      feature6: "Infraestructura basada en la nube",
    },
    {
      name: "Corporativo",
      price: 11.99,
      feature1: "50 GB de almacenamiento en email",
      feature2: "50 reglas de reenvío",
      feature3: "Alias de email",
      feature4: "Verificación antivirus",
      feature5: "Antispam avanzado",
      feature6: "Infraestructura basada en la nube",
    },
  ];

  const [selectedDomain, setSelectedDomain] = useState<Domain | null>(null);

  const [selectedEmail, setSelectedEmail] = useState<Email | null>(null);

  const handleSelectDomain = (domain: Domain) => {
    setSelectedDomain(domain);
    setDomainPrice(domain.price);
    onCloseDomain();
  };

  const handleSelectEmail = (email: Email) => {
    setSelectedEmail(email);
    setEmailPrice(email.price);
    onCloseEmail();
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >
      {quantity === 0 ? null : (
        <>
          <div className="flex flex-row bg-neutral-50 p-4 rounded-md shadow-sm mb-4">
            <div className="bg-white rounded-md p-2">{icon}</div>

            <div className="flex flex-col items-left justify-between w-full border-l ml-2 pl-2">
              <div className="flex flex-row items-center justify-between text-base font-semibold text-gray-800">
                {selectedDomain ? (
                  <>
                    <h1 className="">Registrar Dominio</h1>
                    <h1 className="">€{selectedDomain?.price.toFixed(2)}</h1>
                  </>
                ) : (
                  <>
                    <h1>{title}</h1>
                    <h1>€{price.toFixed(2)}</h1>
                  </>
                )}
              </div>

              <div className="flex flex-row items-center justify-between text-sm text-gray-800">
                <div className="flex items-center">
                  {selectedDomain || title === "Registrar Dominio" ? (
                    <>
                      <button
                        className="hover:text-[#a482fb]"
                        onClick={handleChooseDomain}
                      >
                        {selectedDomain?.name
                          ? selectedDomain.name
                          : "Elegir Dominio"}
                      </button>
                    </>
                  ) : (
                    <>
                      {selectedEmail || title === "Correo Profesional" ? (
                        <>
                          <button
                            className="hover:text-[#a482fb]"
                            onClick={handleChooseEmailPlan}
                          >
                            {selectedEmail?.name
                              ? selectedEmail.name
                              : "Elegir Email"}
                          </button>
                        </>
                      ) : (
                        <h1>Cantidad: {quantity}</h1>
                      )}
                    </>
                  )}
                </div>

                <div className="flex flex-row items-center space-x-2">
                  {title === "One Page" ? (
                    <div className="flex flex-row items-center space-x-2">
                      <button
                        className="hover:text-[#a482fb]"
                        onClick={handleAddQuantity}
                      >
                        <FiChevronUp />
                      </button>
                      <FiTrash2
                        className="hover:text-red-500 cursor-pointer"
                        onClick={handleSubtractQuantity}
                      />
                    </div>
                  ) : (
                    <>
                      <FiTrash2
                        className="hover:text-red-500 cursor-pointer"
                        onClick={handleSubtractQuantity}
                      />
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>

          <Modal
            isOpen={isOpenDomain}
            onClose={onCloseDomain}
            placement="center"
          >
            <ModalContent>
              <ModalHeader className="flex flex-col font-bold text-[#a482fb] text-xl gap-1 border-b">
                Elige tu dominio para registrar
              </ModalHeader>
              <ModalBody>
                <div className="grid grid-cols-2 sm:grid-cols-3 py-2 gap-4">
                  {domains.map((domain, index) => (
                    <button
                      key={index}
                      className={`bg-neutral-50 border-2 border-[#a482fb] rounded-md €{
                        selectedDomain === domain ? "bg-gray-200" : ""
                      }`}
                      onClick={() => handleSelectDomain(domain)}
                    >
                      <div className="text-left p-2 rounded-sm hover:bg-neutral-100">
                        <h1 className="text-xl font-semibold text-[#a482fb]">
                          {domain.name}
                        </h1>
                        <h1 className="text-base text-black">
                          €{domain.price.toFixed(2)}
                          <span>/año</span>
                        </h1>
                      </div>
                    </button>
                  ))}
                </div>
              </ModalBody>
            </ModalContent>
          </Modal>

          <Modal
            isOpen={isOpenEmail}
            onClose={onCloseEmail}
            placement="center"
            size="3xl"
          >
            <ModalContent>
              <ModalHeader className="flex flex-col font-bold text-[#a482fb] text-xl gap-1 border-b">
                Elige tu plan de Correo Profecional
              </ModalHeader>
              <ModalBody>
                <div className="grid grid-cols-1 sm:grid-cols-2 py-2 gap-4">
                  {emails.map((email, index) => (
                    <button
                      key={index}
                      className={`bg-neutral-50 border-2 border-[#a482fb] rounded-md €{
                        selectedEmail === email ? "bg-gray-200" : ""
                      }`}
                      onClick={() => handleSelectEmail(email)}
                    >
                      <section className="hover:bg-neutral-100">
                        <div className="text-left p-2 rounded-sm">
                          <h1 className="text-2xl font-semibold text-[#a482fb] pb-1">
                            {email.name}
                          </h1>
                          <h1 className="text-xl md:text-2xl font-bold text-neutral-800">
                            €{email.price.toFixed(2)}
                            <span>/mes</span>
                          </h1>
                        </div>

                        <hr className="mx-2" />

                        <div className="text-left p-2 text-sm md:text-base space-y-2 py-2 text-neutral-700">
                          <div className="flex flex-row items-center space-x-1">
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
                            <h1>{email.feature1}</h1>
                          </div>
                          <div className="flex flex-row items-center space-x-1">
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
                            <h1>{email.feature2}</h1>
                          </div>
                          <div className="flex flex-row items-center space-x-1">
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
                            <h1>{email.feature3}</h1>
                          </div>
                          <div className="flex flex-row items-center space-x-1">
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
                            <h1>{email.feature4}</h1>
                          </div>
                          <div className="flex flex-row items-center space-x-1">
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
                            <h1>{email.feature5}</h1>
                          </div>
                          <div className="flex flex-row items-center space-x-1">
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
                            <h1>{email.feature6}</h1>
                          </div>
                        </div>
                      </section>
                    </button>
                  ))}
                </div>
              </ModalBody>
            </ModalContent>
          </Modal>
        </>
      )}
    </motion.div>
  );
};

const OnePageCardPrice: React.FC<OnePageCardPriceProps> = ({
  open,
  setOpen,
}) => {
  const [showMoreFeatures, setShowMoreFeatures] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="overflow-hidden border-2 border-gray-200 bg-white rounded-2xl"
    >
      <div className="p-8 xl:px-12">
        <div className="flex flex-row items-center justify-between">
          <h1 className="text-xl font-semibold text-[#a482fb]">Landing Page</h1>
          <Chip className="bg-[#a482fb] text-white">Mas Vendido</Chip>
        </div>

        <div className="h-20">
          <h1 className="text-sm mt-4 text-gray-500">
            Ideal para quienes desean captar clientes potenciales interesados en
            sus servicios y convertirlos en clientes.
          </h1>
        </div>

        <div className="flex flex-row items-end justify-start">
          <p className="text-5xl font-bold text-neutral-700 mt-7">€249.000</p>
          <p className="ml-2 mt-3 text-base text-gray-500">/Pago único</p>
        </div>

        <motion.button
          onClick={() => setOpen(true)}
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.01 }}
          className="w-full inline-flex items-center justify-center px-10 py-4 mt-5 text-lg rounded-md font-semibold text-white transition-all bg-[#a482fb] shadow-sm hover:bg-[#b192ff] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a482fb]"
        >
          Comprar Ahora
        </motion.button>

        <div className="text-center">
          <h1 className="text-sm mt-4 text-gray-500">
            Mantenimiento y soporte:
          </h1>
          <h1 className="text-sm text-gray-500">€10/mes</h1>
        </div>
        
        <div className="text-transparent border-b-1 border-neutral-400 select-none mb-5">
          s
        </div>

        <LandingpagesDemos />

        <div className="text-transparent border-b-1 border-neutral-400 select-none mb-5">
          s
        </div>

        <ul className="inline-flex flex-col items-start space-y-5 text-left my-2 h-80">
          <li className="inline-flex items-center space-x-2">
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
            <span className="text-base font-medium text-gray-600">
              {" "}
              Diseño enfocado en la conversión{" "}
            </span>
          </li>

          <li className="inline-flex items-center space-x-2">
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
            <span className="text-base font-medium text-gray-600">
              {" "}
              Llamado a la acción claro y destacado{" "}
            </span>
          </li>

          <li className="inline-flex items-center space-x-2">
            <svg
              className="h-5 text-[#a482fb] flex-shrink-0w-5"
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
            <span className="text-base font-medium text-gray-600">
              {" "}
              Formulario de contacto o registro visible{" "}
            </span>
          </li>

          <li className="inline-flex items-center space-x-2">
            <svg
              className="h-5 text-[#a482fb] flex-shrink-0w-5"
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
            <span className="text-base font-medium text-gray-600">
              {" "}
              Testimonios o reseñas de clientes{" "}
            </span>
          </li>

          <li className="inline-flex items-center space-x-2">
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
            <span className="pb-0.5 text-base font-medium text-gray-600">
              {" "}
              Elementos visuales atractivos y relevantes{" "}
            </span>
          </li>
        </ul>

        <div className="text-transparent border-b-1 border-neutral-400 select-none my-5">
          s
        </div>

        {showMoreFeatures && (
          <>
            <ul className="inline-flex flex-col items-start space-y-5 text-left my-2">
              <span className="text-lg font-semibold text-[#a482fb]">
                {" "}
                Seguridad{" "}
              </span>

              <li className="text-base font-medium text-gray-200 my-2">
                <div className="inline-flex items-center space-x-1">
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
                  <h1 className="text-base font-medium text-gray-600">
                    Protección DDoS mejorada
                  </h1>
                </div>
              </li>

              <li className="text-base font-medium text-gray-200 my-2">
                <div className="inline-flex items-center space-x-1">
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
                  <h1 className="text-base font-medium text-gray-600">
                    Firewall de aplicaciones web
                  </h1>
                </div>
              </li>

              <li className="text-base font-medium text-gray-200 my-2">
                <div className="inline-flex items-center space-x-1">
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
                  <h1 className="text-base font-medium text-gray-600">
                    Proteccion de privacidad de datos (GDPR)
                  </h1>
                </div>
              </li>

              <li className="text-base font-medium text-gray-200 my-2">
                <div className="inline-flex items-center space-x-1">
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
                  <h1 className="text-base font-medium text-gray-600">
                    Altos estándares de seguridad y disponibilidad (SOC 2)
                  </h1>
                </div>
              </li>

              <li className="text-base font-medium text-gray-200 my-2">
                <div className="inline-flex items-center space-x-1">
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
                  <h1 className="text-base font-medium text-gray-600">
                    Altos estándares de gestión de la seguridad de la
                    información (ISO 27001)
                  </h1>
                </div>
              </li>
            </ul>

            <div className="text-transparent border-b-1 border-neutral-400 select-none my-5">
              s
            </div>

            <ul className="inline-flex flex-col items-start space-y-5 text-left my-2">
              <span className="text-lg font-semibold text-[#a482fb]">
                {" "}
                Rendimiento{" "}
              </span>

              <li className="text-base font-medium text-gray-200 my-2">
                <div className="inline-flex items-center space-x-1">
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
                  <h1 className="text-base font-medium text-gray-600">
                    Distribucion en una red global de servidores de alto
                    rendimiento y baja latencia
                  </h1>
                </div>
              </li>

              <li className="text-base font-medium text-gray-200 my-2">
                <div className="inline-flex items-center space-x-1">
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
                  <h1 className="text-base font-medium text-gray-600">
                    Optimizacion automatica de imagenes
                  </h1>
                </div>
              </li>

              <li className="text-base font-medium text-gray-200 my-2">
                <div className="inline-flex items-center space-x-1">
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
                  <h1 className="text-base font-medium text-gray-600">
                    Minificación y compresión de codigo
                  </h1>
                </div>
              </li>

              <li className="text-base font-medium text-gray-200 my-2">
                <div className="inline-flex items-center space-x-1">
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
                  <h1 className="text-base font-medium text-gray-600">
                    Almacenamiento en Caché para usuarios regresantes
                  </h1>
                </div>
              </li>

              <li className="text-base font-medium text-gray-200 my-2">
                <div className="inline-flex items-center space-x-1">
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
                  <h1 className="text-base font-medium text-gray-600">
                    Bases de datos de alto rendimiento y escalado automatico
                  </h1>
                </div>
              </li>
            </ul>

            <div className="text-transparent border-b-1 border-neutral-400 select-none my-5">
              s
            </div>

            <ul className="inline-flex flex-col items-start space-y-5 text-left my-2">
              <span className="text-lg font-semibold text-[#a482fb]">
                {" "}
                Estructura{" "}
                <span className="text-xs">(+2 paginas adicionales)</span>
              </span>

              <li className="text-base font-medium text-gray-200 my-2">
                <div className="inline-flex items-center space-x-1">
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
                  <h1 className="text-base font-medium text-gray-600">
                    Encabezado:
                  </h1>
                </div>
                <div className="ml-6">
                  <h1 className="text-sm font-light text-gray-500 mb-2">
                    Título impactante que capte la atención del visitante.
                  </h1>
                  <h1 className="text-sm font-light text-gray-500">
                    Breve descripción del producto, servicio o oferta.
                  </h1>
                </div>
              </li>

              <li className="text-base font-medium text-gray-200 my-2">
                <div className="inline-flex items-center space-x-1">
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
                  <h1 className="text-base font-medium text-gray-600">
                    Beneficios:
                  </h1>
                </div>
                <div className="ml-6">
                  <h1 className="text-sm font-light text-gray-500 mb-2">
                    Lista de beneficios clave de lo que se ofrece.
                  </h1>
                  <h1 className="text-sm font-light text-gray-500">
                    Iconos o imágenes para destacar cada beneficio.
                  </h1>
                </div>
              </li>

              <li className="text-base font-medium text-gray-200 my-2">
                <div className="inline-flex items-center space-x-1">
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
                  <h1 className="text-base font-medium text-gray-600">
                    Llamado a la acción (CTA):
                  </h1>
                </div>
                <div className="ml-6">
                  <h1 className="text-sm font-light text-gray-500 mb-2">
                    Botón prominente que invita a los visitantes a realizar una
                    acción específica, como registrarse o comprar.
                  </h1>
                </div>
              </li>

              <li className="text-base font-medium text-gray-200 my-2">
                <div className="inline-flex items-center space-x-1">
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
                  <h1 className="text-base font-medium text-gray-600">
                    Formulario de Registro o Contacto:
                  </h1>
                </div>
                <div className="ml-6">
                  <h1 className="text-sm font-light text-gray-500 mb-2">
                    Formulario integrado para que los visitantes proporcionen
                    información de contacto.
                  </h1>
                  <h1 className="text-sm font-light text-gray-500">
                    Campos simples y claros para maximizar la conversión.
                  </h1>
                </div>
              </li>

              <li className="text-base font-medium text-gray-200 my-2">
                <div className="inline-flex items-center space-x-1">
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
                  <h1 className="text-base font-medium text-gray-600">
                    Testimonios:
                  </h1>
                </div>
                <div className="ml-6">
                  <h1 className="text-sm font-light text-gray-500 mb-2">
                    Sección con testimonios o reseñas de clientes satisfechos.
                  </h1>
                  <h1 className="text-sm font-light text-gray-500">
                    Breves citas y nombres de clientes.
                  </h1>
                </div>
              </li>

              <li className="text-base font-medium text-gray-200 my-2">
                <div className="inline-flex items-center space-x-1">
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
                  <h1 className="text-base font-medium text-gray-600">
                    Preguntas frecuentes (FAQ):
                  </h1>
                </div>
                <div className="ml-6">
                  <h1 className="text-sm font-light text-gray-500 mb-2">
                    Sección que responde a preguntas comunes sobre el producto o
                    servicio.
                  </h1>
                  <h1 className="text-sm font-light text-gray-500">
                    Preguntas y respuestas claramente organizadas.
                  </h1>
                </div>
              </li>

              <li className="text-base font-medium text-gray-200 my-2">
                <div className="inline-flex items-center space-x-1">
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
                  <h1 className="text-base font-medium text-gray-600">
                    Pie de página:
                  </h1>
                </div>
                <div className="ml-6">
                  <h1 className="text-sm font-light text-gray-500 mb-2">
                    Enlaces adicionales, información de copyright y redes
                    sociales.
                  </h1>
                </div>
              </li>
            </ul>
            <div>
              <h1 className="text-xs font-semibold text-gray-400 text-center my-2">
                (Todos los apartados de la estructura pueden ser personalizados)
              </h1>
            </div>

            <div className="text-transparent border-b-1 border-neutral-400 select-none my-5">
              s
            </div>
          </>
        )}

        <div
          className="flex items-center justify-center cursor-pointer w-full"
          onClick={() => setShowMoreFeatures(!showMoreFeatures)}
        >
          <h1 className="text-center text-lg lg:text-sm xl:text-lg font-semibold text-[#a482fb]">
            {showMoreFeatures
              ? "Ocultar características"
              : "Ver todas las características"}
          </h1>
          <div>
            <ChevronDownIcon
              className={`h-7 w-7 flex-none text-[#a482fb] transform transition-transform €{
                showMoreFeatures ? "rotate-180" : ""
              }`}
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ShoppingCartWithState: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <ShoppingCart open={open} setOpen={setOpen} />
      <OnePageCardPrice open={open} setOpen={setOpen} />
    </>
  );
};

export default ShoppingCartWithState;

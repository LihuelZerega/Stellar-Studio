"use client";
import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  RadioGroup,
  Radio,
  cn,
} from "@nextui-org/react";
import { SiMercadopago } from "react-icons/si";
import {
  CreditCardPosIcon,
  MoneyReceiveFlow02Icon,
  BankIcon,
  PaypalIcon,
  BitcoinEllipseIcon,
} from "@/app/es/servicios/paginasweb/checkout/onepage/subcomponents/Icons";

const API_URL = "http://localhost:8080/api/soldproducts";

interface PaymentMethod {
  name: string;
  icon: JSX.Element;
}

const paymentMethods: PaymentMethod[] = [
  {
    name: "Credit Card",
    icon: <CreditCardPosIcon />,
  },
  {
    name: "Efectivo",
    icon: <MoneyReceiveFlow02Icon />,
  },
  {
    name: "Bank Transfer",
    icon: <BankIcon />,
  },
  {
    name: "PayPal",
    icon: <PaypalIcon />,
  },
  {
    name: "Mercadopago",
    icon: <SiMercadopago />,
  },
  {
    name: "Crypto",
    icon: <BitcoinEllipseIcon />,
  },
];

interface WebPagePlan {
  name: string;
}

interface DomainPlan {
  name: string;
}

interface EmailPlan {
  name: string;
}

const webpagePlan: WebPagePlan[] = [
  {
    name: "One Page",
  },
  {
    name: "Landing Page",
  },
  {
    name: "E Commerce",
  },
];

const domainPlan: DomainPlan[] = [
  {
    name: "com",
  },
  {
    name: "net",
  },
  {
    name: "online",
  },
  {
    name: "io",
  },
  {
    name: "icu",
  },
  {
    name: "xyz",
  },
  {
    name: "pro",
  },
  {
    name: "cloud",
  },
];

const emailPlan: EmailPlan[] = [
  {
    name: "Entrepreneur",
  },
  {
    name: "Corporate",
  },
];

function OrderNew() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [selectedMethod, setSelectedMethod] = useState<string | null>(null);
  const [selectedWebPage, setselectedWebPage] = useState<string | null>(null);
  const [selectedDomain, setSelectedDomain] = useState<string | null>(null);
  const [selectedEmail, setSelectedEmail] = useState<string | null>(null);
  const [formValues, setFormValues] = useState({
    name: "",
    lastname: "",
    email: "",
    country: "",
    company: "",
    phonenumber: "",
    webpagePrice: 0.0,
    domainPrice: 0.0,
    emailPrice: 0.0,
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleMethodClick = (value: string) => {
    setSelectedMethod(value);
  };

  const handleWebPageClick = (value: string) => {
    setselectedWebPage(value);
  };

  const handleDomainClick = (value: string) => {
    setSelectedDomain(value);
  };

  const handleEmailClick = (value: string) => {
    setSelectedEmail(value);
  };

  const handleOrderClick = async () => {
    const orderData = {
      ...formValues,
      paymentMethod: selectedMethod,
      webpage: selectedWebPage,
      domainPlan: selectedDomain,
      emailPlan: selectedEmail,
    };

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });

      if (response.ok) {
        alert("¡Pedido realizado con éxito!");
      } else {
        alert("Error al realizar el pedido. Inténtalo de nuevo más tarde.");
      }
    } catch (error) {
      console.error("Error al realizar el pedido:", error);
      alert("Error al realizar el pedido. Inténtalo de nuevo más tarde.");
    }
  };

  return (
    <div>
      <button
        onClick={onOpen}
        className="flex flex-row items-center bg-[#a482fb] hover:bg-violet-400 text-white px-3 py-2 rounded-md"
      >
        Agregar nueva
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="20"
          height="20"
          color="#ffffff"
          fill="none"
          className="ml-1"
        >
          <path
            d="M12 4V20M20 12H4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      
      <div>
        <Modal
          isOpen={isOpen}
          size="5xl"
          placement="center"
          onOpenChange={onOpenChange}
        >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1 text-neutral-800">
                  Nueva Orden
                </ModalHeader>
                <ModalBody className="text-neutral-800 grid grid-cols-1 md:grid-cols-2 gap-x-4 border-b-1 border-neutral-300">
                  <section>
                    <strong>Información contacto</strong>
                    <div>
                      <div className="flex flex-col md:flex-row md:items-center md:gap-x-4">
                        <div className="w-full">
                          <strong className="block text-sm font-medium leading-6 text-neutral-800 mb-1 mt-2">
                            Nombre
                          </strong>
                          <input
                            type="text"
                            name="name"
                            id="name"
                            autoComplete="name"
                            aria-label="Name"
                            value={formValues.name}
                            onChange={handleInputChange}
                            className="block w-full rounded-md border-0 py-1.5 pl-2 pr-0 text-neutral-800 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-violet-400 sm:text-sm sm:leading-6"
                          />
                        </div>
                        <div className="w-full">
                          <strong className="block text-sm font-medium leading-6 text-neutral-800 mb-1 mt-2">
                            Apellido
                          </strong>
                          <input
                            type="text"
                            name="lastname"
                            id="last-name"
                            autoComplete="lastname"
                            aria-label="Lastname"
                            value={formValues.lastname}
                            onChange={handleInputChange}
                            className="block w-full rounded-md border-0 py-1.5 pl-2  text-neutral-800 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-violet-400 sm:text-sm sm:leading-6"
                          />
                        </div>
                        <div className="w-full">
                          <strong className="block text-sm font-medium leading-6 text-neutral-800 mb-1 mt-2">
                            País
                          </strong>
                          <div className="relative mt-0 rounded-md shadow-sm">
                            <select
                              id="country-name"
                              name="country"
                              autoComplete="country-name"
                              aria-label="Country"
                              value={formValues.country}
                              onChange={handleInputChange}
                              className="h-full w-full rounded-md border-0 bg-transparent py-1.5 pl-1 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-violet-400 sm:text-sm"
                            >
                              <option>Argentina</option>
                              <option>Brasil</option>
                              <option>España</option>
                              <option>United States</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col md:flex-row md:items-center md:gap-x-4 mb-4">
                        <div className="w-full">
                          <strong className="block text-sm font-medium leading-6 text-neutral-800 mb-1 mt-2">
                            Correo Electrónico
                          </strong>
                          <input
                            type="email"
                            name="email"
                            id="email"
                            autoComplete="email"
                            aria-label="Email"
                            value={formValues.email}
                            onChange={handleInputChange}
                            className="block w-full rounded-md border-0 py-1.5 pl-2  text-neutral-800 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-violet-400 sm:text-sm sm:leading-6"
                          />
                        </div>
                        <div className="w-full">
                          <strong className="block text-sm font-medium leading-6 text-neutral-800 mb-1 mt-2">
                            Número de telefóno
                          </strong>
                          <input
                            type="tel"
                            name="phonenumber"
                            id="phone-number"
                            autoComplete="tel"
                            aria-label="Phonenumber"
                            value={formValues.phonenumber}
                            onChange={handleInputChange}
                            className="block w-full rounded-md border-0 py-1.5 pl-2 text-neutral-800 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-violet-400 sm:text-sm sm:leading-6"
                          />
                        </div>
                        <div className="w-full">
                          <strong className="block text-sm font-medium leading-6 text-neutral-800 mb-1 mt-2">
                            Compañía
                          </strong>
                          <input
                            type="text"
                            name="company"
                            id="company"
                            autoComplete="company"
                            aria-label="Company"
                            value={formValues.company}
                            onChange={handleInputChange}
                            className="block w-full rounded-md border-0 py-1.5 pl-2  text-neutral-800 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-violet-400 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>
                      <div className="w-full">
                        <strong>Método de pago</strong>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 select-none mt-4">
                          {paymentMethods.map((method, index) => (
                            <div
                              key={method.name}
                              onClick={() => handleMethodClick(method.name)}
                              className={`inline-flex w-full bg-content1 hover:bg-content2 items-center justify-start cursor-pointer rounded-lg gap-2 p-4 border-1 border-neutral-200 ${
                                selectedMethod === method.name
                                  ? "border-violet-400 border-2"
                                  : ""
                              } ${
                                index < 2 ? "opacity-50 cursor-not-allowed" : ""
                              }`}
                            >
                              <div className="w-full flex justify-between gap-2">
                                <div className="flex flex-col gap-2">
                                  <div className="flex flex-row  space-x-2">
                                    <span className="text-2xl text-[#a482fb]">
                                      {method.icon}
                                    </span>
                                    <strong className="text-sm text-neutral-800">
                                      {method.name}
                                    </strong>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </section>
                  <section>
                    <div className="grid grid-cols-1 md:grid-cols-2 md:items-start md:gap-x-4 mb-4">
                      <div className="w-full">
                        <strong>Resumen del pedido</strong>
                        <div className="flex flex-col items-start mt-4">
                          <div className="flex flex-col select-none">
                            <div className="grid grid-cols-1 md:grid-cols-3 space-x-4">
                              <div className="grid grid-cols-1 gap-y-3 select-none mt-4">
                                {webpagePlan.map((page, index) => (
                                  <div
                                    key={page.name}
                                    onClick={() =>
                                      handleWebPageClick(page.name)
                                    }
                                    className={`inline-flex w-full bg-content1 hover:bg-content2 items-center justify-start cursor-pointer rounded-lg gap-1 p-2 border-1 border-neutral-200 ${
                                      selectedWebPage === page.name
                                        ? "border-violet-400 border-2"
                                        : ""
                                    }`}
                                  >
                                    <div className="w-full flex justify-between gap-2">
                                      <div className="flex flex-col gap-2">
                                        <div className="flex flex-row  space-x-2">
                                          <strong className="text-xs text-neutral-800">
                                            {page.name}
                                          </strong>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 select-none mt-4">
                                {domainPlan.map((domain, index) => (
                                  <div
                                    key={domain.name}
                                    onClick={() =>
                                      handleDomainClick(domain.name)
                                    }
                                    className={`inline-flex w-full bg-content1 hover:bg-content2 items-center justify-start cursor-pointer rounded-lg gap-1 p-2 border-1 border-neutral-200 ${
                                      selectedDomain === domain.name
                                        ? "border-violet-400 border-2"
                                        : ""
                                    }`}
                                  >
                                    <div className="w-full flex justify-between gap-2">
                                      <div className="flex flex-col gap-2">
                                        <div className="flex flex-row  space-x-2">
                                          <strong className="text-xs text-neutral-800">
                                            {domain.name}
                                          </strong>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                              <div className="grid grid-cols-1 gap-3 select-none mt-4">
                                {emailPlan.map((email, index) => (
                                  <div
                                    key={email.name}
                                    onClick={() => handleEmailClick(email.name)}
                                    className={`inline-flex w-full bg-content1 hover:bg-content2 items-center justify-start cursor-pointer rounded-lg gap-1 p-2 border-1 border-neutral-200 ${
                                      selectedEmail === email.name
                                        ? "border-violet-400 border-2"
                                        : ""
                                    }`}
                                  >
                                    <div className="w-full flex justify-between gap-2">
                                      <div className="flex flex-col gap-2">
                                        <div className="flex flex-row  space-x-2">
                                          <strong className="text-xs text-neutral-800">
                                            {email.name}
                                          </strong>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                            <div className="flex flex-row items-center w-full space-x-8">
                              <div className="w-full">
                                <strong className="block text-sm font-medium leading-6 text-neutral-800 mb-1 mt-4">
                                  Precio Web
                                </strong>
                                <input
                                  type="text"
                                  name="webpagePrice"
                                  id="webpagePrice"
                                  placeholder="0.00"
                                  onChange={handleInputChange}
                                  className="block max-w-[120px] rounded-md border-0 py-1.5 pl-1 pr-0 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                              </div>

                              <div className="w-full">
                                <strong className="block text-sm font-medium leading-6 text-neutral-800 mb-1 mt-4">
                                  Precio Dominio
                                </strong>
                                <input
                                  type="text"
                                  name="domainPrice"
                                  id="domainPrice"
                                  placeholder="0.00"
                                  onChange={handleInputChange}
                                  className="block max-w-[120px] rounded-md border-0 py-1.5 pl-1 pr-0 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                              </div>
                              <div className="w-full">
                                <strong className="block text-sm font-medium leading-6 text-neutral-800 mb-1 mt-4">
                                  Precio Correo
                                </strong>
                                <input
                                  type="text"
                                  name="emailPrice"
                                  id="emailPrice"
                                  placeholder="0.00"
                                  onChange={handleInputChange}
                                  className="block max-w-[120px] rounded-md border-0 py-1.5 pl-1 pr-0 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </ModalBody>
                <ModalFooter>
                  <button
                    onClick={onClose}
                    className="w-fit items-center justify-center py-3 px-4 text-xs rounded-md font-semibold text-[#a482fb] transition-all border-2 border-[#a482fb] shadow-sm hover:bg-neutral-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a482fb]"
                  >
                    Cerrar
                  </button>
                  <button
                    onClick={handleOrderClick}
                    className="w-fit items-center justify-center py-3 px-4 text-xs rounded-md font-semibold text-white transition-all bg-[#a482fb] shadow-sm hover:bg-[#8e62fc] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a482fb]"
                  >
                    Agregar pedido
                  </button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </div>
    </div>
  );
}

export default OrderNew;

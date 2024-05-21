import React, { useEffect, useState } from "react";
import {
  Tooltip,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
} from "@nextui-org/react";
import { SiMercadopago } from "react-icons/si";
import {
  CreditCardPosIcon,
  MoneyReceiveFlow02Icon,
  BankIcon,
  PaypalIcon,
  BitcoinEllipseIcon,
} from "@/app/es/servicios/paginasweb/checkout/onepage/subcomponents/Icons";

interface Order {
  id: string;
  name: string;
  lastname: string;
  email: string;
  country: string;
  company: string;
  phonenumber: string;
  paymentMethod: string;
  webpage: string;
  webpagePrice: number;
  domainPlan: string;
  domainPrice: number;
  emailPlan: string;
  emailPrice: number;
}

interface OrderEditProps {
  order: Order;
}

interface PaymentMethod {
  name: string;
  icon: JSX.Element;
}

interface WebPagePlan {
  name: string;
}

interface DomainPlan {
  name: string;
}

interface EmailPlan {
  name: string;
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

const OrderEdit: React.FC<OrderEditProps> = ({ order }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [editedProduct, setEditedProduct] = useState<Order>(order);
  const [selectedMethod, setSelectedMethod] = useState<string | null>(null);
  const [selectedWebPage, setSelectedWebPage] = useState<string | null>(null);
  const [selectedDomain, setSelectedDomain] = useState<string | null>(null);
  const [selectedEmail, setSelectedEmail] = useState<string | null>(null);

  useEffect(() => {
    setEditedProduct(order);
  }, [order]);

  const handleMethodClick = (value: string) => {
    setSelectedMethod(value);
    setEditedProduct((prevState) => ({
      ...prevState,
      paymentMethod: value,
    }));
  };

  const handleWebPageClick = (value: string) => {
    setSelectedWebPage(value);
    setEditedProduct((prevState) => ({
      ...prevState,
      webpage: value,
    }));
  };

  const handleDomainClick = (value: string) => {
    setSelectedDomain(value);
    setEditedProduct((prevState) => ({
      ...prevState,
      domainPlan: value,
    }));
  };

  const handleEmailClick = (value: string) => {
    setSelectedEmail(value);
    setEditedProduct((prevState) => ({
      ...prevState,
      emailPlan: value,
    }));
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setEditedProduct({
      ...editedProduct,
      [name]: value,
    });
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setEditedProduct({
      ...editedProduct,
      [name]: value,
    });
  };

  const handleUpdate = () => {
    fetch(`http://localhost:8080/api/soldproducts/${order.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editedProduct),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Producto actualizado", data);
        window.location.reload();
      })
      .catch((error) => console.error("Error:", error));
  };

  return (
    <>
      <div className="text-neutral-800 cursor-pointer" onClick={onOpen}>
        <div className="flex flex-row items-center space-x-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="18"
            height="18"
            color="#272526"
            fill="none"
          >
            <path
              d="M16.2141 4.98239L17.6158 3.58063C18.39 2.80646 19.6452 2.80646 20.4194 3.58063C21.1935 4.3548 21.1935 5.60998 20.4194 6.38415L19.0176 7.78591M16.2141 4.98239L10.9802 10.2163C9.93493 11.2616 9.41226 11.7842 9.05637 12.4211C8.70047 13.058 8.3424 14.5619 8 16C9.43809 15.6576 10.942 15.2995 11.5789 14.9436C12.2158 14.5877 12.7384 14.0651 13.7837 13.0198L19.0176 7.78591M16.2141 4.98239L19.0176 7.78591"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M21 12C21 16.2426 21 18.364 19.682 19.682C18.364 21 16.2426 21 12 21C7.75736 21 5.63604 21 4.31802 19.682C3 18.364 3 16.2426 3 12C3 7.75736 3 5.63604 4.31802 4.31802C5.63604 3 7.75736 3 12 3"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>

      <Modal isOpen={isOpen} onClose={onClose} size="5xl">
        <ModalContent className="p-2">
          <ModalBody>
            <form>
              <section className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
                <section>
                  <h1 className="text-left font-semibold mb-3 text-neutral-800">
                    Información de Contacto
                  </h1>
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
                      value={editedProduct.name}
                      onChange={handleInputChange}
                      placeholder="Nombre"
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
                      id="lastname"
                      autoComplete="lastname"
                      aria-label="LastName"
                      value={editedProduct.lastname}
                      onChange={handleInputChange}
                      placeholder="Apellido"
                      className="block w-full rounded-md border-0 py-1.5 pl-2 pr-0 text-neutral-800 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-violet-400 sm:text-sm sm:leading-6"
                    />
                  </div>
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
                      value={editedProduct.email}
                      onChange={handleInputChange}
                      placeholder="Correo Electrónico"
                      className="block w-full rounded-md border-0 py-1.5 pl-2 pr-0 text-neutral-800 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-violet-400 sm:text-sm sm:leading-6"
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
                        value={editedProduct.country}
                        onChange={handleSelectChange}
                        className="h-full w-full rounded-md border-1 bg-transparent py-1.5 pl-1 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-violet-400 sm:text-sm"
                      >
                        <option>Argentina</option>
                        <option>Brasil</option>
                        <option>España</option>
                        <option>United States</option>
                      </select>
                    </div>
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
                      value={editedProduct.company}
                      onChange={handleInputChange}
                      placeholder="Compañía"
                      className="block w-full rounded-md border-0 py-1.5 pl-2 pr-0 text-neutral-800 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-violet-400 sm:text-sm sm:leading-6"
                    />
                  </div>
                  <div className="w-full">
                    <strong className="block text-sm font-medium leading-6 text-neutral-800 mb-1 mt-2">
                      Número de Teléfono
                    </strong>
                    <input
                      type="tel"
                      name="phonenumber"
                      id="phonenumber"
                      autoComplete="tel"
                      aria-label="PhoneNumber"
                      value={editedProduct.phonenumber}
                      onChange={handleInputChange}
                      placeholder="Número de Teléfono"
                      className="block w-full rounded-md border-0 py-1.5 pl-2 pr-0 text-neutral-800 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-violet-400 sm:text-sm sm:leading-6"
                    />
                  </div>
                </section>

                <section>
                  <section>
                    <h1 className="text-left font-semibold mb-3 text-neutral-800">
                      Método de Pago
                    </h1>
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
                  </section>

                  <section className="grid grid-cols-1 md:gap-x-4 mt-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 select-none">
                      {webpagePlan.map((page, index) => (
                        <div
                          key={page.name}
                          onClick={() => handleWebPageClick(page.name)}
                          className={`w-full bg-content1 hover:bg-content2 items-center justify-start cursor-pointer rounded-lg gap-2 p-4 border-1 border-neutral-200 ${
                            selectedWebPage === page.name
                              ? "border-violet-400 border-2"
                              : ""
                          }`}
                        >
                          <div className="flex flex-col gap-2">
                            <strong className="text-sm text-neutral-800">
                              {page.name}
                            </strong>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-3 select-none my-2">
                      {domainPlan.map((domain, index) => (
                        <div
                          key={domain.name}
                          onClick={() => handleDomainClick(domain.name)}
                          className={`w-full bg-content1 hover:bg-content2 items-center justify-start cursor-pointer rounded-lg gap-2 p-2 border-1 border-neutral-200 ${
                            selectedDomain === domain.name
                              ? "border-violet-400 border-2"
                              : ""
                          }`}
                        >
                          <div className="flex flex-col gap-2">
                            <strong className="text-sm text-neutral-800">
                              {domain.name}
                            </strong>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 select-none">
                      {emailPlan.map((email, index) => (
                        <div
                          key={email.name}
                          onClick={() => handleEmailClick(email.name)}
                          className={`w-full bg-content1 hover:bg-content2 items-center justify-start cursor-pointer rounded-lg gap-2 p-2 border-1 border-neutral-200 ${
                            selectedEmail === email.name
                              ? "border-violet-400 border-2"
                              : ""
                          }`}
                        >
                          <div className="flex flex-col gap-2">
                            <strong className="text-sm text-neutral-800">
                              {email.name}
                            </strong>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>

                  <div className="flex flex-row items-center w-full space-x-8">
                    <div className="w-full">
                      <strong className="block text-sm font-medium leading-6 text-neutral-800 mb-1 mt-4">
                        Precio Web
                      </strong>
                      <input
                        type="number"
                        name="webpagePrice"
                        id="webpagePrice"
                        placeholder={editedProduct?.webpagePrice?.toString() ?? ''}
                        onChange={handleInputChange}
                        className="block max-w-[120px] rounded-md border-0 py-1.5 pl-1 pr-0 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>

                    <div className="w-full">
                      <strong className="block text-sm font-medium leading-6 text-neutral-800 mb-1 mt-4">
                        Precio Dominio
                      </strong>
                      <input
                        type="number"
                        name="domainPrice"
                        id="domainPrice"
                        placeholder={editedProduct?.domainPrice?.toString() ?? ''}
                        onChange={handleInputChange}
                        className="block max-w-[120px] rounded-md border-0 py-1.5 pl-1 pr-0 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                    <div className="w-full">
                      <strong className="block text-sm font-medium leading-6 text-neutral-800 mb-1 mt-4">
                        Precio Correo
                      </strong>
                      <input
                        type="number"
                        name="emailPrice"
                        id="emailPrice"
                        placeholder={editedProduct?.emailPrice?.toString() ?? ''}
                        onChange={handleInputChange}
                        className="block max-w-[120px] rounded-md border-0 py-1.5 pl-1 pr-0 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </section>
              </section>

              <ModalFooter className="border-t-1 border-neutral-200 pt-2 mt-2">
                <button
                  onClick={onClose}
                  className="inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                >
                  Cancelar
                </button>
                <button
                  className="inline-flex w-full justify-center rounded-md bg-[#a482fb] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#a482fb]/90 sm:ml-3 sm:w-auto"
                  onClick={handleUpdate}
                >
                  Guardar Cambios
                </button>
              </ModalFooter>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default OrderEdit;

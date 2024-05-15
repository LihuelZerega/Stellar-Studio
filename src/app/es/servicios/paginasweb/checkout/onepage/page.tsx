"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@nextui-org/react";
import { SiMercadopago } from "react-icons/si";
import {
  CreditCardPosIcon,
  MoneyReceiveFlow02Icon,
  BankIcon,
  PaypalIcon,
  BitcoinEllipseIcon,
} from "./subcomponents/Icons";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
} from "@nextui-org/react";
import { FiTrash2, FiChevronUp } from "react-icons/fi";
import { MdOutlineWebAsset, MdAlternateEmail } from "react-icons/md";
import { TbWorldWww } from "react-icons/tb";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";
import LoadingPage from "@/ui/LoadingPage";
import FooterEs from "@/components/LandingPageComponents/Footers/FooterEs";

interface ShoppingCartProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

interface OnePageCardPriceProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ShoppingCart: React.FC<ShoppingCartProps> = ({ open, setOpen }) => {
  const [onePagePrice, setOnePagePrice] = useState<number>(79.0);
  const [domainPrice, setDomainPrice] = useState<number>(0.0);
  const [emailPrice, setEmailPrice] = useState<number>(0.0);

  const [onePageQuantity, setOnePageQuantity] = useState<number>(1);
  const [domainQuantity, setDomainQuantity] = useState<number>(1);
  const [emailQuantity, setEmailQuantity] = useState<number>(1);

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

  const subtotal =
    onePagePrice * onePageQuantity +
    (domainPrice ? domainPrice * domainQuantity : 0) +
    emailPrice * emailQuantity;

  const total = subtotal;

  return (
    <div className="flex flex-col">
      <div className="">
        <strong className="text-lg text-neutral-800">Resumen del pedido</strong>
      </div>

      <hr className="mt-4" />

      <div className="relative mt-6 flex-1 ">
        <ProductItem
          icon={<MdOutlineWebAsset className="text-3xl text-[#a482fb]" />}
          title="One Page"
          price={onePagePrice}
          quantity={onePageQuantity}
          setQuantity={setOnePageQuantity}
          setOpen={setOpen}
          setDomainPrice={setDomainPrice}
          setEmailPrice={setEmailPrice}
        />

        <ProductItem
          icon={<TbWorldWww className="text-3xl text-[#a482fb]" />}
          title="Registrar Dominio"
          price={domainPrice}
          quantity={domainQuantity}
          setQuantity={setDomainQuantity}
          setOpen={setOpen}
          setDomainPrice={setDomainPrice}
          setEmailPrice={setEmailPrice}
        />
        <ProductItem
          icon={<MdAlternateEmail className="text-3xl text-[#a482fb]" />}
          title="Correo Profesional"
          price={emailPrice}
          quantity={emailQuantity}
          setQuantity={setEmailQuantity}
          setOpen={setOpen}
          setDomainPrice={setDomainPrice}
          setEmailPrice={setEmailPrice}
        />
      </div>

      <hr />

      <section className="flex flex-col mt-3 select-none">
        <div className="">
          <div className="flex flex-row items-center justify-between">
            <h1 className="text-base font-medium text-neutral-500">Subtotal</h1>
            <h1 className="text-base font-medium text-neutral-500">
              ${subtotal.toFixed(2)}{" "}
            </h1>
          </div>
          <div className="flex flex-row items-center justify-between mt-3">
            <h1 className="text-lg font-semibold text-neutral-700">Total</h1>
            <h1 className="text-lg font-semibold text-neutral-700">
              ${total.toFixed(2)}{" "}
            </h1>
          </div>
        </div>
        <div className="flex flex-col">
          <button className="w-full items-center justify-center py-4 mt-5 text-sm rounded-md font-semibold text-white transition-all bg-[#a482fb] shadow-sm hover:bg-[#8e62fc] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a482fb]">
            Realizar pedido
          </button>
        </div>
      </section>
    </div>
  );
};

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
    <div>
      {quantity === 0 ? null : (
        <>
          <div className="flex flex-row bg-neutral-50 p-4 rounded-md shadow-sm mb-4">
            <div className="bg-white rounded-md p-2">{icon}</div>

            <div className="flex flex-col items-left justify-between w-full border-l ml-2 pl-2">
              <div className="flex flex-row items-center justify-between text-base font-semibold text-gray-800">
                {selectedDomain ? (
                  <>
                    <h1 className="">Registrar Dominio</h1>
                    <h1 className="">${selectedDomain?.price.toFixed(2)}</h1>
                  </>
                ) : (
                  <>
                    <h1>{title}</h1>
                    <h1>${price.toFixed(2)}</h1>
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
                      className={`bg-neutral-50 border-2 border-[#a482fb] rounded-md ${
                        selectedDomain === domain ? "bg-gray-200" : ""
                      }`}
                      onClick={() => handleSelectDomain(domain)}
                    >
                      <div className="text-left p-2 rounded-sm hover:bg-neutral-100">
                        <h1 className="text-xl font-semibold text-[#a482fb]">
                          {domain.name}
                        </h1>
                        <h1 className="text-base text-black">
                          ${domain.price.toFixed(2)}
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
                      className={`bg-neutral-50 border-2 border-[#a482fb] rounded-md ${
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
                            ${email.price.toFixed(2)}
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
    </div>
  );
};

interface PaymentMethod {
  name: string;
  icon: JSX.Element;
  description: string;
  additionalInfo: string;
}

const paymentMethods: PaymentMethod[] = [
  {
    name: "Tarjeta de Crédito o Débito",
    icon: <CreditCardPosIcon />,
    description:
      "Paga con tu tarjeta de crédito o débito de manera segura y rápida.",
    additionalInfo:
      "Aceptamos todas las principales tarjetas de crédito y débito.",
  },
  {
    name: "Efectivo",
    icon: <MoneyReceiveFlow02Icon />,
    description: "Paga en efectivo en nuestros puntos de venta.",
    additionalInfo:
      "Visita nuestra tienda física para completar tu compra en efectivo.",
  },
  {
    name: "Transferencia Bancaria",
    icon: <BankIcon />,
    description: "Método seguro y directo para pagar desde tu cuenta bancaria.",
    additionalInfo:
      "Puedes transferir directamente desde tu banco con la máxima seguridad.",
  },
  {
    name: "PayPal",
    icon: <PaypalIcon />,
    description:
      "Valido solo para España, Alemania, Francia, Italia y Reino Unido.",
    additionalInfo:
      "Con PayPal, puedes pagar de manera segura sin compartir tu información financiera.",
  },
  {
    name: "Mercado Pago",
    icon: <SiMercadopago />,
    description:
      "Valido solo para Argentina, Brasil, Chile, Peru, Colombia y Mexico.",
    additionalInfo:
      "Disfruta de múltiples opciones de pago y financiamiento a través de Mercado Pago.",
  },
  {
    name: "Criptomonedas",
    icon: <BitcoinEllipseIcon />,
    description:
      "Paga utilizando criptomonedas para transacciones rápidas y seguras en todo el mundo.",
    additionalInfo:
      "Aprovecha la seguridad y rapidez de las criptomonedas para tus pagos.",
  },
];

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

const ShoppingCartWithState: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <ShoppingCart open={open} setOpen={setOpen} />
    </>
  );
};

function page() {
  const [selectedMethod, setSelectedMethod] = useState<string | null>(null);

  const handleMethodClick = (method: string, index: number) => {
    if (index >= 2) {
      setSelectedMethod((prevMethod) =>
        prevMethod === method ? null : method
      );
    }
  };

  const [isLoading, setIsLoading] = useState(true);

  const changePageTitle = () => {
    document.title = "Stellar Studio | Checkout One Page";
  };

  useEffect(() => {
    changePageTitle();
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-neutral-50 z-50">
          <LoadingPage />
        </div>
      ) : (
        <div className="bg-neutral-50">
          <div className="px-6 lg:px-12 py-6 sm:py-8">
            <Breadcrumbs>
              <BreadcrumbItem>
                <Link href="/es/servicios/paginasweb">Servicios</Link>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <Link href="/es/servicios/paginasweb">Paginas Web</Link>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <Link href="/es/servicios/paginasweb">One Page</Link>
              </BreadcrumbItem>
              <BreadcrumbItem>Checkout</BreadcrumbItem>
            </Breadcrumbs>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 mx-auto h-screen">
            <section className="flex flex-col w-full px-4 mx-auto sm:px-6 lg:px-12">
              <div>
                <strong className="text-lg text-neutral-800 mb-6">
                  Información contacto
                </strong>

                <div>
                  <div className="flex flex-col md:flex-row md:items-center md:gap-x-6">
                    <div>
                      <strong className="block text-sm font-medium leading-6 text-neutral-800 mb-1 mt-4">
                        Nombre
                      </strong>
                      <input
                        type="name"
                        name="name"
                        id="name"
                        autoComplete="name"
                        aria-label="Name"
                        className="block w-full rounded-md border-0 py-1.5 pl-2 pr-28 text-neutral-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                    <div>
                      <strong className="block text-sm font-medium leading-6 text-neutral-800 mb-1 mt-4">
                        Apellido
                      </strong>
                      <input
                        type="lastname"
                        name="lastname"
                        id="lastname"
                        autoComplete="lastname"
                        aria-label="Lastname"
                        className="block w-full rounded-md border-0 py-1.5 pl-2 pr-28 text-neutral-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div>
                    <strong className="block text-sm font-medium leading-6 text-neutral-800 mb-1 mt-4">
                      Correo Electrónico
                    </strong>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      autoComplete="email"
                      aria-label="Email"
                      className="block w-full rounded-md border-0 py-1.5 pl-2 pr-20 text-neutral-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>

              <div className="text-transparent border-b-1 border-neutral-300 select-none my-2">
                s
              </div>

              <div className="my-4">
                <strong className="text-lg text-neutral-800">
                  Método de pago
                </strong>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 select-none mt-4">
                  {paymentMethods.map((method, index) => (
                    <div
                      key={method.name}
                      onClick={() => handleMethodClick(method.name, index)}
                      className={cn(
                        "inline-flex w-full bg-content1",
                        "hover:bg-content2 items-center justify-start",
                        "cursor-pointer rounded-lg gap-2 p-4 border-1 border-neutral-200",
                        {
                          "border-violet-400 border-2":
                            selectedMethod === method.name,
                          "opacity-50 cursor-not-allowed": index < 2,
                        }
                      )}
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
                          <div>
                            <p className="text-xs text-neutral-600">
                              {method.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
            <section className="flex flex-col w-full pb-6 sm:pb-0 px-6 mx-auto">
              <div className="h-fit bg-white border-1 border-gray-200 rounded-xl p-0 sm:p-6">
                <ShoppingCartWithState />
              </div>
            </section>
          </div>
          <FooterEs />
        </div>
      )}
    </>
  );
}

export default page;

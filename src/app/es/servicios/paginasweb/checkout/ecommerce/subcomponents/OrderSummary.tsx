"use client";
import React, { useState, useEffect } from "react";
import { VerifedCheckIcon } from "./Icons";
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

interface ShoppingCartOrderSummaryProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedDomain: React.Dispatch<React.SetStateAction<Domain | null>>;
  setSelectedEmail: React.Dispatch<React.SetStateAction<Email | null>>;
  setDomainPlan: React.Dispatch<React.SetStateAction<string | null>>;
  setEmailPlan: React.Dispatch<React.SetStateAction<string | null>>;
  setDomainPrice: React.Dispatch<React.SetStateAction<number>>;
  setEmailPrice: React.Dispatch<React.SetStateAction<number>>;
  domainPrice: number;
  emailPrice: number;
}

interface ProductItemProps {
  icon: JSX.Element;
  title: string;
  price: number;
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setDomainPlan: React.Dispatch<React.SetStateAction<string | null>>;
  setDomainPrice: React.Dispatch<React.SetStateAction<number>>;
  setEmailPlan: React.Dispatch<React.SetStateAction<string | null>>;
  setEmailPrice: React.Dispatch<React.SetStateAction<number>>;
}

export interface Domain {
  name: string;
  price: number;
}

export interface Email {
  name: string;
  price: number;
  feature1: string;
  feature2: string;
  feature3: string;
  feature4: string;
  feature5: string;
  feature6: string;
}

const ShoppingCartOrderSummary: React.FC<ShoppingCartOrderSummaryProps> = ({
  open,
  setOpen,
  setSelectedDomain,
  setSelectedEmail,
  setDomainPlan,
  setEmailPlan,
  setDomainPrice,
  setEmailPrice,
  domainPrice,
  emailPrice,
}) => {
  
  const [eCommercePrice, setECommercePrice] = useState<number>(1499.00);
  const [eCommerceQuantity, setECommerceQuantity] = useState<number>(1);
  const [domainQuantity, setDomainQuantity] = useState<number>(1);
  const [emailQuantity, setEmailQuantity] = useState<number>(1);

  useEffect(() => {
    setSelectedDomain(null);
    setSelectedEmail(null);
    setDomainPlan(null);
    setEmailPlan(null);
  }, []);

    useEffect(() => {
      console.log("domainPrice actualizado:", domainPrice);
    }, [domainPrice]);
  
    useEffect(() => {
      console.log("emailPrice actualizado:", emailPrice);
    }, [emailPrice]);

  const subtotal =
    eCommercePrice * eCommerceQuantity +
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
         title="E-commerce"
          price={eCommercePrice}
          quantity={eCommerceQuantity}
          setQuantity={setECommerceQuantity}
          setOpen={setOpen}
          setDomainPlan={setDomainPlan}
          setDomainPrice={setDomainPrice}
          setEmailPlan={setEmailPlan}
          setEmailPrice={setEmailPrice}
        />

        <ProductItem
          icon={<TbWorldWww className="text-3xl text-[#a482fb]" />}
          title="Registrar Dominio"
          price={domainPrice}
          quantity={domainQuantity}
          setQuantity={setDomainQuantity}
          setOpen={setOpen}
          setDomainPlan={setDomainPlan}
          setDomainPrice={setDomainPrice}
          setEmailPlan={setEmailPlan}
          setEmailPrice={setEmailPrice}
        />
        <ProductItem
          icon={<MdAlternateEmail className="text-3xl text-[#a482fb]" />}
          title="Correo Profesional"
          price={emailPrice}
          quantity={emailQuantity}
          setQuantity={setEmailQuantity}
          setOpen={setOpen}
          setDomainPlan={setDomainPlan}
          setDomainPrice={setDomainPrice}
          setEmailPlan={setEmailPlan}
          setEmailPrice={setEmailPrice}
        />
      </div>

      <hr />

      <section className="flex flex-col mt-3 select-none">
        <div className="">
          <div className="flex flex-row items-center justify-between">
            <h1 className="text-base font-medium text-neutral-500">Subtotal</h1>
            <h1 className="text-base font-medium text-neutral-500">
              €{subtotal.toFixed(2)}{" "}
            </h1>
          </div>
          <div className="flex flex-row items-center justify-between mt-3">
            <h1 className="text-lg font-semibold text-neutral-700">Total</h1>
            <h1 className="text-lg font-semibold text-neutral-700">
              €{total.toFixed(2)}{" "}
            </h1>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShoppingCartOrderSummary;

const ProductItem: React.FC<ProductItemProps> = ({
  icon,
  title,
  price,
  quantity,
  setQuantity,
  setOpen,
  setDomainPlan,
  setDomainPrice,
  setEmailPlan,
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
    { name: "com", price: 15.99 },
    { name: "net", price: 18.99 },
    { name: "online", price: 34.99 },
    { name: "io", price: 49.99 },
    { name: "icu", price: 13.99 },
    { name: "xyz", price: 24.99 },
    { name: "pro", price: 9.99 },
    { name: "cloud", price: 9.99 },
  ];

  const emails: Email[] = [
    {
      name: "Entrepreneur",
      price: 7.99,
      feature1: "10 GB de almacenamiento en email",
      feature2: "10 reglas de reenvío",
      feature3: "Alias de email",
      feature4: "Verificación antivirus",
      feature5: "Antispam avanzado",
      feature6: "Infraestructura basada en la nube",
    },
    {
      name: "Corporate",
      price: 11.99,
      feature1: "50 GB de almacenamiento en email",
      feature2: "50 reglas de reenvío",
      feature3: "Alias de email",
      feature4: "Verificación antivirus",
      feature5: "Antispam avanzado",
      feature6: "Infraestructura basada en la nube",
    },
  ];

  const [selectedDomain, setSelectedDomain] = useState<Domain | null>(
    null
  );
  const [selectedEmail, setSelectedEmail] = useState<Email | null>(
    null
  );

  const handleSelectDomain = (domain: Domain) => {
    setSelectedDomain(domain);
    setDomainPlan(domain.name);
    setDomainPrice(domain.price);
    onCloseDomain();
  };

  const handleSelectEmail = (email: Email) => {
    setSelectedEmail(email);
    setEmailPlan(email.name);
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
                  {title === "E-commerce" ? (
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
                Elige tu plan de Correo Profesional
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
                            <VerifedCheckIcon />
                            <h1>{email.feature1}</h1>
                          </div>
                          <div className="flex flex-row items-center space-x-1">
                            <VerifedCheckIcon />
                            <h1>{email.feature2}</h1>
                          </div>
                          <div className="flex flex-row items-center space-x-1">
                            <VerifedCheckIcon />
                            <h1>{email.feature3}</h1>
                          </div>
                          <div className="flex flex-row items-center space-x-1">
                            <VerifedCheckIcon />
                            <h1>{email.feature4}</h1>
                          </div>
                          <div className="flex flex-row items-center space-x-1">
                            <VerifedCheckIcon />
                            <h1>{email.feature5}</h1>
                          </div>
                          <div className="flex flex-row items-center space-x-1">
                            <VerifedCheckIcon />
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

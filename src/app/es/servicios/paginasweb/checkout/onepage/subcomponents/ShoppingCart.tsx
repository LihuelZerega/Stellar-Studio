import React, { useState } from "react";
import Link from "next/link";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";
import ContactInformation from "./ContactInformation";
import PaymentMethods from "./PaymentMethods";
import ShoppingCartOrderSummary, { Domain, Email } from "./OrderSummary";

const API_URL = "http://localhost:8080/api/soldproducts";

function ShoppingCart() {
  const [contactInfo, setContactInfo] = useState({
    name: "",
    lastname: "",
    email: "",
    country: "",
    company: "",
    phonenumber: "",
  });

  const [paymentMethod, setPaymentMethod] = useState<string | null>(null);
  const [selectedDomain, setSelectedDomain] = useState<Domain | null>(null);
  const [selectedEmail, setSelectedEmail] = useState<Email | null>(null);

  const handleOrderClick = async () => {
    const orderDetails = {
      contactInfo,
      paymentMethod,
      webpage: "One Page",
      webpagePrice: 79.99,
      domainPlan: selectedDomain?.name || "",
      domainPrice: selectedDomain?.price || 0.0,
      emailPlan: selectedEmail?.name || "",
      emailPrice: selectedEmail?.price || 0.0,
    };

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderDetails),
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

      <div className="grid grid-cols-1 xl:grid-cols-2 mx-auto h-full">
        <section className="flex flex-col w-full px-4 mx-auto sm:px-6 lg:px-12">
          <ContactInformation setContactInfo={setContactInfo} />

          <div className="text-transparent border-b-1 border-neutral-300 select-none my-2">
            Divider
          </div>

          <PaymentMethods setPaymentMethod={setPaymentMethod} />
        </section>

        <section className="flex flex-col w-full pb-6 sm:pb-0 px-6 mx-auto">
          <div className="h-fit bg-white border-1 border-gray-200 rounded-xl p-0 sm:p-6">
            <ShoppingCartOrderSummary
              setSelectedDomain={setSelectedDomain}
              setSelectedEmail={setSelectedEmail}
              open={false}
              setOpen={function (value: React.SetStateAction<boolean>): void {
                throw new Error("Function not implemented.");
              }}
            />
          </div>
          <div>
            <button
              onClick={handleOrderClick}
              className="w-full items-center justify-center py-4 mt-5 text-sm rounded-md font-semibold text-white transition-all bg-[#a482fb] shadow-sm hover:bg-[#8e62fc] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a482fb]"
            >
              Realizar pedido
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ShoppingCart;

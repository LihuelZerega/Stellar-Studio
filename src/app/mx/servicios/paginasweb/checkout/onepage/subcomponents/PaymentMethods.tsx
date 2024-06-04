"use client";
import React, { useState } from "react";
import { cn } from "@nextui-org/react";
import { SiMercadopago } from "react-icons/si";
import {
  CreditCardPosIcon,
  MoneyReceiveFlow02Icon,
  BankIcon,
  PaypalIcon,
  BitcoinEllipseIcon,
} from "./Icons";

const paymentMethods = [
  {
    name: "Credit Card",
    nameDisplay: "Tarjeta de Crédito o Débito",
    icon: <CreditCardPosIcon />,
    description:
      "Paga con tu tarjeta de crédito o débito de manera segura y rápida.",
    additionalInfo:
      "Aceptamos todas las principales tarjetas de crédito y débito.",
  },
  {
    name: "Efectivo",
    nameDisplay: "Efectivo",
    icon: <MoneyReceiveFlow02Icon />,
    description: "Paga en efectivo en nuestros puntos de venta.",
    additionalInfo:
      "Visita nuestra tienda física para completar tu compra en efectivo.",
  },
  {
    name: "Bank Transfer",
    nameDisplay: "Transferencia Bancaria",
    icon: <BankIcon />,
    description: "Método seguro y directo para pagar desde tu cuenta bancaria.",
    additionalInfo:
      "Puedes transferir directamente desde tu banco con la máxima seguridad.",
  },
  {
    name: "PayPal",
    nameDisplay: "PayPal",
    icon: <PaypalIcon />,
    description:
      "Valido solo para España, Alemania, Francia, Italia y Reino Unido.",
    additionalInfo:
      "Con PayPal, puedes pagar de manera segura sin compartir tu información financiera.",
  },
  {
    name: "Mercadopago",
    nameDisplay: "Mercado Pago",
    icon: <SiMercadopago />,
    description:
      "Valido solo para Argentina, Brasil, Chile, Peru, Colombia y Mexico.",
    additionalInfo:
      "Disfruta de múltiples opciones de pago y financiamiento a través de Mercado Pago.",
  },
  {
    name: "Crypto",
    nameDisplay: "Criptomonedas",
    icon: <BitcoinEllipseIcon />,
    description:
      "Paga utilizando criptomonedas para transacciones rápidas y seguras en todo el mundo.",
    additionalInfo:
      "Aprovecha la seguridad y rapidez de las criptomonedas para tus pagos.",
  },
];

interface PaymentMethodsProps {
  setPaymentMethod: React.Dispatch<React.SetStateAction<string | null>>;
}

const PaymentMethods: React.FC<PaymentMethodsProps> = ({ setPaymentMethod }) => {
  const [selectedMethod, setSelectedMethod] = useState<string | null>(null);

  const handleMethodClick = (method: string, index: number) => {
    if (index >= 2) {
      const newMethod = selectedMethod === method ? null : method;
      setSelectedMethod(newMethod);
      setPaymentMethod(newMethod);
    }
  };

  return (
    <div className="my-4">
      <strong className="text-lg text-neutral-800">Método de pago</strong>

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
                "border-violet-400 border-2": selectedMethod === method.name,
                "opacity-50 cursor-not-allowed": index < 2,
              }
            )}
          >
            <div className="w-full flex justify-between gap-2">
              <div className="flex flex-col gap-2">
                <div className="flex flex-row space-x-2">
                  <span className="text-2xl text-[#a482fb]">{method.icon}</span>
                  <strong className="text-sm text-neutral-800">
                    {method.nameDisplay}
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
  );
}

export default PaymentMethods;
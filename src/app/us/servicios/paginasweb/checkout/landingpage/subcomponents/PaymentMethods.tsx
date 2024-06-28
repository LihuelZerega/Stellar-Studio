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
  nameDisplay: "Credit or Debit Card",
  icon: <CreditCardPosIcon />,
  description:
  "Pay with your credit or debit card safely and quickly.",
  additionalInfo:
  "We accept all major credit and debit cards.",
  },
  {
  name: "Cash",
  nameDisplay: "Cash",
  icon: <MoneyReceiveFlow02Icon />,
  description: "Pay in cash at our points of sale.",
  additionalInfo:
  "Visit our physical store to complete your purchase in cash.",
  },
  {
  name: "Bank Transfer",
  nameDisplay: "Bank Transfer",
  icon: <BankIcon />,
  description: "Secure and direct method to pay from your bank account.",
  additionalInfo:
  "You can transfer directly from your bank with maximum security.",
  },
  {
  name: "PayPal",
  nameDisplay: "PayPal",
  icon: <PaypalIcon />,
  description:
  "Valid only for Spain, Germany, France, Italy and the United Kingdom.",
  additionalInfo:
  "With PayPal, you can pay securely without sharing your financial information.",
  },
  {
  name: "Mercadopago",
  nameDisplay: "Mercado Pago",
  icon: <SiMercadopago />,
  description:
  "Valid only for Argentina, Brazil, Chile, Peru, Colombia and Mexico.",
  additionalInfo:
  "Enjoy multiple payment and financing options through Mercado Pago.",
  },
  {
  name: "Crypto",
  nameDisplay: "Cryptocurrencies",
  icon: <BitcoinEllipseIcon />,
  description:
  "Pay using cryptocurrencies for fast and secure transactions around the world.",
  additionalInfo:
  "Take advantage of the security and speed of cryptocurrencies for your payments.",
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
      <strong className="text-lg text-neutral-800">Payment method</strong>

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
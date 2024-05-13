"use client";
import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Anvil from "@/images/TrustedBy/useanvil.png";
import Easy from "@/images/TrustedBy/easy.png";
import JotForm from "@/images/TrustedBy/jotform.png";
import Ledger from "@/images/TrustedBy/ledger-logo.png";
import Nezus from "@/images/TrustedBy/nezuslogo.png";

import AnvilGray from "@/images/TrustedBy/useanvilGray.png";
import EasyGray from "@/images/TrustedBy/easyGray.png";
import JotFormGray from "@/images/TrustedBy/jotformGray.png";
import LedgerGray from "@/images/TrustedBy/ledger-logoGray.png";
import NezusGray from "@/images/TrustedBy/nezuslogoGray.png";

const logos = [
  { id: 1, src: AnvilGray, alt: "Anvil" },
  { id: 2, src: EasyGray, alt: "Easy" },
  { id: 3, src: JotFormGray, alt: "JotForm" },
  { id: 4, src: LedgerGray, alt: "Ledger" },
  { id: 5, src: NezusGray, alt: "Nezus" },
];

export default function StatsEs() {

  const settingsDesktop = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 10000,
    autoplaySpeed: 10000,
    cssEase: "linear",
  };

  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-12">
      {/* <h2 className="text-center text-3xl font-bold leading-tight text-[#a482fb] sm:text-3xl">
            Contamos con la confiaza de mas de <br />
            200 clientes de rápido crecimiento
          </h2> */}
      <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5 lg:hidden">
        <Image
          className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
          src={AnvilGray}
          alt="Anvil"
          width={158}
          height={48}
        />
        <Image
          className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
          src={EasyGray}
          alt="Easy"
          width={158}
          height={48}
        />
        <Image
          className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
          src={JotFormGray}
          alt="JotForm"
          width={158}
          height={48}
        />
        <Image
          className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
          src={LedgerGray}
          alt="Ledger"
          width={158}
          height={48}
        />
        <Image
          className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
          src={NezusGray}
          alt="Nezus"
          width={158}
          height={48}
        />
      </div>

      <div className="hidden lg:block px-6 lg:px-8">
        <div className="relative w-full mx-auto overflow-hidden">
          <Slider {...settingsDesktop}>
            {logos.map((image) => (
              <div key={image.id}>
                <div className="">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={400}
                    height={300}
                    className="col-span-2 max-h-8 w-full object-contain lg:col-span-1 hover:scale-105 duration-300 hover:opacity-80"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

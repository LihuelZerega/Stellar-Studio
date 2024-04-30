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

const logos = [
  { id: 1, src: Anvil, alt: "Anvil" },
  { id: 2, src: Easy, alt: "Easy" },
  { id: 3, src: JotForm, alt: "JotForm" },
  { id: 4, src: Ledger, alt: "Ledger" },
  { id: 5, src: Nezus, alt: "Nezus" },
];

export default function StatsEs() {
  const settingsMobile = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 4000,
    cssEase: "linear",
  };

  const settingsDesktop = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 4000,
    cssEase: "linear",
  };

  return (
    <div className="py-12">
      <div className="">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* <h2 className="text-center text-3xl font-bold leading-tight text-[#a482fb] sm:text-3xl">
            Contamos con la confiaza de mas de <br />
            200 clientes de rápido crecimiento
          </h2> */}
          <div className="block lg:hidden max-w-7xl py-16 md:my-20 px-6 lg:px-8 shadow-sm">
            <div className="relative w-full max-w-lg mx-auto overflow-hidden">
              <Slider {...settingsMobile}>
                {logos.map((image) => (
                  <div key={image.id}>
                    <div className="flex gap-x-8 items-center justify-center">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={400}
                        height={300}
                        className="col-span-2 max-h-14 w-full object-contain lg:col-span-1 hover:scale-105 duration-300 hover:opacity-80"
                      />
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>

          <div className="hidden lg:block py-16 px-6 lg:px-8 shadow-sm">
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
                        className="col-span-2 max-h-16 w-full object-contain lg:col-span-1 hover:scale-105 duration-300 hover:opacity-80"
                      />
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

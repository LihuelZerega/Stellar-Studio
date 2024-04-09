"use client";
import React, { useEffect } from "react";
import NavBarEs from "@/components/NavBars/NavBarEs";
import FooterEs from "@/components/LandingPageComponents/Footers/FooterEs";

function Page() {
  const changePageTitle = () => {
    document.title = "Stellar Studio | Compañia";
  };

  useEffect(() => {
    changePageTitle();
  }, []);

  return (
    <div
      className="bg-cover bg-center bg-[#272526]"
      style={{
        backgroundImage:
          'url("https://res.cloudinary.com/dszjgdktf/image/upload/v1712251098/Stellar%20Studio/BackgroundServicesImage_hpumui.png")',
      }}
    >
      <NavBarEs />
      <h1>Compania</h1>
      <h1 id="sobrenosotros">Sobre Stellar Studio</h1>
      <h1 id="tecnologia">Nuesrta Tecnologia</h1>
      <h1 id="contacto">Contactanos</h1>
      <FooterEs />
    </div>
  );
}

export default Page;

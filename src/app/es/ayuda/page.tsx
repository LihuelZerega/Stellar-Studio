"use client";
import React, { useEffect } from "react";
import NavBarEs from "@/components/NavBars/NavBarEs";
import FooterEs from "@/components/LandingPageComponents/Footers/FooterEs";

function Page() {
  const changePageTitle = () => {
    document.title = "Stellar Studio | Ayuda";
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
      <h1>Ayuda</h1>
      <FooterEs />
    </div>
  );
}

export default Page;

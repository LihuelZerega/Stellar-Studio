"use client";
import React, { useEffect, useState } from "react";
import LoadingPage from "@/ui/LoadingPage";
import NavBarEs from "@/components/NavBars/NavBarEs";
import FooterEs from "@/components/LandingPageComponents/Footers/FooterEs";
import HeroSectionHelp from "@/components/HelpComponents/Es/HeroSectionHelp";
import HelpSteps from "@/components/HelpComponents/Es/HelpSteps";
import ContactCompania from "@/components/CompaniaComponents/Es/ContactCompania";

function Page() {
  const [isLoading, setIsLoading] = useState(true);
  const changePageTitle = () => {
    document.title = "Stellar Studio | Ayuda";
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
        <div
          className="bg-cover bg-center bg-[#272526]"
          style={{
            backgroundImage:
              'url("https://res.cloudinary.com/dszjgdktf/image/upload/v1712251098/Stellar%20Studio/BackgroundServicesImage_hpumui.png")',
          }}
        >
          <NavBarEs />
          <HeroSectionHelp />
          <div id="pasosayuda">
            <HelpSteps />
          </div>
          <div id="contactoayuda">
            <ContactCompania />
          </div>
          <FooterEs />
        </div>
      )}
    </>
  );
}

export default Page;

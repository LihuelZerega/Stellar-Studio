"use client";
import React, { useState, useEffect } from "react";
import LoadingPage from "@/ui/LoadingPage";
import ShoppingCart from "./subcomponents/ShoppingCart";
import FooterEs from "@/components/LandingPageComponents/Footers/FooterEs";

function Page() {
  const [isLoading, setIsLoading] = useState(true);

  const changePageTitle = () => {
    document.title = "Stellar Studio | Checkout E-commerce";
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
          <ShoppingCart />
          <FooterEs />
        </div>
      )}
    </>
  );
}

export default Page;

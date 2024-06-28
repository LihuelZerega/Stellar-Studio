"use client";
import React, { useEffect, useState } from "react";
import LoadingPage from "@/ui/LoadingPage";
import NavBar from "@/app/us/home/NavBar";
import FooterEs from "@/components/LandingPageComponents/Footers/FooterEs";
import HelpSteps from "@/app/us/ayuda/subcomps/HelpSteps";
import ContactForm from "@/app/us/ayuda/subcomps/ContactForm";

function Page() {
  const [isLoading, setIsLoading] = useState(true);
  const changePageTitle = () => {
    document.title = "Stellar Studio | Términos y Condiciones de Uso";
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
          <NavBar />
          <div
            className="flex flex-col mx-auto col-span-1 overflow-x-hidden relative w-full pt-36 md:pt-44 bg-neutral-50 2xl:pt-64"
            style={{
              backgroundImage:
                'url("https://medusajs.com/_next/image/?url=%2Fimages%2Fhero-banner.png&w=3840&q=100")',
            }}
          >
            <div className="pb-24 md:pb-24">
              <div>
                <h2 className="text-center my-4 text-3xl md:text-5xl text-neutral-800 font-semibold">
                  Terms and Conditions <br /> of Use
                </h2>
                <p className=" text-center text-neutral-600">
                  Last updated on November 2, 2023
                </p>
              </div>
            </div>
          </div>
          <section className="flex flex-col mx-auto col-span-1 overflow-x-hidden relative w-full py-16 md:py-28 bg-neutral-50 2xl:py-44 border-t-1 border -neutral-200">
            <div className="flex flex-col max-w-2xl mx-auto space-y-12">
              <div>
                <h4 className="text-neutral-800 font-semibold">
                  Acceptance of Terms:
                </h4>
                <p className="text-neutral-600">
                  By accessing or using our services, you agree to be legally
                  bound by these terms and conditions. But agree to any of the
                  terms, do not use our services.
                </p>
              </div>
              <div>
                <h4 className="text-neutral-800 font-semibold">
                  Use of the Services:
                </h4>
                <p className="text-neutral-600">
                  Our services are intended solely for use personal and
                  non-commercial. You agree to use our services only for legal
                  purposes and in accordance with these terms and conditions, as
                  well as with all laws and applicable regulations.
                </p>
              </div>
              <div>
                <h4 className="text-neutral-800 font-semibold">
                  Intellectual property:
                </h4>
                <p className="text-neutral-600">
                  All intellectual property rights related to our services and
                  their content, including, but not limited to, copyrights,
                  trademarks, trade names and patents, are the property of our
                  company or its licensors.
                </p>
              </div>
              <div>
                <h4 className="text-neutral-800 font-semibold">Privacy:</h4>
                <p className="text-neutral-600">
                  We respect your privacy and protect your personal data from in
                  accordance with our privacy policy. When using our services,
                  you accept the processing of your data in accordance with said
                  policy.
                </p>
              </div>
              <div>
                <h4 className="text-neutral-800 font-semibold">
                  User Content:
                </h4>
                <p className="text-neutral-600">
                  You are responsible for all content you post or Share through
                  our services. You guarantee that has all the necessary rights
                  to publish said content and that it does not violate the
                  rights of third parties or any applicable law.
                </p>
              </div>
              <div>
                <h4 className="text-neutral-800 font-semibold">
                  Modifications:
                </h4>
                <p className="text-neutral-600">
                  We reserve the right to modify, suspend or discontinue our
                  services at any time without prior notice. Furthermore, we
                  reserve the right to modify these terms and conditions at any
                  time. The Modifications will take effect immediately after its
                  publication on this website.
                </p>
              </div>
              <div>
                <h4 className="text-neutral-800 font-semibold">
                  Limitation of Liability:
                </h4>
                <p className="text-neutral-600">
                  To the maximum extent permitted by applicable law, our company
                  and its affiliates will not be responsible for any damages
                  direct, indirect, incidental, special, consequential or
                  punitive resulting from the use or inability to use our
                  services..
                </p>
              </div>
              <div>
                <h4 className="text-neutral-800 font-semibold">
                  Applicable Law:
                </h4>
                <p className="text-neutral-600">
                  These terms and conditions shall be governed by and construed
                  in accordance in accordance with the laws of the country or
                  jurisdiction where you operate our company, without taking
                  into account its provisions on conflict of laws.
                </p>
              </div>
            </div>
          </section>
          <FooterEs />
        </div>
      )}
    </>
  );
}

export default Page;

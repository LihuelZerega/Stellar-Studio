"use client";
import React, { useEffect, useState } from "react";
import LoadingPage from "@/ui/LoadingPage";
import NavBar from "@/app/ar/home/NavBar";
import FooterEs from "@/components/LandingPageComponents/Footers/FooterEs";
import HelpSteps from "@/components/HelpComponents/Es/HelpSteps";
import ContactForm from "@/components/HelpComponents/Es/ContactForm";

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
                'url("https://res.cloudinary.com/dszjgdktf/image/upload/v1715609605/HeroBackground_cf4tpz.png")',
            }}
          >
            <div className="pb-24 md:pb-24">
              <div>
                <h2 className="text-center my-4 text-3xl md:text-5xl text-neutral-800 font-semibold">
                  Términos y Condiciones <br /> de Uso
                </h2>
                <p className=" text-center text-neutral-600">
                  Última actualización el 2 de noviembre de 2023
                </p>
              </div>
            </div>
          </div>
          <section className="flex flex-col mx-auto col-span-1 overflow-x-hidden relative w-full py-16 md:py-28 bg-neutral-50 2xl:py-44 border-t-1 border-neutral-200">
            <div className="flex flex-col max-w-2xl mx-auto space-y-12">
              <div>
                <h4 className="text-neutral-800 font-semibold">
                  Aceptación de los Términos:
                </h4>
                <p className="text-neutral-600">
                  Al acceder o utilizar nuestros servicios, usted acepta estar
                  legalmente vinculado por estos términos y condiciones. Si no
                  está de acuerdo con alguno de los términos, no utilice
                  nuestros servicios.
                </p>
              </div>
              <div>
                <h4 className="text-neutral-800 font-semibold">
                  Uso de los Servicios:
                </h4>
                <p className="text-neutral-600">
                  Nuestros servicios están destinados únicamente para uso
                  personal y no comercial. Usted acepta utilizar nuestros
                  servicios solo para fines legales y de conformidad con estos
                  términos y condiciones, así como con todas las leyes y
                  regulaciones aplicables.
                </p>
              </div>
              <div>
                <h4 className="text-neutral-800 font-semibold">
                  Propiedad Intelectual:
                </h4>
                <p className="text-neutral-600">
                  Todos los derechos de propiedad intelectual relacionados con
                  nuestros servicios y su contenido, incluidos, entre otros, los
                  derechos de autor, marcas comerciales, nombres comerciales y
                  patentes, son propiedad de nuestra empresa o de sus
                  licenciantes.
                </p>
              </div>
              <div>
                <h4 className="text-neutral-800 font-semibold">Privacidad:</h4>
                <p className="text-neutral-600">
                  Respetamos su privacidad y protegemos sus datos personales de
                  acuerdo con nuestra política de privacidad. Al utilizar
                  nuestros servicios, usted acepta el procesamiento de sus datos
                  personales de acuerdo con dicha política.
                </p>
              </div>
              <div>
                <h4 className="text-neutral-800 font-semibold">
                  Contenido del Usuario:
                </h4>
                <p className="text-neutral-600">
                  Usted es responsable de todo el contenido que publique o
                  comparta a través de nuestros servicios. Usted garantiza que
                  tiene todos los derechos necesarios para publicar dicho
                  contenido y que no viola los derechos de terceros ni ninguna
                  ley aplicable.
                </p>
              </div>
              <div>
                <h4 className="text-neutral-800 font-semibold">
                  Modificaciones:
                </h4>
                <p className="text-neutral-600">
                  Nos reservamos el derecho de modificar, suspender o
                  discontinuar nuestros servicios en cualquier momento sin
                  previo aviso. Además, nos reservamos el derecho de modificar
                  estos términos y condiciones en cualquier momento. Las
                  modificaciones entrarán en vigencia inmediatamente después de
                  su publicación en este sitio web.
                </p>
              </div>
              <div>
                <h4 className="text-neutral-800 font-semibold">
                  Limitación de Responsabilidad:
                </h4>
                <p className="text-neutral-600">
                  En la medida máxima permitida por la ley aplicable, nuestra
                  empresa y sus afiliados no serán responsables por ningún daño
                  directo, indirecto, incidental, especial, consecuente o
                  punitivo derivado del uso o la imposibilidad de utilizar
                  nuestros servicios..
                </p>
              </div>
              <div>
                <h4 className="text-neutral-800 font-semibold">
                  Ley Aplicable:
                </h4>
                <p className="text-neutral-600">
                  Estos términos y condiciones se regirán e interpretarán de
                  acuerdo con las leyes del país o jurisdicción donde opera
                  nuestra empresa, sin tener en cuenta sus disposiciones sobre
                  conflicto de leyes.
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

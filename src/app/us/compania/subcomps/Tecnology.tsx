import React from "react";
import {
  FaReact,
  FaVuejs,
  FaNodeJs,
  FaAws,
  FaGithub,
  FaGitAlt,
  FaFigma,
  FaSketch,
} from "react-icons/fa";
import {
  SiMongodb,
  SiPostgresql,
  SiGooglecloud,
  SiGoogleanalytics,
  SiGoogletagmanager,
} from "react-icons/si";

function Tecnology() {
  return (
    <div className="border-t-1 border-neutral-200 py-12 lg:py-24 bg-neutral-50">
      <div className="px-4 mx-auto max-w-5xl sm:px-6 lg:px-8">
        <section className="flex flex-col items-start justify-start w-full space-y-4 mb-12">
          <div className="">
            <strong className="text-[32px] leading-[44px] text-neutral-800">
              Tecnologia Desarrollada
            </strong>
            <div className="flex flex-col md:flex-row mt-4">
              <div className="space-y-4 md:w-2/3">
                <p className="mb-0 text-neutral-600">
                  Nos enorgullece desarrollar tecnología de vanguardia que
                  impulsa la innovación y transforma la manera en que las
                  empresas interactúan con el mundo digital. Nuestra tecnología
                  se basa en un enfoque centrado en el usuario y está diseñada
                  para ofrecer experiencias digitales excepcionales que generen
                  un impacto significativo en nuestros clientes y en sus
                  audiencias.
                </p>
                <p className="mb-0 text-neutral-600">
                  Nuestras soluciones tecnológicas abarcan una amplia gama de
                  áreas, desde el diseño web y el desarrollo de aplicaciones
                  hasta la optimización de motores de búsqueda y la analítica de
                  datos. Utilizamos las últimas herramientas y tecnologías en
                  cada etapa del proceso de desarrollo para garantizar que
                  nuestras soluciones sean ágiles, escalables y seguras.
                </p>
                <p className="mb-0 text-neutral-600">
                  La importancia de nuestra tecnología en la industria radica en
                  su capacidad para ayudar a las empresas a adaptarse y
                  prosperar en un entorno digital en constante evolución.
                  Nuestros productos y servicios permiten a las empresas
                  aprovechar al máximo las oportunidades en línea, alcanzar a
                  nuevas audiencias y diferenciarse en un mercado cada vez más
                  competitivo.
                </p>
                <p className="mb-0 text-neutral-600">
                  Además, nuestra tecnología se destaca por su enfoque en la
                  accesibilidad, la usabilidad y la inclusión, lo que garantiza
                  que nuestras soluciones sean accesibles para todos y brinden
                  experiencias digitales excepcionales sin importar el
                  dispositivo o la ubicación del usuario.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-y-16 mt-6 md:mt-0 md:w-1/3">
                <div className="flex flex-col items-center justify-center">
                  <FaReact className="text-5xl text-[#a482fb]" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <FaVuejs className="text-5xl text-[#a482fb]" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <FaNodeJs className="text-5xl text-[#a482fb]" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <SiMongodb className="text-5xl text-[#a482fb]" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <SiPostgresql className="text-5xl text-[#a482fb]" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <FaAws className="text-5xl text-[#a482fb]" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <SiGooglecloud className="text-5xl text-[#a482fb]" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <FaGithub className="text-5xl text-[#a482fb]" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <FaGitAlt className="text-5xl text-[#a482fb]" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <FaFigma className="text-5xl text-[#a482fb]" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <FaSketch className="text-5xl text-[#a482fb]" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <SiGoogleanalytics className="text-5xl text-[#a482fb]" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <SiGoogletagmanager className="text-5xl text-[#a482fb]" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Tecnology;

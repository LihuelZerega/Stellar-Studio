import React from "react";

function TestimonialEs() {
  return (
    <div>
      <section className="py-10 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-[#a482fb] sm:text-4xl lg:text-5xl">
              Con la confianza de <span className="text-white">+200</span> empresas y equipos de diseño
            </h2>
          </div>

          <div className="grid max-w-xl grid-cols-1 mx-auto mt-8 text-center lg:max-w-full sm:mt-12 lg:mt-20 lg:grid-cols-3 gap-x-6 xl:gap-x-12 gap-y-6">
            {/* Testimonio 1 */}
            <div className="overflow-hidden bg-transparent border-3 border-[#a482fb] rounded-2xl">
              <div className="px-8 py-12">
                <div className="relative w-24 h-24 mx-auto">
                  <img
                    className="relative object-cover w-24 h-24 mx-auto rounded-full"
                    src="https://imgs.search.brave.com/-_PdKf9QDIJVS1PeZagtSLvSj6n6WAl6OSxH9WsG3As/rs:fit:32:32:1/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvNzMyNWY3NGRm/NGJjMDYzY2NjZTQ1/MjIyY2I3NDU1NjYz/YTg4OGI4OGZlMjY4/YjZkNWZlYmJjMzBl/ODZlOTM3Ni93d3cu/YnJpZ2h0aWZ5Lm9y/Zy8"
                    alt=""
                  />
                  <div className="absolute top-0 right-0 flex items-center justify-center bg-[#a482fb] rounded-full w-7 h-7">
                    <svg
                      className="w-4 h-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M20.309 17.708C22.196 15.66 22.006 13.03 22 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292zm-11.007 0C11.19 15.66 10.999 13.03 10.993 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292z"></path>
                    </svg>
                  </div>
                </div>
                <blockquote className="mt-7">
                  <p className="text-lg text-white">
                    "¡Estoy impresionado con el trabajo realizado por este equipo! Su enfoque profesional y atención a los detalles son excepcionales. Recomiendo encarecidamente sus servicios."
                  </p>
                </blockquote>
                <p className="text-base font-semibold text-[#a482fb] mt-9">
                  Alejandro Gómez
                </p>
                <p className="mt-1 text-base text-gray-300">
                  CEO en Brightify Labs
                </p>
              </div>
            </div>

            {/* Testimonio 2 */}
            <div className="overflow-hidden bg-transparent border-3 border-[#a482fb] rounded-2xl">
              <div className="px-8 py-12">
                <div className="relative w-24 h-24 mx-auto">
                  <img
                    className="relative object-cover w-24 h-24 mx-auto rounded-full"
                    src="https://media.licdn.com/dms/image/C560BAQFcl6cCId4weQ/company-logo_200_200/0/1630617659369/innova_tech_solutions_logo?e=1720051200&v=beta&t=xlt1ANEZAlJyrUig-WAR0YN5MY4QIzLPBNNJ2Tzh4Kw"
                    alt=""
                  />
                  <div className="absolute top-0 right-0 flex items-center justify-center bg-[#a482fb] rounded-full w-7 h-7">
                    <svg
                      className="w-4 h-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M20.309 17.708C22.196 15.66 22.006 13.03 22 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292zm-11.007 0C11.19 15.66 10.999 13.03 10.993 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292z"></path>
                    </svg>
                  </div>
                </div>
                <blockquote className="mt-7">
                  <p className="text-lg text-white">
                    "El equipo de esta empresa superó mis expectativas. Su profesionalismo y dedicación hicieron que el proceso fuera muy fluido. Estoy encantado con los resultados."
                  </p>
                </blockquote>
                <p className="text-base font-semibold text-[#a482fb] mt-9">
                  Laura Martínez
                </p>
                <p className="mt-1 text-base text-gray-300">
                  Director de Marketing en Innovatech Solutions
                </p>
              </div>
            </div>

            {/* Testimonio 3 */}
            <div className="overflow-hidden bg-transparent border-3 border-[#a482fb] rounded-2xl">
              <div className="px-8 py-12">
                <div className="relative w-24 h-24 mx-auto">
                  <img
                    className="relative object-cover w-24 h-24 mx-auto rounded-full"
                    src="https://res.cloudinary.com/dszjgdktf/image/upload/v1712176379/Stellar%20Studio/nezuslogo_hlmsvj.png"
                    alt=""
                  />
                  <div className="absolute top-0 right-0 flex items-center justify-center bg-[#a482fb] rounded-full w-7 h-7">
                    <svg
                      className="w-4 h-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M20.309 17.708C22.196 15.66 22.006 13.03 22 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292zm-11.007 0C11.19 15.66 10.999 13.03 10.993 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292z"></path>
                    </svg>
                  </div>
                </div>
                <blockquote className="mt-7">
                  <p className="text-lg text-white">
                    "¡Increíble trabajo! Su atención al detalle y su enfoque centrado en el cliente hicieron que trabajar con ellos fuera un placer. Estoy muy satisfecho con los resultados."
                  </p>
                </blockquote>
                <p className="text-base font-semibold text-[#a482fb] mt-9">
                  Carlos Pérez
                </p>
                <p className="mt-1 text-base text-gray-300">
                  Propietario de Nexus Marketing
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TestimonialEs;
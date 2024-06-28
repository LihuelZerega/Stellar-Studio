import React from "react";

function HelpSteps() {
  return (
    <div>
      <section className="border-t-1 border-neutral-200 py-12 lg:py-24 bg-neutral-100">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          {/* <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-[#a482fb] sm:text-4xl lg:text-5xl">
              Comunicanos tu consulta, pregunta o problema.
            </h2>
            <p className="max-w-lg mx-auto mt-4 text-sm leading-relaxed text-gray-300">
              Garantizamos que todas las consultas de los clientes sean atendidas
              de manera oportuna, eficiente y con un alto nivel de servicio al
              cliente.
            </p>
          </div> */}

          <ul className="max-w-md mx-auto space-y-12">
            <li className="relative flex items-start">
              <div
                className="-ml-0.5 absolute mt-0.5 top-14 left-8 w-px border-l-4 border-dotted border-gray-300 h-full"
                aria-hidden="true"
              ></div>

              <div className="relative flex items-center justify-center flex-shrink-0 w-16 h-16 bg-white rounded-full shadow">
                <svg
                  className="w-10 h-10 text-[#a482fb]"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <div className="ml-6">
                <h3 className="text-lg font-semibold text-[#a482fb]">
                  Recepción de consultas
                </h3>
                <p className="mt-4 text-sm text-gray-600">
                  Las consultas pueden llegar a través de varios canales, como
                  teléfono, correo electrónico, chat en vivo o redes sociales.
                </p>
              </div>
            </li>

            <li className="relative flex items-start">
              <div
                className="-ml-0.5 absolute mt-0.5 top-14 left-8 w-px border-l-4 border-dotted border-gray-300 h-full"
                aria-hidden="true"
              ></div>

              <div className="relative flex items-center justify-center flex-shrink-0 w-16 h-16 bg-white rounded-full shadow">
                <svg
                  className="w-10 h-10 text-[#a482fb]"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1"
                    d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                  />
                </svg>
              </div>
              <div className="ml-6">
                <h3 className="text-lg font-semibold text-[#a482fb]">
                  Registro de la consulta
                </h3>
                <p className="mt-4 text-sm text-gray-600">
                  Nuestro equipo de atención al cliente registra los detalles
                  relevantes y se asignan los recursos necesarios para abordar
                  la consulta del cliente.
                </p>
              </div>
            </li>

            <li className="relative flex items-start">
              <div className="relative flex items-center justify-center flex-shrink-0 w-16 h-16 bg-white rounded-full shadow">
                <svg
                  className="w-10 h-10 text-[#a482fb]"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <div className="ml-6">
                <h3 className="text-lg font-semibold text-[#a482fb]">
                  Resolución de la consulta
                </h3>
                <p className="mt-4 text-base text-gray-600">
                  Una vez que se ha resuelto la consulta del cliente, nuestro
                  equipo realiza un seguimiento para asegurarse de que el
                  cliente esté satisfecho con la solución proporcionada.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default HelpSteps;

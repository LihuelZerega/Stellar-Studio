import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";

function Faq() {
  const Response2 =
    "Proporciona una navegación suave dentro de la misma página con secciones desplazables que contienen información clave y un llamado a la acción prominente. Ideal para promocionar servicios y capturar clientes sin complicaciones.";

  const Response3 =
    "Ayuda a convertir clientes potenciales mediante un diseño enfocado en la conversión, con llamados a la acción claros, formularios de contacto visibles, testimonios de clientes y elementos visuales atractivos.";

  const Response4 =
    "Ofrece un catálogo de productos con categorías, carrito de compras y proceso de pago seguro, opciones de búsqueda avanzada, y gestión de inventario. Todo esto facilita la administración de una tienda virtual y amplia el alcance del negocio.";

  const Response5 =
    "Ofrecemos funciones de seguridad avanzadas como protección DDoS, firewall de aplicaciones web y escaneo de malware. Además, utilizan almacenamiento NVMe de alto rendimiento y proporcionan ancho de banda ilimitado para asegurar tiempos de carga rápidos y una experiencia de usuario ágil y segura.";

  return (
    <div className="border-t-1 border-neutral-200 py-12 lg:py-24 bg-neutral-100">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-24">
        <section className="border-b-1 border-neutral-300 mb-3">
          <h2 className="flex flex-row items-center text-neutral-800 mb-3">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                color="#a482fb"
                fill="none"
                className="mr-2"
              >
                <path
                  d="M22 7.28336C22 9.92493 19.7611 12.0667 17 12.0667C16.6753 12.0671 16.3516 12.0371 16.0327 11.9772C15.8031 11.9341 15.6883 11.9126 15.6082 11.9248C15.5281 11.937 15.4145 11.9974 15.1874 12.1182C14.545 12.4598 13.7959 12.5805 13.0755 12.4465C13.3493 12.1097 13.5363 11.7056 13.6188 11.2724C13.6688 11.0074 13.545 10.75 13.3594 10.5616C12.5166 9.70577 12 8.55254 12 7.28336C12 4.64178 14.2388 2.5 17 2.5C19.7611 2.5 22 4.64178 22 7.28336Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linejoin="round"
                />
                <path
                  d="M15.4922 7.5H15.5003M18.4922 7.5H18.5003"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
                <path
                  d="M7.50189 21.5H4.71817C4.39488 21.5 4.07021 21.4545 3.77327 21.3269C2.80666 20.9116 2.31624 20.3632 2.08769 20.0202C1.95764 19.825 1.97617 19.5763 2.11726 19.3889C3.23716 17.9015 5.83846 17.003 7.50665 17.0029C9.17484 17.003 11.7714 17.9015 12.8913 19.3889C13.0324 19.5763 13.0509 19.825 12.9209 20.0202C12.6923 20.3632 12.2019 20.9116 11.2353 21.3269C10.9383 21.4545 10.6137 21.5 10.2904 21.5H7.50189Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10.2855 11.7888C10.2855 13.3201 9.04142 14.5614 7.50676 14.5614C5.97211 14.5614 4.72803 13.3201 4.72803 11.7888C4.72803 10.2575 5.97211 9.01611 7.50676 9.01611C9.04142 9.01611 10.2855 10.2575 10.2855 11.7888Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            Faq
          </h2>
        </section>
        <section className="grid gird-cols-1 md:grid-cols-2 mx-auto gap-x-8 mt-12">
          <div>
            <h2 className="text-center sm:text-left mb-6 sm:mb-0 text-[24px] leading-[24px] sm:text-[24px] sm:leading-[32px] xl:text-[26px] xl:leading-[36px] text-neutral-800 ">
              Preguntas frecuentes:
            </h2>
            <p className="text-center sm:text-left mb-6 sm:mb-0 text-neutral-600">
              Encontrá respuesta a las dudas comunes sobre tu pagina web.
            </p>
          </div>
          <div>
            <Accordion>
              <AccordionItem
                key="1"
                aria-label="¿En qué se diferencian los modelos de página web?"
                title="¿En qué se diferencian los modelos de página web?"
              >
                <p className="text-neutral-600">
                  <span className="font-semibold text-neutral-700 mr-1">
                    One Page:
                  </span>
                  Ideal para una presencia en línea simple, promocionar
                  servicios y capturar clientes sin necesidad de un sitio
                  complejo. Incluye secciones desplazables y un formulario de
                  contacto integrado.
                </p>

                <p className="text-neutral-600 mt-2">
                  <span className="font-semibold text-neutral-700 mr-1">
                    Landing Page:
                  </span>
                  Enfocada en la conversión, con llamados a la acción claros,
                  testimonios y elementos visuales atractivos. Ideal para captar
                  y convertir clientes potenciales.
                </p>

                <p className="text-neutral-600 mt-2">
                  <span className="font-semibold text-neutral-700 mr-1">
                    E-Commerce:
                  </span>
                  Diseñada para vender productos en línea, con catálogo de
                  productos, carrito de compras, valoraciones y gestión de
                  inventario.
                </p>
                <p className="text-neutral-600 mt-2">
                  <span className="font-semibold text-neutral-700 mr-1">
                    Página Web a Medida:
                  </span>
                  Personalizada según las necesidades del negocio, con opciones
                  como portafolios, blogs, plataformas de aprendizaje y más.
                </p>
              </AccordionItem>
              <AccordionItem
                key="2"
                aria-label="¿Qué beneficios ofrece una página One Page para una presencia en línea simple?"
                title="¿Qué beneficios ofrece una página One Page para una presencia en línea simple?"
              >
                <p className="text-neutral-600">{Response2}</p>
              </AccordionItem>
              <AccordionItem
                key="3"
                aria-label="¿Cómo ayuda una Landing Page a convertir clientes potenciales y qué elementos incluye?"
                title="¿Cómo ayuda una Landing Page a convertir clientes potenciales y qué elementos incluye?"
              >
                <p className="text-neutral-600">{Response3}</p>
                <ol className="text-neutral-600">
                  <li className="mt-2">
                    <span className="font-semibold text-neutral-700">
                      Brevedad:
                    </span>{" "}
                    Idealmente, debe tener dos o tres palabras.
                  </li>
                  <li className="mt-2">
                    <span className="font-semibold text-neutral-700">
                      Simplicidad:
                    </span>{" "}
                    Evita palabras largas o difíciles de deletrear.
                  </li>
                  <li className="mt-2">
                    <span className="font-semibold text-neutral-700">
                      Palabras clave:
                    </span>{" "}
                    Incluye una palabra clave de tu nicho, como por ejemplo,
                    buenosairescafe.com.ar si vendes café en Buenos Aires.
                  </li>
                  <li className="mt-2">
                    <span className="font-semibold text-neutral-700">
                      Evita los números:
                    </span>{" "}
                    Son difíciles de recordar y añaden complicación.
                  </li>
                  <li className="mt-2">
                    <span className="font-semibold text-neutral-700">
                      Nombre de marca:
                    </span>{" "}
                    Usa el nombre de tu marca para maximizar el reconocimiento.
                  </li>
                </ol>
              </AccordionItem>
              <AccordionItem
                key="4"
                aria-label="¿Qué ventajas y características ofrece la opción E-Commerce para vender productos en línea?"
                title="¿Qué ventajas y características ofrece la opción E-Commerce para vender productos en línea?"
              >
                <p className="text-neutral-600">{Response4}</p>
              </AccordionItem>
              <AccordionItem
                key="5"
                aria-label="¿Qué servicios de seguridad y rendimiento ofrecen para mejorar la experiencia del usuario?"
                title="¿Qué servicios de seguridad y rendimiento ofrecen para mejorar la experiencia del usuario?"
              >
                <p className="text-neutral-600">{Response5}</p>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Faq;

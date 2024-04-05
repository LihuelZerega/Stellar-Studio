import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import Link from "next/link";

function FaqEs() {
  const Response1 =
    "Tener un sitio web para tu negocio ofrece una serie de beneficios significativos, como aumentar la visibilidad de tu marca, llegar a un público más amplio, proporcionar información detallada sobre tus productos o servicios las 24 horas del día, los 7 días de la semana, establecer credibilidad en línea y facilitar la interacción con tus clientes a través de formularios de contacto, chats en vivo, etc.";
  const Response2 =
    "El servicio de diseño de landing page suele incluye la creación de una página web única y específica diseñada para convertir visitantes en clientes potenciales o clientes. Esto incluye el diseño visual de la página, la redacción de contenido persuasivo, la optimización de la experiencia del usuario, la integración de formularios de contacto o de suscripción.";
  const Response3 =
    "El tiempo necesario para crear un sitio web puede variar dependiendo de varios factores, como la complejidad del diseño, la cantidad de contenido que se necesita crear, la disponibilidad de recursos (como imágenes o textos), la colaboración entre el cliente y el diseñador, entre otros.";
  const Response4 =
    "Los planes de Landing Page y E-commerce suelen diferir en función de las características y funcionalidades que ofrecen. Mientras que un plan de Landing Page se centra en la creación de una página web única para promocionar un producto, servicio o evento específico, un plan de E-commerce está diseñado para crear una tienda en línea completa con capacidad para listar y vender múltiples productos, administrar inventarios, procesar pagos, etc.";
  const Response5 =
    "Sí, muchos proveedores de diseño web ofrecen servicios de registro de dominios y alojamiento web como parte de sus paquetes de diseño. Estos servicios suelen incluir la reserva y administración del nombre de dominio de tu sitio web por ejemplo, tudominio.com y el alojamiento del sitio en servidores web seguros y confiables para que esté accesible en línea en todo momento.";
  const Response6 =
    "La optimización del motor de búsqueda (SEO) implica una serie de técnicas y prácticas destinadas a mejorar la visibilidad y la clasificación de un sitio web en los resultados de búsqueda orgánica. Esto puede incluir la optimización del contenido del sitio para incluir palabras clave relevantes, la mejora de la estructura y la navegación del sitio, la creación de enlaces internos y externos de alta calidad, la optimización de la velocidad de carga del sitio y la creación de contenido de alta calidad y relevante para los usuarios.";

  return (
    <div>
      <section className="px-6 py-10 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-[#a482fb] sm:text-4xl lg:text-5xl">
              Preguntas Frecuentes
            </h2>
            <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-300">
              Estamos para aclarar cualquier duda que puedas tener y brindarte
              la información necesaria para que tu experiencia de compra sea
              fácil y satisfactoria.
            </p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16">
          <Accordion
            variant="bordered"
            className="transition-all duration-200 border-b border-white cursor-pointer rounded-md text-white"
          >
            <AccordionItem
              className="py-2"
              key="1"
              aria-label="¿Cuáles son los beneficios de tener un sitio web para mi negocio?"
              title={
                <h4 className="text-white">
                  ¿Cuáles son los beneficios de tener un sitio web para mi
                  negocio?
                </h4>
              }
            >
              {Response1}
            </AccordionItem>

            <AccordionItem
              className="py-2"
              key="2"
              aria-label="¿Qué incluye el servicio de diseño de landing page?"
              title={
                <h4 className="text-white">
                  ¿Qué incluye el servicio de diseño de landing page?
                </h4>
              }
            >
              {Response2}
            </AccordionItem>

            <AccordionItem
              className="py-2"
              key="3"
              aria-label="¿Cuánto tiempo se tarda en crear mi sitio web?"
              title={
                <h4 className="text-white">
                  ¿Cuánto tiempo se tarda en crear mi sitio web?
                </h4>
              }
            >
              {Response3}
            </AccordionItem>

            <AccordionItem
              className="py-2"
              key="4"
              aria-label="¿Cuáles son las diferencias entre el plan Landing Page y el plan E-commerce?"
              title={
                <h4 className="text-white">
                  ¿Cuáles son las diferencias entre el plan Landing Page y el
                  plan E-commerce?
                </h4>
              }
            >
              {Response4}
            </AccordionItem>

            <AccordionItem
              className="py-2"
              key="5"
              aria-label="¿Ofrecen servicios de dominio y alojamiento web?"
              title={
                <h4 className="text-white">
                  ¿Ofrecen servicios de dominio y alojamiento web?
                </h4>
              }
            >
              {Response5}
            </AccordionItem>

            <AccordionItem
              className="py-2"
              key="5"
              aria-label="¿Cómo se optimiza mi sitio web para los motores de búsqueda SEO?"
              title={
                <h4 className="text-white">
                  ¿Cómo se optimiza mi sitio web para los motores de búsqueda
                  SEO?
                </h4>
              }
            >
              {Response6}
            </AccordionItem>
          </Accordion>

          <div className="flex flex-col sm:flex-row items-center justify-center space-x-3 mt-9">
            <p className="text-center text-white text-base">
              ¿No encontraste la respuesta que buscas?{""}
            </p>
            <Link
              href="#"
              title=""
              className="font-medium text-[#a482fb] transition-all duration-200 hover:text-[#8e62fc] focus:text-[#8e62fc] hover:underline"
            >
              Contacta con nuestro soporte
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FaqEs;

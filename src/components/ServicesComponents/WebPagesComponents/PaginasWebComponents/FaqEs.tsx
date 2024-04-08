import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import Link from "next/link";

function FaqEs() {
  const Response1 =
    "Ofrecemos tres modelos de servicios para la creación de páginas web, que incluyen diseño web personalizado, desarrollo de sitios web responsive, integración de sistemas de gestión de contenido, optimización para motores de búsqueda (SEO), y más.";
  const Response2 =
    "Nuestro proceso de creación de páginas web comienza con una consulta inicial para comprender tus necesidades y objetivos. Luego, trabajamos en estrecha colaboración contigo para diseñar y desarrollar un sitio web que refleje tu marca y alcance tus metas. Durante todo el proceso, te mantenemos informado y solicitamos tu retroalimentación para garantizar tu satisfacción.";
  const Response3 =
    "Podemos crear diseños web personalizados que se adapten perfectamente a la identidad de tu marca y las necesidades de tu negocio. Además, ofrecemos una variedad de funcionalidades, como formularios de contacto, integración de redes sociales, galerías de imágenes, blogs, tiendas en línea, y más, para satisfacer tus requisitos específicos.";
  const Response4 =
    "Nos comprometemos a ofrecer páginas web de alta calidad que sean visualmente atractivas, funcionales y rápidas de cargar. Utilizamos las últimas tecnologías y prácticas recomendadas en diseño web y desarrollo para garantizar un rendimiento óptimo en todos los dispositivos y navegadores.";
  const Response5 =
    "Sí, ofrecemos servicios de mantenimiento y actualización de sitios web para garantizar que tu página web esté siempre actualizada, segura y funcionando correctamente. Estos servicios pueden incluir actualizaciones de contenido, seguridad, rendimiento y funcionalidades adicionales según sea necesario.";
  const Response6 =
    "¡Es fácil comenzar! Todo lo que necesitas hacer es ponerte en contacto con nosotros a través de nuestro formulario en línea, por correo electrónico o por teléfono. Nos pondremos en contacto contigo para programar una consulta inicial y discutir los detalles de tu proyecto. A partir de ahí, nos encargaremos de todo el proceso para que puedas concentrarte en hacer crecer tu negocio.";

  return (
    <div>
      <section className="px-6 py-10 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-[#a482fb] sm:text-4xl lg:text-5xl">
              Preguntas Frecuentes
            </h2>
            <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-300">
              Encontrá respuesta a las dudas comunes sobre la creación de
              páginas web.
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
                  ¿Cuáles son los servicios que ofrecen para la creación de
                  páginas web?
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
                  ¿Cómo es el proceso de creación de una página web con su
                  empresa?
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
                  ¿Qué tipo de diseño y funcionalidades pueden incluir en mi
                  página web?
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
                  ¿Cómo garantizan la calidad y el rendimiento de mi página web?
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
                  ¿Ofrecen servicios de mantenimiento y actualización de sitios
                  web?{" "}
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
                  ¿Cómo puedo comenzar el proceso de creación de mi página web
                  con su empresa?
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

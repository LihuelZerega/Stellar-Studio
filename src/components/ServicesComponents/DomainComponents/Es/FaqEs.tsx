"use client";
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import Link from "next/link";

function FaqEs() {
  const Response1 =
    "Un correo corporativo es una dirección de correo electrónico personalizada que utiliza el nombre de dominio de tu empresa. Es importante para tu negocio porque brinda una imagen más profesional, aumenta la credibilidad de tu marca y fortalece la confianza de tus clientes.";
  const Response2 =
    "Algunos de los principales beneficios de tener un correo corporativo incluyen una imagen profesional y confiable, seguridad y privacidad mejoradas, mayor control sobre la comunicación empresarial, una mejor organización de correos electrónicos y una mayor eficiencia en la comunicación interna y externa.";
  const Response3 =
    "Para obtener un correo corporativo para tu empresa, primero necesitas registrar un nombre de dominio para tu sitio web. Luego, puedes configurar cuentas de correo electrónico personalizadas utilizando el nombre de dominio de tu empresa a través de servicios de hospedaje de correo electrónico o proveedores de servicios de correo electrónico corporativo.";
  const Response4 =
    "Un correo corporativo generalmente ofrece características de seguridad avanzadas, como cifrado de datos, autenticación de dos factores, filtrado de correo no deseado, detección de virus y malware, protección contra phishing y herramientas de gestión de amenazas.";
  const Response5 =
    "La migración de correos electrónicos existentes a un correo corporativo puede variar según el proveedor de servicios de correo electrónico que elijas. Generalmente, implica exportar tus correos electrónicos actuales a archivos PST o CSV y luego importarlos a tu nuevo correo corporativo utilizando las herramientas de importación proporcionadas por el proveedor.";
  const Response6 =
    "El costo de tener un correo corporativo puede variar dependiendo del proveedor de servicios de correo electrónico y de las características incluidas en el plan que elijas. Los planes pueden variar desde opciones básicas de correo electrónico hasta suites completas de productividad empresarial que incluyen almacenamiento en la nube, herramientas de colaboración y seguridad avanzada.";

  return (
    <div>
      <section className="px-6 py-10 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-[#a482fb] sm:text-4xl lg:text-5xl">
              Preguntas Frecuentes
            </h2>
            <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-300">
              Encontrá respuesta a las dudas comunes sobre el mail con dominio
              propio
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
                  ¿Qué es un correo corporativo y por qué es importante para mi
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
                  ¿Cuáles son los beneficios de tener un correo corporativo?
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
                  ¿Cómo puedo obtener un correo corporativo para mi empresa?
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
                  ¿Qué características de seguridad ofrece un correo
                  corporativo?
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
                  ¿Cómo puedo migrar mis correos electrónicos existentes a un
                  correo corporativo?
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
                  ¿Cuál es el costo de tener un correo corporativo y qué
                  incluye?
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

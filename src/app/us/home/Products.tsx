import React from "react";
import { Tabs } from "@medusajs/ui";
import {
  AcademicCap,
  GlobeEurope,
  ShoppingCart,
  FolderOpen,
  Gift,
  Puzzle,
  Swatch,
  Channels,
  RocketLaunch,
  Newspaper,
  CircleStack,
  Sparkles,
  CogSixTooth,
  CommandLine,
  LightBulb,
  Star,
} from "@medusajs/icons";
import { Accordion, AccordionItem } from "@nextui-org/accordion";

function Products() {
  const ecommerce1 =
    "El proceso de agregar productos al carrito y proceder al pago son simples e intuitivos, minimizando el número de clics necesarios. Implementamos medidas de seguridad robustas como SSL y proporciona diversas opciones de pago para adaptarse a las preferencias de los clientes.";
  const ecommerce2 =
    "Creamos un sistema de gestión de inventario que actualiza automáticamente las existencias a medida que se realicen ventas. Además, proporcionamos a los clientes y al equipo de administración acceso a un historial detallado de órdenes.";
  const ecommerce3 =
    "Adaptá tu tienda online a diferentes regiones ofreciendo contenido, precios y opciones de envío localizados. Vende a través de múltiples canales como marketplaces, redes sociales y tiendas físicas. Asegúrate de que la experiencia del cliente sea consistente y coordinada en todos los puntos de venta.";
  const ecommerce4 =
    "Presentá a tus clientes descripciones detalladas, imágenes de alta calidad y videos de tus productos. Además, implementamos un sistema para la venta y redención de tarjetas de regalo.";

  const landing1 =
    "Propuesta de valor visible y clara desde el primer vistazo, explicando brevemente qué ofreces, cómo resolverás el problema del visitante y por qué deberían elegir tu oferta sobre otras.";
  const landing2 =
    "Creamos un diseño limpio y profesional que dirija la atención hacia la propuesta de valor y la llamada a la acción (CTA). Usamos imágenes y gráficos de alta calidad que refuercen tu mensaje y no sobrecargues la página con elementos innecesarios.";
  const landing3 =
    "Incluimos una o varias CTAs bien visibles y claramente definidos. Asegurándonos de que el texto sea convincente y que destaque en el diseño, guiando al usuario hacia la acción deseada, como registrarse, descargar un recurso, o hacer una compra.";
  const landing4 =
    "Opcionalmente añadimos testimonios, reseñas o logotipos de clientes destacados para generar confianza y credibilidad. Las pruebas sociales son fundamentales para convencer a los visitantes de que otros ya han encontrado valor en tu oferta.";

  const onepage1 =
    "Presentamos un mensaje claro y directo, sin información superflua, con cada sección debe ser breve y enfocada en lo esencial.";
  const onepage2 =
    "Creamos un diseño limpio y profesional con un buen uso de espacios en blanco, tipografías legibles y colores coherentes con la identidad de la marca.";
  const onepage3 =
    "Organizamos el contenido de manera lógica, con encabezados y subtítulos claros. Priorizamos la información más importante al inicio para captar la atención del visitante.";
  const onepage4 =
    "Incluimos botones o enlaces claros y visibles que guíen al usuario hacia la acción deseada, como comprar un producto, suscribirse a un boletín o contactar a la empresa.";

  const amedida1 =
    "Comprendemos tus necesidades y objetivos. Realizamos un análisis detallado del público objetivo y la competencia. Definimos un plan de desarrollo que incluya el alcance del proyecto, los requisitos funcionales y no funcionales, y un cronograma detallado.";
  const amedida2 =
    "Creamos un diseño único y adaptado a la identidad de la marca. Nos aseguramos de que el diseño sea responsivo, accesible y centrado en el usuario, proporcionando una experiencia de navegación intuitiva y agradable en todos los dispositivos.";
  const amedida3 =
    "Implementamos las funcionalidades utilizando tecnologías y prácticas de codificación modernas. Realizamos pruebas exhaustivas para garantizar que la página funcione correctamente en diferentes navegadores y dispositivos, y que cumpla con los estándares de seguridad y rendimiento.";
  const amedida4 =
    "Optimizamos el rendimiento del sitio para mejorar la velocidad de carga y la experiencia del usuario. Proporcionamos un plan de mantenimiento continuo que incluya actualizaciones de software, monitoreo de seguridad, y mejoras basadas en los comentarios de los usuarios y análisis de datos.";

  return (
    <Tabs defaultValue="1">
      <div className="py-16 px-6 md:px-12 lg:px-24 bg-neutral-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between border-b-1 border-neutral-300">
            <div className="flex flex-row items-center space-x-1 pb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                color="#a482fb"
                fill="none"
              >
                <path
                  d="M4.5 10.2653V6H19.5V10.2653C19.5 13.4401 19.5 15.0275 18.5237 16.0137C17.5474 17 15.976 17 12.8333 17H11.1667C8.02397 17 6.45262 17 5.47631 16.0137C4.5 15.0275 4.5 13.4401 4.5 10.2653Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M4.5 6L5.22115 4.46154C5.78045 3.26838 6.06009 2.6718 6.62692 2.3359C7.19375 2 7.92084 2 9.375 2H14.625C16.0792 2 16.8062 2 17.3731 2.3359C17.9399 2.6718 18.2196 3.26838 18.7788 4.46154L19.5 6"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
                <path
                  d="M10.5 9H13.5"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
                <path
                  d="M12 19.5V22M12 19.5L7 19.5M12 19.5H17M7 19.5H4.5C3.11929 19.5 2 20.6193 2 22M7 19.5V22M17 19.5H19.5C20.8807 19.5 22 20.6193 22 22M17 19.5V22"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <h1 className="text-sm font-light text-neutral-600">Productos</h1>
            </div>

            <Tabs.List className="hidden lg:block pb-2">
              <Tabs.Trigger value="1" className="text-xs md:text-sm">
                E-commerce
              </Tabs.Trigger>
              <Tabs.Trigger value="2" className="text-xs md:text-sm">
                Landing Page
              </Tabs.Trigger>
              <Tabs.Trigger value="3" className="text-xs md:text-sm">
                One Page
              </Tabs.Trigger>
              <Tabs.Trigger value="4" className="text-xs md:text-sm">
                A medida
              </Tabs.Trigger>
            </Tabs.List>
          </div>

          <Tabs.List className="flex flex-col lg:hidden mt-3">
            <div>
              <Tabs.Trigger value="1" className="text-xs md:text-sm">
                E-commerce
              </Tabs.Trigger>
              <Tabs.Trigger value="2" className="text-xs md:text-sm">
                Landing Page
              </Tabs.Trigger>
              <Tabs.Trigger value="3" className="text-xs md:text-sm">
                One Page
              </Tabs.Trigger>
              <Tabs.Trigger value="4" className="text-xs md:text-sm">
                A medida
              </Tabs.Trigger>
            </div>
            <div></div>
          </Tabs.List>

          <div className="flex flex-col md:flex-row items-start justify-between md:space-x-12 pt-6 sm:pt-10 pb-12">
            <div className="w-full md:w-1/2">
              <h1 className="text-3xl text-neutral-800 font-semibold">
                En StellarStudio priorizamos la experiencia del usuario en cada
                entrega, sin importar el tamaño de la empresa.
              </h1>
            </div>
            <div className="w-full md:w-1/2 mt-4 md:mt-0">
              <Tabs.Content value="1" className="text-black">
                <Accordion variant="splitted">
                  <AccordionItem
                    key="1"
                    aria-label="Carrito de compra y Pagos"
                    title="Carrito de compra y Pagos"
                    startContent={<ShoppingCart color="#a482fb" />}
                  >
                    {ecommerce1}
                  </AccordionItem>
                  <AccordionItem
                    key="2"
                    aria-label="Inventario y Ordenes"
                    title="Inventario y Ordenes"
                    startContent={<FolderOpen color="#a482fb" />}
                  >
                    {ecommerce2}
                  </AccordionItem>
                  <AccordionItem
                    key="3"
                    aria-label="Regiones y Canales de venta"
                    title="Regiones y Canales de venta"
                    startContent={<GlobeEurope color="#a482fb" />}
                  >
                    {ecommerce3}
                  </AccordionItem>
                  <AccordionItem
                    key="4"
                    aria-label="Productos, Precios y Tarjetas de regalo"
                    title="Productos, Precios y Tarjetas de regalo"
                    startContent={<Gift color="#a482fb" />}
                  >
                    {ecommerce4}
                  </AccordionItem>
                </Accordion>
              </Tabs.Content>
              <Tabs.Content value="2" className="text-black">
                <Accordion variant="splitted">
                  <AccordionItem
                    key="1"
                    aria-label="Propuesta de Valor Clara y Atractiva"
                    title="Propuesta de Valor Clara y Atractiva"
                    startContent={<Puzzle color="#a482fb" />}
                  >
                    {landing1}
                  </AccordionItem>
                  <AccordionItem
                    key="2"
                    aria-label="Diseño Enfocado y Atractivo"
                    title="Diseño Enfocado y Atractivo"
                    startContent={<Swatch color="#a482fb" />}
                  >
                    {landing2}
                  </AccordionItem>
                  <AccordionItem
                    key="3"
                    aria-label="Llamados a la Acción Claros y Persuasivos"
                    title="Llamados a la Acción Claros y Persuasivos"
                    startContent={<RocketLaunch color="#a482fb" />}
                  >
                    {landing3}
                  </AccordionItem>
                  <AccordionItem
                    key="4"
                    aria-label="Testimonios y Pruebas Sociales"
                    title="Testimonios y Pruebas Sociales"
                    startContent={<Newspaper color="#a482fb" />}
                  >
                    {landing4}
                  </AccordionItem>
                </Accordion>
              </Tabs.Content>
              <Tabs.Content value="3" className="text-black">
                <Accordion variant="splitted">
                  <AccordionItem
                    key="1"
                    aria-label="Claridad y Concisión"
                    title="Claridad y Concisión"
                    startContent={<Sparkles color="#a482fb" />}
                  >
                    {onepage1}
                  </AccordionItem>
                  <AccordionItem
                    key="2"
                    aria-label="Diseño Visual Atractivo"
                    title="Diseño Visual Atractivo"
                    startContent={<Swatch color="#a482fb" />}
                  >
                    {onepage2}
                  </AccordionItem>
                  <AccordionItem
                    key="3"
                    aria-label="Jerarquía de la Información"
                    title="Jerarquía de la Información"
                    startContent={<CircleStack color="#a482fb" />}
                  >
                    {onepage3}
                  </AccordionItem>
                  <AccordionItem
                    key="4"
                    aria-label="Llamados a la Acción claves"
                    title="Llamados a la Acción claves"
                    startContent={<RocketLaunch color="#a482fb" />}
                  >
                    {onepage4}
                  </AccordionItem>
                </Accordion>
              </Tabs.Content>
              <Tabs.Content value="4" className="text-black">
                <Accordion variant="splitted">
                  <AccordionItem
                    key="1"
                    aria-label="Análisis y Planificación"
                    title="Análisis y Planificación"
                    startContent={<LightBulb color="#a482fb" />}
                  >
                    {amedida1}
                  </AccordionItem>
                  <AccordionItem
                    key="2"
                    aria-label="Diseño Personalizado"
                    title="Diseño Personalizado"
                    startContent={<Star color="#a482fb" />}
                  >
                    {amedida2}
                  </AccordionItem>
                  <AccordionItem
                    key="3"
                    aria-label="Desarrollo y Pruebas"
                    title="Desarrollo y Pruebas"
                    startContent={<CommandLine color="#a482fb" />}
                  >
                    {amedida3}
                  </AccordionItem>
                  <AccordionItem
                    key="4"
                    aria-label="Optimización y Mantenimiento"
                    title="Optimización y Mantenimiento"
                    startContent={<CogSixTooth color="#a482fb" />}
                  >
                    {amedida4}
                  </AccordionItem>
                </Accordion>
              </Tabs.Content>{" "}
            </div>
          </div>
        </div>
      </div>
    </Tabs>
  );
}

export default Products;

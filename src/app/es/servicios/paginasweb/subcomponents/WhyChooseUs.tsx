import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function WhyChooseUs() {
  const [ref1, inView1] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [ref2, inView2] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="border-t-1 border-neutral-200 py-12 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <section className="flex flex-col items-center justify-center w-full text-center space-y-4 mb-12">
          <div className="space-y-4">
            <strong className="mb-4 text-[32px] leading-[44px] text-neutral-800">
              ¿Por qué elegir <span className="text-[#a482fb]">Stellar Studio</span>?
            </strong>
            <p className="mb-0 text-neutral-600 md:max-w-3xl">
              Ofrecemos un servicio de creación de sitios web de alta calidad.
              En el que nuestro equipo de profesionales se encarga de todo el
              proceso de creación de tu sitio web a medida.
            </p>
          </div>
        </section>

        <motion.div
          ref={ref1}
          initial="hidden"
          animate={inView1 ? "visible" : "hidden"}
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <motion.div className="p-3 border-2 border-gray-200 rounded-2xl">
            <div className="bg-neutral-100 p-3 rounded-full w-fit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                color="#a482fb"
                fill="none"
              >
                <path
                  d="M7.49478 13.753C10.5833 10.1644 17.5788 3.15478 20.5387 3.00445C22.3699 2.82906 18.7218 9.32547 10.0785 16.4339M11.4581 10.0449L13.7157 12.3249M3 20.8546C3.70948 18.3472 3.26187 19.5794 3.50407 16.6919C3.63306 16.2644 3.89258 14.9377 5.51358 14.2765C7.35618 13.5249 8.70698 14.6611 9.05612 15.195C10.0847 16.3102 10.2039 17.6952 9.05612 19.2774C7.9083 20.8596 4.50352 21.2527 3 20.8546Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>

            <h3 className="text-neutral-700 font-semibold py-2 max-w-xs">
              Diseño personalizado en la identidad de tu marca
            </h3>
            <p className="text-neutral-500">
              En Stellar Studio, entendemos que cada negocio es único. Ofrecemos
              diseños online a medida, adaptados específicamente a tus
              necesidades y objetivos.
            </p>
          </motion.div>
          <motion.div className="p-3 border-2 border-gray-200 rounded-2xl">
            <div className="bg-neutral-100 p-3 rounded-full w-fit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                color="#a482fb"
                fill="none"
              >
                <path
                  d="M5.5 13L5.5 13.009"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M18.5 10.9922L18.5 11.0012"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M18 18.548C18 18.548 17.0738 18.548 16.5455 18.548C14.6865 18.548 12.9891 18.9166 11.697 19.524C10.4048 20.1314 8.70746 20.5 6.84848 20.5C5.81486 20.5 4.83121 20.3861 3.93939 20.1805C3.36611 20.0483 3.07946 19.9822 2.73599 19.7087C2.54009 19.5527 2.29559 19.2439 2.18823 19.0168C2 18.6188 2 18.2328 2 17.4608V6.94737C2 5.98619 3.00851 5.32602 3.93939 5.54061C4.37533 5.64111 4.919 5.80594 5.39394 5.86004"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M21.9999 17.5V6.61397C21.9999 5.12036 21.5816 4.18968 19.9999 3.8274C19.0802 3.61675 18.0658 3.5 16.9999 3.5C15.0828 3.5 13.3324 3.87764 11.9999 4.5C11.2804 4.83602 10.4235 5.32757 9.5 5.5"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M13.7678 13.768C13.3154 14.2204 12.6904 14.5002 12 14.5002C10.6193 14.5002 9.5 13.3809 9.5 12.0002C9.5 11.3098 9.77982 10.6848 10.2322 10.2324"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
                <path
                  d="M2 2L22 22"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
              </svg>
            </div>

            <h3 className="text-neutral-700 font-semibold py-2  max-w-xs">
              Sin comisiones por venta, límite de visitas, productos o ventas
            </h3>
            <p className="text-neutral-500">
              Con Stellar Studio, tu negocio crece sin restricciones. Disfruta
              de una plataforma donde no tendrás que preocuparte por comisiones
              en tus ventas ni por límites en la cantidad de visitas, productos
              o transacciones.
            </p>
          </motion.div>
          <motion.div className="p-3 border-2 border-gray-200 rounded-2xl">
            <div className="bg-neutral-100 p-3 rounded-full w-fit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                color="#a482fb"
                fill="none"
              >
                <path
                  d="M8 10.1667L12.1232 6.04344C13.2481 4.91858 13.8105 4.35614 14.4312 3.90314C15.7047 2.9737 17.1818 2.36187 18.7395 2.11858C19.4988 2 20.2942 2 21.885 2C21.9681 2 22 2.03812 22 2.11504C22 3.70584 22 4.50125 21.8814 5.26046C21.6381 6.81818 21.0263 8.29527 20.0969 9.56878C19.6439 10.1895 19.0814 10.7519 17.9566 11.8768L13.8333 16"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10.341 8.09838C8.63808 8.09838 6.49778 7.73765 4.9043 8.39769C3.73671 8.88132 2.87754 10.0012 2 10.8787L5.30597 12.2955C6.18208 12.671 5.64651 13.7766 5.50147 14.5018C5.33985 15.3099 5.34886 15.3397 5.93158 15.9224L8.07758 18.0684C8.6603 18.6511 8.69008 18.6602 9.49816 18.4985C10.2234 18.3535 11.329 17.8179 11.7044 18.694L13.1213 22C13.9988 21.1225 15.1187 20.2633 15.6023 19.0957C16.2624 17.5022 15.9016 15.3619 15.9016 13.659"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linejoin="round"
                />
                <path
                  d="M12 20L11 21"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M4 12L3 13"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15 4.08008C16.2 4.26008 17.46 4.74008 18.1614 5.46008C19.0576 6.25224 19.68 7.32008 19.92 9.00008"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="square"
                />
                <path
                  d="M17.94 6.06055L16.5 7.50055"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
              </svg>
            </div>

            <h3 className="text-neutral-700 font-semibold py-2  max-w-xs">
              Ampliación de Alcance Global
            </h3>
            <p className="text-neutral-500">
              Con una página web profesional, podrás expandir tu negocio a nivel
              global. Llegarás a nuevos mercados y clientes potenciales,
              incrementando así tus oportunidades de crecimiento.
            </p>
          </motion.div>
          <motion.div className="p-3 border-2 border-gray-200 rounded-2xl">
            <div className="bg-neutral-100 p-3 rounded-full w-fit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                color="#a482fb"
                fill="none"
              >
                <path
                  d="M8.64298 3.14559L6.93816 3.93362C4.31272 5.14719 3 5.75397 3 6.75C3 7.74603 4.31272 8.35281 6.93817 9.56638L8.64298 10.3544C10.2952 11.1181 11.1214 11.5 12 11.5C12.8786 11.5 13.7048 11.1181 15.357 10.3544L17.0618 9.56638C19.6873 8.35281 21 7.74603 21 6.75C21 5.75397 19.6873 5.14719 17.0618 3.93362L15.357 3.14559C13.7048 2.38186 12.8786 2 12 2C11.1214 2 10.2952 2.38186 8.64298 3.14559Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M20.788 11.0972C20.9293 11.2959 21 11.5031 21 11.7309C21 12.7127 19.6873 13.3109 17.0618 14.5072L15.357 15.284C13.7048 16.0368 12.8786 16.4133 12 16.4133C11.1214 16.4133 10.2952 16.0368 8.64298 15.284L6.93817 14.5072C4.31272 13.3109 3 12.7127 3 11.7309C3 11.5031 3.07067 11.2959 3.212 11.0972"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M20.3767 16.2661C20.7922 16.5971 21 16.927 21 17.3176C21 18.2995 19.6873 18.8976 17.0618 20.0939L15.357 20.8707C13.7048 21.6236 12.8786 22 12 22C11.1214 22 10.2952 21.6236 8.64298 20.8707L6.93817 20.0939C4.31272 18.8976 3 18.2995 3 17.3176C3 16.927 3.20778 16.5971 3.62334 16.2661"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>

            <h3 className="text-neutral-700 font-semibold py-2  max-w-xs">
              Gestión Simplificada de Inventario y Pedidos
            </h3>
            <p className="text-neutral-500">
              Con nuestras herramientas intuitivas, podrás controlar fácilmente
              tu stock, gestionar pedidos y mantener tu inventario al día. ¡Todo
              desde una plataforma centralizada!
            </p>
          </motion.div>
          <motion.div className="p-3 border-2 border-gray-200 rounded-2xl">
            <div className="bg-neutral-100 p-3 rounded-full w-fit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                color="#a482fb"
                fill="none"
              >
                <path
                  d="M11.5 8H20.196C20.8208 8 21.1332 8 21.3619 8.10084C22.3736 8.5469 21.9213 9.67075 21.7511 10.4784C21.7187 10.6318 21.6188 10.7251 21.5 10.8013M7.5 8H3.80397C3.17922 8 2.86684 8 2.63812 8.10084C1.6264 8.5469 2.07874 9.67075 2.24894 10.4784C2.27952 10.6235 2.37896 10.747 2.51841 10.8132C3.09673 11.0876 3.50177 11.6081 3.60807 12.2134L4.20066 15.5878C4.46138 17.0725 4.55052 19.1942 5.8516 20.2402C6.8062 21 8.18162 21 10.9325 21H12"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
                <path
                  d="M17.4992 13C16.2328 13 15.4117 13.8076 14.4405 14.102C14.0456 14.2217 13.8482 14.2815 13.7683 14.3659C13.6884 14.4502 13.665 14.5735 13.6182 14.8201C13.1174 17.4584 14.212 19.8976 16.8222 20.847C17.1027 20.949 17.2429 21 17.5006 21C17.7583 21 17.8986 20.949 18.179 20.847C20.7891 19.8976 21.8826 17.4584 21.3817 14.8201C21.3349 14.5735 21.3114 14.4502 21.2315 14.3658C21.1516 14.2814 20.9542 14.2216 20.5593 14.102C19.5878 13.8077 18.7657 13 17.4992 13Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M6.5 11L10 3M15 3L17.5 8"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
              </svg>
            </div>

            <h3 className="text-neutral-700 font-semibold py-2  max-w-xs">
              Integración de Métodos de Pago Seguros
            </h3>
            <p className="text-neutral-500">
              Tus clientes podrán pagar de manera segura y conveniente con
              opciones como Stripe, PayPal y MercadoPago. Esto no solo mejora la
              experiencia del usuario, sino que también incrementa tu tasa de
              conversión.
            </p>
          </motion.div>
          <motion.div className="p-3 border-2 border-gray-200 rounded-2xl">
            <div className="bg-neutral-100 p-3 rounded-full w-fit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                color="#a482fb"
                fill="none"
              >
                <path
                  d="M4 15.5C2.89543 15.5 2 14.6046 2 13.5C2 12.3954 2.89543 11.5 4 11.5"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M20 15.5C21.1046 15.5 22 14.6046 22 13.5C22 12.3954 21.1046 11.5 20 11.5"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7 7L7 4"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linejoin="round"
                />
                <path
                  d="M17 7L17 4"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linejoin="round"
                />
                <circle
                  cx="7"
                  cy="3"
                  r="1"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linejoin="round"
                />
                <circle
                  cx="17"
                  cy="3"
                  r="1"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linejoin="round"
                />
                <path
                  d="M13.5 7H10.5C7.67157 7 6.25736 7 5.37868 7.90898C4.5 8.81796 4.5 10.2809 4.5 13.2069C4.5 16.1329 4.5 17.5958 5.37868 18.5048C6.25736 19.4138 7.67157 19.4138 10.5 19.4138H11.5253C12.3169 19.4138 12.5962 19.5773 13.1417 20.1713C13.745 20.8283 14.6791 21.705 15.5242 21.9091C16.7254 22.1994 16.8599 21.7979 16.5919 20.6531C16.5156 20.327 16.3252 19.8056 16.526 19.5018C16.6385 19.3316 16.8259 19.2898 17.2008 19.2061C17.7922 19.074 18.2798 18.8581 18.6213 18.5048C19.5 17.5958 19.5 16.1329 19.5 13.2069C19.5 10.2809 19.5 8.81796 18.6213 7.90898C17.7426 7 16.3284 7 13.5 7Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linejoin="round"
                />
                <path
                  d="M9.5 15C10.0701 15.6072 10.9777 16 12 16C13.0223 16 13.9299 15.6072 14.5 15"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9.00896 11H9"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15.009 11H15"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>

            <h3 className="text-neutral-700 font-semibold py-2  max-w-xs">
              Implementación de Chatbots
            </h3>
            <p className="text-neutral-500">
              Opcionalmente, integramos un chatbot en tu página web que
              responderá preguntas frecuentes de tus clientes de manera
              automática, las 24 horas del día. Esto no solo mejora la
              satisfacción del cliente, sino que también te permite centrarte en
              otras áreas clave de tu negocio.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default WhyChooseUs;

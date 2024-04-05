import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function WorkProcessEs() {
  const controls1 = useAnimation();
  const { ref: ref1, inView: inView1 } = useInView();

  const controls2 = useAnimation();
  const { ref: ref2, inView: inView2 } = useInView();

  const controls3 = useAnimation();
  const { ref: ref3, inView: inView3 } = useInView();

  // Configuración de las animaciones
  const animationVariants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 20 },
  };

  return (
    <div>
      <section className="py-10 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <motion.div
            ref={ref1}
            animate={inView1 ? "visible" : "hidden"}
            initial="hidden"
            variants={animationVariants}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold leading-tight text-[#a482fb] sm:text-4xl lg:text-5xl">
              ¿Cómo funciona?
            </h2>
            <p className="max-w-xl xl:max-w-3xl mx-auto mt-4 text-base leading-relaxed text-white">
              Con nuestro proceso de trabajo estructurado y colaborativo,
              garantizamos que su sitio web se convierta en una poderosa
              herramienta para impulsar tu presencia online y el éxito de tu
              negocio.
            </p>
          </motion.div>

          <div className="relative mt-12 lg:mt-20">
            <div className="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28">
              <img
                className="w-full"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line.svg"
                alt=""
              />
            </div>

            <div className="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-3 gap-x-12">
              {/* Paso 1 */}
              <motion.div
                ref={ref1}
                animate={inView1 ? "visible" : "hidden"}
                initial="hidden"
                variants={animationVariants}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                  <span className="text-xl font-semibold text-gray-700">
                    {" "}
                    1{" "}
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-semibold leading-tight text-[#a482fb] md:mt-10">
                  Planificación, estrategia y diseño
                </h3>
                <p className="mt-4 text-base text-white">
                  Luego de la consulta inicial, nos encargamos de la
                  planificación, estrategia y diseño de su sitio web.
                </p>
              </motion.div>

              {/* Paso 2 */}
              <motion.div
                ref={ref2}
                animate={inView2 ? "visible" : "hidden"}
                initial="hidden"
                variants={animationVariants}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                  <span className="text-xl font-semibold text-gray-700">
                    {" "}
                    2{" "}
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-semibold leading-tight text-[#a482fb] md:mt-10">
                  Desarrollo, revisión y pruebas
                </h3>
                <p className="mt-4 text-base text-white">
                  Luego de la aprobación del cliente, nos encargamos del
                  desarrollo, revisión y pruebas de su sitio web.
                </p>
              </motion.div>

              {/* Paso 3 */}
              <motion.div
                ref={ref3}
                animate={inView3 ? "visible" : "hidden"}
                initial="hidden"
                variants={animationVariants}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                  <span className="text-xl font-semibold text-gray-700">
                    {" "}
                    3{" "}
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-semibold leading-tight text-[#a482fb] md:mt-10">
                  Aprobación final y lanzamiento exitoso
                </h3>
                <p className="mt-4 text-base text-white">
                  Una vez que las pruebas son exitosas, esperamos la aprobación
                  final del cliente y lanzamos la página web en producción.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default WorkProcessEs;

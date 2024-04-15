import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";

function FaqEs() {
  const Response1 =
    "Si no tienes una cuenta bancaria, aún puedes utilizar billeteras virtuales como Mercado Pago, PayPal o criptomonedas como Bitcoin, Ethereum, Tether o USDC para realizar tu compra.";
  const Response2 =
    "El tiempo de procesamiento de una transferencia bancaria puede variar según el banco emisor y receptor, pero generalmente se completa dentro de uno a tres días hábiles después de que se haya realizado la transferencia.";
  const Response3 =
    " Si encuentras algún problema al realizar un pago con Mercado Pago o PayPal, te recomendamos ponerte en contacto con su servicio de atención al cliente para recibir asistencia y resolver cualquier problema que puedas tener.";
  const Response4 =
    " Sí, puedes realizar pagos con criptomonedas desde cualquier parte del mundo siempre y cuando tengas acceso a una billetera digital y una conexión a internet. Sin embargo, es importante tener en cuenta las restricciones legales y regulatorias que pueden variar según el país.";
  const Response5 =
    " La tasa de cambio aplicada al pagar con criptomonedas puede variar según el mercado y la plataforma utilizada. Te recomendamos verificar la tasa de cambio actualizada al momento de realizar la transacción para obtener el valor más preciso.";

  return (
    <div className="max-w-5xl mx-auto">
      <section className="px-6 py-10 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl mb-12 sm:mb-20">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-[#a482fb] sm:text-4xl lg:text-6xl">
              Preguntas Frecuentes
            </h2>
            <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-300">
              Encontrá respuesta a las dudas comunes sobre metodos de pago.
            </p>
          </div>
        </div>

        <section className="py-10 sm:py-16 lg:py-12">
          <div className="max-w-7xl px-4 mx-auto sm:px-6 lg:px-8">
            <div className="flow-root">
              <div className="divide-y divide-gray--200 -my-9">
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
                        ¿Cómo puedo pagar si no tengo una cuenta bancaria?
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
                        ¿Cuánto tiempo tarda en procesarse una transferencia
                        bancaria?
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
                        ¿Qué debo hacer si tengo algún problema al realizar un
                        pago con Mercado Pago o PayPal?
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
                        ¿Puedo realizar pagos con criptomonedas desde cualquier
                        país?
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
                        ¿Cuál es la tasa de cambio que se aplica al pagar con
                        criptomonedas?
                      </h4>
                    }
                  >
                    {Response5}
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}

export default FaqEs;

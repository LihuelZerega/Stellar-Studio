import React from "react";

function Steps() {
  return (
    <div className="border-t-1 border-neutral-200 py-12 lg:py-24 bg-neutral-100">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-24">
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-y-12 sm:gap-x-12 lg:gap-y-0">

          <div>
            <div className="flex flex-row items-center space-x-3 mb-2">
              <strong className="text-7xl text-[#a482fb]">01</strong>
              <h2 className="text-2xl text-neutral-800 font-semibold">
                Elegí tu <br /> plan de correo
              </h2>
            </div>
            <div>
              <p className="text-neutral-600">
                ¿Estás iniciando una empresa? Elegí el plan que mejor se adapte
                a sus necesidades, ya sea el Plan Emprendedor o el Plan
                Corporativo.
              </p>
            </div>
          </div>

          <div>
            <div className="flex flex-row items-center space-x-3 mb-2">
              <strong className="text-7xl text-[#a482fb]">02</strong>
              <h2 className="text-2xl text-neutral-800 font-semibold">
                Asesoramiento
                <br /> personalizado
              </h2>
            </div>
            <div>
              <p className="text-neutral-600">
                Una vez seleccionado el plan, nuestro equipo se pone en
                contacto. Te guiaremos a través del proceso de compra,
                responde a sus preguntas y asegura que el plan elegido sea el
                más adecuado para sus requerimientos.
              </p>
            </div>
          </div>

          <div>
            <div className="flex flex-row items-center space-x-3 mb-2">
              <strong className="text-7xl text-[#a482fb]">03</strong>
              <h2 className="text-2xl text-neutral-800 font-semibold">
                Adquisición del <br /> Correo Profesional
              </h2>
            </div>
            <div>
              <p className="text-neutral-600">
                Después del asesoramiento, confirmación del plan y proceso de
                compra, el cliente adquiere su correo profesional asociado al
                plan seleccionado de manera inmediata.
              </p>
            </div>
          </div>

        </section>
      </div>
    </div>
  );
}

export default Steps;

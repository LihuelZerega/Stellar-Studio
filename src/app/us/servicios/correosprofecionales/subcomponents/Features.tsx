import React from "react";

function Features() {
  return (
    <div className="border-t-1 border-neutral-200 py-12 lg:py-24 bg-neutral-100">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <strong className="flex flex-row items-center text-[#a482fb]">
              Mail con dominio propio para tu negocio
            </strong>
            <p className="mt-2 text-neutral-500">
              Mejorá tu identidad online e impulsá tu email marketing,
              inspirando confianza y profesionalismo en tus clientes al usar un
              mail empresarial.
            </p>
          </div>

          <div>
            <strong className="flex flex-row items-center text-[#a482fb]">
              Emails seguros, privados y sin anuncios
            </strong>
            <p className="mt-2 text-neutral-500">
              Con los planes de correo electrónico corporativo obtenés medidas
              de seguridad superiores para proteger tus datos de terceros no
              autorizados. Nuestros servidores cuentan con protección avanzada
              para prevenir ataques de spam, malware y phishing.
            </p>
          </div>

          <div>
            <strong className="flex flex-row items-center text-[#a482fb]">
              Amplio espacio de almacenamiento
            </strong>
            <p className="mt-2 text-neutral-500">
              Nuestros servicios de email gestionado ofrecen hasta 50
              GB de almacenamiento: es muchísimo espacio para recibir y enviar
              correos electrónicos. Podés enviar 3000 emails por día y
              configurar hasta 50 reglas de reenvío automático.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Features;

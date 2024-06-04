import React from "react";

function Features() {
  return (
    <div className="border-t-1 border-neutral-200 py-12 lg:py-24 bg-neutral-100">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <section className="flex flex-col items-start justify-start w-full space-y-4 mb-12">
          <div className="space-y-4">
            <strong className="mb-4 text-[32px] leading-[44px] text-neutral-800">
              Servicio Personalizado y de Alto Rendimiento.
            </strong>
            <p className="mb-0 text-neutral-600 md:max-w-4xl">
              Ofrecemos soluciones a medida que se adaptan perfectamente a las
              necesidades de tu negocio, asegurando la máxima seguridad y
              rendimiento. Desde el diseño y desarrollo web hasta la protección
              avanzada y el almacenamiento de alto rendimiento, nuestros
              servicios garantizan una experiencia excepcional para ti y tus
              usuarios.
            </p>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="mt-6 lg:mt-10">
            <strong className="text-neutral-800">
              Diseño y desarrollo personalizado
            </strong>
            <p className="mt-2 text-neutral-500">
              Creamos sitios web personalizados que se adaptan a las necesidades
              específicas de tu negocio. Ya sea un sitio web informativo, una
              tienda en línea o una aplicación web, diseñamos y desarrollamos
              soluciones personalizadas que reflejan su marca y sus objetivos.
            </p>
          </div>

          <div className="mt-6 lg:mt-10">
            <strong className="text-neutral-800">
              Seguridad y rendimiento
            </strong>
            <p className="mt-2 text-neutral-500">
              Mantenemos su sitio web seguro con funciones de seguridad
              avanzadas, como protección DDoS y escaneo de malware. Además,
              garantizamos un alto rendimiento para que su sitio cargue
              rápidamente y ofrezca una experiencia excepcional a sus
              visitantes.
            </p>
          </div>

          <div className="mt-6 lg:mt-10">
            <strong className="text-neutral-800">
              Almacenamiento NVMe de alto rendimiento
            </strong>
            <p className="mt-2 text-neutral-500">
              Utilizamos unidades de estado sólido NVMe (Non-Volatile Memory
              Express) de alto rendimiento para almacenar sus datos y archivos.
              Esto garantiza tiempos de carga rápidos y una experiencia de
              usuario ágil.
            </p>
          </div>

          <div className="mt-6 lg:mt-10">
            <strong className="text-neutral-800">
              Ancho de banda ilimitado
            </strong>
            <p className="mt-2 text-neutral-500">
              Ofrecemos ancho de banda ilimitado para que su sitio web pueda
              manejar cualquier cantidad de tráfico sin preocuparse por las
              restricciones de datos. Esto es esencial para sitios web con picos
              de tráfico o mucho contenido multimedia.
            </p>
          </div>

          <div className="mt-6 lg:mt-10">
            <strong className="text-neutral-800">Protección DDoS</strong>
            <p className="mt-2 text-neutral-500">
              Nuestra infraestructura de servidores cuenta con protección DDoS
              estándar para detectar y mitigar ataques distribuidos de
              denegación de servicio. Esto garantiza que su sitio web permanezca
              en línea y accesible incluso en situaciones de mucho tráfico
              malicioso.
            </p>
          </div>

          <div className="mt-6 lg:mt-10">
            <strong className="text-neutral-800">
              Firewall de aplicaciones web
            </strong>
            <p className="mt-2 text-neutral-500">
              Implementamos un firewall de aplicaciones web (WAF) que monitorea
              y filtra el tráfico web entrante. Esto ayuda a bloquear amenazas
              como inyecciones SQL, ataques de fuerza bruta y otros intentos de
              explotar vulnerabilidades de seguridad en su sitio.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Features;

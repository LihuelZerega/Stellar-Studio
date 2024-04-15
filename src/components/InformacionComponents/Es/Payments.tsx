import React from "react";
import Image from "next/image";
import TetherLogo from "@/images/TetherLogo.png";
import UsdcLogo from "@/images/UsdcLogo.png";
import { IoWalletOutline } from "react-icons/io5";
import { CiBank } from "react-icons/ci";
import { SiMercadopago, SiPaypal, SiBinance, SiLetsencrypt } from "react-icons/si";
import { FaBitcoin, FaEthereum } from "react-icons/fa";

function Payments() {
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col items-center justify-center w-full max-w-7xl px-3 my-24">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-center text-xl sm:text-5xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-[#a482fb] to-[#a482fb] py-8">
            Opciones de pago
          </h1>
          <p className="text-center text-gray-200 mt-4">
            Podés adquirir nuestros servicios utilizando varios de métodos de
            pago.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 justify-center gap-x-8 xl:gap-24 px-6 mt-12">
          <section className="flex flex-col mb-6 sm:mb-0">
            <div className="flex flex-row items-center mb-4 sm:mb-8">
              <div>
                <CiBank className="text-[#a482fb] text-7xl" />
              </div>
              <div>
                <h1 className="text-xl sm:text-2xl font-bold text-white">
                  Transferencias <br className="hidden lg:block" /> Bancarias
                </h1>
              </div>
            </div>
            <div>
              <p className="text-gray-400">
                Una vez confirmada la compra, le enviamos los datos para
                completar la transferencia.
              </p>
            </div>
            <hr className="my-12 mx-24 block lg:hidden" />
          </section>

          <section className="flex flex-col mb-6 sm:mb-0 lg:border-x-1 lg:border-white lg:px-12 xl:px-16">
            <div className="flex flex-row items-center mb-4 sm:mb-8">
              <div>
                <IoWalletOutline className="text-[#a482fb] text-6xl" />
              </div>
              <div>
                <h1 className="text-xl sm:text-2xl font-bold text-white ml-2">
                  Billeteras <br className="hidden lg:block" /> Virtuales
                </h1>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col space-y-6 sm:space-y-0 lg:space-y-6">
              <div className="flex flex-col items-start">
                <div className="flex flex-row items-center space-x-2">
                  <SiMercadopago className="text-[#a482fb] text-4xl" />
                  <h1 className="text-lg font-bold text-white">Mercado Pago</h1>
                </div>
                <div>
                  <p className="text-sm text-gray-400 mt-2">
                    Valido solo para Argentina, Brasil, Chile, Peru, Colombia y
                    Mexico.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-start">
                <div className="flex flex-row items-center space-x-2">
                  <SiPaypal className="text-[#a482fb] text-4xl" />
                  <h1 className="text-lg font-bold text-white">Paypal</h1>
                </div>
                <div>
                  <p className="text-sm text-gray-400 mt-2">
                    Valido solo para Espana, Alemania, Francia, Italia y Reino
                    Unido.
                  </p>
                </div>
              </div>
            </div>
            <hr className="my-12 mx-24 block lg:hidden" />
          </section>

          <section className="flex flex-col mb-6 sm:mb-0">
            <div className="flex flex-row items-center mb-4 sm:mb-8">
              <div>
                <SiBinance className="text-[#a482fb] text-5xl" />
              </div>
              <div>
                <h1 className="text-xl sm:text-2xl font-bold text-white ml-2">
                  Criptomonedas <br className="hidden lg:block" /> (Binance)
                </h1>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-4">
              <div className="flex flex-row items-center space-x-2">
                <FaBitcoin className="text-[#a482fb] text-4xl" />
                <div className="flex flex-col">
                  <h1 className="text-lg font-bold text-white">Bitcoin</h1>
                  <h1 className="text-sm font-medium text-gray-200">(BTC)</h1>
                </div>
              </div>
              <div className="flex flex-row items-center space-x-2">
                <FaEthereum className="text-[#a482fb] text-4xl" />
                <div className="flex flex-col">
                  <h1 className="text-lg font-bold text-white">Ethereum</h1>
                  <h1 className="text-sm font-medium text-gray-200">(ETH)</h1>
                </div>
              </div>
              <div className="flex flex-row items-center space-x-2">
                <Image
                  src={TetherLogo}
                  alt="TetherLogo"
                  width={35}
                  height={35}
                />
                <div className="flex flex-col">
                  <h1 className="text-lg font-bold text-white">Tether</h1>
                  <h1 className="text-sm font-medium text-gray-200">(USDT)</h1>
                </div>
              </div>
              <div className="flex flex-row items-center space-x-2">
                <Image src={UsdcLogo} alt="UsdcLogo" width={35} height={35} />
                <div className="flex flex-col">
                  <h1 className="text-lg font-bold text-white">USDC</h1>
                  <h1 className="text-sm font-medium text-gray-200">(USDC)</h1>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="my-24">
          <h1 className="text-center text-xl sm:text-5xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-[#a482fb] to-[#a482fb] py-8">
            Garantizamos la seguridad <br /> de tus pagos{" "}
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 space-y-12 px-3 text-white">
            <div className="space-y-6">
              <div>
                <h1 className="font-bold text-[#a482fb] text-2xl mb-2">
                  Encriptacion de Datos
                </h1>
                <div className="max-w-md">
                  <p className="text-gray-200">
                    Utilizamos medios de pago que usan tecnología de
                    encriptación para proteger la información sensible de los
                    usuarios durante las transferencias. Esto asegura que los
                    datos estén protegidos mientras se transmiten a través de
                    internet.
                  </p>
                </div>
              </div>
              <div>
                <h1 className="font-bold text-[#a482fb] text-2xl mb-2">
                  Verificación de identidad
                </h1>
                <div className="max-w-md">
                  <p className="text-gray-200">
                    Antes de procesar una transferencia, Mercado Pago por
                    ejemplo, verifica la identidad de los usuarios involucrados
                    en la transacción. Esto ayuda a prevenir el fraude y
                    garantiza que las transferencias solo se realicen entre
                    partes legítimas.
                  </p>
                </div>
              </div>
              <div>
                <h1 className="font-bold text-[#a482fb] text-2xl mb-2">
                  Monitoreo de transacciones
                </h1>
                <div className="max-w-md">
                  <p className="text-gray-200">
                    Utilizamos medios de pago que realizan un monitoreo continuo
                    de todas las transacciones en busca de actividades
                    sospechosas. Esto incluye el uso de algoritmos avanzados y
                    la supervisión manual por parte de expertos en seguridad.
                  </p>
                </div>
              </div>
            </div>
            <div className="hidden lg:block">Imagen</div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 space-y-12 px-3 mt-0 lg:mt-12 text-white">
            <div className="hidden lg:block">Imagen</div>
            <div className="space-y-6">
              <div>
                <h1 className="font-bold text-[#a482fb] text-2xl mb-2">
                  Autenticación de dos factores
                </h1>
                <div className="max-w-md">
                  <p className="text-gray-200">
                    Algunas opciones de pago pueden requerir autenticación de
                    dos factores para confirmar la identidad del usuario antes
                    de procesar una transferencia. Esto agrega una capa
                    adicional de seguridad al proceso.
                  </p>
                </div>
              </div>
              <div>
                <h1 className="font-bold text-[#a482fb] text-2xl mb-2">
                  Protección contra fraudes
                </h1>
                <div className="max-w-md">
                  <p className="text-gray-200">
                    Los metodos de pago que proporcionamos cuentan con sistemas
                    de detección de fraudes que ayudan a prevenir y detectar
                    actividades fraudulentas. Estos sistemas están diseñados
                    para identificar patrones de comportamiento sospechoso y
                    tomar medidas preventivas.
                  </p>
                </div>
              </div>
              <div>
                <h1 className="font-bold text-[#a482fb] text-2xl mb-2">
                  Certificaciones de seguridad
                </h1>
                <div className="max-w-md">
                  <p className="text-gray-200">
                    Los metodos de pago que proporcionados cuentan con
                    certificaciones de seguridad reconocidas internacionalmente,
                    como PCI DSS (Payment Card Industry Data Security Standard),
                    que demuestran su compromiso con la protección de los datos
                    de los usuarios y la seguridad de las transacciones.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payments;

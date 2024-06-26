"use client";
import React, { useEffect, useState } from "react";
import Script from 'next/script'
import Image from "next/image";
import Link from "next/link";
import StellarStudioLogo from "@/images/StellarStudioLogoNegative.png";
import ArgentinaIcon from "@/images/Flags/argentina.png";
import BrasilIcon from "@/images/Flags/brasil.png";
import ColombiaIcon from "@/images/Flags/colombia.png";
import ChileIcon from "@/images/Flags/chile.png";
import MexicoIcon from "@/images/Flags/mexico.png";
import ItaliaIcon from "@/images/Flags/italia.png";
import FranciaIcon from "@/images/Flags/francia.png";
import UruguayIcon from "@/images/Flags/uruguay.png";
import AlemaniaIcon from "@/images/Flags/alemania.png";
import EEUUIcon from "@/images/Flags/estados-unidos.png";
import UnitedKingdomIcon from "@/images/Flags/reino-unido.png";
import EspanaIcon from "@/images/Flags/espana.png";
import { motion } from "framer-motion";
import LoadingPage from "@/ui/LoadingPage";

const Home: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [language, setLanguage] = useState("");

  useEffect(() => {
    const userLanguage = navigator.language.split("-")[0];
    const supportedLanguages = ["es", "en", "fr", "de", "it", "pt"];
    if (supportedLanguages.includes(userLanguage)) {
      setLanguage(userLanguage);
    } else {
      setLanguage("en");
    }
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-neutral-50 z-50">
          <LoadingPage />
        </div>
      ) : (
        <div
          className="mx-auto col-span-1 overflow-x-hidden relative w-full bg-cover bg-center animate-fadeIn"
          style={{
            backgroundImage:
              'url("https://medusajs.com/_next/image/?url=%2Fimages%2Fhero-banner.png&w=3840&q=100")',
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <Script defer src="https://umami-production-a865.up.railway.app/script.js" data-website-id="2370577d-1691-4b05-ab3b-d749a29871c6" />
          <div className="bg-transparent min-h-screen flex flex-col justify-center items-center select-none">
            <motion.div
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="mb-12 max-w-xs sm:max-w-lg"
            >
              <Image
                src={StellarStudioLogo}
                width={600}
                height={600}
                alt="Stellar Studio Logo"
              />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-lg md:text-xl font-bold text-neutral-800 mb-8"
            >
              {language === "es"
                ? "Seleccione su país"
                : language === "fr"
                ? "Choisissez votre pays"
                : language === "de"
                ? "Wählen Sie Ihr Land"
                : language === "it"
                ? "Scegli il tuo paese"
                : language === "pt"
                ? "Escolha o seu país"
                : "Choose Your Country"}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.1 }}
            >
              <section className="grid grid-cols-2 md:grid-cols-3 mx-auto items-center gap-4">
                <Link
                  href={"/ar"}
                  className="flex flex-row items-center hover:scale-105 transition-all duration-300 hover:opacity-80 cursor-pointer"
                >
                  <div>
                    <Image
                      src={ArgentinaIcon}
                      width={25}
                      height={25}
                      alt="ArgentinaIcon"
                    />
                  </div>
                  <div className="flex flex-col ml-2">
                    <h1 className="text-sm font-semibold hover:text-neutral-900 text-neutral-800">
                      Argentina
                    </h1>
                  </div>
                </Link>

                <Link
                  href={"/es"}
                  className="flex flex-row items-center hover:scale-105 transition-all duration-300 hover:opacity-80 cursor-pointer"
                >
                  <div>
                    <Image
                      src={EspanaIcon}
                      width={25}
                      height={25}
                      alt="EspanaIcon"
                    />
                  </div>
                  <div className="flex flex-col ml-2">
                    <h1 className="text-sm font-semibold hover:text-neutral-900 text-neutral-800">
                      España
                    </h1>
                  </div>
                </Link>

                <Link
                  href={"/us"}
                  className="flex flex-row items-center hover:scale-105 transition-all duration-300 hover:opacity-80 cursor-pointer"
                >
                  <div>
                    <Image
                      src={EEUUIcon}
                      width={25}
                      height={25}
                      alt="EEUUIcon"
                    />
                  </div>
                  <div className="flex flex-col ml-2">
                    <h1 className="text-sm font-semibold hover:text-neutral-900 text-neutral-800">
                      United States
                    </h1>
                  </div>
                </Link>
              </section>

              <hr className="border-neutral-800 my-6 mx-12 sm:mx-24" />

              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
                className="text-center text-lg md:text-xl font-bold text-neutral-800 mb-6"
              >
                {language === "es"
                  ? "Próximamente..."
                  : language === "fr"
                  ? "À venir..."
                  : language === "de"
                  ? "Demnächst..."
                  : language === "it"
                  ? "Prossimamente..."
                  : language === "pt"
                  ? "Em breve..."
                  : "Coming soon..."}
              </motion.h1>

              <section className="grid grid-cols-2 md:grid-cols-4 gap-y-4 gap-x-7">
                <Link
                  href="/"
                  className="flex flex-row items-center hover:scale-105 transition-all duration-300 hover:opacity-80 cursor-not-allowed"
                >
                  <div>
                    <Image
                      src={ChileIcon}
                      width={25}
                      height={25}
                      alt="ChileIcon"
                      className="opacity-40"
                    />
                  </div>
                  <div className="flex flex-col ml-2">
                    <h1 className="text-sm hover:font-medium text-neutral-400">
                      Chile
                    </h1>
                  </div>
                </Link>

                <Link
                  href="/"
                  className="flex flex-row items-center hover:scale-105 transition-all duration-300 hover:opacity-80 cursor-not-allowed"
                >
                  <div>
                    <Image
                      src={ColombiaIcon}
                      width={25}
                      height={25}
                      alt="ColombiaIcon"
                      className="opacity-40"
                    />
                  </div>
                  <div className="flex flex-col ml-2">
                    <h1 className="text-sm hover:font-medium text-neutral-400">
                      Colombia
                    </h1>
                  </div>
                </Link>

                <Link
                  href="/"
                  className="flex flex-row items-center hover:scale-105 transition-all duration-300 hover:opacity-80 cursor-not-allowed"
                >
                  <div>
                    <Image
                      src={AlemaniaIcon}
                      width={25}
                      height={25}
                      alt="AlemaniaIcon"
                      className="opacity-40"
                    />
                  </div>
                  <div className="flex flex-col ml-2">
                    <h1 className="text-sm hover:font-medium text-neutral-400">
                      Deutschland
                    </h1>
                  </div>
                </Link>

                <Link
                  href="/"
                  className="flex flex-row items-center hover:scale-105 transition-all duration-300 hover:opacity-80 cursor-not-allowed"
                >
                  <div>
                    <Image
                      src={FranciaIcon}
                      width={25}
                      height={25}
                      alt="FranciaIcon"
                      className="opacity-40"
                    />
                  </div>
                  <div className="flex flex-col ml-2">
                    <h1 className="text-sm hover:font-medium text-neutral-400">
                      France
                    </h1>
                  </div>
                </Link>

                <Link
                  href="/"
                  className="flex flex-row items-center hover:scale-105 transition-all duration-300 hover:opacity-80 cursor-not-allowed"
                >
                  <div>
                    <Image
                      src={ItaliaIcon}
                      width={25}
                      height={25}
                      alt="ItaliaIcon"
                      className="opacity-40"
                    />
                  </div>
                  <div className="flex flex-col ml-2">
                    <h1 className="text-sm hover:font-medium text-neutral-400">
                      Italia
                    </h1>
                  </div>
                </Link>

                <Link
                  href="/"
                  className="flex flex-row items-center hover:scale-105 transition-all duration-300 hover:opacity-80 cursor-not-allowed"
                >
                  <div>
                    <Image
                      src={MexicoIcon}
                      width={25}
                      height={25}
                      alt="MexicoIcon"
                      className="opacity-40"
                    />
                  </div>
                  <div className="flex flex-col ml-2">
                    <h1 className="text-sm hover:font-medium text-neutral-400">
                      Mexico
                    </h1>
                  </div>
                </Link>

                <Link
                  href="/"
                  className="flex flex-row items-center hover:scale-105 transition-all duration-300 hover:opacity-80 cursor-not-allowed"
                >
                  <div>
                    <Image
                      src={UruguayIcon}
                      width={25}
                      height={25}
                      alt="UruguayIcon"
                      className="opacity-40"
                    />
                  </div>
                  <div className="flex flex-col ml-2">
                    <h1 className="text-sm hover:font-medium text-neutral-400">
                      Uruguay
                    </h1>
                  </div>
                </Link>

                <Link
                  href="/"
                  className="flex flex-row items-center hover:scale-105 transition-all duration-300 hover:opacity-80 cursor-not-allowed"
                >
                  <div>
                    <Image
                      src={UnitedKingdomIcon}
                      width={25}
                      height={25}
                      alt="UnitedKingdomIcon"
                      className="opacity-40"
                    />
                  </div>
                  <div className="flex flex-col ml-2">
                    <h1 className="text-sm hover:font-medium text-neutral-400">
                      United Kingdom
                    </h1>
                  </div>
                </Link>
              </section>
            </motion.div>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;

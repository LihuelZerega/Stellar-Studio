"use client";
import React from "react";
import Image from "next/image";
import DiseñoyDesarrolloImage from "@/images/DiseñoyDesarrolloImage.png";
import DominiosPersonalizadosImage from "@/images/DominiosPersonalizadosImage.png";
import CorreosProfecionalesImage from "@/images/CorreoProfecionalesLandingMobile.png";
import { LockClosedIcon, ServerIcon } from "@heroicons/react/20/solid";
import {
  HiOutlineAtSymbol,
  HiOutlineChip,
  HiOutlineDatabase,
  HiOutlineLockClosed,
  HiOutlineSearchCircle,
  HiOutlineShieldCheck,
  HiOutlineSparkles,
} from "react-icons/hi";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Example() {
  const [ref1, inView1] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [ref2, inView2] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [ref3, inView3] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="relative isolate overflow-hidden bg-neutral-50 border-t px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            width="100%"
            height="100%"
            strokeWidth={0}
            fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
          />
        </svg>
      </div>

      <motion.div
        ref={ref1}
        initial="hidden"
        animate={inView1 ? "visible" : "hidden"}
        variants={itemVariants}
        className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10"
      >
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-[#a482fb]">
                Websites
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Web design and development
              </h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
                Develop your online presence with a professional website and
                modern. Get more clients and grow your business.
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-64 sm:-ml-12 md:-ml-56 2xl:-ml-56 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <Image
            className="w-[48rem] max-w-none rounded-xl sm:w-[57rem]"
            src={DiseñoyDesarrolloImage}
            alt=""
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <HiOutlineSparkles
                    className="mt-1 h-5 w-5 flex-none text-[#a482fb]"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Custom design and development
                    </strong>{" "}
                    We create custom websites that adapt to the specific needs
                    of your business. Whether it's a website informative, an
                    online store or a web application, We design and develop
                    customized solutions that They reflect your brand and your
                    goals.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <LockClosedIcon
                    className="mt-1 h-5 w-5 flex-none text-[#a482fb]"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Security and performance
                    </strong>{" "}
                    We keep your website safe with security features advanced
                    features, such as DDoS protection and malware scanning. In
                    addition, we guarantee high performance so that your site
                    charge quickly and deliver an exceptional experience to your
                    visitors.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ServerIcon
                    className="mt-1 h-5 w-5 flex-none text-[#a482fb]"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      SEO and Positioning Strategies
                    </strong>{" "}
                    We help you develop effective marketing strategies online to
                    increase the visibility of your business. Starting of SEO
                    and web positioning, we provide you with the tools to reach
                    your target audience.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        ref={ref2}
        initial="hidden"
        animate={inView2 ? "visible" : "hidden"}
        variants={itemVariants}
        className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10 py-24"
      >
        <div className="lg:col-span-2 lg:col-start-2 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-1 lg:gap-x-8 lg:px-8 2xl:pr-56">
          <div className="lg:pl-4">
            <div className="w-full">
              <p className="text-base font-semibold leading-7 text-[#a482fb]">
                Domains
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Custom domains
              </h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
                Get the perfect name for your website and email electronic.
                Protect your brand and increase your online visibility.
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-40 xl:-ml-48 2xl:ml-16 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <Image
            className="w-[36rem] max-w-none rounded-xl sm:w-[57rem]"
            src={DominiosPersonalizadosImage}
            alt=""
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-2 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-1 lg:gap-x-8 lg:px-8">
          <div className="lg:pl-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <HiOutlineChip
                    className="mt-1 h-5 w-5 flex-none text-[#a482fb]"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Popular Domains / Generacon with AI
                    </strong>{" "}
                    Secure your online presence quickly and easily. From
                    standard domain names to extensions specialized, we have the
                    perfect solution.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <HiOutlineShieldCheck
                    className="mt-1 h-5 w-5 flex-none text-[#a482fb]"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      We ensure your privacy
                    </strong>{" "}
                    Protect your personal data with Stellar Studio. Our domain
                    privacy protection service is free and will keep your
                    personal information hidden from spammers.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <HiOutlineSearchCircle
                    className="mt-1 h-5 w-5 flex-none text-[#a482fb]"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Disponibilidad
                    </strong>{" "}
                    Encontrá el dominio perfecto que esté disponible y se ajuste
                    a tus necesidades y preferencias. Con herramientas de
                    búsqueda avanzada, verificarás fácilmente la disponibilidad
                    y podrás registrar el dominio que elijas al instante.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        ref={ref3}
        initial="hidden"
        animate={inView3 ? "visible" : "hidden"}
        variants={itemVariants}
        className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10"
      >
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-[#a482fb]">
                Emails
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Professional Emails
              </h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
                Give your business a professional image with an email
                personalized. Improve communication with your clients and
                collaborators.
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-40 xl:-ml-48 2xl:ml-16 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <Image
            className="w-[48rem] max-w-none rounded-xl bg-transparent sm:w-[48rem]"
            src={CorreosProfecionalesImage}
            alt=""
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <HiOutlineDatabase
                    className="mt-1 h-5 w-5 flex-none text-[#a482fb]"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Great storage
                    </strong>{" "}
                    If you want to grow your business, you need the resources
                    suitable. Our managed email services offer up to 50 GB of
                    storage
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <HiOutlineAtSymbol
                    className="mt-1 h-5 w-5 flex-none text-[#a482fb]"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Email aliases
                    </strong>{" "}
                    Improve your online identity and boost your email marketing,
                    inspiring confidence and professionalism in your clients by
                    use a business email.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <HiOutlineLockClosed
                    className="mt-1 h-5 w-5 flex-none text-[#a482fb]"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Secure, private and without ads
                    </strong>{" "}
                    With corporate email plans you get Superior security
                    measures to protect your data from unauthorized third
                    parties.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

import React from "react";
import Image from "next/image";
import RedesingMockup from "@/images/RedesingMockup.png";
import ChatBotMockup from "@/images/ChatBotMockup.png";
import CartExperienseMockup from "@/images/CartExperienseMockup.png";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function Additionals() {
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
    <div className="border-t-1 border-neutral-200 py-12 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <section className="flex flex-col items-center justify-center w-full text-center space-y-4 mb-12">
          <div
            data-sb-field-path=".0"
            className="transition-all bg-[#a482fb] border-1 border-neutral-300 text-white h-7 px-3 text-sm leading-5 rounded-full font-medium flex gap-3 items-center"
          >
            <span>Additionals</span>
          </div>
          <div className="space-y-4">
            <strong className="mb-4 text-[32px] leading-[44px] text-neutral-800">
              Each section is unique, we create your unique website.
            </strong>
            <p className="mb-0 text-neutral-600 md:max-w-3xl">
              We work together to create a website that generates impact. In
              Stellar Studio we take care of the entire process of creating your
              new website.
            </p>
          </div>
        </section>

        <section className="flex flex-col md:flex-row items-center justify-center gap-y-8 sm:gap-y-0 gap-x-8">
          <motion.div
            ref={ref1}
            initial="hidden"
            animate={inView1 ? "visible" : "hidden"}
            variants={itemVariants}
          >
            <div className="object-cover w-full h-1/2 border-2 border-gray-200 bg-white rounded-2xl select-none">
              <Image src={RedesingMockup} width={1096} height={480} alt="" />
            </div>
            <div className="text-black mt-6 lg:mt-10">
              <strong>Update your old Website</strong>
              <p className="mt-2 text-neutral-500">
                We transform your old page into a digital experience <br />
                Impressive that attracts your customers and highlights your
                brand.
              </p>
            </div>
          </motion.div>
          <motion.div
            ref={ref2}
            initial="hidden"
            animate={inView2 ? "visible" : "hidden"}
            variants={itemVariants}
          >
            <div className="object-cover w-full h-1/2 border-2 border-gray-200 bg-white rounded-2xl select-none">
              <Image src={ChatBotMockup} width={1096} height={480} alt="" />
            </div>
            <div className="text-black mt-6 lg:mt-10">
              <div className="flex flex-row items-center space-x-2">
                <strong>ChatBot with Artificial Intelligence </strong>
              </div>
              <p className="mt-2 text-neutral-500">
                Provides fast and accurate answers to frequently asked questions
                of users in real time, improving the user experience customer.
              </p>
            </div>
          </motion.div>
        </section>
        <section className="my-12">
          <motion.div
            ref={ref3}
            initial="hidden"
            animate={inView3 ? "visible" : "hidden"}
            variants={itemVariants}
          >
            <div className="w-full h-1/2 border-2 border-gray-200 bg-white rounded-2xl select-none">
              <Image
                src={CartExperienseMockup}
                width={2272}
                height={960}
                alt=""
              />
            </div>
            <div className="text-black mt-6 lg:mt-10">
              <strong>We create unique payment experiences</strong>
              <p className="mt-2 text-neutral-500">
                Flexibility for the seller of their products and the customer.
                We create payment flows in a simple and dynamic way for your
                business.
              </p>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
}

export default Additionals;

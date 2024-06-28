import React from "react";
import { motion } from "framer-motion";

function TailoredPageCardPrice() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.9 }}
      className="overflow-hidden border-2 border-gray-200 bg-white rounded-2xl"
    >
      <div className="flex flex-col lg:flex-row p-8 xl:px-12">
        <div className="w-full lg:w-1/2">
          <h1 className="text-xl lg:text-2xl 2xl:text-3xl font-semibold text-[#a482fb]">
            Customized website
          </h1>

          <div className="h-20">
            <h1 className="text-sm mt-4 text-gray-500">
              We create unique and personalized websites that adapt to the
              specific needs of your business and reflect your brand authentic
              way.
            </h1>
          </div>

          <div className="flex flex-row items-end justify-start">
            <p className="text-3xl lg:text-4xl font-bold text-neutral-700 mt-7">
              $Budget
            </p>
            <p className="ml-2 mt-3 text-base text-gray-500">
              /One-time payment
            </p>
          </div>

          <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.01 }}
            className="w-full inline-flex items-center justify-center px-10 py-4 mt-5 text-lg rounded-md font-semibold text-white transition-all bg-[#a482fb] shadow-sm hover: bg-[#8e62fc] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a482fb]"
          >
            Ask for budget
          </motion.button>
        </div>

        <hr className="block lg:hidden my-5" />

        <div className="w-full lg:w-1/2 lg:border-l-1 lg:border-gray-200 lg:ml-8 lg:pl-8">
          <ul className="inline-flex flex-col items-start space-y-5 text-left my-2 h-56">
            <li className="inline-flex items-center space-x-2">
              <svg
                className="flex-shrink-0 w-5 h-5 text-[#a482fb]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
              <span className="text-base font-medium text-gray-600">
                {" "}
                Portfolios or Project Galleries{" "}
              </span>
            </li>

            <li className="inline-flex items-center space-x-2">
              <svg
                className="flex-shrink-0 w-5 h-5 text-[#a482fb]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
              <span className="text-base font-medium text-gray-600">
                {" "}
                Custom Blogs{" "}
              </span>
            </li>

            <li className="inline-flex items-center space-x-2">
              <svg
                className="h-5 text-[#a482fb] flex-shrink-0w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
              <span className="text-base font-medium text-gray-600">
                {" "}
                News or Magazine Websites{" "}
              </span>
            </li>

            <li className="inline-flex items-center space-x-2">
              <svg
                className="h-5 text-[#a482fb] flex-shrink-0w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
              <span className="text-base font-medium text-gray-600">
                {" "}
                Online Learning Platforms{" "}
              </span>
            </li>

            <li className="inline-flex items-center space-x-2">
              <svg
                className="flex-shrink-0 w-5 h-5 text-[#a482fb]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20twenty"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
              <span className="pb-0.5 text-base font-medium text-gray-600">
                {" "}
                Directories or Databases{" "}
              </span>
            </li>

            <li className="inline-flex items-center space-x-2">
              <svg
                className="flex-shrink-0 w-5 h-5 text-[#a482fb]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
              <span className="pb-0.5 text-base font-medium text-gray-600">
                {" "}
                Corporate Intranets{" "}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

export default TailoredPageCardPrice;

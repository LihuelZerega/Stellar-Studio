import React from "react";

function Pricing() {
  return (
    <div>
      <section className="py-10 bg-neutral-50 sm:py-16 lg:py-24 border-t-1 border border-neutral-200">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-neutral-800 sm:text-4xl lg:text-5xl">
              Pricing & Plans
            </h2>
            <p className="max-w-lg mx-auto mt-4 text-base leading-relaxed text-neutral-600">
              Know our price options and choose the one that best suits you
            </p>
          </div>

          <div className="grid max-w-3xl grid-cols-1 gap-6 mx-auto mt-8 sm:mt-16 sm:grid-cols-2">
            <div className="bg-white border-1 border-neutral-200 rounded-md">
              <div className="p-6 md:py-10 md:px-9">
                <div className="inline-block px-4 py-2 bg-neutral-100 rounded-full">
                  <h3 className="text-sm font-semibold text-neutral-900">
                    Standard
                  </h3>
                </div>
                <p className="mt-5 text-5xl font-bold text-neutral-800">Free</p>
                <p className="mt-2 text-base text-neutral-600">Per month</p>

                <ul className="flex flex-col mt-8 space-y-4">
                  <li className="inline-flex items-center space-x-2">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-green-700"
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
                    <span className="text-base font-medium text-neutral-900">
                      {" "}
                      No annual charges{" "}
                    </span>
                    <svg
                      className="w-4 h-4 ml-0.5 text-neutral-500"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </li>

                  <li className="inline-flex items-center space-x-2">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-green-700"
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
                    <span className="text-base font-medium text-neutral-900">
                      {" "}
                      No maximum limits{" "}
                    </span>
                  </li>

                  <li className="inline-flex items-center space-x-2">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-green-700"
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
                    <span className="text-base font-medium text-neutral-900">
                      {" "}
                      Insurance online payments{" "}
                    </span>
                  </li>

                  <li className="inline-flex items-center space-x-2">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-green-700"
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
                    <span className="text-base font-medium text-neutral-900">
                      {" "}
                      Access to loans{" "}
                    </span>
                  </li>
                </ul>

                <a
                  href="/examples/onepage/login"
                  title=""
                  className="inline-flex items-center justify-center w-full px-4 py-4 mt-8 md:mt-[76px] font-semibold text-white transition-all duration-200 bg-neutral-800 rounded-md hover:bg-neutral-600 focus:bg-neutral-600"
                  role="button"
                >
                  {" "}
                  Request your card{" "}
                </a>
              </div>
            </div>

            <div className="bg-white border-4 border-blue-600 rounded-md">
              <div className="p-6 md:py-10 md:px-9">
                <div className="inline-block px-4 py-2 bg-blue-100 rounded-full">
                  <h3 className="text-sm font-semibold text-blue-600">
                    Premium
                  </h3>
                </div>
                <p className="mt-5 text-5xl font-bold text-neutral-800">$9.99</p>
                <p className="mt-2 text-base text-neutral-600">Per month</p>

                <ul className="flex flex-col mt-8 space-y-4">
                  <li className="inline-flex items-center space-x-2">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-green-700"
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
                    <span className="text-base font-medium text-neutral-900">
                      {" "}
                      All of the standard plan{" "}
                    </span>
                    <svg
                      className="w-4 h-4 ml-0.5 text-neutral-500"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </li>

                  <li className="inline-flex items-center space-x-2">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-green-700"
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
                    <span className="text-base font-medium text-neutral-900">
                      {" "}
                      Priority Support{" "}
                    </span>
                  </li>

                  <li className="inline-flex items-center space-x-2">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-green-700"
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
                    <span className="text-base font-medium text-neutral-900">
                      {" "}
                      Lower interest rates in loans{" "}
                    </span>
                  </li>

                  <li className="inline-flex items-center space-x-2">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-green-700"
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
                    <span className="text-base font-medium text-neutral-900">
                      {" "}
                      Exclusive access to webinars{" "}
                    </span>
                  </li>

                  <li className="inline-flex items-center space-x-2">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-green-700"
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
                    <span className="text-base font-medium text-neutral-900">
                      {" "}
                      Additional resources{" "}
                    </span>
                  </li>
                </ul>

                <a
                  href="/examples/onepage/login"
                  title=""
                  className="inline-flex items-center justify-center w-full px-4 py-4 mt-8 font-semibold text-white transition-all duration-200 rounded-md bg-gradient-to-r from-green-600 to-blue-600 hover:opacity-80 focus:opacity-80"
                  role="button"
                >
                  {" "}
                  Get 14 Days Free Trial{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Pricing;

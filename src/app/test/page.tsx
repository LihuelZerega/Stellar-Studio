"use client";
import React from "react";
import { HeroHighlightDemo } from "@/ui/hero-highlight";

function page() {
  return (
    <>
      <section>
        <div className="relative py-12 bg-gray-900 sm:py-16 lg:py-20 xl:pt-32 xl:pb-44">
          <div className="absolute inset-0 hidden lg:block">
            <img
              className="object-cover object-right-bottom w-full h-full"
              src="https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/hero/1/background.png"
              alt=""
            />
          </div>

          <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="max-w-xl mx-auto text-center lg:max-w-md xl:max-w-lg lg:text-left lg:mx-0">
              <h1 className="text-3xl font-bold text-white sm:text-4xl xl:text-5xl xl:leading-tight">
                Elija el modelo que se adapte a tus necesidades
              </h1>
              <p className="mt-8 text-base font-normal leading-7 text-gray-400 lg:max-w-md xl:pr-0 lg:pr-16">
                Elija un modelo que incluya las mejores funciones para atraer a
                su audiencia, generar lealtad en los clientes e impulsar las
                ventas.
              </p>

              <div className="flex items-center justify-center mt-8 space-x-5 xl:mt-16 lg:justify-start">
                <a
                  href="#"
                  title=""
                  className="
                            inline-flex
                            items-center
                            justify-center
                            px-3
                            py-3
                            text-base
                            font-bold
                            leading-7
                            text-gray-900
                            transition-all
                            duration-200
                            bg-white
                            border border-transparent
                            rounded-md
                            sm:px-6
                            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-white
                            hover:bg-gray-200
                        "
                  role="button"
                >
                  Get UI Kit Now
                </a>

                <a
                  href="#"
                  title=""
                  className="
                            inline-flex
                            items-center
                            justify-center
                            px-2
                            py-3
                            text-base
                            font-bold
                            leading-7
                            text-white
                            transition-all
                            duration-200
                            bg-transparent
                            border border-transparent
                            rounded-md
                            sm:px-4
                            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-gray-700
                            hover:bg-gray-700
                        "
                  role="button"
                >
                  Check live preview
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 lg:hidden">
            <img
              className="object-cover w-full h-full"
              src="https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/hero/1/bg.png"
              alt=""
            />
          </div>
        </div>
      </section>

      <section>
        <div className="relative bg-gray-50">
          <div className="absolute bottom-0 right-0 overflow-hidden lg:inset-y-0">
            <img
              className="w-auto h-full"
              src="https://d33wubrfki0l68.cloudfront.net/1e0fc04f38f5896d10ff66824a62e466839567f8/699b5/images/hero/3/background-pattern.png"
              alt=""
            />
          </div>

          <section className="relative py-12 sm:py-16 lg:pt-20 lg:pb-36">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
              <div className="grid grid-cols-1 gap-y-8 lg:items-center lg:grid-cols-2 sm:gap-y-20 xl:grid-cols-5">
                <div className="text-center xl:col-span-2 lg:text-left md:px-16 lg:px-0">
                  <div className="max-w-sm mx-auto sm:max-w-md md:max-w-full">
                    <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl sm:leading-tight lg:text-6xl lg:leading-tight font-pj">
                      Get meaningful feedbacks on your code
                    </h1>

                    <div className="mt-8 lg:mt-12 lg:flex lg:items-center">
                      <div className="flex justify-center flex-shrink-0 -space-x-4 overflow-hidden lg:justify-start">
                        <img
                          className="inline-block rounded-full w-14 h-14 ring-2 ring-white"
                          src="https://d33wubrfki0l68.cloudfront.net/3bfa6da479d6b9188c58f2d9a8d33350290ee2ef/301f1/images/hero/3/avatar-male.png"
                          alt=""
                        />
                        <img
                          className="inline-block rounded-full w-14 h-14 ring-2 ring-white"
                          src="https://d33wubrfki0l68.cloudfront.net/b52fa09a115db3a80ceb2d52c275fadbf84cf8fc/7fd8a/images/hero/3/avatar-female-1.png"
                          alt=""
                        />
                        <img
                          className="inline-block rounded-full w-14 h-14 ring-2 ring-white"
                          src="https://d33wubrfki0l68.cloudfront.net/8a2efb13f103a5ae2909e244380d73087a9c2fc4/31ed6/images/hero/3/avatar-female-2.png"
                          alt=""
                        />
                      </div>

                      <p className="mt-4 text-lg text-gray-900 lg:mt-0 lg:ml-4 font-pj">
                        Join with{" "}
                        <span className="font-bold">4600+ Developers</span> and
                        start getting feedbacks right now
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 sm:flex sm:items-center sm:justify-center lg:justify-start sm:space-x-5 lg:mt-12">
                    <a
                      href="#"
                      title=""
                      className="inline-flex items-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 font-pj justif-center hover:bg-gray-600"
                      role="button"
                    >
                      Get feedback
                    </a>

                    <a
                      href="#"
                      title=""
                      className="inline-flex items-center px-4 py-4 mt-4 text-lg font-bold transition-all duration-200 bg-transparent border border-transparent sm:mt-0 font-pj justif-center rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 hover:bg-gray-200 focus:bg-gray-200"
                      role="button"
                    >
                      <svg
                        className="w-5 h-5 mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2.5"
                          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                        ></path>
                      </svg>
                      Download iOS App
                    </a>
                  </div>
                </div>

                <div className="xl:col-span-3">
                  <img
                    className="w-full mx-auto scale-110"
                    src="https://d33wubrfki0l68.cloudfront.net/29c501c64b21014b3f2e225abe02fe31fd8f3a5c/f866d/images/hero/3/illustration.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>

      <section>
        <div className="bg-gray-50">
          <section className="relative py-12 sm:py-16 lg:pb-40">
            <div className="absolute bottom-0 right-0 overflow-hidden">
              <img
                className="w-full h-auto origin-bottom-right transform scale-150 lg:w-auto lg:mx-auto lg:object-cover lg:scale-75"
                src="https://cdn.rareblocks.xyz/collection/clarity/images/hero/1/background-pattern.png"
                alt=""
              />
            </div>

            <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 gap-y-4 lg:items-center lg:grid-cols-2 xl:grid-cols-2">
                <div className="text-center xl:col-span-1 lg:text-left md:px-16 lg:px-0 xl:pr-20">
                  <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl sm:leading-tight lg:text-6xl lg:leading-tight font-pj">
                    An editor that helps you write clean codes.
                  </h1>
                  <p className="mt-2 text-lg text-gray-600 sm:mt-6 font-inter">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vehicula massa in enim luctus. Rutrum arcu.
                  </p>

                  <a
                    href="#"
                    title=""
                    className="inline-flex px-8 py-4 mt-8 text-lg font-bold text-white transition-all duration-200 bg-gray-900 border border-transparent rounded sm:mt-10 font-pj hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                    role="button"
                  >
                    Try our free editor
                  </a>
                </div>

                <div className="xl:col-span-1">
                  <img
                    className="w-full mx-auto"
                    src="https://cdn.rareblocks.xyz/collection/clarity/images/hero/1/illustration.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>

      <section>
        <div className="relative py-12 bg-white sm:py-16 lg:py-20">
          <div className="absolute inset-0">
            <img
              className="object-cover object-right w-full h-full lg:object-center"
              src="https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/hero/5/background.png"
              alt=""
            />
          </div>

          <div className="absolute inset-0 bg-gray-900 bg-opacity-40"></div>

          <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="max-w-lg mx-auto text-center xl:max-w-2xl">
              <h1 className="text-3xl font-bold text-white sm:text-4xl xl:text-5xl">
                Find the best office accessories in one tap
              </h1>
              <p className="max-w-lg mx-auto mt-6 text-base font-normal leading-7 text-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nunc
                nisl eu consectetur. Mi massa elementum odio eu viverra amet.
              </p>

              <form action="#" className="max-w-xl mx-auto mt-10">
                <div>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg
                        className="w-5 h-5 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                    </div>

                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="Try Desk, Chair, Webcam etc..."
                      className="block w-full py-3 pl-10 pr-4 text-base font-normal leading-7 text-gray-900 placeholder-gray-500 bg-white border border-white focus:ring-white focus:border-white focus:ring-offset-2"
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="
                                inline-flex
                                items-center
                                justify-center
                                w-full
                                px-6
                                py-4
                                text-sm
                                font-bold
                                tracking-widest
                                text-white
                                uppercase
                                transition-all
                                duration-200
                                bg-gray-800
                                border border-transparent
                                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-white
                                hover:bg-gray-700
                            "
                  >
                    Search now
                  </button>
                </div>
              </form>

              <div className="grid max-w-md grid-cols-2 mx-auto mt-8 md:mt-16 lg:mt-24 xl:mt-32 gap-x-6 grid-col-2">
                <div>
                  <p className="text-4xl font-bold text-white">38,942</p>
                  <p className="mt-2 text-sm font-medium text-gray-300">
                    Order Delivered
                  </p>
                </div>

                <div>
                  <p className="text-4xl font-bold text-white">14,344</p>
                  <p className="mt-2 text-sm font-medium text-gray-300">
                    Registered Customers
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default page;

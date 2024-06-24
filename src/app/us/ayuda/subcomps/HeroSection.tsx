import React from "react";

function Herosection() {
  return (
    <div
      className="flex flex-col mx-auto col-span-1 overflow-x-hidden relative w-full pt-36 md:pt-44 bg-neutral-50 2xl:pt-64"
      style={{
        backgroundImage:
          'url("https://medusajs.com/_next/image/?url=%2Fimages%2Fhero-banner.png&w=3840&q=100")',
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="flex flex-col items-center justify-center">
        <section className="flex flex-row items-center space-x-4">
          <div className="p-1 rounded-xl shadow-lg border-1 border-neutral-200">
            <div className="bg-gradient-to-r from-[#b5a4e1] to-[#a482fb] p-4 rounded-xl border-1 border-neutral-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                color="#ffffff"
                fill="none"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  stroke-width="1.5"
                />
                <path
                  d="M10 9C10 7.89543 10.8954 7 12 7C13.1046 7 14 7.89543 14 9C14 9.39815 13.8837 9.76913 13.6831 10.0808C13.0854 11.0097 12 11.8954 12 13V13.5"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
                <path
                  d="M11.992 17H12.001"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </section>

        <div>
          <h1 className="text-[#a482fb] text-lg md:text-xl mt-3 font-semibold tracking-wide uppercase select-none">
            AYUDA
          </h1>
        </div>
      </div>
      <div className="pb-24 md:pb-24">
        <h1 className="text-center my-4 text-[44px] leading-[56px] md:text-[56px] md:leading-[72px] text-neutral-800 ">
          Atencion al cliente
        </h1>
      </div>
    </div>
  );
}

export default Herosection;

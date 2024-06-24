import React from "react";

function Herosection() {
  return (
    <div
      className="flex flex-col mx-auto col-span-1 overflow-x-hidden relative w-full pt-36 pb-24 md:pt-44 md:pb-24 bg-neutral-50 2xl:pt-64 2xl:pb-56 animate-fadeIn"
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
                <path
                  d="M20 22.0001H6.5C5.11929 22.0001 4 20.8808 4 19.5001M4 19.5001V10.6837C4 7.69913 4 6.20682 4.75662 5.15857C5.00717 4.81144 5.31183 4.50679 5.65895 4.25623C6.70721 3.49961 8.19952 3.49961 11.1841 3.49961C12.1605 3.49961 13.3496 3.55106 14.3358 3.5644C15.235 3.57656 15.6846 3.58265 16.5222 3.43464C17.3597 3.28663 17.4492 3.2526 17.6282 3.18454C18.3982 2.89176 19.1272 2.43641 20 2V11.5001C20 13.3639 20 14.2958 19.6955 15.0309C19.2895 16.011 18.5108 16.7897 17.5307 17.1957C16.7956 17.5001 15.8638 17.5001 14 17.5001H6C4.89543 17.5001 4 18.3956 4 19.5001Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M18 17L18 22"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linejoin="round"
                />
                <path
                  d="M8 4L8 8"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </section>

        <div>
          <h1 className="text-[#a482fb] text-lg md:text-xl mt-3 font-semibold tracking-wide uppercase select-none">
            COMPAÑÍA
          </h1>
        </div>
      </div>
      <div>
        <h1 className="text-center my-4 text-[50px] leading-[64px] md:text-[56px] md:leading-[72px] text-neutral-800 ">
          Descubrí nuestra historia <br className="hidden lg:block" /> y
          compromiso
        </h1>

        <p
          className="text-center last:mb-0 mb-0 text-lg text-neutral-500 px-3"
          data-label-id="0"
        >
          Stellar Studio es el fruto de una visión audaz y una <br /> pasión por
          la tecnología y la innovación.
        </p>
      </div>
    </div>
  );
}

export default Herosection;

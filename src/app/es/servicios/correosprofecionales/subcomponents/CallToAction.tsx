import React from "react";
import Image from "next/image";

function CallToAction() {
  return (
    <div className="flex flex-col items-center justify-center border-t-1 border-neutral-200 bg-neutral-50 px-6">
      <div className="bg-white shadow-sm p-2 w-fit rounded-lg mt-12">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          color="#b285ff"
          fill="none"
        >
          <path
            d="M9.66667 7.7143V6.41327C9.66667 4.94834 10.2781 3.68557 11.179 2.62107C11.5294 2.20702 11.7046 2 12 2C12.2954 2 12.4706 2.20702 12.821 2.62107C13.7219 3.68557 14.3333 4.94834 14.3333 6.41327V7.7143C14.3333 8.78573 14.3333 9.09036 14.9807 9.559C15.4985 9.8919 16 10.2143 16 10.8598C16 11.6429 15.6667 12 14.9358 12H9.06415C8.33333 12 8 11.6429 8 10.8598C8 10.2143 8.50146 9.8919 9.01933 9.559C9.66667 9.09036 9.66667 8.78573 9.66667 7.7143Z"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linejoin="round"
          />
          <path
            d="M19.5 22C20.8807 22 22 20.8061 22 19.3333C22 17.8606 20.8807 16.6667 19.5 16.6667C19.5 15.1939 18.3807 14 17 14"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M4.5 22C3.11929 22 2 20.8061 2 19.3333C2 17.8606 3.11929 16.6667 4.5 16.6667C4.5 15.1939 5.61929 14 7 14"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M10 15V20"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
          />
          <path
            d="M14 15V17"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
          />
        </svg>
      </div>
      <div className="text-center">
        <h1 className="text-neutral-800 font-bold text-2xl pt-3">
          ¡Impulsá tu imagen ahora!
        </h1>
        <p className="py-2 text-neutral-600">
          Únase como muchas Pequeñas y Medianas empresas que <br /> han
          mejoraron su imagen profesional.
        </p>
      </div>
      <a href="#precioscorreos">
        <button className="bg-[#a482fb] hover:bg-[#9979eb] text-sm text-center my-4 py-2 px-3 rounded-md text-white">
          ¡Impulsá ahora!
        </button>
      </a>
      <div>
        <Image
          src="https://res.cloudinary.com/dszjgdktf/image/upload/v1715864616/CallToActionMockup_kdonuf.png"
          width={1000}
          height={600}
          alt="home"
          className="mt-8"
        />
      </div>
    </div>
  );
}

export default CallToAction;

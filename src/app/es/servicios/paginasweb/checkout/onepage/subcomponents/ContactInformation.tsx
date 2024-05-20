"use client";
import React from "react";

interface ContactInformationProps {
    setContactInfo: React.Dispatch<React.SetStateAction<any>>;
}

const ContactInformation: React.FC<ContactInformationProps> = ({ setContactInfo }) => {
  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setContactInfo((prev: any) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div>
      <strong className="text-lg text-neutral-800">Información contacto</strong>

      <div>
        <div className="flex flex-col md:flex-row md:items-center md:gap-x-4">
          <div>
            <strong className="block text-sm font-medium leading-6 text-neutral-800 mb-1 mt-4">
              Nombre
            </strong>
            <input
              type="text"
              name="name"
              id="name"
              autoComplete="name"
              aria-label="Name"
              className="block w-full rounded-md border-0 py-1.5 pl-2 pr-28 text-neutral-800 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-violet-400 sm:text-sm sm:leading-6"
              onChange={handleChange}
            />
          </div>
          <div>
            <strong className="block text-sm font-medium leading-6 text-neutral-800 mb-1 mt-4">
              Apellido
            </strong>
            <input
              type="text"
              name="lastname"
              id="last-name"
              autoComplete="lastname"
              aria-label="Lastname"
              className="block w-full rounded-md border-0 py-1.5 pl-2 pr-28 text-neutral-800 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-violet-400 sm:text-sm sm:leading-6"
              onChange={handleChange}
            />
          </div>
          <div>
            <strong className="block text-sm font-medium leading-6 text-neutral-800 mb-1 mt-4">
              País
            </strong>
            <div className="relative mt-0 rounded-md shadow-sm">
              <input
                type=""
                name=""
                id="country"
                className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-violet-400 sm:text-sm sm:leading-6"
              />
              <div className="absolute inset-y-0 right-0 flex items-center w-full">
                <label htmlFor="country" className="sr-only">
                  Country
                </label>
                <select
                  id="country-name"
                  name="country"
                  autoComplete="country-name"
                  aria-label="Country"
                  className="h-full rounded-md border-0 bg-transparent py-0 pl-1 pr-7 xl:pr-14 2xl:pr-36 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-violet-400 sm:text-sm"
                  onChange={handleChange}
                >
                  <option>Argentina</option>
                  <option>Brasil</option>
                  <option>España</option>
                  <option>United States</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <strong className="block text-sm font-medium leading-6 text-neutral-800 mb-1 mt-4">
            Correo Electrónico
          </strong>
          <input
            type="email"
            name="email"
            id="email"
            autoComplete="email"
            aria-label="Email"
            className="block w-full rounded-md border-0 py-1.5 pl-2 pr-7 xl:pr-14 2xl:pr-36 text-neutral-800 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-violet-400 sm:text-sm sm:leading-6"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col md:flex-row items-center md:gap-x-4">
          <div className="w-full">
            <strong className="block text-sm font-medium leading-6 text-neutral-800 mb-1 mt-4">
              Número de telefóno
            </strong>
            <input
              type="tel"
              name="phonenumber"
              id="phone-number"
              autoComplete="tel"
              aria-label="Phonenumber"
              className="block w-full rounded-md border-0 py-1.5 pl-2 pr-20 text-neutral-800 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-violet-400 sm:text-sm sm:leading-6"
              onChange={handleChange}
            />
          </div>
          <div className="w-full">
            <strong className="block text-sm font-medium leading-6 text-neutral-800 mb-1 mt-4">
              Compañía
            </strong>
            <input
              type="text"
              name="company"
              id="company"
              autoComplete="company"
              aria-label="Company"
              className="block w-full rounded-md border-0 py-1.5 pl-2 pr-7 xl:pr-14 
              2xl:pr-36 text-neutral-800 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-violet-400 sm:text-sm sm:leading-6"
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactInformation;

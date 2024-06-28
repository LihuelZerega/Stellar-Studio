"use client";
import React from "react";

interface ContactInformationProps {
  updateContactInfo: React.Dispatch<React.SetStateAction<ContactInfo>>;
}

interface ContactInfo {
  name: string;
  lastname: string;
  country: string;
  email: string;
  phonenumber: string;
  company: string;
}

const ContactInformation: React.FC<ContactInformationProps> = ({
  updateContactInfo,
}) => {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    updateContactInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div>
      <strong className="text-lg text-neutral-800">Contact information</strong>
      <div>
        <div className="flex flex-col md:flex-row md:items-center md:gap-x-4">
          <div className="w-full">
            <strong className="block text-sm font-medium leading-6 text-neutral-800 mb-1 mt-4">
              Name
            </strong>
            <input
              type="text"
              name="name"
              id="name"
              autoComplete="name"
              aria-label="Name"
              placeholder="Enter your name"
              className="block w-full rounded-md border-0 py-1.5 pl-2 xl:pr-7 text-neutral-800 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring -2 focus:ring-inset focus:ring-violet-400 sm:text-sm sm:leading-6"
              onChange={handleChange}
            />
          </div>
          <div className="w-full">
            <strong className="block text-sm font-medium leading-6 text-neutral-800 mb-1 mt-4">
              Last name
            </strong>
            <input
              type="text"
              name="lastname"
              id="last-name"
              autoComplete="lastname"
              aria-label="Lastname"
              placeholder="Enter your last name"
              className="block w-full rounded-md border-0 py-1.5 pl-2 xl:pr-7 pr-28 text-neutral-800 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-violet-400 sm:text-sm sm:leading-6"
              onChange={handleChange}
            />
          </div>
          <div className="w-full">
            <strong className="block text-sm font-medium leading-6 text-neutral-800 mb-1 mt-4">
              Country
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
                  country
                </label>
                <select
                  id="country-name"
                  name="country"
                  autoComplete="country-name"
                  aria-label="Country"
                  className="h-full rounded-md border-0 bg-transparent py-0 pl-1 pr-44 sm:pr-16 xl:pr-3 text-gray-500 focus:ring-2 focus:ring-inset focus :ring-violet-400 sm:text-sm"
                  onChange={handleChange}
                >
                  <option>Select your country</option>
                  <option>Argentina</option>
                  <option>Brazil</option>
                  <option>Spain</option>
                  <option>United States</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <strong className="block text-sm font-medium leading-6 text-neutral-800 mb-1 mt-4">
            Email
          </strong>
          <input
            type="email"
            name="email"
            id="email"
            autoComplete="email"
            aria-label="Email"
            placeholder="Enter your email"
            className="block w-full rounded-md border-0 py-1.5 pl-2 pr-7 xl:pr-14 2xl:pr-36 text-neutral-800 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-violet-400 sm:text-sm sm:leading-6"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col md:flex-row items-center md:gap-x-4">
          <div className="w-full">
            <strong className="block text-sm font-medium leading-6 text-neutral-800 mb-1 mt-4">
              Phone number
            </strong>
            <input
              type="tel"
              name="phonenumber"
              id="phone-number"
              autoComplete="tel"
              aria-label="Phonenumber"
              placeholder="Enter your phone number"
              className="block w-full rounded-md border-0 py-1.5 pl-2 pr-20 text-neutral-800 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-violet-400 sm:text-sm sm:leading-6"
              onChange={handleChange}
            />
          </div>
          <div className="w-full">
            <strong className="block text-sm font-medium leading-6 text-neutral-800 mb-1 mt-4">
              Company
            </strong>
            <input
              type="text"
              name="company"
              id="company"
              autoComplete="organization"
              aria-label="Company"
              placeholder="Enter your company"
              className="block w-full rounded-md border-0 py-1.5 pl-2 pr-20 text-neutral-800 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-violet-400 sm:text-sm sm:leading-6"
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInformation;

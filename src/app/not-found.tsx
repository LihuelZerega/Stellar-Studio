"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <main
      className="grid h-screen place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8 relative"
      style={{
        backgroundImage:
          "url('https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNTE1Z3A1MDV2aTEwenA3Y2M0bTkxd3kxeGg3ZjZvd2pmeWx6dGNlNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o7btZ3T6y3JTmjg4w/giphy.gif')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <div className="text-center relative z-10">
        <p className="text-base font-semibold text-[#a482fb]">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-300 sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-6 text-base leading-7 text-gray-100">
          The page you are looking for does not exist.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link href="/">
            <motion.button
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.05 }}
              className="rounded-md bg-[#a482fb] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#8e62fc] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a482fb]"
            >
              Return to Home page
            </motion.button>
          </Link>
        </div>
      </div>
    </main>
  );
}

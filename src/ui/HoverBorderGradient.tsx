"use client";
import React from "react";
import { HoverBorderGradient } from "../ui/hover-border-gradient";

export function HoverBorderGradientDemo() {
  return (
    <div className="m-40 flex justify-center text-center">
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="dark:bg-black bg-white text-black dark:text-white flex items-center rounded-full space-x-2"
      >
        <span>Stellar Studio 2.0</span>
      </HoverBorderGradient>
    </div>
  );
}

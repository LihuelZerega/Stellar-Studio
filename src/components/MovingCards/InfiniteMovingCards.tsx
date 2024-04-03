import React from "react";
import { motion } from "framer-motion";

interface Testimonial {
  image: string;
  alt: string;
}

interface Props {
  testimonials: Testimonial[];
}

const InfiniteMovingCards: React.FC<Props> = ({ testimonials }) => {
  const animationDuration = testimonials.length * 10;

  return (
    <div className="relative w-full h-full">
      {testimonials.map((testimonial, index) => (
        <motion.div
          key={index}
          className="absolute top-0 left-0 w-full h-full flex items-center justify-center"
          style={{ left: `${index * (100 / testimonials.length)}%` }}
          animate={{ left: `-${100}%` }}
          transition={{ duration: animationDuration, loop: Infinity, ease: "linear" }}
        >
          <img
            src={testimonial.image}
            alt={testimonial.alt}
            className="object-cover object-center h-full w-full"
          />
        </motion.div>
      ))}
    </div>
  );
};

export default InfiniteMovingCards;
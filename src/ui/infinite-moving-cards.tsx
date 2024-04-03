import React from "react";
import { motion, useAnimation } from "framer-motion";

interface Testimonial {
  image: string;
  alt: string;
}

interface CardProps {
  testimonial: Testimonial;
  direction: "left" | "right";
}

// Componente para representar cada tarjeta
const Card: React.FC<CardProps> = ({ testimonial, direction }) => {
  const controls = useAnimation();

  // Animación para mover las tarjetas
  const moveCard = async () => {
    await controls.start({ x: direction === "right" ? "100%" : "-100%" });
    controls.set({ x: direction === "right" ? "-100%" : "100%" });
    moveCard();
  };

  // Iniciar la animación al montar el componente
  React.useEffect(() => {
    moveCard();
  }, []);

  return (
    <motion.div
      className="p-4 rounded-lg border border-gray-200 shadow-md bg-white dark:bg-black"
      animate={controls}
      transition={{ duration: 10, repeat: Infinity, repeatType: "loop" }}
    >
      <img src={testimonial.image} alt={testimonial.alt} className="w-full h-auto rounded-lg" />
    </motion.div>
  );
};

interface InfiniteMovingCardsProps {
  items: Testimonial[];
  direction: "left" | "right";
}

// Componente para el movimiento infinito de las tarjetas
const InfiniteMovingCards: React.FC<InfiniteMovingCardsProps> = ({ items, direction }) => {
  return (
    <div className="flex overflow-hidden">
      {items.map((testimonial, index) => (
        <Card key={index} testimonial={testimonial} direction={direction} />
      ))}
    </div>
  );
};

export { InfiniteMovingCards };

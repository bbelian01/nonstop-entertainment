"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const images = [
  "/event1.jpeg",
  "/event2.jpeg",
  "/event3.jpeg",
  "/event4.jpeg",
  "/event5.jpeg",
  "/event6.jpeg",
];

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0,
  }),
}

export default function PhotoCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextImage = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(nextImage, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden rounded-xl shadow-2xl">
      <div className="aspect-[16/9] relative">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 100, damping: 30 },
              opacity: { duration: 0.5 },
            }}
            className="absolute inset-0"
          >
            <motion.div
              initial={{ scale: 1, filter: "grayscale(40%)" }}
              animate={{ scale: 1.08, filter: "grayscale(0%)" }}
              exit={{ scale: 1, filter: "grayscale(40%)" }}
              transition={{ duration: 5, ease: "linear" }}
              className="w-full h-full"
            >
              <Image
                src={images[currentIndex]}
                alt={`Event photo ${currentIndex + 1}`}
                fill
                className="object-cover rounded-xl shadow-2xl border-4 border-white"
                priority
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/40 via-black/10 to-transparent pointer-events-none" />
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Buttons */}
      <Button
        onClick={prevImage}
        variant="ghost"
        size="icon"
        className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white rounded-full p-1 sm:p-2 z-10 touch-manipulation"
      >
        <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
      </Button>

      <Button
        onClick={nextImage}
        variant="ghost"
        size="icon"
        className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white rounded-full p-1 sm:p-2 z-10 touch-manipulation"
      >
        <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
      </Button>

      {/* Dots */}
      <div className="flex justify-center mt-4 sm:mt-6 gap-1.5 sm:gap-2 px-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all touch-manipulation ${
              index === currentIndex ? "bg-[#E6D3B3] scale-125" : "bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Touch swipe handling */}
      <motion.div
        className="absolute inset-0 z-20"
        onPanEnd={(e, { offset, velocity }) => {
          const swipe = Math.abs(offset.x) * velocity.x;

          if (swipe < -50) {
            nextImage();
          } else if (swipe > 50) {
            prevImage();
          }
        }}
      />
    </div>
  );
}

"use client";

import { motion, Variants } from "framer-motion";
import React from "react";

const parentVariants: Variants = {
  initial: {
    opacity: 0,
    y: "50px",
  },
  animate: {
    opacity: 1,
    y: "0px",
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.25,
    },
  },
};

const itemVariants: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 1.25,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
};

const HeroIndicators: React.FC = () => {
  return (
    <motion.div
      // Add your motion properties here
      variants={parentVariants}
      initial="initial"
      animate="animate"
      className="master-container mt-4 flex w-[80vw] flex-col gap-y-4 sm:gap-y-8 md:mt-8 md:gap-y-12"
    >
      {/* 5 lines stacked from big to small */}
      {[...Array(8)].map((_, index) => (
        <motion.div
          variants={itemVariants}
          key={index}
          className="mx-auto h-[1px]  bg-white"
          style={{
            width: `${
              index === 0 ? "80%" : `${(1 / (index + 1)) * 0.95 * 100}%`
            }`,
          }}
        />
      ))}
    </motion.div>
  );
};

export default HeroIndicators;

"use client";

import { motion, Variants, useScroll, useTransform } from "framer-motion";
import React from "react";

const variants: Variants = {
  hidden: {
    x: "-10%",
  },
  visible: {
    x: "-110%",
    transition: {
      duration: 20,
      ease: "linear",
      repeat: Infinity,
      repeatType: "loop",
    },
  },
};

const ScrollingName: React.FC = () => {
  return (
    <motion.div className="absolute bottom-0 left-0 flex whitespace-nowrap text-[max(9em,15vw)] font-bold text-white">
      <motion.div
        variants={variants}
        initial="hidden"
        animate="visible"
        className="flex gap-x-1"
      >
        <span>-</span>
        <h1>Ismail Shaikhnag</h1>
      </motion.div>

      <motion.div
        variants={variants}
        initial="hidden"
        animate="visible"
        className="flex gap-x-1"
        style={{ animationDelay: "10s" }} // Start this animation halfway through the first one
      >
        <span>-</span>
        <h1>Ismail Shaikhnag</h1>
      </motion.div>
    </motion.div>
  );
};

export default ScrollingName;

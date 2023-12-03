"use client";

import { Variants, motion } from "framer-motion";

const getTextVariants = (delay: number): Variants => ({
  initial: {
    opacity: 0,
    y: "50px",
  },
  animate: {
    opacity: 1,
    y: "0px",
    transition: {
      delay: delay,
      duration: 5,
      ease: "linear",
      type: "spring",
      mass: 1,
      damping: 8,
    },
  },
});

const HeroText = () => {
  return (
    <motion.h1 className="w-full text-center text-3xl font-extrabold sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
      <motion.span
        variants={getTextVariants(1)}
        initial="initial"
        animate="animate"
        role="text"
        className={`gradient g1 animate-gradient inline-block w-max text-4xl font-extrabold sm:text-6xl md:text-7xl lg:text-8xl`}
      >
        Hobbyist
      </motion.span>{" "}
      <br />
      <motion.span
        variants={getTextVariants(1.25)}
        initial="initial"
        animate="animate"
        className="inline-block"
        role="text"
      >
        Developer &amp; Designer&#46;
      </motion.span>
    </motion.h1>
  );
};

export default HeroText;

/* 
 <motion.span
          className={`gradient g1 animate-gradient w-max`}
        >
          Hobbiest
        </motion.span>{" "}

         {heroTextArray.map((word, index) => (
          <motion.span
            key={index}
            variants={itemVariants}
            initial="initial"
            whileInView="animate"
            custom={index}
            className={`${
              index === 0
                ? `gradient g${index + 1} animate-gradient`
                : " inline-block"
            } font-bold`}
          >
            {word}&nbsp;
          </motion.span>
        ))}
*/

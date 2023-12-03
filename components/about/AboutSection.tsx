import React from "react";
import AnimatedParagraph from "./AnimatedParagraph";

const paragraph =
  "My passion for design, code, and interaction places me uniquely in the web design world. I don't just create websites; I craft impactful, immersive journeys.";

const paragraph2 =
  "In web design, I fuse design artistry, code precision, and interactive magic. I craft transformative, immersive digital journeys, elevating your online presence with impactful experiences.";

const paragraph3 =
  "Crafting immersive web experiences with a blend of design artistry, precision code, and interactive magic";

const AboutSection = () => {
  return (
    <section
      id="about"
      aria-label="about"
      className="relative flex select-none items-center justify-center overflow-hidden bg-[#000] pb-[20%]  text-white"
    >
      {/* <h2 className="master-container text-3xl font-medium md:text-5xl lg:text-6xl"> */}
      <h2 className="master-container text-3xl font-extrabold leading-[1.25em] sm:text-5xl md:text-6xl md:leading-[1.08em] lg:text-7xl xl:text-8xl">
        <AnimatedParagraph paragraph={paragraph3} />
      </h2>
    </section>
  );
};

export default AboutSection;

import React from "react";

import HeroText from "./HeroText";
import HeroIndicators from "./HeroIndicators";

const HeroSection = () => {
  return (
    <section
      className="relative flex min-h-[80vh] w-full overflow-hidden  bg-[rgb(0,0,0)] md:min-h-[90vh] lg:min-h-screen"
      style={{
        background:
          "radial-gradient(50% 50% at 50% 50%,#17003d 0%,#000000 100%)",
      }}
    >
      {/* Hero About */}
      <div className="absolute top-2/3 flex w-full flex-1 -translate-y-1/2 flex-col text-white md:top-1/2">
        <HeroText />
        <HeroIndicators />
      </div>
    </section>
  );
};

export default HeroSection;

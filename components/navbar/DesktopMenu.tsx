import React from "react";

import { IoPersonOutline as About } from "react-icons/io5";
import { LuTarget as Target, LuMail as Mail } from "react-icons/lu";
import { PiHandshake } from "react-icons/pi";
import NavLink from "./NavLink";
import FadeInContent from "../FadeInContent";

const DesktopMenu = () => {
  return (
    <ul className="hidden items-center justify-between gap-x-8 lg:flex">
      <li>
        <FadeInContent>
          <NavLink
            href="#about"
            icon={<About />}
            text="About"
            aria-label="About section"
          />
        </FadeInContent>
      </li>
      <li>
        <FadeInContent delay={0.25}>
          <NavLink
            href="#services"
            icon={<PiHandshake />}
            text="Services"
            aria-label="Services section"
          />
        </FadeInContent>
      </li>
      <li>
        <FadeInContent delay={0.5}>
          <NavLink
            href="#projects"
            icon={<Target />}
            text="Projects"
            aria-label="Projects section"
          />
        </FadeInContent>
      </li>
      <li>
        <FadeInContent delay={0.75}>
          <NavLink
            href="mailto:shaikhnagismail@gmail.com"
            icon={<Mail />}
            text="Contact"
            aria-label="Email Developer"
          />
        </FadeInContent>
      </li>
    </ul>
  );
};

export default DesktopMenu;

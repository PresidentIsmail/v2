import React from "react";
import Image from "next/image";


import FadeInContent from "../FadeInContent";
import projectsImg from "../../public/images/icons/projects.svg";

import ProjectLayout from "./ProjectLayout";

const ProjectSection: React.FC = () => {
  return (
    <section
      id="projects"
      aria-label="projects"
      className="flex flex-col gap-y-8 bg-[rgb(0,0,0)] py-[64px] text-white md:gap-y-16 lg:gap-y-24 lg:py-[72px]"
    >
      {/* Header */}
      <FadeInContent className="master-container" delay={0.25}>
        <header className="flex w-full select-none items-center justify-start gap-x-2">
          {/* icon */}
          <div className="relative h-[30px] w-[30px] md:h-[48px] md:w-[48px] lg:h-[56px] lg:w-[56px]">
            <Image src={projectsImg} alt="projects icon" fill />
          </div>

          {/* heading */}
          <h2 className="w-fit text-[calc(clamp(3.25em,7vw,8em)*0.875)] font-bold capitalize">
            projects
          </h2>
        </header>
      </FadeInContent>

      {/* Project Layout */}
      <ProjectLayout />
      
    </section>
  );
};

export default ProjectSection;

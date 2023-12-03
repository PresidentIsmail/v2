import React from "react";
import { projects, Project } from "@/constants";

import SlideInContent from "../SlideInContent";
import ProjectCard from "./ProjectCard";

interface ProjectLayoutProps {
  // Define your props here
}

const ProjectLayout: React.FC = () => {
  return (
    <div className="master-container grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 ">
      {projects.map((project: Project, index: number) => (
        <SlideInContent
          key={index}
          delay={index * 0.2}
          className={`box g${index + 1} rounded-lg p-0.5 ${
            index === 0 ? "sm:col-span-full" : "sm:col-span-1"
          }
          ${index === 3 && "sm:col-span-full lg:col-span-1"}
          ${index === 4 && "sm:col-span-full "}
          `}
        >
          <ProjectCard {...project} index={index + 1} />
        </SlideInContent>
      ))}
    </div>
  );
};

export default ProjectLayout;

"use client";

import { forwardRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { projectsData } from "../../public/Projects";
import AlertModal from "./AlertModal";

interface ProjectCardProps {}

const ProjectCard = forwardRef<HTMLDivElement, ProjectCardProps>(
  ({ ...props }, ref) => {
    const [isAlertVisible, setAlertVisible] = useState(false);

    const handleAlertClose = () => {
      setAlertVisible(false);
    };

    const ProjectCardAlertModal = () => {
      return (
        <AlertModal isVisible={isAlertVisible} onClose={handleAlertClose}>
          <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                <h3
                  className="text-base font-semibold leading-6 text-gray-900"
                  id="modal-title"
                >
                  Hold up!
                </h3>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    You are already on this site! 🤩
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AlertModal>
      );
    };

    return (
      <div
        ref={ref}
        {...props}
        className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3"
      >
        {projectsData.map((project) => {
          return (
            <div
              className="rounded-lg mb-12 flex flex-col items-center"
              key={project.id}
            >
              <Link
                href={project.link}
                target={project.target}
                onClick={() => {
                  if (project.title === "Portfolio v2") {
                    setAlertVisible(true);
                  }
                }}
              >
                <Image
                  loading="lazy"
                  src={project.image}
                  alt={project.title}
                  width="200"
                  className="rounded-md drop-shadow-2xl hover:scale-110"
                />
              </Link>
              <div className="flex flex-col items-center">
                <h1 className="font-semibold text-[1.5rem] mt-3 text-gray-700 dark:text-white">
                  {project.title}
                </h1>
                <p className="max-w-[90%] text-gray-400 font-light text-center">
                  {project.description}
                </p>
              </div>
            </div>
          );
        })}
        <ProjectCardAlertModal />
      </div>
    );
  }
);

ProjectCard.displayName = "ProjectCard";

export default ProjectCard;

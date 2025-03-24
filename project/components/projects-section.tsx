"use client";

import React, { useState } from "react";
import SectionTitle from "./section-title";
import ProjectCard from "./project-card";
import { projectsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

export default function ProjectsSection() {
  const { ref } = useSectionInView("Projects", 0.5);
  const [showAllProjects, setShowAllProjects] = useState(false);

  return (
    <motion.section
      ref={ref}
      id="projects"
      className="scroll-mt-28 mb-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionTitle>My projects</SectionTitle>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {(showAllProjects ? projectsData : projectsData.slice(0, 3)).map((project, index) => (
          <React.Fragment key={index}>
            <ProjectCard {...project} />
          </React.Fragment>
        ))}
      </div>

      <div className="mt-8 text-center">
        <button
          onClick={() => setShowAllProjects(!showAllProjects)}
          className="bg-gray-900 text-white px-7 py-3 rounded-full hover:scale-110 transition dark:bg-white/10"
        >
          {showAllProjects ? "Show Less" : "See More"}
        </button>
      </div>
    </motion.section>
  );
}

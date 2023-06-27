import React from "react";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I've Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Propert Finder"
            backgroundImg="/../public/assets/projects/property.jpg"
            projectUrl="/property"
          />

          <ProjectItem
            title="Crypto App"
            backgroundImg="/../public/assets/projects/crypto.jpg"
            projectUrl="/property"
          />
          <ProjectItem
            title="Netflix"
            backgroundImg="/../public/assets/projects/netflix.jpg"
            projectUrl="/property"
          />
          <ProjectItem
            title="Twitch"
            backgroundImg="/../public/assets/projects/twitch.jpg"
            projectUrl="/property"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;

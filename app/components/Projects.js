import React from "react";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Google Clone"
            backgroundImg="/assets/projects/google.png"
            projectUrl="https://github.com/sonykikuma/google-clone"
          />

          <ProjectItem
            title="Crypto App"
            backgroundImg="/../public/assets/projects/crypto.png"
            projectUrl="https://github.com/sonykikuma/multipage-crypto-currency-tracker"
          />
          <ProjectItem
            title="IMDb"
            backgroundImg="/../public/assets/projects/imdb.png"
            projectUrl="https://github.com/sonykikuma/IMDb-clone"
          />
          <ProjectItem
            title="Weather App"
            backgroundImg="/../public/assets/projects/weather.png"
            projectUrl="https://github.com/sonykikuma/weather-next-tailwindcss"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
//This is what I had with the error:
{
  /* <a href=""> <img align="center" src="https://github-readme-stats.vercel.app/api/top-langs/?username=YulietM&theme=react&line_height=40&hide=css"/> </a>

and adding (sigma-five) so it was solved:
    <a href=""> <img align="center" src="https://github-readme-stats-sigma-five.vercel.app/api/top-langs/? */
}

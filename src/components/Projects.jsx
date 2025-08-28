import React from "react";
import image from "../assets/femalee.png";

export default function Projects() {

  const pro = {
    project: [
      {
        ima: image,
        description: "A E-commerce website.built with fullstack",
        link:""
      },
      {
        ima: image,
        description: "A E-commerce website.built with fullstack",
        link:""
      },
      {
        ima: image,
        description: "A E-commerce website.built with fullstack",
        link:""
      }
    ]
  }

  return (
    <section className="flex flex-col py-20 px-5 justify-center bg-secondary text-white" id="project">
      <div className="w-full">
        <div className="flex flex-col px-10 py-5">
          <h1 className="text-4xl text-white border-b-4 border-[#5555de] mb-5 w-[140px] font-bold">
            Projects
          </h1>
          <p>
            These are some of my best projects.I have built these with Html,css,Tailwindcss,Javascript,Mysql,php and react js. Check them out.
          </p>
        </div>
      </div>

      <div className="w-full">
        <div className="flex flex-col md:flex-row px-5 md:px-20 gap-10 justify-center">
          {pro.project.map((projects, index) => (
            <div key={index} className="relative flex flex-col items-center max-w-[500px] w-full">
              <img className="h-[200px] w-full object-cover rounded-md" src={projects.ima} alt={`Project ${index + 1}`} />
              <div className="project-desc w-full">
                <p className="text-center py-5">{projects.description}</p>
                <div className="flex justify-center">
                  <a className="btn" target="_blank" rel="noopener noreferrer" href={projects.link || "#"}>
                    view project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

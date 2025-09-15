
import React from "react";
import pro1 from "../assets/pro1.png";
import pro2 from "../assets/pro2.png";


export default function Projects() {
  const pro = {
    project: [
      {
        ima: pro1,
        description: "A QR/Barcode scanner app built with ReactJS and TailwindCSS. Users can scan codes, view results instantly, and use Copy and Download buttons for easy access to the scanned data.",
        link:"https://scanner-three-sigma.vercel.app/"
        
      },
      {
        ima: pro2,
        description: "A responsive weather application built with ReactJS and TailwindCSS that fetches real-time weather data using a public weather API. Users can search for any city worldwide and instantly view current weather conditions, including temperature, humidity, wind speed, and a dynamic weather icon. The project demonstrates API integration, state management in React, and modern responsive UI design with TailwindCSS.",
        link: "https://project-weatherapi.vercel.app/"
      },
      {
        ima: pro1,
        description: "A Portfolio website built with HTML, CSS, JS",
        link: ""
      },
      {
        ima: pro1,
        description: "A Portfolio website built with HTML, CSS, JS",
        link: ""
      }
    ]
  };

  return (
    <section
      className="flex flex-col py-20 px-5 justify-center bg-secondary text-white"
      id="project"
    >
      
      <div className="w-full">
        <div className="flex flex-col px-10 py-5">
          <h1 className="text-4xl text-white border-b-4 border-[#5555de] mb-5 w-[140px] font-bold">
            Projects
          </h1>
          <p>
            These are some of my best projects. I have built these with HTML, CSS, TailwindCSS, JavaScript, MySQL, PHP, and React JS. Check them out.
          </p>
        </div>
      </div>

     
      <div className="w-full">
        <div className="flex flex-col md:flex-row px-5 md:px-20 gap-10 justify-center flex-wrap">
          {pro.project.map((projects, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center max-w-[500px] w-full bg-[#1f1f1f] rounded-md overflow-hidden"
            >
             
              <img
                className="h-[200px] w-full object-cover"
                src={projects.ima}
                alt={`Project ${index + 1}`}
              />

              
              <div className="project-desc w-full px-5 py-5 text-center">
                <p className="mb-4">{projects.description}</p>

               
               {projects.link && (
  <a
    className="bg-[#5555de] text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition"
    target="_blank"
    rel="noopener noreferrer"
    href={projects.link}
  >
    View Project
  </a>
)}

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

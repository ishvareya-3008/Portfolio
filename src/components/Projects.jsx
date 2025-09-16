
import React from "react";
import pro1 from "../assets/pro1.png";
import pro2 from "../assets/pro2.png";
import pro3 from "../assets/pro3.png";
import pro4 from "../assets/pro4.png";




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
        description: "A responsive weather app built with ReactJS and TailwindCSS that uses a public API to fetch real-time data. Users can search any city to view temperature, conditions, humidity, and wind speed in a clean, modern UI.",
        link:"https://project-weatherapi.vercel.app/"
      },
      {
        ima: pro3,
        description: "A full-featured e-commerce web app built with ReactJS,  product listings, detailed product pages, and an add-to-cart system. Users can browse products, manage their cart. The app provides a smooth, responsive UI for a seamless shopping experience.",
        link:"https://ecommerce-git-main-ishvareya-3008s-projects.vercel.app/"
      },
      {
        ima: pro4,
        description: "E-Commerce Web Application – Built a fully functional Shop platform using HTML, CSS, JavaScript, PHP, and MySQL. Implemented CRUD operations for product management (add, edit, delete, view) and integrated a secure user authentication system. Designed responsive UI for seamless user experience and optimized database queries for efficient product and order handling.",
        link:"."
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

               
               {projects.link ? (
  <a
    className="bg-[#5555de] text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition"
    target="_blank"
    rel="noopener noreferrer"
    href={projects.link}
  >
    View Project
  </a>
) : (
  <button
    className="bg-gray-500 text-white px-6 py-2 rounded-md cursor-not-allowed opacity-70"
    disabled
  >
    View Project
  </button>
)}



              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

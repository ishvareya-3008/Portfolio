import React from "react";
import person from "../assets/person.jpeg";
import { IoIosEye } from "react-icons/io";
import { IoMdDownload } from "react-icons/io";

export default function Body() {
  const intro = {
    subtitle: "I'm a full-stack developer",
  };

  return (
    <section
      className="flex flex-col md:flex-row items-center justify-between px-8 md:px-16 py-20 bg-secondary gap-12"
      id="body"
    >
      
      <div className="md:w-1/2 flex flex-col justify-center space-y-8 text-center md:text-left">
        <div>
          <h1 className="text-white text-5xl md:text-6xl font-bold leading-tight">
            Hi <br />
            I'm <span className="text-black">Ishvareya C</span>
          </h1>
          <p className="text-2xl mt-4 text-gray-200">{intro.subtitle}</p>
        </div>

        
        <div className="flex gap-4 px-4 py-4 border-b border-white w-fit mx-auto md:mx-0 items-center">
          <b className="text-2xl text-white">Resume</b>

          {/* View Resume */}
          <a href="/Ishvareya_resume.pdf" target="_blank">
            <IoIosEye
              size={32}
              className="cursor-pointer transition-transform duration-200 hover:text-pink-400 hover:scale-110"
            />
          </a>

          {/* Download Resume */}
          <a href="/Ishvareya_resume.pdf" download="Ishvareya_C_Resume.pdf">
            <IoMdDownload
              size={32}
              className="cursor-pointer transition-transform duration-200 hover:text-purple-400 hover:scale-110"
            />
          </a>
        </div>
      </div>

      
      <div className="md:w-1/2 flex justify-center">
        <div className="relative group">
          
          <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-2xl blur-lg opacity-50 group-hover:opacity-80 transition duration-500"></div>

          
          <img
            className="relative w-72 h-72 md:w-[350px] md:h-[450px] object-cover rounded-2xl shadow-2xl transition-transform duration-300 group-hover:scale-105"
            src={person}
            alt="Ishvareya C"
          />
        </div>
      </div>
    </section>
  );
}

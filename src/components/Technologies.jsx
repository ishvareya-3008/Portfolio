import React from "react";
import img1 from "../assets/html.png";
import img2 from "../assets/css.png";
import img3 from "../assets/js.png";
import img4 from "../assets/mysql.png";
import img5 from "../assets/php.png";
import img6 from "../assets/react.png";
import img7 from "../assets/tailwind.png";
import img8 from "../assets/bootstrap.png";

const technologies = [
  { src: img1 },
  { src: img2 },
  { src: img3 },
  { src: img4 },
  { src: img5 },
  { src: img6 },
  { src: img7 },
  { src: img8 },
];

export default function Technologies() {
  return (
    <div>
      <div className="min-h-screen flex flex-col items-center justify-center bg-secondary p-6">
        <h1 className="text-4xl text-white border-b-4 border-[#5555de] mb-10 w-[350px] font-bold text-center">
          Technologies Known
        </h1>

        <div className="flex flex-wrap justify-center gap-10 py-5 sm:mx-10 max-w-5xl">
          {technologies.map((tech, index) => (
            <div
              className="box flex items-center p-2 justify-center  bg-white bg-opacity-10 rounded-lg shadow-md"
              key={index}
            >
              <img
                src={tech.src}
                className="h-24 w-24  object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

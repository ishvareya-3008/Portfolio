import React from "react";
import female from "../assets/female.png";

export default function About() {
  const config = {
    line1:
      "Hi, my name is Ishvareya C. I am a Full Stack Developer. I have built various websites with React.js and Tailwind CSS.",
    line2:
      "I am proficient in frontend skills like HTML, CSS, JavaScript, Bootstrap, Tailwind CSS, and React.js.",
    line3: "For backend, I have experience with MySQL and PHP.",
  };

  return (
    <section
      className="flex flex-col md:flex-row items-center justify-between bg-secondary px-8 md:px-16 py-16 gap-10"
      id="about"
    >
      {/* Left Section - Image */}
      <div className="md:w-1/2 flex justify-center md:justify-end">
        <img
          src={female}
          alt="About me"
          className="w-72 h-auto md:w-[400px] rounded-xl shadow-2xl transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Right Section - Text */}
      <div className="md:w-1/2 flex justify-center items-center text-white">
        <div className="flex flex-col justify-center max-w-lg space-y-5">
          <h1 className="text-4xl md:text-5xl font-bold border-b-4 border-[#5784c8] pb-2 w-fit">
            About Me
          </h1>

          <p className="text-lg leading-relaxed">{config.line1}</p>
          <p className="text-lg leading-relaxed">{config.line2}</p>
          <p className="text-lg leading-relaxed">{config.line3}</p>
        </div>
      </div>
    </section>
  );
}

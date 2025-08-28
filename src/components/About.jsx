import React from "react";
import female from "../assets/female.png";

export default function About() {
  const config = {
    line1:
      "Hi,My name is Ishvareya C. I am a Full stack developer.I built a various websites with React.js and Tailwind CSS",
    line2:
      "I am proficient in Frontend skills like Html,CSS,Javascript,Bootstrap,Tailwind CSS and React.js",
    line3: "In backend I know Mysql and php database.",
  };


  return (
    <section className="flex flex-col md:flex-row bg-primary px-5 py-10 md:py-20" id="about">
      <div className="py-5 md:w-1/2 flex justify-center md:justify-end">
        <img 
          src={ female }
          alt="About me"
          className="max-w-[100%] right-6 h-auto rounded-md shadow-lg"
        />
      </div>
      <div className="md:w-1/2 flex justify-center items-center text-white px-5 md:px-10">
        <div className="flex flex-col justify-center max-w-lg">
          <h1 className="text-4xl text-white border-b-4 border-[#5784c8] mb-5 w-[170px] font-bold">
            About Me
          </h1>

          <p className="pb-5">{config.line1}</p>
          <p className="pb-5">{config.line2}</p>
          <p className="pb-5">{config.line3}</p>
        </div>
      </div>
    </section>
  );
}

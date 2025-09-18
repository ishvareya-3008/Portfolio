import React from 'react';

export default function Education() {
  const educationData = [
    {
      degree: "Bachelor of Commerce (Capital Market)",
      institution: "The Madura College",
      location: "Madurai, India",
      duration: "Jun 2020 — Dec 2023",
      gpa : "7.29/10"
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Nirmala Girls Higher Secondary School",
      location: "Madurai, India",
      duration: "Jun 2019 — Dec 2020",
      gpa: "76.33%"
    },
    {
      degree: "Secondary School Leaving Certificate (SSLC)",
      institution: "Sourastra Girls Higher Secondary School",
      location: "Madurai, India",
      duration: "Jun 2017 - Apr 2018",
      gpa: "61.10%"
    }
  ];

  return (
    <section className='flex flex-col bg-secondary px-5 py-20 md:py-32 text-white' id="education">
      <div className='flex flex-col justify-center max-w-5xl mx-auto w-full'>
        <h1 className='text-3xl sm:text-4xl font-bold border-b-4 border-[#5490eb] mb-6 w-max'>
          Education
        </h1>
        <div className='flex flex-col space-y-6 md:space-y-8'>
          {educationData.map((edu, index) => (
            <div 
              key={index} 
              className='bg-indigo-300 border-2 bg-opacity-2 rounded-md p-4 md:p-6 text-black'
            >
              <h2 className='text-xl md:text-2xl font-semibold mb-2'>{edu.degree}</h2>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm md:text-base'>
                <div>
                  <p>{edu.institution}</p>
                  <p>{edu.location}</p>
                </div>
                <div className='text-right'>
                  <p>{edu.duration}</p>
                  <p className='text-black font-medium'>GPA: {edu.gpa}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

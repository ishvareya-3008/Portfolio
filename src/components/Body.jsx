import React from 'react'
import headimg from "../assets/femalee.png";
import { IoIosEye } from "react-icons/io";
import { IoMdDownload } from "react-icons/io";

export default function Body() {
  const intro = {
    subtitle: "Im a full-stack developer"
  }

  return (
    <section className='flex flex-col md:flex-row px-5 py-32 bg-secondary justify-center items-center md:items-start gap-10' id='body'>
      <div className='md:w-1/2 flex flex-col justify-center'>
        <i className='text-white text-6xl leading-tight'>
          Hi  <br />
          I'm <b className='text-black'>Ishvareya C</b>
          <p className='text-2xl mt-3'>{intro.subtitle}</p>
        </i>
        <div className='flex gap-4 px-3.5 py-5 my-3 border-b border-white w-[220px] items-center'>
          <b className='text-2xl'>Resume</b>
          <a href="" aria-label="View Resume">
            <IoIosEye size={32} className="cursor-pointer" />
          </a>
          <IoMdDownload size={32} className="cursor-pointer" />
        </div>
      </div>
      <img className='md:w-1/3 w-full object-contain rounded-md' src={headimg} alt="Ishvareya C" />
    </section>
  )
}

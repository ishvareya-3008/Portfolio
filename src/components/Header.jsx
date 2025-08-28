import { useState } from "react";
import { IoReorderThree } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";

export default function Header() {
  const [toggle, setToggle] = useState(false);

  return (
    <header className="flex justify-between px-5 py-2 bg-primary items-center">
      <i className="font-bold text-black text-2xl">ISHVAREYA C</i>
      <nav className="hidden md:block">
        <ul className="flex text-white items-center gap-2.5 ">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#project">Projects</a>
          </li>
          <li>
            <a href="#education">Education</a>
          </li>

          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
              <FaLinkedin />
            </li>
            <li>
              <FaGithub />
          </li>
          <BiLogoGmail/>
          <li>

          </li>
        </ul>
      </nav>
      {toggle && (
        <nav className="block md:hidden">
          <ul
            onClick={() => setToggle(!toggle)}
            className="grid  text-white  mobile-nav">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#project">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            
            
          </ul>
        </nav>
      )}
      <button onClick={() => setToggle(!toggle)} className="block md:hidden">
        <IoReorderThree className="text-white h-5 w-5" />
      </button>
    </header>
  );
}

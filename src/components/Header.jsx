import { useState } from "react";
import { IoReorderThree } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";

export default function Header() {
  const [toggle, setToggle] = useState(false);

  return (
    <header className="flex justify-between items-center px-5 py-3 bg-primary shadow-md">
      <div className="font-bold text-black text-2xl tracking-wide">
        ISHVAREYA C
      </div>

      <nav className="hidden md:flex">
        <ul className="flex items-center gap-6 text-white font-medium">
          <li>
            <a href="/" className="hover:text-gray-300">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-gray-300">
              About
            </a>
          </li>
          <li>
            <a href="#project" className="hover:text-gray-300">
              Projects
            </a>
          </li>
          <li>
            <a href="#education" className="hover:text-gray-300">
              Education
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-gray-300">
              Contact
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/ishvareya-chandrasekar-237916283?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400">
              <FaLinkedin size={20} />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/ishvareya-3008"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400">
              <FaGithub size={20} />
            </a>
          </li>
          <li>
            <a
              href="mailto:ishvareyachandrashekar@gmail.com"
              className="hover:text-red-400">
              <BiLogoGmail size={20} />
            </a>
          </li>
        </ul>
      </nav>

      {toggle && (
        <nav className="absolute top-16 left-0 w-full bg-primary md:hidden shadow-lg">
          <ul
            onClick={() => setToggle(false)}
            className="flex flex-col items-center gap-4 py-6 text-white font-medium">
            <li>
              <a href="/" className="hover:text-gray-300">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-gray-300">
                About
              </a>
            </li>
            <li>
              <a href="#project" className="hover:text-gray-300">
                Projects
              </a>
            </li>
            <li>
              <a href="#education" className="hover:text-gray-300">
                Education
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-gray-300">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      )}

      <button
        onClick={() => setToggle(!toggle)}
        className="block md:hidden text-white">
        <IoReorderThree size={28} />
      </button>
    </header>
  );
}

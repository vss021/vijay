import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import {logo} from "../../assets/index"
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <div className="w-full  py-20 h-auto border-b-[1px] border-b-black flex justify-evenly items-center flex-wrap gap-3 ">

      <div className="w-full h-full flex flex-col items-center gap-8">
        <img className="w-32" src={logo} alt="logo" />
        <div className="flex gap-4">
          <span className="bannerIcon">
            <FaFacebookF />
          </span>
          <span className="bannerIcon">
            <FaTwitter />
          </span>
          <span className="bannerIcon">
            <FaLinkedinIn />
          </span>
        </div>
      </div>
      <div className="w-full h-full items-center ">
        <h3 className="text-xl uppercase text-designColor tracking-wider">
          Quick Link
        </h3>
        <ul className="flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden">
          
        <li>
            <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              <Link to='navBar'>
              Home
              </Link>
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>

          <li>
            <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              <Link to='about' >
              About
              </Link>
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          
          
          <li>
            <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              <Link to='projects'>
                Projects
              </Link>
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>

          <li>
            <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              <Link to='contact'>

              Contact
              </Link>
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>

          <li>
            <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">

            <a href="/" target="_blank">Resume</a>
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
        </ul>

      </div>
     
      
    </div>
  );
}

export default Footer
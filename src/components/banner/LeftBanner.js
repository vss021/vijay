import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { socialLinks } from "../../constants/socialMedia";

import {
  FaFacebookF,
  FaLinkedin,
  FaInstagramSquare,
  FaReact,
  FaGithub,
} from "react-icons/fa";

import { TbBrandCpp, TbBrandJavascript } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";


const LeftBanner = () => {

  const {faceBook, instagram, linkedin, github} = socialLinks;

  const [text] = useTypewriter({
    words: [
      "Aspiring Software Developer",
      "MERN Stack Developer",
      "Problem Solver",
      "Continuous Learner",
    ],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 20,
    delaySpeed: 2000,
  });

  return (
   
      <div className="w-full lgl:w-1/2 flex flex-col xl:pt-20 gap-20">
        <div className="flex flex-col gap-3">
          <h4 className="text-lg capitalize font-normal ">
            welcome to my world
          </h4>

            <h1 className="text-6xl font-bold text-white">
            Hi there! <span className="animate-bounce">👋</span>
            </h1>
            <h1 className="text-6xl hover:text-designColor-6xl font-bold text-blue-900 ">
              Vijay Singh Saud
            </h1>

          <h2 className="text-4xl  py-3 font-bold text-white">
            a <span className="">{ text}</span>
            <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#0000FF"
          />
          </h2>

          <p className="text-base text-justify font-bodyFont  tracking-wide">
          I’m a fourth-year Computer Science student who is passionate about coding and development. I’m always on the lookout for fresh challenges to level up my skills and make my mark in the software development sphere. I’m passionate about learning and using code to create cool solutions. Let’s connect and dive into the exciting world of software engineering together! 🚀
          </p>
        </div>

        <div className="flex  flex-wrap gap-5 justify-between items-center">

          <div className="flex flex-col gap-3">
            <h1 className="text-base uppercase font-titleFont mb-4">
              Find me in
            </h1>
            <div className="flex gap-4 ">
              <span className="LeftBannerIcon hover:text-designColor">
                <a href={faceBook} target="_blanck">
                <FaFacebookF className="w-10 h-auto"  />
                </a>
              </span>

              <span className="LeftBannerIcon hover:text-designColor">

                <a href={linkedin} target="_blanck">

                <FaLinkedin className="w-10 h-auto" />

                </a>
              </span>

              <span className="LeftBannerIcon hover:text-designColor">
                <a href={instagram} target="_blanck">
                <FaInstagramSquare className="w-10 h-auto" />
                </a>
              </span>
              <span className="LeftBannerIcon hover:text-designColor">
                <a href={github} target="_blanck">
                <FaGithub className="w-10 h-auto" />
                </a>
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-3">

          <h1 className="text-base uppercase font-titleFont mb-4 ">
              Best Skill on
            </h1>

          <div className="flex gap-4 ">
            <span className="LeftBannerIcon hover:text-designColor">
              <TbBrandCpp className="w-10 h-auto " />
            </span>
            
            <span className="LeftBannerIcon hover:text-designColor">
              <FaReact className="w-10 h-auto " />
            </span>

            <span className="LeftBannerIcon hover:text-designColor">
              <TbBrandJavascript className="w-10 h-auto " />
            </span>
            <span className="LeftBannerIcon hover:text-designColor">
              <SiTailwindcss className="w-10 h-auto " />
            </span>

          </div>
          </div>
        </div>
      </div>

  );
};

export default LeftBanner;

import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { navLinks } from "../../constants";
import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <div
      id="navBar"
      className="w-full h-24 sticky top-0 z-50 bg-bodyColor mx-auto flex justify-between items-center
     font-titleFont border-b-[2px] border-b-gray-600"
    >
      <div>
        <Link to="navBar">
          <img src={logo} alt="logo" className="h-14 w-auto " />
        </Link>
      </div>

      <div>
        <ul className="hidden mdl:inline-flex items-center gap-6 lg:gap-12  ">
          {navLinks.map(({ id, title, link }) => (
            <li
              key={id}
              className=" text-base font-normal  text-gray-400 
                        tracking-wide cursor-pointer hover:text-designColor duration-300"
            >
              <Link
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {title}
              </Link>
            </li>
          ))}

          <button className=" text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300">
            <a
              href="https://drive.google.com/file/d/1Kq1q7QdRXRSntacUn_ZSghxK0ni8Py7l/view?usp=drive_link"
              rel="noreferrer"
              target="_blank"
            >
              Resume
            </a>
          </button>
        </ul>

        <span
          onClick={() => setShow(!show)}
          className="text-xl mdl:hidden m-1  w-14 h-14 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer"
        >
          {!show ? (
            <FiMenu className="w-10 h-8" />
          ) : (
            <span className=" text-3xl font-extrabold"> X</span>
          )}
        </span>

        {/* mobile  */}

        {show && (
          <div className="w-[80%] h-auto overflow-scroll rounded-xl m-auto absolute top-0 left-0 bg-gray-900 p-4 scrollbar-hide">
            <div className="flex flex-col gap-8 py-2 relative">
              <div className=" ">
                <img
                  className="w-20 shadow-inner shadow-cyan-300 rounded-full"
                  src={logo}
                  alt="logo"
                />
                <p className="text-lg text-designColor mt-4">Quick Links</p>
              </div>

              <ul className="flex flex-col gap-4">
                {navLinks.map((item) => (
                  <li
                    key={item.id}
                    className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
                  >
                    <Link
                      onClick={() => setShow(false)}
                      activeClass="active"
                      to={item.link}
                      spy={true}
                      smooth={true}
                      offset={-60}
                      duration={500}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
                <a
                  className=" text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
                  href="https://drive.google.com/file/d/1Kq1q7QdRXRSntacUn_ZSghxK0ni8Py7l/view?usp=drive_link"
                  rel="noreferrer"
                  target="_blank"
                >
                  Resume
                </a>
              </ul>
              <div className="flex flex-col gap-4">
                <h2 className="text-base uppercase font-titleFont mb-4">
                  Find me in
                </h2>
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
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

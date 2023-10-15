import React from "react";
import LeftBanner from "./LeftBanner";
import RightBanner from "./RightBanner";


const Banner = () => {
 

  return (
    <section
      id="home"
      className="w-full h-auto pt-10 pb-20 lgl:flex flex-wrap border-b-[2px] border-b-black"
    >
        <LeftBanner/>
        <RightBanner/> 
    </section>
  );
};

export default Banner;

import React from 'react';
import {bannerImg}  from '../../assets/index';

const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center relative pt-5">

        <img  src={bannerImg} alt="Img" 
        className="w-[300px] h-[400px] lgl:w-[500px] lgl:h-[580px] z-10 object-cover rounded-t-full cursor-pointer 
        hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000" />
        
      <div className="absolute bottom-0 w-full sm:w-[350px] sm:h-[420px] lgl:w-[500px] lgl:h-[600px] rounded-t-full bg-gradient-to-r from-[#1e2024] to-[#202327] 
       shadow-shadowOne flex justify-center items-center"></div>
      </div>
  );
}

export default RightBanner;

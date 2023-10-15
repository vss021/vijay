import React from "react";

const CpCard = ({ logo, name, solve, link }) => {
  return (
    <div className="w-full sm:p-4 xl:px-5 h-auto xl:py-4 rounded-xl shadow-shadowOne flex flex-col flex-wrap justify-center bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1500">

      <div className="flex justify-center items-center gap-10 p-5">

        <img src={logo} alt="icon" className=" h-16 object-cover group-hover:scale-110 duration-300 cursor-pointer" />
        <div className="flex flex-col gap-2">
          <h1 className=" text-xl font-semibold">{name}</h1>
          <h2 className="text-lg font-semibold">{solve} <span> Problems</span> </h2>
          <a href={link} className=" text-xl font-semibold text-blue-700">View Profile</a>
        </div>

      </div>
    </div>
  );
};

export default CpCard;

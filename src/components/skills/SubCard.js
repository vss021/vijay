import React from "react";
import tick from "../../assets/tick.png";
const SubCard = ({ name, level }) => {
  return (
    <div className=" w-1/3">
      <div className="sm:flex flex-wrap gap-3 items-center">
        <img src={tick} alt="icon" className=" w-8 md:w-10 md:h-10 object-center  object-cover group-hover:scale-110 duration-300 cursor-pointer" />

        <div className=" flex flex-col justify-start items-start">
          <h2 className="">{name}</h2>
          <h3>{level}</h3>
        </div>
      </div>
    </div>
  );
};

export default SubCard;

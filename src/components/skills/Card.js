import React from "react";

import SubCard from "./SubCard";

const Card = ({techName, techArr}) => {
    console.log(techArr);
  return (
    <div className="w-full sm:p-4 px-0 xl:px-5 h-auto xl:py-4 rounded-xl shadow-shadowOne flex flex-wrap justify-center items-center bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1500">

      <h2 className="text-3xl m-3 font-bold  ">{techName}</h2>

      <div className="w-full h-[80%] rounded-lg flex flex-wrap justify-center items-center py-5 gap-10 overflow-hidden  ">
        {
            techArr.map((tech) => (
                <SubCard key={tech.id} name={tech.name} level={tech.level} />
            ))      
        }
        
      </div>
    </div>
  );
};

export default Card;

import React from "react";
import { online } from "../../constants/skills";
import CpCard from "./CpCard";

const CP = () => {
  return (
    <div>
      <div className=" text-center py-10">
        <h3 className="text-xl text-lightText font-semibold text-center pb-3">
          Coding Skills
        </h3>
        <h1 className="text-4xl text-lightText font-bold text-center pb-10">
          Coding Profiles
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14 xl:px-10 justify-center   ">
        {online.map((platform) => (
          <CpCard
            key={platform.id}
            logo={platform.logo}
            name={platform.name}
            solve={platform.solve}
            link={platform.link}
          />
        ))}
      </div>
    </div>
  );
};

export default CP;

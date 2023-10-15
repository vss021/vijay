import React from "react";
import Card from "./Card";
import { techData } from "../../constants/skills";
import CP from "./CP";

const Skills = () => {
  return (
    <div id="skills">
      <div className="text-center my-5 ">
        <h3 className="text-xl text-lightText font-semibold text-center pb-3">
          What Skills I Have
        </h3>
        <h1 className="text-4xl text-lightText font-bold text-center pb-10">
          My Skills
        </h1>

        <div className='grid grid-cols-1 md:grid-cols-2  gap-6 xl:gap-14 xl:px-10    '>
        {
            techData.map((techData) => (
                <Card
                key={techData.id}
                techName={techData.techName}
                techArr={techData.tech}
              />
              ))
              
        }
        </div>

      </div>

      <CP/>
    </div>
  );
};

export default Skills;

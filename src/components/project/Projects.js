import React from 'react';
import Title from '../layouts/Title';
import Card from './Card';
import { projectData } from '../../constants/projectsData';
// import { projectOne, projectTwo, projectThree } from "../../assets/index";


const Projects = () => {
  return (
    <section
    id='projects'
    className="w-full py-20 border-b-[1px] border-b-black">
        
        <div className='flex justify-center items-center  text-center pb-10'>

            <Title title='VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK' des = 'My Projects' />
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14 '>
        {
            projectData.map(({ id, title, des, src, link }) => (
                <Card key={id} title={title} des={des} img={src} urlLink={link} />
              ))
              
        }
        </div>
    </section>
  );
}

export default Projects;

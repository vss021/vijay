import React from "react";
import TechStack from "./TechStack";

const Introduction = () => {
  return (
    <div className="pb-10 flex flex-col px-5 gap-2">
      <div className="pb-4">
        <h1 className="text-xl text-lightText font-bold text-center ">
          Get To Know
        </h1>

        <h1 className="text-4xl text-blue-500 font-bold text-center ">
          About Me
        </h1>
      </div>

      <div className="text-lg text-justify  tracking-wider md:px-24 flex flex-col gap-2">
        <p>
          I'm Vijay Singh Saud, and I love creating web applications as a MERN
          Stack Developer. I'm currently studying for my B.Tech degree at
          Shivalik College of Engineering in Dehradun.
        </p>
        <p>
          🚀 I enjoy solving coding challenges, and I actively participate in
          contests on LeetCode and CodeChef. I'm pretty good at it, with a
          LeetCode rating over 1700 and a CodeChef 3-star badge.{" "}
        </p>

        <p>
          💼 Besides coding contests, I've also worked on building the backend
          of websites using technologies like Node.js, Express.js, and MongoDB.
        </p>

        <p>
          {" "}
          I'm skilled in programming languages like Core Java and C++, and I
          know my way around web development with React.js, Node.js, and
          Express.js. I'm comfortable using tools like Git, GitHub, and Postman.
          I'm also familiar with the MERN Stack and databases like MongoDB and
          MySQL.
        </p>

        <p>
          🤝 I'm always open to collaboration and eager to explore new
          opportunities. You can connect with me on{" "}
          <a
            target="_blanck"
            className="underline underline-offset-4p-2 rounded-sm "
            href="https://www.linkedin.com/in/vijay-singh-saud/"
          >
            LinkedIn
          </a>
        </p>
      </div>
    </div>
  );
};

export default Introduction;

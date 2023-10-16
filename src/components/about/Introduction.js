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

      <div className="text-lg text-justify  tracking-wider md:px-24 flex flex-col gap-3">
        <p>
        My name is Vijay Singh Saud, and I enjoy creating web applications as a MERN Stack Developer. Currently, I’m pursuing my B.Tech degree at Shivalik College of Engineering in Dehradun.
        </p>
        <p>
          {" "}
          I know programming languages like Java and C++, and I’m comfortable with web development using React.js, Node.js, and Express.js. I’m also familiar with Git, GitHub, Postman, and databases like MongoDB and MySQL.
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

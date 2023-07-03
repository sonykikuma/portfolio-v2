import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            let&apos;s build something together
          </p>
          <h1 className="py-4 text-gray-700">
            Hi, I&apos;m <span className="text-[#5651e5]">Abha</span>
          </h1>
          <h1 className="py-2 text-gray-700">A Front-end Web Developer</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            I&apos;m a front-end developer specializing in building exceptional
            digital experiences. Currently, I&apos;m focused on building
            responsive front-end web applications while learning back-end
            technologies.
          </p>
          <div className="flex items-center justify-between mx-w-[330px] m-auto py-4">
            <Link href="https://www.linkedin.com/in/abha-soni-as/">
              <div
                className="rounded-full shadow-lg shadow-gray-400
             p-6 cursor-pointer hover:scale-110 ease-in duration-300"
              >
                {" "}
                <FaLinkedinIn />
              </div>
            </Link>
            <Link href="https://github.com/sonykikuma">
              <div
                className="rounded-full shadow-lg shadow-gray-400
             p-6 cursor-pointer hover:scale-110 ease-in duration-300"
              >
                {" "}
                <FaGithub />
              </div>
            </Link>
            <Link href="https://www.linkedin.com/in/abha-soni-as/">
              <div
                className="rounded-full shadow-lg shadow-gray-400
             p-6 cursor-pointer hover:scale-110 ease-in duration-300"
              >
                {" "}
                <AiOutlineMail />
              </div>
            </Link>
            <Link href="https://github.com/sonykikuma">
              <div
                className="rounded-full shadow-lg shadow-gray-400
             p-6 cursor-pointer hover:scale-110 ease-in duration-300"
              >
                {" "}
                <BsFillPersonLinesFill />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;

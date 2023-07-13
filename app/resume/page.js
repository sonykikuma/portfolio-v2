import React from "react";
import Link from "next/link";
import Techniskills from "../components/Techniskills";
import Workexp from "../components/Workexp";
import { AiFillHome } from "react-icons/ai";

const page = () => {
  return (
    <>
      <h2 className="text-center pt-4">Resume</h2>
      <p className="text-center pt-7 font-extrabold text-blue-700">ABHA SONI</p>
      <p className="text-center">
        <Link
          href="mailto:abhasonias@mail.com"
          className="text-blue-600 underline  p-2"
        >
          abhasonias@gmail.com
        </Link>{" "}
        | +91-8827966488 |{" "}
        <Link
          href="https://github.com/sonykikuma"
          className="text-blue-600 underline  p-2"
        >
          https://github.com/sonykikuma
        </Link>
      </p>
      <div className=" pt-10 sm:mx-20">
        <ul className="p-2 list-disc">
          <h4>EXECUTIVE PROFILE</h4>
          <li className="pt-4 ">
            Engineering graduate(Bachelor of Engineering) and Msster&apos;s
            degree
          </li>
          <li className="pt-4 ">
            Solid foundation in Javascript(ES6), HTML5 with strong understanding
            of Javascript frameworks-ReactJS,NextJS
          </li>
          <li className="pt-4 ">
            Very strong data structure and problem-solving skills
          </li>
          <li className="pt-4">
            Deep understanding of closures, prototypical inheritance, DOM
            manipulation, HTTP, cross-browser compatibility
          </li>
          <li className="pt-4">
            Passionate about learning and adapting to new technologies
          </li>
          <li className="pt-4">
            Excellent verbal communication and team work skills
          </li>
        </ul>
      </div>
      <Techniskills />
      <Workexp />
      <p className="pt-8 font-medium  ">
        <Link
          href="/"
          className="flex gap-2 items-center px-4 cursor-pointer hover:animate-bounce text-blue-500"
        >
          {" "}
          <AiFillHome className="hover:animate-spin" />
          Back to home{" "}
        </Link>
      </p>
    </>
  );
};

export default page;

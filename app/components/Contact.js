import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Contact = () => {
  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Contact
        </p>
        <h2 className="py-4">Get In Touch</h2>
        <div className="grid lg:grid-col-5 gap-8">
          {/*contact*/}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4" />
          <div className="lg:p-4 h-full ">
            <div>
              {" "}
              <img
                className="rounded-xl hover:scale-105 ease-in duration-300"
                src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
                alt="/"
              />
            </div>

            {/*contact icons*/}
            <div>
              <h2 className="py-2">Abha Soni</h2>
              <p>Front-End Developer</p>
              <p className="py-4">
                {" "}
                I am available for freelance or full-time positions. Contact me
                and let&apos;s talk
              </p>
            </div>
            <div>
              <p className="uppercase pt-8 ">connect with me</p>
              <div className="flex items-center justify-between py-4">
                <Link
                  href="https://www.linkedin.com/in/abha-soni-as/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div
                    className="rounded-full shadow-lg shadow-gray-400
             p-6 cursor-pointer hover:scale-110 ease-in duration-300"
                  >
                    {" "}
                    <FaLinkedinIn />
                  </div>
                </Link>

                <Link
                  href="https://github.com/sonykikuma"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div
                    className="rounded-full shadow-lg shadow-gray-400
             p-6 cursor-pointer hover:scale-110 ease-in duration-300"
                  >
                    {" "}
                    <FaGithub />
                  </div>
                </Link>

                <Link
                  href="https://www.linkedin.com/in/abha-soni-as/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div
                    className="rounded-full shadow-lg shadow-gray-400
             p-6 cursor-pointer hover:scale-110 ease-in duration-300"
                  >
                    {" "}
                    <AiOutlineMail />
                  </div>
                </Link>

                <Link href="/resume" target="_blank" rel="noreferrer">
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
      </div>
    </div>
  );
};

export default Contact;

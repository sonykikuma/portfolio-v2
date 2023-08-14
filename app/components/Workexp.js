import Link from "next/link";
import React from "react";

const Workexp = () => {
  return (
    <>
      <div className=" pt-10 sm:mx-20">
        <h4 className=" p-2 "> WORK EXPERIENCE</h4>
        <div className="pt-4  flex justify-between">
          <div className="font-semibold"> Frontend Developer at AltStox</div>
          <div className="font-semibold">April 2021 – April 2023</div>
        </div>
        <p className="pt-4">
          Project:
          <Link href="https://nullcon.altstox.com" className="text-blue-600">
            https://nullcon.altstox.com
          </Link>
        </p>
        <p>
          Technologies used:Javascript, React, ES6,NodeJS, Redux, JSX, HTML5,
          CSS3, MongoDB, Webpack, GIT, web workers, NextJs,RESTful APIs, AJAX
        </p>
      </div>
      {/*responsibilities8*/}
      <div className=" pt-10 sm:mx-20">
        <ul className="p-2 list-disc">
          <h3 className="underline">Responsibilities include:</h3>
          <li className="pt-4 ">
            Frontend Developer- User Interface design and development, backend
            integration, database programming, responsive and adaptive design{" "}
          </li>
          <li className="pt-4 ">
            Design and implement the dashboard which is used by end user to note
            the changes in the existing system and highlight the steps to be
            taken
          </li>
          <li className="pt-4 ">
            Gather and understand business requirement. Convert them into
            successful technology solutions
          </li>
          <li className="pt-4">
            Familiarity with reactive programming, observer pattern, RxJS,
            asynchronous request handling, partial page updates
          </li>
          <li className="pt-4">
            Worked on state management, libraries and frameworks for virtual DOM
            implementation
          </li>
        </ul>
      </div>
      <div className=" pt-10 sm:mx-20">
        <div className=" pt-4  flex justify-between">
          <div className="font-semibold">
            Frontend Developer Intern at ABC+D Pvt Ltd
          </div>
          <div className="font-semibold">Oct 2020 – March 2021</div>
        </div>
        <p className="pt-4 ">
          As a Frontend Intern build static websites such as Aisera
          Technologies.com, SagaiMatrimonial.com, DoctorRachna.com,
          rashmeetkaur.com
        </p>
      </div>
      <div className=" pt-10 sm:mx-20">
        <div className=" pt-4  ">
          <div className="font-semibold">Personal Projects</div>
          <div className=" pt-4  ">
            <div className="font-bold">Google App</div>
          </div>
          <p className="pt-2 ">
            This web app allows users to search for information on the internet,
            similar to the Google search engine. It is powered by the google
            custom search api, which allows it to display results that are
            exactly the same as those provided by Google.{" "}
          </p>
          <p className="pt-2 ">
            <strong>Technologies used:</strong> JavaScript, React, NextJS,
            TailwindCSS JSX, HTML5, CSS3, NodeJS, GitHub{" "}
          </p>
        </div>
      </div>
      <div className=" pt-10 sm:mx-20">
        <div className=" pt-4  ">
          <div className="font-semibold">Other Experience</div>
        </div>
        <p className="pt-4 ">
          Worked in education sector for almost 8 years as an Assistant
          professor for different Engineering colleges in Bhopal and Hyderabad
          respectively.{" "}
        </p>
      </div>
      <div className=" pt-10 sm:mx-20">
        <div className=" pt-4  ">
          <div className="font-semibold">Education</div>
        </div>
        <p className="pt-4 ">Master of Technology from UIT, BU-Bhopal, MP </p>
        <p className="pt-2 ">
          Bachelor of Engineering (Electronics and Communications) from RGTU,
          Bhopal{" "}
        </p>
      </div>
    </>
  );
};

export default Workexp;

import Link from "next/link";
import React from "react";

const Workexp = () => {
  return (
    <>
      <div className=" pt-10 sm:mx-20">
        <h4 className=" p-2 "> WORK EXPERIENCE</h4>

        <div className=" pt-10 ">
          <div className=" pt-4  flex justify-between">
            <div className="font-semibold">Software Developer at neoG</div>
            <div className="font-semibold">June 2024 </div>
          </div>
          <p className="pt-4 "></p>
        </div>

        <div className="pt-4  flex justify-between">
          <div className="font-semibold"> Frontend Developer at AltStox</div>
          <div className="font-semibold">October 2022 – April 2023</div>
        </div>
        <p className="pt-4">
          Project:
          <Link href="https://nullcon.altstox.com" className="text-blue-600">
            https://nullcon.altstox.com
          </Link>
        </p>
        <p>
          Technologies used:Javascript, React, ES6, NodeJS, Redux, JSX, HTML5,
          CSS3, MongoDB, Webpack, GIT, NextJs,RESTful APIs
        </p>
      </div>
      {/*responsibilities8*/}
      <div className=" pt-10 sm:mx-20">
        <ul className="p-2 list-disc">
          <h3 className="underline">Responsibilities include:</h3>
          <li className="pt-4 ">
            Frontend Developer- User Interface design and development, backend
            integration, responsive design{" "}
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
            Worked on state management, libraries and frameworks for virtual DOM
            implementation
          </li>
        </ul>
      </div>
      <div className=" pt-10 sm:mx-20">
        <div className=" pt-4  ">
          <div className="font-semibold">Personal Projects</div>
          <div className=" pt-4  ">
            <div className="font-bold">e-Book App</div>
          </div>
          <p className="pt-2 ">
            This web app allows users to see books of different categories,
            books can be filtered based on price, rating, genres and can be
            sorted from high price to low price. A user can add book to cart or
            Wishlist. Quantity can be increased or increased in cart of a
            particular. Upon selecting an address user can proceed for checkout.
            This is a MERN stack app and Redux is used for state management.{" "}
          </p>
          <p className="pt-2 ">
            <strong>Technologies used:</strong>
            Technologies used: NodeJs, React, Redux, Bootstrap, JSX, Express JS,
            MongoDB.
          </p>
          <p>
            Project link:{" "}
            <Link className="text-blue-500" href=" https://e-books9.vercel.app">
              https://e-books9.vercel.app{" "}
            </Link>
          </p>
        </div>

        <div className=" pt-4  ">
          <div className="font-bold">MeetUp App</div>
        </div>
        <p className="pt-2 ">
          This web app shows online and offline events. Events can be filtered
          based on online, offline status. Also events can be searched based on
          the event title and tags. Clicking on a particular event directs to a
          particular event detail page.
        </p>
        <p className="pt-2 ">
          <strong>Technologies used:</strong> JavaScript, React, Bootstrap,
          Express, CSS3, NodeJS, GitHub,MongoDB{" "}
        </p>
        <p>
          Project link:{" "}
          <Link
            className="text-blue-500"
            href="https://meetup-mern-app.vercel.app"
          >
            https://meetup-mern-app.vercel.app{" "}
          </Link>
        </p>
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

{
  /* 
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
</div> */
}

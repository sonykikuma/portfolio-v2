import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <>
      <h1 className="text-center pt-4">Resume</h1>
      <h4>
        <Link href="/">Back to home</Link>
      </h4>
    </>
  );
};

export default page;

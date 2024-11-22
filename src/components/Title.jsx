import React from "react";

const Title = ({ title }) => {
  return (
    <div className="bg-white phone:p-5 text-left leading-7 text-4xl h-full title font-bold bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text w-min">
      <h1>{title}</h1>
    </div>
  );
}

export default Title;
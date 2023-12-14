"use client";
import React from "react";
import { MdOutlineForest } from "react-icons/md";
import { LuBird } from "react-icons/lu";
import { TiLeaf } from "react-icons/ti";

const Button = () => {
  const iconStyle = {
    marginRight: "8px", // Space after the icon
  };

  const textWithSpaceStyle = {
    marginRight: "1px", // Adjusted space after the word "Complaint"
  };

  const fixedWidthStyle = {
    width: "225px", // Set a fixed width for the buttons
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <button className="flex items-center text-md font-bold text-black md:text-xl lg:text-xl rounded-md border border-black hover:border-slate-400 p-4 my-2" style={fixedWidthStyle}>
        <MdOutlineForest style={iconStyle} />
        <span style={textWithSpaceStyle}>Forestry Complaint</span>
      </button>
     
      <button className="flex items-center text-md font-bold text-black md:text-md lg:text-xl rounded-md border border-black hover:border-slate-400 p-4 my-2" style={fixedWidthStyle}>
        <LuBird style={iconStyle} />
        <span style={textWithSpaceStyle}>Wildlife Complaint</span>
      </button>
     
      <button className="flex items-center text-md font-bold text-black md:text-md lg:text-xl rounded-md border border-black hover:border-slate-400 p-4 my-2" style={fixedWidthStyle}>
        <TiLeaf style={iconStyle} />
        <span style={textWithSpaceStyle}>General Complaint</span>
      </button>
    </div>
  );
};

export default Button;







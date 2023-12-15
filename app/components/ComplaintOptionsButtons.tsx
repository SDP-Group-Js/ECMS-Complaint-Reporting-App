"use client";
import React from "react";
import { MdOutlineForest } from "react-icons/md";
import { LuBird } from "react-icons/lu";
import { TiLeaf } from "react-icons/ti";
import Link from "next/link";

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
    <div className='flex flex-col items-center justify-center h-screen'>
      {complaintTypeCard(
        fixedWidthStyle,
        iconStyle,
        textWithSpaceStyle,
        "Forestry Complaint",
        <MdOutlineForest />,
        "../submit-forestry-complaint"
      )}

      {complaintTypeCard(
        fixedWidthStyle,
        iconStyle,
        textWithSpaceStyle,
        "Wildlife Complaint",
        <LuBird />,
        "../submit-wildlife-complaint"
      )}

      {complaintTypeCard(
        fixedWidthStyle,
        iconStyle,
        textWithSpaceStyle,
        "General Complaint",
        <TiLeaf />,
        "../submit-general-complaint"
      )}
    </div>
  );
};

export default Button;
function complaintTypeCard(
  fixedWidthStyle: { width: string },
  iconStyle: { marginRight: string },
  textWithSpaceStyle: { marginRight: string },
  content: string,
  icon: React.ReactNode,
  link: string
) {
  return (
    <button style={fixedWidthStyle}>
      <Link
        href={link}
        className='flex items-center text-md font-bold text-black md:text-xl lg:text-xl rounded-md border border-black hover:border-slate-400 p-4 my-2'
      >
        {icon &&
          React.cloneElement(icon as React.ReactElement, { style: iconStyle })}
        <span style={textWithSpaceStyle}>{content}</span>
      </Link>
    </button>
  );
}

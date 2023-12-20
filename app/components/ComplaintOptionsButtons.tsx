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
    <div className="flex flex-col items-center justify-center">
      {complaintTypeCard(
        fixedWidthStyle,
        iconStyle,
        textWithSpaceStyle,
        "Forestry Complaint",
        <MdOutlineForest />,
        "../submit-forestry-complaint",
      )}

      {complaintTypeCard(
        fixedWidthStyle,
        iconStyle,
        textWithSpaceStyle,
        "Wildlife Complaint",
        <LuBird />,
        "../submit-wildlife-complaint",
      )}

      {complaintTypeCard(
        fixedWidthStyle,
        iconStyle,
        textWithSpaceStyle,
        "General Complaint",
        <TiLeaf />,
        "../submit-general-complaint",
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
  link: string,
) {
  return (
    <button style={fixedWidthStyle}>
      <Link
        href={link}
        className="text-md my-2 flex items-center rounded-md border border-black p-4 font-bold text-black hover:border-slate-400 md:text-xl lg:text-xl"
      >
        {icon &&
          React.cloneElement(icon as React.ReactElement, { style: iconStyle })}
        <span style={textWithSpaceStyle}>{content}</span>
      </Link>
    </button>
  );
}

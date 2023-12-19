"use client";
import React from "react";
import "./ComplaintTitleInputField.css";

type ComplaintTitleInputFieldProps = {
  onChange: (e: any) => void;
};

const ComplaintTitleInputField = ({
  onChange,
}: ComplaintTitleInputFieldProps) => {
  function handleFocus() {
    document
      .getElementById("complaintTitleLabel")
      ?.classList.add("focused-label");
  }

  return (
    <>
      <div className="input-container w-full">
        <input
          type="text"
          id="complaintTitle"
          className="flex h-16 w-full items-center justify-start rounded-lg border-2 border-black px-4"
          onFocus={handleFocus}
          onChange={onChange}
        />
        <label
          id="complaintTitleLabel"
          htmlFor="complaintTitle"
          className="floating-label text-black"
        >
          &nbsp;Title&nbsp;
        </label>
      </div>
    </>
  );
};

export default ComplaintTitleInputField;

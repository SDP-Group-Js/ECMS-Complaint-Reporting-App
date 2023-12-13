"use client";
import React from "react";
import "./ComplaintLocationInputField.css";

const ComplaintLocationInputField = () => {
  function handleFocus() {
    document
      .getElementById("complaintLocationLabel")
      ?.classList.add("focused-label");
  }

  return (
    <>
      <div className='input-container w-full'>
        <input
          type='text'
          id='complaintLocation'
          className='flex h-16 w-full items-center justify-start rounded-lg border-2 border-gray-400 px-4'
          onFocus={handleFocus}
        />
        <label
          id='complaintLocationLabel'
          htmlFor='complaintLocation'
          className='floating-label text-gray-500'
        >
          &nbsp;Location&nbsp;
        </label>
      </div>
    </>
  );
};

export default ComplaintLocationInputField;

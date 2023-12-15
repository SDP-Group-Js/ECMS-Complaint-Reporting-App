"use client";
import React from "react";

const ComplaintDetailsInputField = () => {
 
    function handleFocus() {
      document
        .getElementById("ComplaintDetailsLabel")
        ?.classList.add("focused-label");
    }
  return (
    <>
      <div className='input-container w-full'>
        <label
          id='ComplaintDetailsLabel'
          htmlFor='ComplaintDetails'
          className='px-2 text-black'
        >
          Details:
        </label>
        <textarea
          id='ComplaintDetails'
          className='h-40 w-full text-black rounded-lg  border-black  border-2 px-4 py-3'
          onFocus={handleFocus}
        />
      </div>
    </>
  );
};

export default ComplaintDetailsInputField;

"use client";
import React from "react";

const ComplaintDetailsInputField = () => {
  return (
    <>
      <div className='input-container w-full'>
        <label
          id='ComplaintDetailsLabel'
          htmlFor='ComplaintDetails'
          className='px-2 text-gray-500'
        >
          Details:
        </label>
        <textarea
          id='ComplaintDetails'
          className='h-40 w-full rounded-lg border-2 border-gray-400 px-4 py-3'
        />
      </div>
    </>
  );
};

export default ComplaintDetailsInputField;

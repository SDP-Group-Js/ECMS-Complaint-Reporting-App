"use client";
import React from "react";

type ComplaintDetailsInputFieldProps = {
  onChange: (e: any) => void;
};

const ComplaintDetailsInputField = ({
  onChange,
}: ComplaintDetailsInputFieldProps) => {
  function handleFocus() {
    document
      .getElementById("ComplaintDetailsLabel")
      ?.classList.add("focused-label");
  }
  return (
    <>
      <div className="input-container w-full">
        <label
          id="ComplaintDetailsLabel"
          htmlFor="ComplaintDetails"
          className="px-2 text-black"
        >
          Details:
        </label>
        <textarea
          id="ComplaintDetails"
          className="h-40 w-full rounded-lg border-2  border-black  px-4 py-3 text-black"
          onFocus={handleFocus}
          onChange={onChange}
        />
      </div>
    </>
  );
};

export default ComplaintDetailsInputField;

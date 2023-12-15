import React from "react";

type ComplaintStatusTagProps = {
  status: string;
};

const ComplaintStatusTag = ({ status }: ComplaintStatusTagProps) => {
  let classNames = "";
  if (status === "Processing") {
    classNames = "bg-red-500 text-white px-2 py-1 rounded-lg";
  } else if (status === "In Progress") {
    classNames = "bg-orange-500 text-white px-2 py-1 rounded-lg";
  } else if (status === "Resolved") {
    classNames = "bg-green-500 text-white px-2 py-1 rounded-lg";
  }
  return <div className={classNames}>{status}</div>;
};

export default ComplaintStatusTag;

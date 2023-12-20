import React from "react";

type ComplaintStatusTagProps = {
  status: string;
};

const ComplaintStatusTag = ({ status }: ComplaintStatusTagProps) => {
  let classNames = "";
  if (status === "Undefined") {
    classNames = "bg-gray-500 text-white rounded-lg px-2 py-1";
  } else if (status === "NotAssigned") {
    classNames = "bg-red-500 text-white rounded-lg px-2 py-1";
  } else if (status === "Ongoing") {
    classNames = "bg-orange-500 text-white rounded-lg px-2 py-1";
  } else if (status === "Completed") {
    classNames = "bg-green-500 text-white rounded-lg px-2 py-1";
  }
  return <div className={classNames}>{status}</div>;
};

export default ComplaintStatusTag;

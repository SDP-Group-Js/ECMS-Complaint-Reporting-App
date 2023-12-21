import React from "react";

type ComplaintStatusTagProps = {
  status: string;
};

const ComplaintStatusTag = ({ status }: ComplaintStatusTagProps) => {
  let classNames = "";
  if (status === "Undefined") {
    classNames =
      "bg-gray-500 w-32 text-white rounded-lg px-2 py-1 flex justify-center items-center";
    return <div className={classNames}>Processing</div>;
  } else if (status === "NotAssigned") {
    classNames =
      "bg-red-500 w-32 text-white rounded-lg px-2 py-1 flex justify-center items-center";
    return <div className={classNames}>Not Assigned</div>;
  } else if (status === "Ongoing") {
    classNames =
      "bg-orange-500 w-32 text-white rounded-lg px-2 py-1 flex justify-center items-center";
    return <div className={classNames}>{status}</div>;
  } else if (status === "Completed") {
    classNames =
      "bg-green-500 w-32 text-white rounded-lg px-2 py-1 flex justify-center items-center";
    return <div className={classNames}>{status}</div>;
  }
  return <div className={classNames}>{status}</div>;
};

export default ComplaintStatusTag;

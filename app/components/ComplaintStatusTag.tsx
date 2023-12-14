import React from "react";

type ComplaintStatusTagProps = {
  status: string;
};

const ComplaintStatusTag = ({ status }: ComplaintStatusTagProps) => {
  let classNames = "";
  if (status === "Recorded") {
    classNames = "bg-red-500 text-white";
  } else if (status === "In progress") {
    classNames = "bg-orange-500 text-white";
  } else if (status === "Resolved") {
    classNames = "bg-green-500 text-white";
  }
  return <div className={classNames}>{status}</div>;
};

export default ComplaintStatusTag;

import React, { useEffect, useState } from "react";

type ViewEvidenceCardProps = {
  files: { name: string; url: string }[];
};

const ViewEvidenceCard = ({ files }: ViewEvidenceCardProps) => {
  return (
    <>
      <label>Preview Files:</label>
      <div className="my-1 min-h-[300px] w-full rounded-md border-2 border-gray-400 px-2 py-2 text-base text-gray-600">
        {files.map((file, index) => (
          <img
            key={index}
            src={file.url}
            alt={`Preview ${index}`}
            className="mx-auto mb-2 max-h-[100px]"
          />
        ))}
      </div>
    </>
  );
};

export default ViewEvidenceCard;

import React from "react";
import { FaCloudUploadAlt } from "react-icons/fa";

type UploadEvidenceButtonProps = {
  handleClick: () => void;
};

const UploadEvidenceButton = ({ handleClick }: UploadEvidenceButtonProps) => {
  return (
    <>
      <button
        className="my-1 flex h-12 w-full items-center justify-center rounded-lg border-2 border-orange-950 bg-orange-950 px-4 py-2 text-lg text-white transition-all hover:font-bold md:w-60 lg:h-14 lg:text-xl"
        onClick={handleClick}
      >
        <FaCloudUploadAlt />
        &nbsp;
        <span>Upload Files</span>
      </button>
    </>
  );
};

export default UploadEvidenceButton;

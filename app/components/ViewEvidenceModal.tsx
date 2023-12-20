import React, { useEffect, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import BlankLine from "./BlankLine";
import { storage } from "../../config/firebase";
import { getDownloadURL, listAll, ref } from "firebase/storage";
import ViewEvidenceCard from "./ViewEvidenceCard";

type ViewEvidenceModalProps = {
  isVisible: boolean;
  actionId: number;
  handleCloseButtonClick: () => void;
};

const ViewEvidenceModal = ({
  isVisible,
  actionId,
  handleCloseButtonClick,
}: ViewEvidenceModalProps) => {
  const [files, setFiles] = useState<any[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      const actionEvidenceRef = ref(storage, `action-evidence/${actionId}/`);

      try {
        const imageList = await listAll(actionEvidenceRef);

        const imageFiles = await Promise.all(
          imageList.items.map(async (imageRef) => {
            const downloadURL = await getDownloadURL(imageRef);
            return { name: imageRef.name, url: downloadURL };
          }),
        );

        setFiles(imageFiles);
      } catch (error) {
        console.error("Error fetching images:", error);
        setFiles([]);
      }
    };
    if (isVisible) {
      fetchImages();
    }
  }, [isVisible, actionId]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-25 backdrop-blur-sm">
      <div className="flex w-[400px] flex-col rounded-lg bg-white p-2 md:w-[550px] lg:w-[600px]">
        <div
          id="ViewEvidenceModalTitle"
          className="mx-1 flex items-center justify-between md:mx-2 lg:mx-3"
        >
          <h2 className="text-base font-bold md:text-lg lg:text-xl">
            Upload Files
          </h2>
          <button
            className="place-self-end text-xl text-black"
            onClick={handleCloseButtonClick}
          >
            <IoCloseSharp />
          </button>
        </div>
        <BlankLine />
        <BlankLine />
        <div id="ViewEvidenceModalBody" className="mx-1 md:mx-3 lg:mx-5">
          <ViewEvidenceCard files={files} />
        </div>
        <BlankLine />
        <BlankLine />
      </div>
    </div>
  );
};

export default ViewEvidenceModal;

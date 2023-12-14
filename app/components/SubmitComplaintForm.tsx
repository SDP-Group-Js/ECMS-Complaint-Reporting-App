"use client";
import React, { useState } from "react";
import BlankLine from "./BlankLine";
import ComplaintDetailsInputField from "./ComplaintDetailsInputField";
import ComplaintLocationInputField from "./ComplaintLocationInputField";
import SubmitComplaintFinalButton from "./SubmitComplaintFinalButton";
import UploadEvidenceButton from "./UploadEvidenceButton";
import UploadEvidenceModal from "./UploadEvidenceModal";
import { storage } from "../../config/firebaseStorage";
import { ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import { LuBird } from "react-icons/lu";

type SubmitComplaintFormProps = {
  complaintId: number;
};

const SubmitComplaintForm = ({ complaintId }: SubmitComplaintFormProps) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [filesToUpload, setFilesToUpload] = useState<File[]>([]);
  const iconStyle = {
    marginRight: "8px", // Space after the icon
  };
  function handleUploadEvidenceButtonClick() {
    setModalVisible(true);
  }

  function handleModalCloseButtonClick() {
    setModalVisible(false);
  }

  function handleModalUploadEvidence(e: React.ChangeEvent<HTMLInputElement>) {
    const files = e.target.files;
    if (files == null) return;
    const fileList = Array.from(files) as File[];
    setFilesToUpload(fileList);
  }

  function handleSubmitComplaintFinalButtonClick() {
    uploadImages(complaintId);
    setModalVisible(false);
  }

  function uploadImages(complaintId: number) {
    if (filesToUpload.length === 0) return;
    filesToUpload.forEach((file) => {
      const complaintEvidenceRef = ref(
        storage,
        `complaint-evidence/${complaintId}/${file.name + v4()}`
      );
      uploadBytes(complaintEvidenceRef, file).then(() => {
        alert("Uploaded successfully");
      });
    });
  }

  return (
    <>
      <section>
        <br />
        <h1 className='mx-4 flex items-center justify-center text-base font-bold md:justify-start md:text-lg lg:text-xl'>
        <LuBird  style={iconStyle} /> Wildlife Complaint Reporting
        </h1>
      </section>
      
      <BlankLine />
      <section className='mx-4 lg:mx-2'>
        <ComplaintLocationInputField />
        <BlankLine />
        <div className='flex items-center justify-center'>
          <UploadEvidenceButton handleClick={handleUploadEvidenceButtonClick} />
        </div>
        {/* <div className="flex items-center justify-center">
          <TakePictureButton />
        </div> */}
        <BlankLine />
        <ComplaintDetailsInputField />
        <BlankLine />
        <BlankLine />
        <div className='flex items-center justify-center'>
          <SubmitComplaintFinalButton
            complaintId={complaintId}
            onClick={handleSubmitComplaintFinalButtonClick}
          />
        </div>
        <BlankLine />
      </section>
      <UploadEvidenceModal
        isVisible={modalVisible}
        files={filesToUpload}
        handleCloseButtonClick={handleModalCloseButtonClick}
        handleUploadButtonClick={handleModalUploadEvidence}
      />
    </>
  );
};

export default SubmitComplaintForm;

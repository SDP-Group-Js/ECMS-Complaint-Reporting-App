"use client";
import React, { useState } from "react";
import BlankLine from "./BlankLine";
import ComplaintDetailsInputField from "./ComplaintDetailsInputField";
import ComplaintLocationInputField from "./ComplaintLocationInputField";
import SubmitComplaintFinalButton from "./SubmitComplaintFinalButton";
import UploadEvidenceButton from "./UploadEvidenceButton";
import UploadEvidenceModal from "./UploadEvidenceModal";
import { auth, storage } from "../../config/firebase";
import { ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import { LuBird } from "react-icons/lu";
import ComplaintTitleInputField from "./ComplaintTitleInputField";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/auth";

const SubmitComplaintForm = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [filesToUpload, setFilesToUpload] = useState<File[]>([]);

  const [title, setTitle] = useState("Wildlife Complaint");
  const [description, setDescription] = useState("");
  const [complaintId, setComplaintId] = useState(0);
  const { user, userId, fetchData } = useAuth();

  const router = useRouter();

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

  async function handleSubmitComplaintFinalButtonClick() {
    const SERVER_URL = "http://localhost:8080";
    const complainerId = auth.currentUser?.uid;
    const complaintTitle = title;
    const complaintDescription = description;
    const body = JSON.stringify({
      complaintTitle,
      complaintDescription,
      complainerId,
    });
    const response = await fetch(`${SERVER_URL}/api/complaint`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${await auth.currentUser?.getIdToken()}`,
      },
      body: body,
    });
    const data = await response.json();
    const complaintId = data.id;
    uploadImages(complaintId);
    setModalVisible(false);
    alert(
      "Wildlife complaint submitted successfully. Thank you!\nID: " +
        complaintId,
    );
    //fetchData(userId, await auth.currentUser?.getIdToken());
    router.push(`/view-complaint/${complaintId}`);
  }

  function uploadImages(complaintId: number) {
    if (filesToUpload.length === 0) return;
    filesToUpload.forEach((file) => {
      const complaintEvidenceRef = ref(
        storage,
        `complaint-evidence/${complaintId}/${file.name + v4()}`,
      );
      uploadBytes(complaintEvidenceRef, file).then(() => {
        console.log("Images Uploaded successfully");
      });
    });
  }

  return (
    <>
      <section>
        <br />
        <h1 className="mx-4 flex items-center justify-center text-base font-bold md:justify-start md:text-lg lg:text-xl">
          <LuBird style={iconStyle} /> Wildlife Complaint Reporting
        </h1>
      </section>

      <BlankLine />
      <section className="mx-4 lg:mx-2">
        <ComplaintLocationInputField />
        <BlankLine />
        <div className="flex items-center justify-center">
          <UploadEvidenceButton handleClick={handleUploadEvidenceButtonClick} />
        </div>
        {/* <div className="flex items-center justify-center">
          <TakePictureButton />
        </div> */}
        <BlankLine />
        <ComplaintTitleInputField
          onChange={(e) => {
            setTitle("General Complaint: " + e.target.value);
          }}
        />
        <BlankLine />
        <BlankLine />
        <ComplaintDetailsInputField
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <BlankLine />
        <BlankLine />
        <div className="flex items-center justify-center">
          <SubmitComplaintFinalButton
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

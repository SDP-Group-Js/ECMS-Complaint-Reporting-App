"use client";
import React, { useState } from "react";
import { IoMdOpen } from "react-icons/io";
import ViewEvidenceModal from "./ViewEvidenceModal";

type EvidenceButtonProps = {
  actionId: number;
};

const ViewEvidenceButton = ({ actionId }: EvidenceButtonProps) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <button
        className="flex h-12 w-44 items-center justify-center rounded-lg border-2 border-emerald-500 bg-emerald-500 px-4 py-2 text-sm text-white transition-all hover:font-bold lg:h-10 lg:w-48 lg:text-base"
        onClick={() => setModalVisible(true)}
      >
        <span>View Evidence</span>
        &nbsp;
        <IoMdOpen />
      </button>
      <ViewEvidenceModal
        isVisible={modalVisible}
        actionId={actionId}
        handleCloseButtonClick={() => setModalVisible(false)}
      />
    </>
  );
};

export default ViewEvidenceButton;

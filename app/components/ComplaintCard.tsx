import React from "react";
import BlankLine from "./BlankLine";
import ActionDataRow from "./ActionDataRow";
import ComplaintStatusTag from "./ComplaintStatusTag";

type ComplaintCardProps = {
  complaintId: number;
};

const ComplaintCard = async ({ complaintId }: ComplaintCardProps) => {
  const SERVER_URL = "http://localhost:8080";
  const response = await fetch(`${SERVER_URL}/api/complaint/${complaintId}`);
  const complaint = await response.json();
  const investigation = complaint.investigation;
  let investigationStages: any;
  if (!investigation) {
    investigationStages = "Undefined";
  } else {
    investigationStages = investigation.investigationStages;
  }

  const getCurrentStatus = (investigation: any): any => {
    if (!investigation) return <ComplaintStatusTag status="Undefined" />;
    else return investigation?.status;
  };

  const getCurrentStage = (investigation: any): any => {
    for (const stage of investigation?.investigationStages || []) {
      if (stage.status === "Ongoing") {
        return stage;
      }
    }
    return null;
  };

  function formatComplaintId(
    complaintId: number,
    maxCharacters: number,
  ): string {
    const characters = Math.max(maxCharacters, 3);
    const formattedId = complaintId.toString().padStart(characters, "0");
    const hashedId = "#" + formattedId;
    return hashedId;
  }

  return (
    <section className="mx-2 my-2 rounded-lg border-2 border-gray-400 px-2 py-2 text-base text-gray-600 lg:mx-2 lg:text-lg">
      <div className="flex items-center justify-start text-base font-bold md:justify-start md:text-lg lg:text-xl">
        <div className="mx-2">C{formatComplaintId(complaintId, 3)}</div>
        <div className="mx-2">
          <ComplaintStatusTag status={getCurrentStatus(investigation)} />
        </div>
        <div className="mx-2 block">{complaint.complaint_title}</div>
      </div>

      <BlankLine />

      <div className="md:text:lg flex items-center justify-start text-base font-bold lg:text-xl">
        <h2 className="mx-1 mt-2 flex w-full justify-center text-lg font-bold lg:mt-0 lg:justify-start">
          Actions Taken
        </h2>
      </div>

      <BlankLine />

      {investigationStages == "Undefined" ? (
        <div>
          Complaint is still being processed, waiting until an investigation is
          created.
        </div>
      ) : (
        investigationStages.map((stage: any) => (
          <>
            <h3 className="mx-1 flex justify-start text-lg font-bold">
              {stage.name}
            </h3>
            <BlankLine />
            {stage.actions.map((action: any) => (
              <div className="mx-1 flex items-center justify-start">
                <ActionDataRow actionId={action.id} actionName={action.name} />
              </div>
            ))}
          </>
        ))
      )}
    </section>
  );
};

export default ComplaintCard;

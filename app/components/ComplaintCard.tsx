import React from "react";
import BlankLine from "./BlankLine";
import ActionDataRow from "./ActionDataRow";
import ComplaintStatusTag from "./ComplaintStatusTag";

type ComplaintCardProps = {
  complaintId: number;
  complaintStatus: string;
  complaintTitle: string;
};

const ComplaintCard = async ({
  complaintId,
  complaintStatus,
  complaintTitle,
}: ComplaintCardProps) => {
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
          <ComplaintStatusTag status={complaintStatus} />
        </div>
        <div className="mx-2 block">{complaintTitle}</div>
      </div>

      <BlankLine />

      <div className="md:text:lg flex items-center justify-start text-base font-bold lg:text-xl">
        <h2 className="mx-1 mt-2 flex w-full justify-center text-lg font-bold lg:mt-0 lg:justify-start">
          Actions Taken
        </h2>
      </div>

      <BlankLine />

      <h3 className="mx-1 flex justify-start text-lg font-bold">
        [Stage Name]
      </h3>
      <BlankLine />
      <div className="mx-1 flex items-center justify-start">
        <ActionDataRow actionId={0} actionName="[Action Taken]" />
      </div>
      <div className="mx-1 flex items-center justify-start">
        <ActionDataRow actionId={2} actionName="[Action Taken]" />
      </div>
      <div className="mx-1 flex items-center justify-start">
        <ActionDataRow actionId={3} actionName="[Action Taken]" />
      </div>
      <BlankLine />

      <h3 className="mx-1 flex justify-start text-lg font-bold">
        [Stage Name]
      </h3>
      <BlankLine />
      <div className="mx-1 flex items-center justify-start">
        <ActionDataRow actionId={4} actionName="[Action Taken]" />
      </div>
    </section>
  );
};

export default ComplaintCard;

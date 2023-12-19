import React from "react";
import BlankLine from "./BlankLine";
import ActionDataRow from "./ActionDataRow";
import ComplaintStatusTag from "./ComplaintStatusTag";
import Link from "next/link";

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
    <section className="mx-6 my-2 w-full rounded-lg border-2 border-gray-400 py-2 text-base text-gray-600 lg:mx-2 lg:text-lg">
      <Link href={`./view-complaint/${complaintId}`}>
        <div className="flex items-center justify-start text-base font-bold md:justify-start md:text-lg lg:text-xl">
          <div className="mx-2">C{formatComplaintId(complaintId, 3)}</div>
          <div className="mx-2">
            <ComplaintStatusTag status={complaintStatus} />
          </div>
          <div className="mx-2 block">{complaintTitle}</div>
        </div>
      </Link>
    </section>
  );
};

export default ComplaintCard;

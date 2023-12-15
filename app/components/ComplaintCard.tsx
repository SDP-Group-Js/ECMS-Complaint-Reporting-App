import React from "react";
import BlankLine from "./BlankLine";
import ActionDataRow from "./ActionDataRow";
import ComplaintStatusTag from "./ComplaintStatusTag";

type ComplaintCardProps = {
  complaintId: number;
  complaintStatus: string;
  complaintDate: Date;
};

const ComplaintCard = async ({
  complaintId,
  complaintStatus,
  complaintDate,
}: ComplaintCardProps) => {
  function formatComplaintId(
    complaintId: number,
    maxCharacters: number
  ): string {
    const characters = Math.max(maxCharacters, 3);
    const formattedId = complaintId.toString().padStart(characters, "0");
    const hashedId = "#" + formattedId;
    return hashedId;
  }

  return (
    <section className='my-2 mx-2 rounded-lg border-2 border-gray-400 px-2 py-2 text-base text-gray-600 lg:mx-2 lg:text-lg'>
      <div className='flex items-center text-base font-bold md:text-lg lg:text-xl justify-between md:justify-start'>
        <div className='mx-2'>C{formatComplaintId(complaintId, 3)}</div>
        <div className='mx-2'>
          <ComplaintStatusTag status={complaintStatus} />
        </div>
        <div className='mx-2 block'>{complaintDate.toLocaleDateString()}</div>
      </div>

      <BlankLine />

      <div className='hidden md:block'>
        <BlankLine />
      </div>
      <div className='flex justify-start items-center font-bold text-base md:text:lg lg:text-xl'>
        <h2 className='flex w-full justify-center text-lg font-bold mx-1 mt-2 md:mt-0 md:justify-start'>
          <span>Actions Taken</span>
        </h2>
      </div>
      <div className='hidden md:block'>
        <BlankLine />
      </div>

      <BlankLine />

      <h3 className='flex justify-start text-lg font-bold mx-1'>
        [Stage Name]
      </h3>

      <BlankLine />

      <div className='flex justify-start items-center mx-1'>
        <ActionDataRow actionId={0} actionName='[Action Taken]' />
      </div>
      <div className='flex justify-start items-center mx-1'>
        <ActionDataRow actionId={2} actionName='[Action Taken]' />
      </div>
      <div className='flex justify-start items-center mx-1'>
        <ActionDataRow actionId={3} actionName='[Action Taken]' />
      </div>

      <BlankLine />

      <h3 className='flex justify-start text-lg font-bold mx-1'>
        [Stage Name]
      </h3>

      <BlankLine />

      <div className='flex justify-start items-center mx-1'>
        <ActionDataRow actionId={0} actionName='[Action Taken]' />
      </div>
    </section>
  );
};

export default ComplaintCard;
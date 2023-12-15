import React from "react";
import ViewEvidenceButton from "./ViewEvidenceButton";

type ActionDataRowProps = {
  actionId: number;
  actionName: string;
};

const ActionDataRow = ({ actionId, actionName }: ActionDataRowProps) => {
  return (
    <div className='flex h-12 w-full my-2 pl-2 justify-between items-center border-slate-400 rounded-lg border-2'>
      <div className='w-[60%]'>{actionName}</div>
      <ViewEvidenceButton actionId={actionId} />
    </div>
  );
};

export default ActionDataRow;

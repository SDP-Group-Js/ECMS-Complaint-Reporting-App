"use client";

import { auth } from "@/config/firebase";
import CollapsedComplaintCard from "../components/CollapsedComplaintCard";
import NavBar from "../components/NavBar";
import { useAuth } from "@/context/auth";
import ComplaintStatusTag from "../components/ComplaintStatusTag";

export default function Home() {
  const { complaints } = useAuth();

  const inferComplaintStatus = (complaint: any): any => {
    console.log(complaint);
    if (!complaint.investigation)
      return <ComplaintStatusTag status="Undefined" />;
    return <ComplaintStatusTag status={complaint.investigation.status} />;
  };

  return (
    <div>
      <NavBar />
      <section className="mx-4 mt-5 flex flex-col items-center justify-center">
        {complaints.map((complaint: any) => (
          <CollapsedComplaintCard
            key={complaint.id}
            complaintId={parseInt(complaint.id)}
            complaintStatus={inferComplaintStatus(complaint)}
            complaintTitle={complaint.complaint_title}
          />
        ))}
      </section>
    </div>
  );
}

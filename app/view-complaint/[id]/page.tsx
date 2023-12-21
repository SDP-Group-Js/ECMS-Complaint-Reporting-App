"use client";

import ViewEvidenceButton from "@/app/components/ViewEvidenceButton";
import NavBar from "../../components/NavBar";
import BlankLine from "@/app/components/BlankLine";
import ActionDataRow from "@/app/components/ActionDataRow";
import ComplaintCard from "@/app/components/ComplaintCard";
import { useAuth } from "@/context/auth";

interface ViewComplaintParams {
  params: { id: number };
}

export default function Home({ params }: ViewComplaintParams) {
  const complaintId = params.id;
  const { complaints } = useAuth();
  const selectedComplaint = complaints.find(
    (complaint) => complaint.id == complaintId,
  );
  console.log(selectedComplaint);

  return (
    <div className="sticky top-0">
      <NavBar />
      <BlankLine />
      <BlankLine />
      <main>
        {selectedComplaint !== undefined && (
          <ComplaintCard complaint={selectedComplaint} />
        )}
        {selectedComplaint === undefined && (
          <div>
            Complaint does not exist or does not belong to the current user
          </div>
        )}
      </main>
    </div>
  );
}

import ViewEvidenceButton from "@/app/components/ViewEvidenceButton";
import NavBar from "../../components/NavBar";
import BlankLine from "@/app/components/BlankLine";
import ActionDataRow from "@/app/components/ActionDataRow";
import ComplaintCard from "@/app/components/ComplaintCard";

interface ViewComplaintParams {
  params: { id: number };
}

export default function Home({ params }: ViewComplaintParams) {
  const complaintId = params.id;

  return (
    <div className="sticky top-0">
      <NavBar />
      <BlankLine />
      <BlankLine />
      <main>
        <ComplaintCard complaintId={complaintId} />
      </main>
    </div>
  );
}

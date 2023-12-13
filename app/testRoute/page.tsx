import SubmitComplaintForm from "@/app/components/SubmitComplaintForm";

export default function Home() {
  const complaintId = 0; //TBA - Generate a new Id from the API

  return (
    <main>
      <SubmitComplaintForm complaintId={complaintId} />
    </main>
  );
}

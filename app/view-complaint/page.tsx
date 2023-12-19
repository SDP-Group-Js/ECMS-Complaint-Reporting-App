import CollapsedComplaintCard from "../components/CollapsedComplaintCard";
import NavBar from "../components/NavBar";

export default async function Home() {
  const SERVER_URL = "http://localhost:8080";
  const response = await fetch(`${SERVER_URL}/api/complaint`);
  const complaints = await response.json();

  const inferComplaintStatus = (complaint: any): string => {
    if (!complaint.investigation) return "Processing";
    return complaint.investigation.status;
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

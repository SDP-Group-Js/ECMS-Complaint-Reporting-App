import SubmitComplaintForm from "@/app/components/SubmitComplaintFormWl";
import NavBar from "../components/NavBar";

export default function Home() {
  const complaintId = 0; //TBA - Generate a new Id from the API

  return (
    <main>
      <NavBar />
      <SubmitComplaintForm complaintId={complaintId} />
      
    </main>
  );
}

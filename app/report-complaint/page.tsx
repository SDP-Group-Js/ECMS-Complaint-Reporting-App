import React from "react";
import NavBar from "../components/NavBar";
import Complaints from "../components/ComplaintOptionsButtons";


const Header = () => {
  return (
    <div className="sticky top-0">
      <NavBar />
     <Complaints/>
    </div>
  );
};

export default Header;

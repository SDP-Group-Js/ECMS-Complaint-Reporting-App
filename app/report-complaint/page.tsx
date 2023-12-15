import React from "react";
import NavBar from "../components/NavBar";
import Complaints from "../components/ComplaintOptionsButtons";

const Header = () => {
  return (
    <div className='sticky top-0'>
      <NavBar />
      <section className='flex items-center justify-center'>
        <Complaints />
      </section>
    </div>
  );
};

export default Header;

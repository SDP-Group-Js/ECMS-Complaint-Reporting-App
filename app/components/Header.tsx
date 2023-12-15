import React from "react";
import NavBar from "./NavBar";
import WelcomeRibbon from "../WelcomeRibbon";

const Header = () => {
  return (
    <div className="sticky top-0">
      <NavBar />
      <WelcomeRibbon />
    </div>
  );
};

export default Header;
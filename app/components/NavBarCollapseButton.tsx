import React from "react";
import { BsList } from "react-icons/bs";

type NavBarCollapseButtonProps = {
  onClick: () => void;
};

const NavBarCollapseButton = (props: NavBarCollapseButtonProps) => {
  return (
    <>
      <button
        className="m-0 flex items-center justify-center text-2xl font-bold text-white"
        onClick={props.onClick}
      >
        <BsList />
      </button>
    </>
  );
};

export default NavBarCollapseButton;
"use client";
import React from "react";

type LogoutButtonProps = {
  onClick: () => void;
};

const LogoutButton = ({ onClick }: LogoutButtonProps) => {
  return (
    <>
      <button
        className="flex items-center rounded-full border-2 border-green-200 px-4 py-2 font-bold text-green-200 transition-colors hover:border-white hover:bg-white hover:text-emerald-500 md:h-8 md:text-sm lg:h-10 lg:text-base"
        onClick={onClick}
      >
        Logout
      </button>
    </>
  );
};

export default LogoutButton;

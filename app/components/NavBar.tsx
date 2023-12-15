"use client";
import Link from "next/link";
import React from "react";
import { useState } from "react";
import LogoutButton from "./LogoutButton";
import NavBarCollapseButton from "./NavBarCollapseButton";
import styles from "./NavBar.module.css";

const NavBar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleCollapse = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <nav className='h-full w-full'>
      <div
        id='mainContent'
        className='flex h-12 w-full items-center justify-between bg-emerald-500 px-4 py-3 md:h-14 lg:h-16'
      >
        <Link
          href='/report-complaint'
          className='text-sm font-bold text-white md:text-base lg:text-lg'
        >
          <h1>Environment Complaint Reporting</h1>
        </Link>
        <div className='md:hidden'>
          <NavBarCollapseButton onClick={handleCollapse} />
        </div>
        <div className='hidden md:block'>
          <LogoutButton />
        </div>
      </div>
      <div
        id='collapsedContent'
        className={`flex-grow items-center justify-center rounded-md bg-emerald-100 shadow md:hidden ${
          isExpanded ? "" : "hidden"
        }`}
      >
        <ul>
          <li className='block px-4 py-2 text-sm hover:font-bold'>Item 1</li>
          <li className='block px-4 py-2 text-sm hover:font-bold'>Item 2</li>
          <li className='block px-4 py-2 text-sm text-red-600 hover:font-bold'>
            <button>Logout</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;

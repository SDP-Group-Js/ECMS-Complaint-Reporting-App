import React from "react";
import NavBar from "../components/NavBar";
import Complaints from "../components/ComplaintOptionsButtons";
import BlankLine from "../components/BlankLine";
import Link from "next/link";

const Header = () => {
  return (
    <div>
      <NavBar />
      <section className="flex h-screen flex-col items-center justify-center">
        <Complaints />
        <div className="mt-20 flex h-14 w-40 items-center justify-center rounded-md border-2 border-emerald-500 bg-emerald-500 text-lg font-bold text-white transition-colors hover:bg-white hover:text-emerald-500">
          <Link
            href="view-complaint"
            className="flex items-center justify-center"
          >
            My complaints
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Header;

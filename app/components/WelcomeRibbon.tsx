import React from "react";

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

const WelcomeRibbon = () => {
  const currentDate = new Date().toLocaleDateString();

  return (
    <section className="flex items-center justify-between bg-orange-950 px-4 py-2 text-xs font-bold text-white md:text-sm lg:text-base">
      <div>Welcome, [Officer Name]</div>
      <div>{currentDate}</div>
    </section>
  );
};

export default WelcomeRibbon;
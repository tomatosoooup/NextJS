"use client";

import { useTranslations } from "next-intl";

const Navbar = () => {
  const t = useTranslations("Navbar");

  return (
    <div className="fixed inset-0 min-h-fit lg:hidden">
      <div className="max-w-full m-auto mt-5 px-5 mb-5 "></div>
    </div>
  );
};

export default Navbar;

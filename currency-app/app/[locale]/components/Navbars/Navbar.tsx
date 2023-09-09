"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
// import DropDown from "../DropDown";

const Navbar = () => {
  const t = useTranslations("Navbar");

  return (
    // fixed inset-0 w-screen z-20
    <div className="min-h-fit hidden lg:block">
      <div className="max-w-screen-2xl m-auto mt-5 px-5 mb-5">
        <ul className="flex list-none items-center justify-between h-full text-[20px] uppercase text-white w-full">
          <Link href="/" className="flex-shrink-0">
            {t("main")}
          </Link>
          <Link href="/" className="flex-shrink-0">
            {t("contacts")}
          </Link>
          <div className="text-center flex flex-col font-medium flex-shrink relative">
            <div className="w-16 h-[1px] bg-gradient-to-l from-white to-white/10 absolute -left-28 top-10"></div>

            <span className="text-6xl tracking-[0.5rem]">KLTP</span>
            <span className="text-lg tracking-[0.5rem] lowercase font-normal">
              exchange
            </span>
            <div className="w-16 h-[1px] bg-gradient-to-r from-white to-white/10 absolute -right-28 top-10"></div>
          </div>
          <Link href="/" className="flex-shrink-0">
            {t("about")}
          </Link>
          <Link href="/" className="flex-shrink-0">
            {t("services")}
          </Link>
          {/* <DropDown /> */}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import DropDown from "../DropDown";

const Navbar = () => {
  const t = useTranslations("Navbar");

  return (
    <div className="fixed inset-0 min-h-fit hidden md:block">
      <div className="max-w-7xl m-auto mt-5 px-5 mb-5">
        <ul className="flex list-none items-center justify-center h-full text-[20px] uppercase text-white">
          <Link href="/" className="mr-auto">
            {t("main")}
          </Link>
          <Link href="/" className="lg:mr-16">
            {t("contacts")}
          </Link>
          <div className="text-center flex flex-col font-medium mx-10 lg:mx-24">
            <span className="text-6xl tracking-[0.5rem]">KLTP</span>
            <span className="text-lg tracking-[0.5rem] lowercase font-normal">
              exchange
            </span>
          </div>
          <Link href="/" className="lg:ml-16">
            {t("about")}
          </Link>
          <Link href="/" className="ml-auto">
            {t("services")}
          </Link>
          <div className="ml-auto">
            <DropDown />
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

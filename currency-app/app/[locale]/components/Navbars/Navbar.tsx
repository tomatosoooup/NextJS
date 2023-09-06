"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";

const Navbar = () => {
  const t = useTranslations("Navbar");

  return (
    <div className="fixed inset-0 min-h-fit hidden md:block">
      <div className="max-w-7xl m-auto mt-5 px-5 mb-5">
        <ul className="flex list-none items-center justify-center h-full text-[20px] uppercase text-white">
          <Link href="/ua" className="mr-16">
            {t("main")}
          </Link>
          <Link href="/en" className="mr-auto">
            {t("contacts")}
          </Link>
          <div className="text-center flex flex-col font-medium lg:mx-36">
            <span className="text-6xl tracking-[0.5rem]">KLTP</span>
            <span className="text-lg tracking-[0.5rem] lowercase font-normal">
              exchange
            </span>
          </div>
          <Link href="/" className="ml-auto">
            {t("about")}
          </Link>
          <Link href="/" className="ml-16">
            {t("services")}
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

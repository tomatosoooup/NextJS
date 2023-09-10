"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { useFonts } from "@/providers/FontProvider";

const Navbar = () => {
  const t = useTranslations("Navbar");

  const fonts = useFonts();

  return (
    // fixed inset-0 w-screen z-20
    <div className="min-h-fit hidden lg:block">
      <div className="max-w-screen-2xl m-auto mt-5 px-5 mb-5">
        <ul
          className="flex list-none items-center justify-between h-full text-[20px] uppercase text-white w-full font-extralight"
          style={{ fontFamily: `${fonts.tt}` }}
        >
          <Link href="/" className="flex-shrink-0 mt-7">
            {t("main")}
          </Link>
          <Link href="/" className="flex-shrink-0 mt-7">
            {t("contacts")}
          </Link>
          <div className="text-center flex flex-col font-medium flex-shrink relative">
            <div className="w-16 h-[1px] bg-gradient-to-l from-white to-white/10 absolute -left-28 top-14"></div>
            <span
              className="text-6xl tracking-[0.5rem]"
              style={{ fontFamily: `${fonts.cf}` }}
            >
              KLTP
            </span>
            <span
              className="text-xl tracking-[0.7rem] lowercase font-light"
              style={{ fontFamily: `${fonts.ct}` }}
            >
              exchange
            </span>
            <div className="w-16 h-[1px] bg-gradient-to-r from-white to-white/10 absolute -right-28 top-14"></div>
          </div>
          <Link href="/" className="flex-shrink-0 mt-7">
            {t("about")}
          </Link>
          <Link href="/" className="flex-shrink-0 mt-7">
            {t("services")}
          </Link>
          {/* <DropDown /> */}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
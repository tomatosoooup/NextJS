"use client";

// import { useTranslations } from "next-intl";
import BurgerMenu from "./BurgerMenu";
import DropDown from "../DropDown";

const Navbar = () => {
  // const t = useTranslations("Navbar");

  return (
    <div className="fixed inset-0 min-h-fit lg:hidden z-10">
      <div className="max-w-full m-auto mt-5 px-5 mb-5 flex items-center">
        <BurgerMenu />
        <div className="text-center flex flex-col font-medium ml-6 text-white">
          <span className="text-4xl tracking-[0.2rem]">KLTP</span>
          <span className="text-xs tracking-[0.2rem] lowercase font-normal">
            exchange
          </span>
        </div>
        <div className="ml-auto">
          <DropDown />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

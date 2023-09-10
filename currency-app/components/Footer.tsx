"use client";

import { useFonts } from "@/providers/FontProvider";
import Link from "next/link";

const Footer = () => {
  const fonts = useFonts();
  return (
    <div className="min-h-fit max-w-screen-2xl m-auto pt-16 pb-8 relative z-10">
      <div className="flex flex-col lg:flex-row w-full items-center justify-between">
        <div
          className="w-full order-1 lg:order-none"
          style={{ fontFamily: `${fonts.gt}` }}
        >
          <ul className="flex flex-col px-5 gap-2 text-[#D3D3D3] text-lg font-light">
            <span className="text-white text-xl font-normal">Контакт</span>
            <Link href={"/"}>About us</Link>
            <Link href={"/"}>Contacts for mass media</Link>
            <Link href={"/"}>How else to pay</Link>
            <Link href={"/"}>Add a podcast</Link>
          </ul>
        </div>
        <div
          className="text-center flex flex-col font-medium flex-shrink relative text-white order-3 mt-10 md:mt-0 lg:order-none"
          style={{ fontFamily: `${fonts.ct}` }}
        >
          <div className="w-12 md:w-24 lg:w-36 h-[1px] bg-gradient-to-l from-white to-white/10 absolute -left-16 md:-left-32 lg:-left-40 top-12 lg:top-24"></div>
          <span className="text-7xl lg:text-8xl  tracking-[0.7rem] font-extrabold">
            KLTP
          </span>
          <span className="text-xl lg:text-4xl tracking-[0.7rem] lowercase font-light leading-4">
            exchange
          </span>
          <div className="w-12 md:w-24 lg:w-36 h-[1px] bg-gradient-to-r from-white to-white/10 absolute -right-16 md:-right-32 lg:-right-40 top-12 lg:top-24"></div>
        </div>
        <div
          className="w-full order-2 lg:order-none"
          style={{ fontFamily: `${fonts.gt}` }}
        >
          <ul className="flex flex-col px-5 text-right gap-2 text-[#D3D3D3] text-lg font-light">
            <span className="text-white text-xl font-normal">Адреса</span>
            <Link href={"/"}>Крислаотя 2</Link>
            <Link href={"/"}>Mobile devices</Link>
            <Link href={"/"}>Computer</Link>
            <Link href={"/"}>Connect to TV</Link>
          </ul>
        </div>
      </div>
      <div className="text-center mt-12 mb-3 text-white/50 text-xs ">
        © 2023 KLTP - crypto and financial solutions
      </div>
    </div>
  );
};

export default Footer;

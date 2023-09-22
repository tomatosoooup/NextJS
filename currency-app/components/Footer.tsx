"use client";

import { useFonts } from "@/providers/FontProvider";
import Link from "next/link";
import Numbers from "./Numbers";

const Footer = () => {
  const fonts = useFonts();
  return (
    <div className="max-w-screen-2xl m-auto relative z-10" id="footer">
      <div className="lg:grid lg:grid-cols-4 mt-20">
        <div
          className="text-center flex flex-col font-medium text-white"
          style={{ fontFamily: `${fonts.cf}` }}
        >
          <span className="text-5xl lg:text-6xl tracking-[0.7rem] font-extrabold">
            KLTP
          </span>
          <span
            className="text-sm lg:text-xl tracking-[0.7rem] lowercase font-light leading-4"
            style={{ fontFamily: `${fonts.ct}` }}
          >
            exchange
          </span>
        </div>
        <div className="">
          <h4>Локализация</h4>
          <div className="flex">
            <div>ul 1</div>
            <div>ul 2</div>
          </div>
        </div>
        <div></div>
      </div>
      <div
        className="text-center mt-12 mb-3 text-white/50 text-sm"
        style={{ fontFamily: `${fonts.tt}` }}
      >
        © 2023 KLTP - crypto and financial solutions
      </div>
    </div>
  );
};

export default Footer;

{
  /* <Numbers containerClass="text-5xl -top-20 left-56" spanClass="blur opacity-30" nums={[1,1,0,1,0]}/>
        <Numbers containerClass="text-8xl -top-56 right-96" spanClass="blur opacity-20" nums={[0,0,0,1,0]}/>
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
          style={{ fontFamily: `${fonts.cf}` }}
        >
          <div className="w-12 md:w-24 lg:w-36 h-[1px] bg-gradient-to-l from-white to-white/10 absolute -left-16 md:-left-32 lg:-left-48 top-12 lg:top-32"></div>
          <span className="text-5xl lg:text-9xl tracking-[0.7rem] font-extrabold">
            KLTP
          </span>
          <span className="text-sm lg:text-5xl tracking-[0.7rem] lg:tracking-[1rem] lowercase font-light leading-4" style={{ fontFamily: `${fonts.ct}` }}>
            exchange
          </span>
          <div className="w-12 md:w-24 lg:w-36 h-[1px] bg-gradient-to-r from-white to-white/10 absolute -right-16 md:-right-32 lg:-right-48 top-12 lg:top-32"></div>
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
      </div> */
}

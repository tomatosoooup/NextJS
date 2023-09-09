"use client";

import Link from "next/link";

const Footer = () => {
  return (
    <div className="min-h-screen max-w-screen-2xl m-auto pt-16">
      <div className="flex flex-col md:flex-row w-full items-center justify-between">
        <div className="w-full">
          <ul className="flex flex-col px-5 gap-2 text-[#D3D3D3] text-lg">
            <span className="text-white text-xl font-light">Контакт</span>
            <Link href={"/"}>About us</Link>
            <Link href={"/"}>Contacts for mass media</Link>
            <Link href={"/"}>How else to pay</Link>
            <Link href={"/"}>Add a podcast</Link>
          </ul>
        </div>
        <div className="text-center flex flex-col font-medium flex-shrink relative text-white ">
          <div className="w-12 md:w-24 lg:w-36 h-[1px] bg-gradient-to-l from-white to-white/10 absolute -left-32 lg:-left-40 top-14"></div>

          <span className="text-6xl tracking-[0.5rem]">KLTP</span>
          <span className="text-lg tracking-[0.5rem] lowercase font-normal">
            exchange
          </span>
          <div className="w-12 md:w-24 lg:w-36 h-[1px] bg-gradient-to-r from-white to-white/10 absolute -right-32 lg:-right-40 top-14"></div>
        </div>
        <div className="w-full">
          <ul className="flex flex-col px-5 text-right gap-2 text-[#D3D3D3] text-lg">
            <span className="text-white text-xl font-light">Адреса</span>
            <Link href={"/"}>Крислаотя 2</Link>
            <Link href={"/"}>Mobile devices</Link>
            <Link href={"/"}>Computer</Link>
            <Link href={"/"}>Connect to TV</Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;

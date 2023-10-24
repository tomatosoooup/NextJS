"use client";

import { useFonts } from "providers/FontProvider";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const fonts = useFonts();
  return (
    <div
      className="max-w-[950px] 2xl:max-w-screen-2xl mx-auto relative z-10 "
      id="footer"
    >
      <div className="flex flex-col items-center justify-center lg:grid lg:grid-cols-4 mt-20 px-5 lg:px-0">
        <div className="absolute min-w-full bg-white/10 h-[2px] top-28 sm:top-24 left-0 lg:hidden"></div>
        <div className="absolute min-w-full bg-white/10 h-[2px] bottom-44 sm:bottom-40 left-0 lg:hidden"></div>
        <div
          className="text-center hidden font-medium text-white pt-4 lg:flex flex-col"
          style={{ fontFamily: `${fonts.cf}` }}
        >
          <span className="text-5xl lg:text-6xl tracking-[0.7rem] font-extrabold">
            KLTP
          </span>
          <span
            className="text-sm lg:text-xl tracking-[0.8rem] lowercase font-thin leading-4"
            style={{ fontFamily: `${fonts.ct}` }}
          >
            exchange
          </span>
        </div>
        <div className="order-2  lg:order-none relative">
          <h4
            className="uppercase text-white text-lg font-black pb-8 text-center lg:text-left mt-16 lg:mt-10"
            style={{ fontFamily: `${fonts.tt}` }}
          >
            Локализация
          </h4>
          <div className="flex gap-10 lg:gap-2 text-[#D9D9D9] text-sm">
            <div
              className="flex-grow font-bold flex flex-col gap-1 text-center lg:text-left"
              style={{ fontFamily: `${fonts.ct}` }}
            >
              <span>Wrocław</span>
              <span className="font-medium">Ofiar Oswiecimskich 17</span>
              <span>10:00-20:00</span>
            </div>
            <div
              className="flex-grow font-bold flex flex-col gap-1 pl-2 text-center lg:text-left"
              style={{ fontFamily: `${fonts.ct}` }}
            >
              <span>Poznań</span>
              <span className="font-medium">Poznańska 1/36 60-848</span>
              <span>10:00-20:00</span>
            </div>
          </div>
        </div>
        <div className="lg:ml-20 order-3  lg:order-none">
          <h4
            className="uppercase text-white text-lg font-black pb-8 text-center lg:text-left mt-16 lg:mt-10"
            style={{ fontFamily: `${fonts.tt}` }}
          >
            Контакт
          </h4>
          <div className="flex lg:flex-col gap-20 lg:gap-5">
            <p
              className="text-[#D9D9D9] text-base"
              style={{ fontFamily: `${fonts.ct}` }}
            >
              kltp.finance@gmail.com
            </p>
            <div className="flex gap-5">
              <Link href={"/"}>
                <Image
                  alt="telegram"
                  src={"./images/telegram.svg"}
                  width={28}
                  height={28}
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                  }}
                />
              </Link>
              <Link href={"/"}>
                <Image
                  alt="instagram"
                  src={"./images/instagram.svg"}
                  width={28}
                  height={28}
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                  }}
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="lg:ml-10 order-1 lg:order-none">
          <h4
            className="uppercase text-white text-lg font-black pb-6 lg:pb-8 lg:mt-5 text-center lg:text-left"
            style={{ fontFamily: `${fonts.tt}` }}
          >
            Документы
          </h4>
          <div
            className="flex lg:flex-col text-white/70 text-sm gap-10 font-extralight lg:gap-2"
            style={{ fontFamily: `${fonts.ct}` }}
          >
            <Link href={"/"}>AML / CTF terms</Link>
            <Link href={"/"}>Terms and conditions of service</Link>
          </div>
        </div>
      </div>
      <div
        className="text-center mt-8 lg:mt-12 mb-3 text-white/50 text-sm"
        style={{ fontFamily: `${fonts.tt}` }}
      >
        © 2023 KLTP - crypto and financial solutions
      </div>
    </div>
  );
};

export default Footer;

"use client";

import Image from "next/image";
import Button from "./Button";
// import Bank from "./Bank";

import { useFonts } from "@/providers/FontProvider";

const Main = () => {
  const fonts = useFonts();
  return (
    <>
      <div className="lg:grid lg:grid-cols-2 text-white mb-10 md:mb-32 lg:mb-20 relative">
        <div className="px-5 text-center lg:text-justify pt-32">
          <h1
            className="text-3xl md:text-6xl uppercase mb-5 font-bold"
            style={{ fontFamily: `${fonts.ct}` }}
          >
            Cryptocurrency exchange
          </h1>
          <div className="flex justify-center lg:justify-start">
            <div className="my-5 w-72 h-[1px] bg-gradient-to-l from-white to-white/10 lg:hidden"></div>
            <div className="my-5 w-72 h-[1px] bg-gradient-to-r from-white to-white/10"></div>
          </div>
          <p
            className="text-sm md:text-xl text-[#CECECE] font-light lg:max-w-xl"
            style={{ fontFamily: `${fonts.tt}` }}
          >
            <span className="font-semibold">
              Надежный партнер в мире криптовалют и финансов.
            </span>
            <br />
            <br />
            <span className="font-light">
              Наша цель - сделать каждую операцию быстрой, простой и безопасной,
              чтобы вы могли сосредоточиться на своих делах, нежели волноваться
              о финансовых аспектах.
            </span>
          </p>
          <div className="hidden lg:block mt-10">
            <Button>
              <span className="pt-1">Совершить обмен</span>
            </Button>
          </div>
        </div>
        <div>
          <Image
            alt="Bank"
            src={"./images/Bank.svg"}
            width={700}
            height={700}
            className="hidden lg:block pointer-events-none"
          />
          <Image
            alt="Bank-2"
            src={"./images/Bank-2.svg"}
            width={500}
            height={500}
            className="lg:hidden mx-auto !relative pointer-events-none"
          />
        </div>
      </div>
      <Image
        alt="Bitcoin"
        src={"./images/Bitcoin.svg"}
        width={375}
        height={375}
        className="absolute left-0 -bottom-36 hidden lg:block pointer-events-none"
      />
    </>
  );
};

export default Main;

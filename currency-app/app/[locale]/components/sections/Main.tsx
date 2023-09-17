"use client";

import Image from "next/image";
import Button from "../buttons/Button";

// import Bank from "./Bank";

import { useFonts } from "@/providers/FontProvider";
import { useTranslations } from "next-intl";

const Main = () => {
  const t = useTranslations("Main");
  const fonts = useFonts();

  return (
    <>
      <section className=" max-w-screen-2xl m-auto">
        <div
          className="
        lg:grid
        lg:grid-cols-2 
        text-white 
        mb-10 
        md:mb-32 
        lg:mb-20 
        relative"
        >
          <div
            className="px-5 
          text-center 
          lg:text-justify 
          pt-32"
          >
            <h1
              className="text-2xl
              sm:text-3xl 
              md:text-6xl 
              uppercase 
              mb-0
              sm:mb-5 
              font-bold 
              relative"
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
              <span className="font-semibold">{t("p1")}</span>
              <br />
              <br />
              <span className="font-light">{t("p2")}</span>
            </p>
            <div className="hidden lg:block mt-10">
              <Button>
                <span className="pt-1">{t("button")}</span>
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
      </section>
    </>
  );
};

export default Main;

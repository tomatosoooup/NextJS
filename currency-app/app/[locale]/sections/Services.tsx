import { useTranslations } from "next-intl";

import Image from "next/image";
import classes from "app/animations/Image.module.css";
// import Numbers from "@/components/Numbers";
import { Reveal } from "../components/Reveal";
import React from "react";
import Ticker from "../components/Ticker";

const images = [
  {
    alt: "sepa",
    width: 475,
    height: 475,
    class: `hidden lg:block absolute right-4 top-20 pointer-events-none filter ${classes.img} ${classes.imgTop}`,
    src: "/images/sepa.png",
    quality: 100,
  },

  {
    alt: "dollar-2",
    width: 400,
    height: 400,
    class: `lg:hidden absolute -left-0 -bottom-44 pointer-events-none filter ${classes.img} ${classes.imgTop}`,
    src: "./images/dollar-2.svg",
    quality: 60,
  },
  {
    alt: "swift",
    width: 375,
    height: 375,
    class: `hidden lg:block absolute -right-16 bottom-32 pointer-events-none filter ${classes.img} ${classes.imgTop}`,
    src: "./images/swift.svg",
    quality: 10,
  },
  {
    alt: "swift-mobile",
    width: 250,
    height: 250,
    class: `absolute right-0 top-32 lg:hidden pointer-events-none filter ${classes.img} ${classes.imgTop}`,
    src: "./images/swift-2.svg",
    quality: 10,
  },
];

const Services = () => {
  const t = useTranslations("Services");

  const liList = [
    {
      content: t("l1"),
      subcontent: (
        <>
          <span className="text-[#9F9F9F]">{t("l1-")}</span>
          <div className="w-1 h-1 rounded-full bg-white absolute -left-0 top-3"></div>
        </>
      ),
    },
    {
      content: t("l2"),
      subcontent: (
        <div className="w-1 h-1 rounded-full bg-white absolute -left-0 top-3"></div>
      ),
    },
    {
      content: t("l3"),
      subcontent: (
        <>
          <span className="text-[#9F9F9F]"> (UAH)</span>, PSP
          <span>{t("l3-")}</span>
          <div className="w-1 h-1 rounded-full bg-white absolute -left-0 top-3"></div>
        </>
      ),
    },
    {
      content: t("l4"),
      subcontent: (
        <>
          <span className="text-[#9F9F9F]">{t("l4-")}</span>
          <div className="w-1 h-1 rounded-full bg-white absolute -left-0 top-3"></div>
        </>
      ),
    },
  ];

  const liListSecond = [
    {
      content: t("l5"),
      subcontent: (
        <div className="w-1 h-1 rounded-full bg-white absolute -left-0 top-3"></div>
      ),
    },
    {
      content: t("l6"),
      subcontent: (
        <div className="w-1 h-1 rounded-full bg-white absolute -left-0 top-3"></div>
      ),
    },
    {
      content: t("l7"),
      subcontent: (
        <>
          <span className="text-[#9F9F9F]">{t("l7-")}</span>
          <div className="w-1 h-1 rounded-full bg-white absolute -left-0 top-3"></div>
        </>
      ),
    },
    {
      content: t("l8"),
      subcontent: (
        <div className="w-1 h-1 rounded-full bg-white absolute -left-0 top-3"></div>
      ),
    },
  ];

  function AnimatedText({ children }) {
    return <Reveal options={{ x: -200 }}>{children}</Reveal>;
  }

  return (
    <>
      <div className="relative">
        <section className="max-w-[1050px] 2xl:max-w-screen-2xl mx-auto relative">
          {/* <Numbers
            containerClass="text-4xl -top-20 left-6"
            spanClass="blur"
            nums={[0, 0, 0, 1, 0]}
          />
          <Numbers
            containerClass="text-7xl top-0 left-36"
            spanClass="blur opacity-40"
            nums={[0, 1, 0, 0, 0]}
          /> */}
          <div className="text-white relative ">
            <div className="pt-10 lg:pt-32 pb-16 md:pb-28 px-5 relative font-tt">
              <h2
                className="text-4xl font-bold text-center md:text-left uppercase font-tt"
                id="services"
              >
                {t("h1")}
              </h2>
              <div className="flex">
                <div className="my-4 lg:my-10 w-72 h-[1px] bg-gradient-to-l from-white to-white/10 md:hidden"></div>
                <div className="my-4 lg:my-6 w-72 h-[1px] bg-gradient-to-r from-white to-white/10"></div>
              </div>
              <ul className="flex flex-col max-w-xl gap-6 text-[#EAEAEA] text-lg font-normal relative mt-2">
                {liList.map((li) => (
                  <AnimatedText key={li.content}>
                    <li className="relative pl-4">
                      {li.content}
                      {li.subcontent}
                    </li>
                  </AnimatedText>
                ))}
              </ul>
              <ul className="flex flex-col max-w-xl gap-6 text-[#EAEAEA] text-lg font-normal mt-5 md:mt-14 md:ml-[22%] relative">
                {liListSecond.map((li) => (
                  <AnimatedText key={li.content}>
                    <li className="relative pl-4">
                      {li.content}
                      {li.subcontent}
                    </li>
                  </AnimatedText>
                ))}
              </ul>
            </div>
            {images.map((img) => (
              <Image
                alt={img.alt}
                src={img.src}
                width={img.width}
                height={img.height}
                className={img.class}
                key={img.alt}
                loading="eager"
                quality={img.quality}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            ))}
          </div>
        </section>
        <Image
          alt="dollar"
          width={1000}
          height={1000}
          className={`hidden lg:block absolute -left-0 -bottom-80 pointer-events-none filter ${classes.img} ${classes.imgTop}`}
          src="./images/dollar.svg"
          quality={60}
        />
      </div>
      <Ticker />
    </>
  );
};

export default Services;

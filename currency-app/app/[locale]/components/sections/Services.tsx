"use client";

import { useFonts } from "@/providers/FontProvider";
import { useTranslations } from "next-intl";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

import Image from "next/image";
import classes from "@/app/animations/Image.module.css";
import Numbers from "@/components/Numbers";

const images = [
  {
    alt: "sepa",
    width: 475,
    height: 475,
    class: `hidden lg:block absolute right-12 top-20 z-10 pointer-events-none ${classes.img} ${classes.imgTop}`,
    src: "./images/sepa.svg",
  },
  {
    alt: "dollar",
    width: 1100,
    height: 1100,
    class: `hidden lg:block absolute -left-40 -bottom-80 pointer-events-none ${classes.img} ${classes.imgTop}`,
    src: "./images/dollar.svg",
  },
  {
    alt: "dollar-2",
    width: 400,
    height: 400,
    class: `lg:hidden absolute -left-0 -bottom-44 pointer-events-none ${classes.img} ${classes.imgTop}`,
    src: "./images/dollar-2.svg",
  },
  {
    alt: "swift",
    width: 375,
    height: 375,
    class: `hidden lg:block absolute -right-0 bottom-32 pointer-events-none ${classes.img} ${classes.imgTop}`,
    src: "./images/swift.svg",
  },
  {
    alt: "swift-mobile",
    width: 250,
    height: 250,
    class: `absolute right-0 top-32 lg:hidden pointer-events-none ${classes.img} ${classes.imgTop}`,
    src: "./images/swift-2.svg",
  },
];

const Services = () => {
  const fonts = useFonts();
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
          <span className="text-[#9F9F9F]">(UAH)</span>, PSP
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
      content:
        "Широкий спектр юрисдикций и компаний для специализированого обслуживания клиентов",
      subcontent: (
        <div className="w-1 h-1 rounded-full bg-white absolute -left-0 top-3"></div>
      ),
    },
    {
      content: "Прием/выставление инвойсов и контрактов",
      subcontent: (
        <div className="w-1 h-1 rounded-full bg-white absolute -left-0 top-3"></div>
      ),
    },
    {
      content: "Пополнение физ.лиц",
      subcontent: (
        <>
          <span className="text-[#9F9F9F]">
            (оплаты квартир, обучений, переводы семье)
          </span>
          <div className="w-1 h-1 rounded-full bg-white absolute -left-0 top-3"></div>
        </>
      ),
    },
    {
      content: "Оплата товаров и автомобильных аукционов по всему миру",
      subcontent: (
        <div className="w-1 h-1 rounded-full bg-white absolute -left-0 top-3"></div>
      ),
    },
  ];

  function AnimatedText({
    children,
    className,
  }: {
    children: React.ReactNode;
    className: string;
  }) {
    const text = useRef(null);

    useLayoutEffect(() => {
      gsap.registerPlugin(ScrollTrigger);

      gsap.from(text.current, {
        scrollTrigger: {
          trigger: text.current,
          start: "0px bottom",
          end: "bottom+=175px bottom",
          scrub: true,
        },
        x: -400,
        opacity: 0,
      });
    }, []);
    return (
      <li ref={text} className={className}>
        {children}
      </li>
    );
  }

  return (
    <>
      <section className="max-w-screen-2xl m-auto relative">
        <Numbers
          containerClass="text-4xl -top-20 left-6"
          spanClass="blur"
          nums={[0, 0, 0, 1, 0]}
          key="numbers-services-1"
        />
        <Numbers
          containerClass="text-7xl top-0 left-36"
          spanClass="blur opacity-40"
          nums={[0, 1, 0, 0, 0]}
          key="numbers-services-2"
        />
        <div className="text-white relative">
          <div
            className="pt-10 lg:pt-32 pb-16 md:pb-28 px-5 relative"
            style={{ fontFamily: `${fonts.tt}` }}
          >
            <h2
              className="text-5xl font-bold text-center md:text-left"
              id="services"
            >
              {t("h1")}
            </h2>
            <div className="flex">
              <div className="my-5 lg:my-10 w-72 h-[1px] bg-gradient-to-l from-white to-white/10 md:hidden"></div>
              <div className="my-5 lg:my-10 w-72 h-[1px] bg-gradient-to-r from-white to-white/10"></div>
            </div>
            <ul className="flex flex-col max-w-xl gap-6 text-[#EAEAEA] text-lg font-normal relative mt-3">
              {liList.map((li) => (
                <AnimatedText className="relative pl-4" key={li.content}>
                  {li.content}
                  {li.subcontent}
                </AnimatedText>
              ))}
            </ul>
            {/* Second ul */}
            <ul className="flex flex-col max-w-xl gap-6 text-[#EAEAEA] text-lg font-normal mt-5 md:mt-14 md:ml-[22%] relative">
              {liListSecond.map((li) => (
                <AnimatedText className="relative pl-4" key={li.content}>
                  {li.content}
                  {li.subcontent}
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
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Services;

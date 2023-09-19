"use client";

import { useFonts } from "@/providers/FontProvider";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useLayoutEffect, useRef } from "react";

import classes from "@/app/animations/Image.module.css";

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
  const ul1 = useRef(null);
  const ul2 = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ul1.current,
        start: "top-=300px 80%",
        end: "top-=30px 60%",
        scrub: true,
      },
    });

    timeline
      .from(ul1.current, { y: 200, x: -100, opacity: 0, rotate: 180 })
      .from(ul2.current, { opacity: 0, scale: 0 }, 0);
  }, []);
  return (
    <>
      <section className="max-w-screen-2xl m-auto">
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
            <ul
              className="flex flex-col max-w-xl gap-6 text-[#EAEAEA] text-lg font-normal relative mt-3"
              ref={ul1}
            >
              <li className="relative pl-4">
                {t("l1")}
                <span className="text-[#9F9F9F]">{t("l1-")}</span>
                <div className="w-1 h-1 rounded-full bg-white absolute -left-0 top-3"></div>
              </li>
              <li className="relative pl-4">
                {t("l2")}
                <div className="w-1 h-1 rounded-full bg-white absolute -left-0 top-3"></div>
              </li>
              <li className="relative pl-4">
                {t("l3")}
                <span className="text-[#9F9F9F]">(UAH)</span>, PSP
                <span>{t("l3-")}</span>
                <div className="w-1 h-1 rounded-full bg-white absolute -left-0 top-3"></div>
              </li>
              <li className="relative pl-4">
                {t("l4")}
                <span className="text-[#9F9F9F]">{t("l4-")}</span>
                <div className="w-1 h-1 rounded-full bg-white absolute -left-0 top-3"></div>
              </li>
            </ul>
            {/* Second ul */}
            <ul
              className="flex flex-col max-w-xl gap-6 text-[#EAEAEA] text-lg font-normal mt-5 md:mt-14 md:ml-[22%] relative"
              ref={ul2}
            >
              <li className="relative pl-4">
                Широкий спектр юрисдикций и компаний для специализированого
                обслуживания клиентов
                <div className="w-1 h-1 rounded-full bg-white absolute -left-0 top-3"></div>
              </li>
              <li className="relative pl-4">
                Прием/выставление инвойсов и контрактов
                <div className="w-1 h-1 rounded-full bg-white absolute -left-0 top-3"></div>
              </li>
              <li className="relative pl-4">
                Пополнение физ.лиц
                <span className="text-[#9F9F9F]">
                  (оплаты квартир, обучений, переводы семье)
                </span>
                <div className="w-1 h-1 rounded-full bg-white absolute -left-0 top-3"></div>
              </li>
              <li className="relative pl-4">
                Оплата товаров и автомобильных аукционов по всему миру
                <div className="w-1 h-1 rounded-full bg-white absolute -left-0 top-3"></div>
              </li>
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

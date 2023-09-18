"use client";

import { useFonts } from "@/providers/FontProvider";
import Image from "next/image";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import { useTranslations } from "next-intl";

const images = [
  {
    alt: "BTC-small-left",
    src: "./images/BTC-left.svg",
    width: 400,
    height: 400,
    class: "absolute z-10 top-10 -left-20 pointer-events-none",
  },
  {
    alt: "BTC",
    src: "./images/BTC.svg",
    width: 525,
    height: 525,
    class: "absolute z-20 left-16 pointer-events-none",
  },
  {
    alt: "BTC-small-right",
    src: "./images/BTC-right.svg",
    width: 400,
    height: 400,
    class: "absolute z-10 top-10 left-80 pointer-events-none",
  },
];

const About = () => {
  const fonts = useFonts();
  const t = useTranslations("About");

  const text = useRef(null);
  const image = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: text.current,
        start: "top-=300px 90%",
        end: "top+=100px 80%",
        scrub: true,
      },
    });

    timeline
      .from(text.current, { x: 400, opacity: 0 })
      .from(image.current, { opacity: 0, scale: 0 }, 0);
  }, []);
  return (
    <>
      <section className="max-w-screen-2xl m-auto" id="about">
        <h2
          className="text-center text-white text-4xl mt-12 lg:mt-24 font-semibold"
          style={{ fontFamily: `${fonts.tt}` }}
        >
          {t("h1")}
        </h2>
        <div className="flex justify-center">
          <div className="my-5 w-40 lg:w-72 h-[1px] bg-gradient-to-l from-white to-white/10 "></div>
          <div className="my-5 w-40 lg:w-72 h-[1px] bg-gradient-to-r from-white to-white/10"></div>
        </div>
        <p
          className="text-center text-white text-lg mt-3 font-semibold px-5"
          style={{ fontFamily: `${fonts.tt}` }}
        >
          {t("p")}
        </p>
        <div className="lg:grid lg:grid-cols-2 text-white mb-10 md:mb-32 lg:mb-20">
          <div className="relative hidden lg:block" ref={image}>
            {/* images */}
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
          <div>
            {/* text */}
            <ul
              className="flex 
              flex-col 
              gap-5 
              my-10 
              md:my-20 
              text-[#EAEAEA] 
              font-thin 
              text-lg 
              px-5 
              relative"
              style={{ fontFamily: `${fonts.tt}` }}
              ref={text}
            >
              <li>{t("l1")}</li>
              <li>
                <span className="font-semibold">{t("l2-")}</span> {t("l2")}
              </li>
              <li>{t("l3")}</li>
              <li>{t("l4")}</li>
              <li>
                <span
                  className="uppercase font-semibold mr-1"
                  style={{ fontFamily: `${fonts.cf}` }}
                >
                  KLTP EXCHANGE
                </span>
                {t("l5")}
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

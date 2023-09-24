"use client";

import { useFonts } from "providers/FontProvider";
import Image from "next/image";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import { useTranslations } from "next-intl";

import classes from "app/animations/Image.module.css";
import Numbers from "components/Numbers";

const images = [
  {
    alt: "BTC-small-left",
    src: "./images/BTC-left.svg",
    width: 375,
    height: 375,
    class: `absolute z-10 top-10 -left-20 pointer-events-none ${classes.imgLeft} ${classes.img}`,
  },
  {
    alt: "BTC",
    src: "./images/BTC.svg",
    width: 475,
    height: 475,
    class: `absolute z-20 left-16 pointer-events-none ${classes.imgCenter} ${classes.img}`,
  },
  {
    alt: "BTC-small-right",
    src: "./images/BTC-right.svg",
    width: 375,
    height: 375,
    class: `absolute z-10 top-10 left-72 pointer-events-none ${classes.imgRight} ${classes.img}`,
  },
];

const imagesMobile = [
  {
    alt: "BTC-small-left",
    src: "./images/BTC-left.svg",
    width: 225,
    height: 225,
    class: `absolute z-10 top-0 -left-8 pointer-events-none ${classes.imgLeft} ${classes.img}`,
  },
  //
  {
    alt: "BTC",
    src: "./images/BTC.svg",
    width: 275,
    height: 275,
    class: `absolute z-20 -top-4 left-14 pointer-events-none ${classes.imgCenter} ${classes.img}`,
  },
  {
    alt: "BTC-small-right",
    src: "./images/BTC-right.svg",
    width: 225,
    height: 225,
    class: `absolute z-10 top-0 left-44 pointer-events-none ${classes.imgRight} ${classes.img}`,
  },
];

const About = () => {
  const fonts = useFonts();
  const t = useTranslations("About");

  const liList = [
    { content: t("l1") },
    {
      content: t("l2"),
      subcontent: <span className="font-semibold">{t("l2-")}</span>,
    },
    { content: t("l3") },
    { content: t("l4") },
    {
      content: t("l5"),
      subcontent: (
        <span
          className="uppercase font-semibold mr-1"
          style={{ fontFamily: `${fonts.cf}` }}
        >
          KLTP EXCHANGE
        </span>
      ),
    },
  ];

  function AnimatedText({ children }) {
    const text = useRef(null);

    useLayoutEffect(() => {
      gsap.registerPlugin(ScrollTrigger);

      gsap.from(text.current, {
        scrollTrigger: {
          trigger: text.current,
          start: "0px bottom",
          end: "bottom+=300px bottom",
          scrub: true,
        },
        x: 400,
        opacity: 0,
      });
    }, []);
    return <li ref={text}>{children}</li>;
  }

  const image = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(image.current, {
      scrollTrigger: {
        trigger: image.current,
        start: "0px bottom",
        end: "bottom+=300px bottom",
        scrub: true,
      },
      opacity: 0,
      scale: 0,
    });
  }, []);
  return (
    <>
      <div className="relative">
        <Numbers
          containerClass="text-7xl -top-32 left-24"
          spanClass="blur opacity-40"
          nums={[0, 0, 1, 0]}
        />
        <section className="relative max-w-screen-2xl m-auto" id="about">
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
            className="text-center text-white text-xl font-semibold px-5"
            style={{ fontFamily: `${fonts.tt}` }}
          >
            {t("p")}
          </p>
          <div className="lg:grid lg:grid-cols-2 text-white mb-10 md:mb-32 lg:mb-20">
            <div className="lg:hidden relative h-[250px] max-w-[400px] mx-auto">
              {imagesMobile.map((img) => (
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
              my-5 
              lg:my-20 
              text-[#EAEAEA] 
              font-thin 
              text-lg 
              px-5 
              relative
              "
                style={{ fontFamily: `${fonts.tt}` }}
              >
                {liList.map((li) => (
                  <AnimatedText key={li.content}>
                    {li?.subcontent} {li.content}
                  </AnimatedText>
                ))}
              </ul>
            </div>
          </div>
        </section>
        <Image
          alt="globus"
          src={"./images/globus.svg"}
          width={500}
          height={500}
          className={`absolute right-0 -top-20 pointer-events-none hidden lg:block ${classes.img} ${classes.imgTop}`}
        />
      </div>
    </>
  );
};

export default About;

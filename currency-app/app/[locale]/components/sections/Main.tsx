"use client";

import Image from "next/image";
import Button from "../buttons/Button";

import { useFonts } from "providers/FontProvider";
import { useTranslations } from "next-intl";
import Numbers from "components/Numbers";
import { Reveal } from "../Reveal";
import { Link as ScrollLink } from "react-scroll";

interface SmoothScrollLinkProp {
  to: string;
  offset?: number;
  children: React.ReactNode;
}

const SmoothScrollLink: React.FC<SmoothScrollLinkProp> = ({
  to,
  offset = 0,
  children,
}) => (
  <ScrollLink
    activeClass="active"
    to={to}
    smooth={true}
    offset={offset - 150}
    duration={1500}
  >
    {children}
  </ScrollLink>
);

const images = [
  {
    alt: "Bank",
    src: "/images/Bank.png",
    width: 650,
    height: 625,
    class: "hidden lg:block pointer-events-none filter",
  },
  {
    alt: "Bank-2",
    src: "./images/Bank.svg",
    width: 500,
    height: 500,
    class: "lg:hidden mx-auto relative pointer-events-none filter",
  },
];

const Main = () => {
  const t = useTranslations("Main");
  const fonts = useFonts();

  return (
    <>
      <div
        className="max-w-[1225px] 2xl:max-w-screen-2xl mx-auto aspect-auto"
        id="main"
      >
        <Numbers
          containerClass="text-8xl top-0 left-20 main"
          spanClass="blur-xl"
          nums={[1, 0, 1, 0, 0, 1]}
        />
        <section>
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
                      pt-32
                      relative"
            >
              <Numbers
                containerClass="text-5xl top-0 right-64 pt-32 main"
                spanClass="blur"
                nums={[0, 1, 1, 0, 1]}
              />
              <Reveal options={{ opc: 0, x: -500 }}>
                <h1
                  className="text-3xl
            md:text-6xl 
            uppercase 
            mb-0
            sm:mb-5 
            font-black 
            relative
            !leading-tight"
                  style={{ fontFamily: `${fonts.ct}` }}
                >
                  Cryptocurrency exchange
                </h1>
              </Reveal>
              <Reveal options={{ opc: 0, x: -500 }} width="100%">
                <div className="flex justify-center lg:justify-start">
                  <div className="my-5 w-72 h-[1px] bg-gradient-to-l from-white to-white/10 lg:hidden"></div>
                  <div className="my-5 w-72 h-[1px] bg-gradient-to-r from-white to-white/10"></div>
                </div>
              </Reveal>
              <Reveal options={{ opc: 0, x: -500 }}>
                <p
                  className="text-sm md:text-xl text-[#CECECE] font-light lg:max-w-xl"
                  style={{ fontFamily: `${fonts.tt}` }}
                >
                  <span className="font-semibold">{t("p1")}</span>
                  <br />
                  <br />
                  <span className="font-light">{t("p2")}</span>
                </p>
              </Reveal>
              <Reveal options={{ opc: 0, x: -500 }}>
                <div className="hidden lg:block mt-10">
                  <SmoothScrollLink to="form">
                    <Button>
                      <span className="pt-1">{t("button")}</span>
                    </Button>
                  </SmoothScrollLink>
                </div>
              </Reveal>
            </div>
            <div className="my-auto lg:ml-24 xl:ml-0">
              {images.map((img, index) => (
                <Reveal options={{ opc: 0, x: 500 }} key={index} width="100%">
                  <Image
                    alt={img.alt}
                    src={img.src}
                    width={img.width}
                    height={img.height}
                    className={img.class}
                    key={img.alt}
                    loading="eager"
                  />
                </Reveal>
              ))}
            </div>
          </div>
          <Image
            alt="Bitcoin"
            src={"./images/Bitcoin.svg"}
            width={375}
            height={375}
            className="absolute left-0 -bottom-36 hidden lg:block pointer-events-none"
            loading="eager"
            quality={100}
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </section>
      </div>
    </>
  );
};

export default Main;

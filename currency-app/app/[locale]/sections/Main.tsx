import Image from "next/image";
import Button from "../components/buttons/Button";

import { useFonts } from "providers/FontProvider";
import { useTranslations } from "next-intl";
import Numbers from "@/components/Numbers";
import { Reveal } from "../components/Reveal";
import Link from "next/link";
import Ticker from "../components/Ticker";
import { Link as ScrollLink } from "react-scroll";

const images = [
  {
    alt: "Bank",
    src: "/images/Bank.png",
    width: 700,
    height: 650,
    class: "hidden lg:block pointer-events-none filter ml-auto",
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
      <div className="max-w-[1150px] 2xl:max-w-screen-2xl mx-auto" id="main">
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
      md:mb-16 
      lg:mb-20 
      relative"
          >
            <div
              className="px-5 
                      text-center 
                      lg:text-justify 
                      pt-10
                      lg:pt-32
                      relative"
            >
              <Numbers
                containerClass="text-5xl top-0 right-64 pt-32 main"
                spanClass="blur"
                nums={[0, 1, 1, 0, 1]}
              />
              <Reveal options={{ x: -200 }} width="100%">
                <h1
                  className="text-3xl
            md:text-5xl
            2xl:text-6xl
            uppercase 
            mb-0
            font-extrabold 
            relative
            !leading-tight"
                  style={{ fontFamily: `${fonts.ct}` }}
                >
                  Cryptocurrency exchange
                </h1>
              </Reveal>
              <Reveal options={{ x: -200 }} width="100%">
                <div className="flex justify-center lg:justify-start">
                  <div className="my-3 w-72 h-[1px] bg-gradient-to-l from-white to-white/10 lg:hidden"></div>
                  <div className="my-3 w-72 h-[1px] bg-gradient-to-r from-white to-white/10"></div>
                </div>
              </Reveal>
              <Reveal options={{ x: -200 }}>
                <p
                  className="text-sm md:text-xl text-[#CECECE] font-light lg:max-w-xl"
                  style={{ fontFamily: `${fonts.tt}` }}
                >
                  <span className="font-bold">{t("p1")}</span>
                  <br />
                  <span className="my-3 block" />
                  <span className="font-normal">{t("p2")}</span>
                </p>
              </Reveal>
              <Reveal options={{ x: -100 }}>
                <div className="hidden lg:block mt-6">
                  <ScrollLink
                    to="form"
                    spy={true}
                    smooth={true}
                    offset={-150}
                    duration={1500}
                  >
                    <Button>
                      <span className="pt-1 font-bold">{t("button")}</span>
                    </Button>
                  </ScrollLink>
                </div>
              </Reveal>
            </div>
            <div className="my-auto lg:ml-24">
              {images.map((img, index) => (
                <Reveal options={{ x: 200 }} key={index} width="100%">
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
      <Ticker />
    </>
  );
};

export default Main;

"use client";

import { useFonts } from "@/providers/FontProvider";
import Image from "next/image";

const About = () => {
  const fonts = useFonts();
  return (
    <>
      <h2
        className="text-center text-white text-4xl mt-12 lg:mt-24 font-semibold"
        style={{ fontFamily: `${fonts.tt}` }}
      >
        About us
      </h2>
      <div className="flex justify-center">
        <div className="my-5 w-40 lg:w-72 h-[1px] bg-gradient-to-l from-white to-white/10 "></div>
        <div className="my-5 w-40 lg:w-72 h-[1px] bg-gradient-to-r from-white to-white/10"></div>
      </div>
      <p
        className="text-center text-white text-xl mt-3 font-semibold"
        style={{ fontFamily: `${fonts.tt}` }}
      >
        Мы предоставляем широкий спектр финансовых услуг
      </p>
      <div className="lg:grid lg:grid-cols-2 text-white mb-10 md:mb-32 lg:mb-20">
        <div className="relative hidden lg:block">
          <Image
            alt="BTC-small-left"
            src={"./images/BTC-left.svg"}
            width={400}
            height={400}
            className="absolute z-10 top-10 -left-20"
          />
          <Image
            alt="BTC"
            src={"./images/BTC.svg"}
            width={525}
            height={525}
            className="absolute z-20 left-16"
          />
          <Image
            alt="BTC-small-right"
            src={"./images/BTC-right.svg"}
            width={400}
            height={400}
            className="absolute z-10 top-10 left-80"
          />
        </div>
        <div>
          <ul
            className="flex flex-col gap-5 my-20 text-[#EAEAEA] font-thin text-lg px-5"
            style={{ fontFamily: `${fonts.tt}` }}
          >
            <li>
              Наша компания постоянно следит за тенденциями рынка, чтобы
              внедрять самые передовые и безопасные решения в сфере финансов.
            </li>
            <li>
              <span className="font-semibold">Безопасность</span> - не просто
              слово, а наш основной принцип работы.
            </li>
            <li>
              Мы сочетаем в себе лучшие традиции банковского обслуживания с
              инновационными решениями в сфере финансов и криптовалют.
            </li>
            <li>
              Предоставляем услуги покупки/продажи криптовалюты за наличные
              более чем в 52 странах мира.
            </li>
            <li>
              <span
                className="uppercase font-semibold mr-1"
                style={{ fontFamily: `${fonts.cf}` }}
              >
                KLTP EXCHANGE
              </span>
              - сертифицированный сервис обмена криптовалют с европейской
              лицензией.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default About;

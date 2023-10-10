import Input from "../inputs/Input";
import Link from "next/link";
import Image from "next/image";
import { useFonts } from "providers/FontProvider";
import { BsCheck2 } from "react-icons/bs";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";

import Numbers from "components/Numbers";
import FormInputs from "./FormSections/FormInputs";
import FormButtons from "./FormSections/FormButtons";
import FormLogo from "./FormSections/FormLogo";

const Form = () => {
  const fonts = useFonts();
  const t = useTranslations("Form");

  const form = useRef(null);
  const telegram = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let ctx = gsap.context(() => {
      gsap.from(form.current, {
        scrollTrigger: {
          trigger: form.current,
          start: "0px bottom",
<<<<<<< HEAD
          end: "bottom-=300px bottom",
          scrub: true,
=======
          end: "bottom-=100px bottom",
          scrub: true,
          fastScrollEnd: 1000,
>>>>>>> 78efa5ac11c7bb33460b175646c211ad9d6f3765
        },
        opacity: 0,
        right: 800,
      });

      gsap.from(telegram.current, {
        opacity: 0,
        scale: 0,
        scrollTrigger: {
          trigger: telegram.current,
          start: "top-=600px 50%",
          end: "top-=100px 50%",
          scrub: true,
        },
      });
    });

    return () => {
      ctx.revert();
    };
  }, []);

  const [isClicked, setIsClicked] = useState(false);
  const [isClickedTwo, setIsClickedTwo] = useState(false);

  const handleCheck = () => {
    setIsClicked(!isClicked);
  };

  const handleCheckTwo = () => {
    setIsClickedTwo(!isClickedTwo);
  };

  return (
    <>
      <div className="relative" ref={form}>
        <form
          id="form"
          className="flex flex-col lg:grid max-w-screen-xl m-auto grid-cols-2 grid-rows-2 bg-[#171717] rounded-2xl mt-10 mb-10 lg:mt-20 lg:mb-28 relative pt-5 pb-10 z-10"
        >
          <Numbers
            containerClass="text-3xl bottom-10 left-28"
            spanClass="blur"
            nums={[0, 1, 1, 0, 1]}
          />
          <Numbers
            containerClass="text-2xl top-16 left-52"
            spanClass="blur"
            nums={[0, 1, 1, 0, 1]}
          />
          <Numbers
            containerClass="text-8xl -top-10 left-[450px] z-0"
            spanClass="blur opacity-20"
            nums={[0, 0, 0, 1, 0]}
          />
          <Numbers
            containerClass="text-6xl -top-16 -right-20"
            spanClass="blur"
            nums={[0, 0, 1, 0]}
          />

          {/* Inputs */}
          <FormInputs />
          <div
            className="flex flex-col gap-y-8 lg:gap-y-10 justify-center text-white px-5 mt-10 lg:mt-16 lg:mr-14 order-2 lg:order-none"
            style={{ fontFamily: `${fonts.tt}` }}
          >
            <div>
              <div className="font-medium mb-1 lg:mb-0">{t("iban")}</div>
              <Input id="input-3" />
            </div>
            <div>
              <div className="font-medium mb-1 lg:mb-0">{t("reciever")}</div>
              <Input id="input-4" />
            </div>
            <div>
              <div className="font-medium mb-1 lg:mb-0">Telegram ID</div>
              <Input id="input-5" />
            </div>
          </div>
          <FormButtons />
          <div
            className="mt-10 px-5 text-[#555] relative text-xs font-semibold auto-cols-[0.5rem] order-3 lg:order-none lg:col-span-2"
            style={{ fontFamily: `${fonts.ct}` }}
          >
            <div className="flex items-center gap-x-3 lg:ml-[52%]">
              <div
                className={`w-5 h-5  border-[#828282] border rounded-sm cursor-pointer ${
                  isClicked ? "bg-[#9b9b9b]" : "bg-transparent"
                }`}
                onClick={handleCheck}
              >
                {isClicked && <BsCheck2 size={19} color="white" />}
              </div>
              I agree with
              <Link href={"/"}>Terms and conditions of service</Link>
            </div>
            <div className="flex items-center gap-x-3 mt-2 lg:ml-[52%]">
              <div
                className={`w-5 h-5  border-[#828282] border rounded-sm cursor-pointer ${
                  isClickedTwo ? "bg-[#9b9b9b]" : "bg-transparent"
                }`}
                onClick={handleCheckTwo}
              >
                {isClickedTwo && <BsCheck2 size={19} color="white" />}
              </div>
              I agree with
              <Link href={"/"}>AML / CTF Terms</Link>
            </div>
            <Image
              alt="qr-code"
              src={"./images/qr.svg"}
              width={100}
              height={100}
              className="absolute hidden lg:block right-20 top-0 pointer-events-none"
              loading="eager"
            />
          </div>
          <FormLogo />
        </form>
        <Link href={"/"}>
          <Image
            alt="telegram"
            src={"./images/messege.svg"}
            width={150}
            height={150}
            className="absolute top-64 right-20 hidden 2xl:block"
            ref={telegram}
            loading="eager"
          />
        </Link>
      </div>
    </>
  );
};

export default Form;

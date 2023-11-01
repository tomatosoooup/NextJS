import Input from "../inputs/Input";
import Link from "next/link";
import Image from "next/image";
import { useFonts } from "providers/FontProvider";
import { BsCheck2 } from "react-icons/bs";

import { useState } from "react";
import { useTranslations } from "next-intl";

import Numbers from "components/Numbers";
import FormInputs from "./FormSections/FormInputs";
import FormLogo from "./FormSections/FormLogo";

import { Reveal } from "../Reveal";
import Button from "../buttons/Button";
import Ticker from "../Ticker";

const Form = () => {
  const fonts = useFonts();
  const t = useTranslations("Form");

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
      <div className="relative">
        <form
          id="form"
          className="flex flex-col lg:grid max-w-[1150px] 2xl:max-w-screen-xl mx-auto grid-cols-2 grid-rows-2 bg-[#171717] rounded-2xl mt-10 mb-10 lg:mt-16 lg:mb-16 relative z-10"
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
            spanClass="blur opacity-10"
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
            <Reveal options={{ x: 100 }} width="100%">
              <>
                <div className="font-medium mb-1 lg:mb-0">{t("iban")}</div>
                <Input id="input-3" />
              </>
            </Reveal>
            <Reveal options={{ x: 100 }} width="100%">
              <>
                <div className="font-medium mb-1 lg:mb-0">{t("reciever")}</div>
                <Input id="input-4" />
              </>
            </Reveal>
            <Reveal options={{ x: 100 }} width="100%">
              <>
                <div className="font-medium mb-1 lg:mb-0">Telegram ID</div>
                <Input id="input-5" />
              </>
            </Reveal>
          </div>
          <section className="lg:hidden">
            <Reveal options={{ x: 100 }} width="100%">
              <div className="lg:hidden justify-center h-[50px] mt-10 px-5 order-4 lg:order-none">
                <Button fullWidth>
                  <span className="text-white  pt-1">{t("button")}</span>
                </Button>
              </div>
            </Reveal>
          </section>
          <div
            className="mt-10 px-5 text-[#555] relative text-xs font-semibold auto-cols-[0.5rem] order-3 lg:order-none lg:col-span-2"
            style={{ fontFamily: `${fonts.ct}` }}
          >
            <Reveal options={{ x: 100 }} width="100%">
              <>
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
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                  }}
                />
              </>
            </Reveal>
          </div>
          <FormLogo />
        </form>
        <Link href={"/"}>
          <Image
            alt="telegram"
            src={"./images/messege.svg"}
            width={150}
            height={150}
            className="absolute top-64 right-0 2xl:right-20 hidden xl:block z-20"
            loading="eager"
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </Link>
      </div>
      <Ticker />
    </>
  );
};

export default Form;

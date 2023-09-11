"use client";

import SelectDrop from "./inputs/SelectDrop";
import Input from "./inputs/Input";
import Button from "./Button";

import Link from "next/link";

import { useState } from "react";
import { useFonts } from "@/providers/FontProvider";
import { BsCheck2 } from "react-icons/bs";
import { TfiReload } from "react-icons/tfi";
import Image from "next/image";

const Form = () => {
  const fonts = useFonts();
  const options = [
    { type: "USDT", name: "TRC20" },
    { type: "USDT", name: "TRC21" },
    { type: "USDF", name: "TRC22" },
    { type: "USDT", name: "TRC23" },
  ];

  //   const handleChange = () => {};

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
      <div className="flex flex-col lg:grid max-w-screen-xl m-auto grid-cols-2 grid-rows-2 h-fit bg-[#171717] rounded-2xl my-32 relative pt-5 pb-10">
        <div
          className="flex flex-col justify-center mt-12 order-1 lg:order-none"
          style={{ fontFamily: `${fonts.tt}` }}
        >
          <div className="flex px-5 lg:px-16 w-full text-white items-center gap-x-5 justify-between font-medium">
            <div className="w-1/2">
              <span>Вы отдаёте</span>
              <SelectDrop options={options} />
            </div>
            <TfiReload size={18} color="#828282" className="mt-5" />
            <div className="w-1/2">
              <span>Вы получаете</span>
              <SelectDrop options={options} />
            </div>
          </div>
          <div className="flex px-5 lg:px-16 w-full text-white items-end justify-between gap-x-14 mt-6 font-medium">
            <div className="w-1/2">
              <span>Сумма</span>
              <Input disabled={true} id="input-1" />
            </div>

            <div className="w-1/2">
              <Input disabled={true} id="input-2" />
            </div>
          </div>
        </div>
        <div
          className="flex flex-col gap-y-10 justify-center text-white px-5 mt-10 lg:mt-16 lg:mr-14 order-2 lg:order-none"
          style={{ fontFamily: `${fonts.tt}` }}
        >
          <div>
            <span className="font-medium">IBAN</span>
            <Input id="input-3" />
          </div>
          <div>
            <span className="font-medium">Получатель</span>
            <Input id="input-4" />
          </div>
          <div>
            <span className="font-medium">Telegram ID</span>
            <Input id="input-5" />
          </div>
        </div>
        <div className="hidden lg:flex justify-center h-[50px] mt-10 px-5">
          <Button>
            <span className="text-white  pt-1">Оставить заявку</span>
          </Button>
        </div>
        <div className="lg:hidden justify-center h-[50px] mt-10 px-5 order-4 lg:order-none">
          <Button fullWidth>
            <span className="text-white  pt-1">Оставить заявку</span>
          </Button>
        </div>
        <div
          className="mt-10 px-5 text-[#555] relative text-xs font-semibold auto-cols-[0.5rem] order-3 lg:order-none"
          style={{ fontFamily: `${fonts.tt}` }}
        >
          <div className="flex items-center gap-x-3">
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
          <div className="flex items-center gap-x-3 mt-2">
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
            className="absolute hidden lg:block right-20 top-0"
          />
        </div>
        <div
          className="text-center flex flex-col font-medium relative text-white w-fit mx-auto mt-10 lg:absolute lg:bottom-20 lg:left-[50%] lg:translate-x-[-50%] order-5 lg:order-none"
          style={{ fontFamily: `${fonts.ct}` }}
        >
          <div className="w-12 md:w-24 lg:w-56 h-[1px] bg-gradient-to-l from-white to-white/10 absolute -left-16 md:-left-32 lg:-left-64 top-11 lg:top-16"></div>
          <span className="text-5xl lg:text-7xl  tracking-[0.7rem] font-extrabold">
            KLTP
          </span>
          <span className="text-sm md:text- lg:text-3xl tracking-[0.7rem] lowercase font-light leading-4">
            exchange
          </span>
          <div className="w-12 md:w-24 lg:w-56 h-[1px] bg-gradient-to-r from-white to-white/10 absolute -right-16 md:-right-32 lg:-right-64 top-11 lg:top-16"></div>
        </div>
      </div>
    </>
  );
};

export default Form;

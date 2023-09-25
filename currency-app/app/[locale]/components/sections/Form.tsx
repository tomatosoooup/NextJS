"use client";

import SelectDrop from "../inputs/SelectDrop";
import Input from "../inputs/Input";

import Link from "next/link";

import { useFonts } from "providers/FontProvider";
import { BsCheck2 } from "react-icons/bs";
import { TfiReload } from "react-icons/tfi";
import Image from "next/image";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { useTranslations } from "next-intl";

import { getCurrencyConversionRate } from "../../../api/getCurrency";
import Numbers from "components/Numbers";
import FormLogo from "./FormSections/FormLogo";
import FormButtons from "./FormSections/FormButtons";
import { getOptions } from "app/api/getOptions";

type Rate = number | null;

const Form = () => {
  const fonts = useFonts();
  const t = useTranslations("Form");

  const [fromCurrency, setFromCurrency] = useState("");
  const [toCurrency, setToCurrency] = useState("");
  const [conversationFromRate, setConversationFromRate] = useState<Rate>(null);
  const [conversationToRate, setConversationToRate] = useState<Rate>(null);
  const bothCurrenciesSelected = fromCurrency && toCurrency;

  const [amount, setAmount] = useState<string>("");
  const [result, setResult] = useState("");

  const convertCurrency = useCallback(async () => {
    // from currency
    try {
      const data = await getCurrencyConversionRate(fromCurrency, toCurrency);

      if (Array.isArray(data.to) && data.to.length > 0) {
        const conversionInfo = data.to[0];
        const mid = parseFloat(conversionInfo.mid);
        const percentage = mid * 0.98; // Вычитание 2%
        const result = parseFloat(percentage.toFixed(6));

        setConversationFromRate(result);
      } else {
        throw new Error("Некорректный формат данных в ответе");
      }
    } catch (error) {
      console.error(error.message);
    }
    // to currency
    try {
      const data = await getCurrencyConversionRate(toCurrency, fromCurrency);

      if (Array.isArray(data.to) && data.to.length > 0) {
        const conversionInfo = data.to[0];
        const mid = parseFloat(conversionInfo.mid);
        const percentage = mid * 0.98; // Вычитание 2%
        const result = parseFloat(percentage.toFixed(6));

        setConversationToRate(result);
      } else {
        throw new Error("Некорректный формат данных в ответе");
      }
    } catch (error) {
      console.error(error.message);
    }

    if (fromCurrency === toCurrency) {
      setConversationFromRate(1);
      setConversationToRate(1);
    }
  }, [fromCurrency, toCurrency]);

  // Вызываем функцию convertCurrency только если оба поля выбраны
  useEffect(() => {
    if (bothCurrenciesSelected) {
      convertCurrency();
    }
  }, [bothCurrenciesSelected, fromCurrency, toCurrency, convertCurrency]);

  useEffect(() => {
    const newAmount = amount;
    if (newAmount) {
      const convertedAmount = parseFloat(newAmount) * conversationFromRate;
      const roundedAmount = convertedAmount.toFixed(2);
      setResult(roundedAmount);
    } else {
      setResult("");
    }
  }, [amount, convertCurrency, conversationFromRate]);

  const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newAmount = event.target.value;
    setAmount(newAmount);
  };

  // заменим на динамические
  const options = getOptions({ option: "first" });

  const options2 = getOptions({ option: "second" });

  // console.log(fromCurrency, toCurrency);

  const form = useRef(null);
  const telegram = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(form.current, {
      opacity: 0,
      right: 1000,
      duration: 1,
      scrollTrigger: {
        trigger: form.current,
        start: "top-=900px",
        end: "+=500px",
        scrub: true,
      },
    });

    gsap.from(telegram.current, {
      opacity: 0,
      scale: 0,
      duration: 1,
      scrollTrigger: {
        trigger: telegram.current,
        start: "top-=600px 50%",
        end: "top-=100px 50%",
        scrub: true,
      },
    });
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
      <div className="relative">
        <form
          id="form"
          className="
        flex 
        flex-col 
        lg:grid 
        max-w-screen-xl 
        m-auto 
        grid-cols-2 
        grid-rows-2 
        bg-[#171717] 
        rounded-2xl 
        mt-10 
        mb-10 
        lg:mt-20
        lg:mb-28  
        relative 
        pt-5 
        pb-10
        z-10
        "
          ref={form}
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
          {/* Selects */}
          <div
            className="flex flex-col justify-center mt-5 lg:mt-12 order-1 lg:order-none"
            style={{ fontFamily: `${fonts.tt}` }}
          >
            <div className="flex px-5 lg:px-16 w-full text-white items-center gap-x-5 justify-between font-medium">
              <div className="w-1/2">
                <div className="mb-2">{t("give")}</div>
                <SelectDrop
                  options={options}
                  onCurrencyFromChoose={setFromCurrency}
                />
              </div>
              <TfiReload size={18} color="#828282" className="mt-5" />
              <div className="w-1/2">
                <div className="mb-2">{t("get")}</div>
                <SelectDrop
                  options={options2}
                  onCurrencyToChoose={setToCurrency}
                />
              </div>
            </div>
            <div className="flex px-5 lg:px-16 w-full text-white items-end justify-between gap-x-14 mt-6 font-medium">
              <div className="w-1/2 relative">
                <div className="mb-2 ">{t("sum")}</div>
                <Input id="input-1" onChange={handleAmountChange} />
                {bothCurrenciesSelected && (
                  <span className="absolute left-3 -bottom-5 md:left-6 md:-bottom-7 text-xs md:text-sm text-[#555555] font-semibold">
                    1 {fromCurrency} = {conversationFromRate} {toCurrency}
                  </span>
                )}
              </div>
              <div className="w-1/2 relative">
                <Input disabled={true} id="input-2" value={result} />
                {bothCurrenciesSelected && (
                  <span className="absolute left-3 -bottom-5 md:left-6 md:-bottom-7 text-xs md:text-sm text-[#555555] font-semibold">
                    1 {toCurrency} = {conversationToRate} {fromCurrency}
                  </span>
                )}
              </div>
            </div>
          </div>
          {/* Inputs */}
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
          {/* Two buttons */}
          <FormButtons />
          {/* Checkbox */}
          <div
            className="mt-10 px-5 text-[#555] relative text-xs font-semibold auto-cols-[0.5rem] order-3 lg:order-none"
            style={{ fontFamily: `${fonts.ct}` }}
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
          />
        </Link>
      </div>
    </>
  );
};

export default Form;

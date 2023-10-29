"use client";

import Button from "@/components/buttons/Button";
import Input from "@/components/inputs/Input";
import { Reveal } from "@/components/Reveal";
import { TfiReload } from "react-icons/tfi";

import { getOptions } from "app/api/getOptions";
import { useTranslations } from "next-intl";
import { useFonts } from "providers/FontProvider";

import { useEffect, useState } from "react";
import { GET } from "app/api/getCurrency/route";
import Select from "@/components/inputs/Select";

const FormInputs = () => {
  const [amount, setAmount] = useState<number>(1);
  const [fromCurrency, setFromCurrency] = useState<string>();
  const [toCurrency, setToCurrency] = useState<string>();
  const [avgPrice, setAvgPrice] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<boolean>();

  const fetchData = async () => {
    try {
      const { avgPrice, error } = await GET(fromCurrency, toCurrency);
      setAvgPrice(avgPrice);
      if (error) {
        setErrorMessage(true);
      } else {
        setErrorMessage(false);
      }
    } catch (error) {
      return;
    }
  };

  const handleFromChoose = (cur: string) => {
    setFromCurrency(cur);
  };

  const handleToChoose = (cur: string) => {
    setToCurrency(cur);
  };

  useEffect(() => {
    if (fromCurrency && toCurrency) {
      fetchData();
    }
  }, [fromCurrency, toCurrency]);

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newAmount = parseFloat(e.target.value);
    if (!isNaN(newAmount)) {
      setAmount(newAmount);
    }
  };

  const handleResult = () => {
    const result = Number(amount);
    alert(
      `${result.toFixed(
        4
      )} of ${fromCurrency} to ${toCurrency} with - ${amount} and ${avgPrice}`
    );
  };

  const options = getOptions({ option: "first" });
  const options2 = getOptions({ option: "second" });

  const fonts = useFonts();
  const t = useTranslations("Form");
  return (
    <div
      className="flex flex-col justify-center mt-5 lg:mt-12 order-1 lg:order-none"
      style={{ fontFamily: `${fonts.tt}` }}
    >
      <div className="flex px-5 lg:px-16 w-full text-white items-center gap-x-5 justify-between font-medium">
        <div className="w-1/2">
          <Reveal options={{ opc: 0, x: -500, del: 0.85 }} width="100%">
            <>
              <div className="mb-1">{t("give")}</div>
              <Select
                options={options}
                initialValues={["TRC20", "USDT"]}
                onChoose={handleFromChoose}
              ></Select>
            </>
          </Reveal>
        </div>
        <Reveal options={{ opc: 0, x: -500, del: 0.65 }}>
          <TfiReload size={18} color="#828282" className="mt-7" />
        </Reveal>
        <div className="w-1/2">
          <Reveal options={{ opc: 0, x: -500, del: 0.45 }} width="100%">
            <>
              <div className="mb-1">{t("get")}</div>
              <Select
                options={options2}
                initialValues={["Cash", "EUR"]}
                onChoose={handleToChoose}
              ></Select>
            </>
          </Reveal>
        </div>
      </div>
      <div className="flex px-5 lg:px-16 w-full text-white items-end justify-between gap-x-14 mt-6 font-medium">
        <div className="w-full lg:w-1/2 relative">
          <Reveal options={{ opc: 0, x: -500 }} width="100%">
            <>
              <div className="mb-1 ">{t("sum")}</div>
              <Input id="input-1" onChange={handleAmountChange} />
              <span className="absolute left-3 -bottom-5 md:-bottom-6 text-xs md:text-sm text-[#555555] font-semibold block overflow-x-hidden">
                {avgPrice
                  ? `1 ${fromCurrency} = ${avgPrice} ${toCurrency}`
                  : `${errorMessage ? "No such pair" : ""}`}
              </span>
            </>
          </Reveal>
        </div>
        <div className="w-1/2 relative hidden lg:flex h-[45px]">
          <Reveal options={{ opc: 0, x: -500, del: 0.45 }} width="100%">
            <Button fullWidth type="button">
              <span className="text-white pt-1 text-xs" onClick={handleResult}>
                {t("button")}
              </span>
            </Button>
          </Reveal>
        </div>
      </div>
    </div>
  );
};

export default FormInputs;

"use client";

import axios from "axios";

import Button from "@/components/buttons/Button";
import Input from "@/components/inputs/Input";
import { Reveal } from "@/components/Reveal";
import { TfiReload } from "react-icons/tfi";

import { getOptions } from "app/api/getOptions";
import { useTranslations } from "next-intl";
import { useFonts } from "providers/FontProvider";

import { useState } from "react";
import Select from "@/components/inputs/Select";

const FormInputs = () => {
  const [amount, setAmount] = useState<number>(1);
  const [avgPrice, setAvgPrice] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<boolean>();

  const fetchData = async (currency: string) => {
    const req = currency;
    try {
      const apiUrl = `https://api.binance.com/api/v3/avgPrice?symbol=${req}`;
      const response = await axios.get(apiUrl);
      const avgPrice = response.data.price;
      setAvgPrice(avgPrice);
      setErrorMessage(false);
    } catch (error) {
      setErrorMessage(true);
    }
  };

  const handleFromChoose = (cur: string) => {
    if (typeof localStorage !== "undefined") {
      localStorage.setItem("cur1", cur);
      const currency =
        localStorage.getItem("cur1") + localStorage.getItem("cur2");
      fetchData(currency);
      console.log(currency);
    }
  };

  const handleToChoose = (cur: string) => {
    if (typeof localStorage !== "undefined") {
      localStorage.setItem("cur2", cur);

      const currency =
        localStorage.getItem("cur1") + localStorage.getItem("cur2");
      fetchData(currency);
      console.log(currency);
    }
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newAmount = parseFloat(e.target.value);
    if (!isNaN(newAmount)) {
      setAmount(newAmount);
    }
  };

  const handleResult = () => {
    const result = Number(amount);
    alert(
      `${result.toFixed(4)} of ${localStorage.getItem(
        "cur1"
      )} to ${localStorage.getItem("cur2")} with - ${amount} and ${avgPrice}`
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
                  ? `1 ${localStorage.getItem(
                      "cur1"
                    )} = ${avgPrice} ${localStorage.getItem("cur2")}`
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

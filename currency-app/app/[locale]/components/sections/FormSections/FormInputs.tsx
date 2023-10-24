// import axios from "axios";
import { Reveal } from "@/components/Reveal";
import Button from "@/components/buttons/Button";
import Input from "@/components/inputs/Input";
import SelectDrop from "@/components/inputs/SelectDrop";

import { getOptions } from "app/api/getOptions";
import { useTranslations } from "next-intl";
import { useFonts } from "providers/FontProvider";
// useEffect,
import { useState } from "react";
import { TfiReload } from "react-icons/tfi";

// const API_BASE_URL = "https://openexchangerates.org/api";

const FormInputs = () => {
  const [exchangeRate] = useState<string | number | null>(null);
  const [amount, setAmount] = useState<number>(1);
  const [fromCurrency, setFromCurrency] = useState<string>("USD");
  const [toCurrency, setToCurrency] = useState<string>("EUR");

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newAmount = parseFloat(e.target.value);
    if (!isNaN(newAmount)) {
      setAmount(newAmount);
    }
  };

  const handleResult = () => {
    const result = Number(exchangeRate) * Number(amount);
    alert(
      `${result.toFixed(
        4
      )} of ${fromCurrency} to ${toCurrency} with - ${amount} and ${exchangeRate}`
    );
  };

  // useEffect(() => {
  //   const fetchExchangeRate = async () => {
  //     try {
  //       const response = await axios.get(`${API_BASE_URL}/latest.json`, {
  //         params: {
  //           app_id: "981a1220849b4f8ca4f0168e9c7f1027",
  //         },
  //       });
  //       const rates = response.data.rates;
  //       if (fromCurrency === toCurrency) {
  //         setExchangeRate(1);
  //       } else {
  //         const conversionRate = (
  //           rates[toCurrency] / rates[fromCurrency]
  //         ).toFixed(4);
  //         setExchangeRate(conversionRate);
  //       }
  //     } catch (error) {
  //       console.error("Error fetching exchange rate", error);
  //     }
  //   };

  //   fetchExchangeRate();
  // }, [fromCurrency, toCurrency]);

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
              <div className="mb-2">{t("give")}</div>
              <SelectDrop
                options={options}
                onCurrencyFromChoose={setFromCurrency}
              />
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
              <SelectDrop
                options={options2}
                onCurrencyToChoose={setToCurrency}
              />
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
                1 {fromCurrency} = {exchangeRate} {toCurrency}
              </span>
            </>
          </Reveal>
        </div>
        <div className="w-1/2 relative hidden lg:flex h-[45px]">
          <Reveal options={{ opc: 0, x: -500, del: 0.45 }} width="100%">
            <Button fullWidth type="button" onClick={handleResult}>
              <span className="text-white pt-1 text-xs">{t("button")}</span>
            </Button>
          </Reveal>
        </div>
      </div>
    </div>
  );
};

export default FormInputs;

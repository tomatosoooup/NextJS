import { Reveal } from "@/components/Reveal";
import Button from "@/components/buttons/Button";
import Input from "@/components/inputs/Input";
import SelectDrop from "@/components/inputs/SelectDrop";
// import { getCurrencyConversionRate } from "app/api/getCurrency";
import { getOptions } from "app/api/getOptions";
import { useTranslations } from "next-intl";
import { useFonts } from "providers/FontProvider";
// import { useState, useCallback, useEffect } from "react";
import { TfiReload } from "react-icons/tfi";

const FormInputs = () => {
  // type Rate = number | null;

  // const [fromCurrency, setFromCurrency] = useState("");
  // const [toCurrency, setToCurrency] = useState("");
  // const [conversationRate, setConversationRate] = useState<Rate>(null);
  // const bothCurrenciesSelected = fromCurrency && toCurrency;

  // const [amount, setAmount] = useState<string>("");
  // const [result2, setResult] = useState("");

  // const convertCurrency = useCallback(async () => {
  //   try {
  //     const data = await getCurrencyConversionRate(fromCurrency, toCurrency);

  //     if (Array.isArray(data.to) && data.to.length > 0) {
  //       const conversionInfo = data.to[0];
  //       const mid = parseFloat(conversionInfo.mid);
  //       const percentage = mid * 0.98;
  //       const result = parseFloat(percentage.toFixed(6));

  //       setConversationRate(result);

  //       if (fromCurrency === toCurrency) {
  //         setConversationRate(1);
  //       }

  //       if (amount.length !== 0) {
  //         const newAmount = amount;
  //         if (newAmount) {
  //           const convertedAmount = parseFloat(newAmount) * conversationRate;
  //           const roundedAmount = convertedAmount.toFixed(2);
  //           setResult(roundedAmount);
  //           console.log(result2);
  //         } else {
  //           setResult("");
  //         }
  //       }
  //     }
  //   } catch (error) {
  //     console.error(error.message);
  //   }
  // }, [
  //   fromCurrency,
  //   toCurrency,
  //   bothCurrenciesSelected,
  //   conversationRate,
  //   amount,
  //   result2,
  // ]);

  // useEffect(() => {
  //   if (bothCurrenciesSelected) {
  //     convertCurrency();
  //   }
  // }, [
  //   bothCurrenciesSelected,
  //   fromCurrency,
  //   toCurrency,
  //   convertCurrency,
  //   amount,
  // ]);

  // const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const newAmount = event.target.value;
  //   setAmount(newAmount);
  // };

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
                // onCurrencyFromChoose={setFromCurrency}
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
              <div className="mb-2">{t("get")}</div>
              <SelectDrop
                options={options2}
                // onCurrencyToChoose={setToCurrency}
              />
            </>
          </Reveal>
        </div>
      </div>
      <div className="flex px-5 lg:px-16 w-full text-white items-end justify-between gap-x-14 mt-6 font-medium">
        <div className="w-full lg:w-1/2 relative">
          <Reveal options={{ opc: 0, x: -500, del: 0.65 }} width="100%">
            <>
              <div className="mb-2 ">{t("sum")}</div>
              <Input
                id="input-1"
                // onChange={handleAmountChange}
              />
              {/* {bothCurrenciesSelected && (
            {fromCurrency} = {conversationRate} {toCurrency}
          )} */}
              <span className="absolute left-3 -bottom-5 md:left-6 md:-bottom-7 text-xs md:text-sm text-[#555555] font-semibold">
                1
              </span>
            </>
          </Reveal>
        </div>
        <div className="w-1/2 relative hidden lg:flex h-[45px]">
          <Reveal options={{ opc: 0, x: -500, del: 0.45 }} width="100%">
            <Button fullWidth>
              <span className="text-white pt-1 text-xs">{t("button")}</span>
            </Button>
          </Reveal>
        </div>
      </div>
    </div>
  );
};

export default FormInputs;

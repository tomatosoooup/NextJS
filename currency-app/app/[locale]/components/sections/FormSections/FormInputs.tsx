import Input from "@/components/inputs/Input";
import SelectDrop from "@/components/inputs/SelectDrop";
import { getCurrencyConversionRate } from "app/api/getCurrency";
import { getOptions } from "app/api/getOptions";
import { useTranslations } from "next-intl";
import { useFonts } from "providers/FontProvider";
import { useState, useCallback, useEffect } from "react";
import { TfiReload } from "react-icons/tfi";

const FormInputs = () => {
  type Rate = number | null;

  const [fromCurrency, setFromCurrency] = useState("");
  const [toCurrency, setToCurrency] = useState("");
  const [conversationFromRate, setConversationFromRate] = useState<Rate>(null);
  const [conversationToRate, setConversationToRate] = useState<Rate>(null);
  const bothCurrenciesSelected = fromCurrency && toCurrency;

  const [amount, setAmount] = useState<string>("");
  const [result, setResult] = useState("");

  const convertCurrency = useCallback(async () => {
    try {
      const data = await getCurrencyConversionRate(fromCurrency, toCurrency);

      if (Array.isArray(data.to) && data.to.length > 0) {
        const conversionInfo = data.to[0];
        const mid = parseFloat(conversionInfo.mid);
        const percentage = mid * 0.98;
        const result = parseFloat(percentage.toFixed(6));

        setConversationFromRate(result);
      }
      const data2 = await getCurrencyConversionRate(toCurrency, fromCurrency);

      if (Array.isArray(data2.to) && data2.to.length > 0) {
        const conversionInfo = data2.to[0];
        const mid = parseFloat(conversionInfo.mid);
        const percentage = mid * 0.98;
        const result2 = parseFloat(percentage.toFixed(6));

        setConversationToRate(result2);
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
  }, [amount, conversationFromRate, convertCurrency]);

  const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newAmount = event.target.value;
    setAmount(newAmount);
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
          <div className="mb-2">{t("give")}</div>
          <SelectDrop
            options={options}
            onCurrencyFromChoose={setFromCurrency}
          />
        </div>
        <TfiReload size={18} color="#828282" className="mt-5" />
        <div className="w-1/2">
          <div className="mb-2">{t("get")}</div>
          <SelectDrop options={options2} onCurrencyToChoose={setToCurrency} />
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
  );
};

export default FormInputs;

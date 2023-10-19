import React, { useEffect, useState } from "react";
import axios from "axios";

const API_BASE_URL = "https://openexchangerates.org/api";

const CurrencyConverter: React.FC = () => {
  const [exchangeRate, setExchangeRate] = useState<number | null>(null);
  const [amount, setAmount] = useState<number>(1);
  const [fromCurrency, setFromCurrency] = useState<string>("USD");
  const [toCurrency, setToCurrency] = useState<string>("EUR");

  useEffect(() => {
    const fetchExchangeRate = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/latest.json`, {
          params: {
            app_id: "981a1220849b4f8ca4f0168e9c7f1027",
          },
        });
        const rates = response.data.rates;
        if (rates) {
          const conversionRate = rates[toCurrency] / rates[fromCurrency];
          setExchangeRate(conversionRate);
        }
      } catch (error) {
        console.error("Error fetching exchange rate", error);
      }
    };

    fetchExchangeRate();
  }, [fromCurrency, toCurrency]);

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newAmount = parseFloat(e.target.value);
    if (!isNaN(newAmount)) {
      setAmount(newAmount);
    }
  };

  return (
    <div>
      <h1>Currency Converter</h1>
      <div>
        <label>From Currency:</label>
        <input
          type="text"
          value={fromCurrency}
          onChange={(e) => setFromCurrency(e.target.value)}
        />
      </div>
      <div>
        <label>To Currency:</label>
        <input
          type="text"
          value={toCurrency}
          onChange={(e) => setToCurrency(e.target.value)}
        />
      </div>
      <div>
        <label>Amount:</label>
        <input type="number" value={amount} onChange={handleAmountChange} />
      </div>
      {exchangeRate !== null && (
        <p className="block w-52 h-52 bg-white">
          {amount} {fromCurrency} is equal to {amount * exchangeRate}{" "}
          {toCurrency}
        </p>
      )}
    </div>
  );
};

export default CurrencyConverter;

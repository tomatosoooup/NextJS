"use client";

import axios from "axios";
import { useState, useEffect } from "react";

const Pricing = () => {
  const [prices, setPrices] = useState([]);

  const fetchPrices = async () => {
    const { data } = axios.get("/api/getproducts");
    setPrices(data);
  };

  useEffect(() => {
    fetchPrices();
  }, []);
  return (
    <section className="w-fill">
      <div className="mx-auto max-w-4xl text-center mt-10 items-center">
        <h2 className="text-3xl font-semibold leading-7 text-[#caa450]">
          Pricing
        </h2>
        <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-lg">
          Choose the right dumpster for you!
        </p>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600 sm:text-base">
          Check out all the information below
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-[1040px] itemc-center">
        {prices &&
          prices.map((price) => {
            <PricingCard key={price} price={price} />;
          })}
      </div>
    </section>
  );
};

export default Pricing;

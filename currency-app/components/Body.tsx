"use client";

import About from "app/[locale]/components/sections/About";
import Form from "app/[locale]/components/sections/Form";
import Main from "app/[locale]/components/sections/Main";
import Services from "app/[locale]/components/sections/Services";
import Ticker from "app/[locale]/components/Ticker";

const Body = () => {
  return (
    <>
      <Main />
      <Ticker />
      <Form />
      <Ticker />
      <About />
      <Ticker />
      <Services />
      <Ticker />
    </>
  );
};

export default Body;

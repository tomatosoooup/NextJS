"use client";

import About from "@/app/[locale]/components/About";
import Main from "@/app/[locale]/components/Main";
import Services from "@/app/[locale]/components/Services";

const Body = () => {
  return (
    <>
      <Main />
      <About />
      <Services />
    </>
  );
};

export default Body;

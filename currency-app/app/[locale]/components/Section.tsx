"use client";

import Ticker from "./Ticker";

interface SectionProps {
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ children }) => {
  return (
    <>
      <section className="min-h-fit max-w-screen-2xl m-auto">
        {children}
      </section>
      <Ticker />
    </>
  );
};

export default Section;

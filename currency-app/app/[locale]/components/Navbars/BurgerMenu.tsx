"use client";

import { useState } from "react";
import MobileMenu from "./MovileMenu";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };


  return (
    <>
    <button
      onClick={handleClick}
      className="flex flex-col justify-center items-center h-14 z-[1000] relative"
    >
      <span
        className={`bg-slate-100 block transition-all duration-300 ease-out 
                     w-8 rounded-sm h-[3px] ${
                       isOpen
                         ? "rotate-45 translate-y-[8.5px]"
                         : "-translate-y-0.5"
                     }`}
      ></span>
      <span
        className={`bg-slate-100 block transition-all duration-300 ease-out 
                     w-8 rounded-sm my-1.5 h-[3px] ${
                       isOpen ? "opacity-0" : "opacity-100"
                     }`}
      ></span>
      <span
        className={`bg-slate-100 block transition-all duration-300 ease-out 
                     w-8 rounded-sm h-[3px] ${
                       isOpen
                         ? "-rotate-45 -translate-y-[8.5px]"
                         : "translate-y-0.5"
                     }`}
      ></span>
    </button>
    <MobileMenu isVisible={isOpen} onChange={handleClick}/>
    </>
  );
};

export default BurgerMenu;

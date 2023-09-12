// SelectDrop.tsx

import React, { useState } from "react";

import classes from "../buttons/Button.module.css";
import Image from "next/image";

type Option = {
  type: string;
  name: string;
};

const SelectDrop = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: Option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="relative text-white font-bold ">
      <div
        className={`rounded-lg p-2 flex justify-around cursor-pointer ${classes.btn}`}
        onClick={toggleDropdown}
      >
        <span className="pt-1">
          {selectedOption ? selectedOption.name : "USDT"}
        </span>
        <span className="pt-1">
          {selectedOption ? selectedOption.type : "TRC20"}
        </span>
        <Image
          className="absolute right-4 top-4 hidden md:block"
          width={10}
          height={10}
          src={"./images/triangle.svg"}
          alt="triangle"
        />
        <ul
          className={`${
            isOpen ? "block" : "hidden"
          } absolute left-0 top-11 w-full bg-[#181818] flex flex-col overflow-y-auto max-h-[115px] lg:max-h-[92px] select-dropdown font-semibold z-10`}
        >
          {options.map((opt: Option) => (
            <li
              key={opt.name}
              onClick={() => handleOptionClick(opt)}
              className={`cursor-pointer flex justify-around border border-white/10 font-extralight py-1 ${
                selectedOption &&
                selectedOption.type === opt.type &&
                selectedOption.name === opt.name
                  ? "bg-[#D9D9D924]"
                  : "bg-[#181818]"
              }`}
            >
              <span className="pt-1">{opt.type}</span>
              <span className="pt-1">{opt.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SelectDrop;

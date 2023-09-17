"use client";

import Link from "next/link";
import { useState } from "react";

const DropDown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  const changeLanguage = (language) => {
    setSelectedLanguage(language);
    closeDropdown();
  };

  return (
    <div className="max-w-fit fixed right-5 lg:right-10 top-8 lg:top-10">
      <div className="relative inline-block z-10">
        <button
          type="button"
          className="px-4 py-2 text-white bg-transparent font-medium rounded-lg text-sm inline-flex items-center"
          onClick={toggleDropdown}
        >
          {selectedLanguage}
          <svg
            className="w-2.5 h-2.5 ml-2.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>

        {isOpen && (
          <div className="origin-top-right absolute right-0 mt-2 w-20 rounded-lg shadow-lg ring-1 ring-black ">
            <ul className="text-white">
            <Link
                href="/pl"
                className="block px-4 py-2 text-sm"
                onClick={()=> changeLanguage("PL")}
              >
                PL
              </Link>
              <Link
                href="/ua"
                className="block px-4 py-2 text-sm"
                onClick={()=> changeLanguage("UA")}
              >
                UA
              </Link>
              <Link
                href="/ru"
                className="block px-4 py-2 text-sm "
                onClick={()=> changeLanguage("RU")}
              >
                RU
              </Link>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default DropDown;

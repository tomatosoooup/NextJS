"use client";

import Button from "./Button";
// import Bank from "./Bank";
import { TfiReload } from "react-icons/tfi";

const SectionBox = () => {
  return (
    <div className="lg:grid lg:grid-cols-2  min-h-screen text-white">
      <div className="px-5 text-center lg:text-justify pt-32 lg:pt-72 ">
        <h1 className="text-4xl md:text-6xl uppercase mb-5 font-bold">
          Cryptocurrency exchange
        </h1>
        <div className="my-5 w-80 h-[1px] bg-gradient-to-r from-white to-white/10"></div>
        <p className="text-sm md:text-xl text-[#CECECE] font-light lg:max-w-xl">
          <span className="font-semibold">
            Надежный партнер в мире криптовалют и финансов.
          </span>
          <br />
          <br /> Наша цель - сделать каждую операцию быстрой, простой и
          безопасной, чтобы вы могли сосредоточиться на своих делах, нежели
          волноваться о финансовых аспектах.
        </p>
        <div className="hidden lg:block mt-10">
          <Button>
            <span className="uppercase text-sm font-semibold flex items-center gap-5">
              Совершить обмен
              <TfiReload size={20} color="#828282" />
            </span>
          </Button>
        </div>
      </div>
      {/* <div className="fixed inset-0 h-[600px] lg:h-auto w-screen pl-[50%]">
        <Bank />
      </div> */}
    </div>
  );
};

export default SectionBox;

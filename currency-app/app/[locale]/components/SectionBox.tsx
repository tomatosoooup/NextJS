"use client";

import Button from "./buttons/Button";

const SectionBox = () => {
  return (
    <div className="md:grid md:grid-cols-2 min-h-screen pt-36 md:pt-56  text-white">
      <div className="px-5 text-center">
        <h1 className="text-4xl md:text-6xl uppercase mb-5 ">
          Cryptocurrency exchange
        </h1>
        <p className="text-base md:text-xl text-[#CECECE]">
          Надежный партнер в мире криптовалют и финансов. <br />
          <br /> Наша цель - сделать каждую операцию быстрой, простой и
          безопасной, чтобы вы могли сосредоточиться на своих делах, нежели
          волноваться о финансовых аспектах.
        </p>
        <Button>Совершить обмен</Button>
      </div>
      <div>
        <img src="" alt="Bank" />
      </div>
    </div>
  );
};

export default SectionBox;

"use client";

import Image from "next/image";

const ServiceBox = () => {
  return (
    <div className="text-white relative">
      <div className="pt-32 pb-16 md:pb-28 px-5">
        <h2 className="text-4xl font-semibold text-center md:text-left">
          УСЛУГИ
        </h2>
        <div className="flex">
          <div className="my-10 w-72 h-[1px] bg-gradient-to-l from-white to-white/10 md:hidden"></div>
          <div className="my-10 w-72 h-[1px] bg-gradient-to-r from-white to-white/10"></div>
        </div>
        <ul className="flex flex-col max-w-xl gap-6 text-[#EAEAEA] text-lg font-normal">
          <li className="relative pl-4">
            Наличный обмен криптовалют
            <span className="text-[#9F9F9F]">(покупка/продажа)</span>
            <div className="w-1 h-1 rounded-full bg-white absolute -left-0 top-3"></div>
          </li>
          <li className="relative pl-4">
            Денежные перестановки между городами и странами
            <div className="w-1 h-1 rounded-full bg-white absolute -left-0 top-3"></div>
          </li>
          <li className="relative pl-4">
            Банковские переводы с использованием платежных систем: SEPA, SWIFT,
            ПРОСТІР<span className="text-[#9F9F9F]">(UAH)</span>, PSP
            <span>(Polski Standart Płatności)</span>
            <div className="w-1 h-1 rounded-full bg-white absolute -left-0 top-3"></div>
          </li>
          <li className="relative pl-4">
            Депозитирование Fintech банков
            <span className="text-[#9F9F9F]">
              ( Revolut , Wise , Zen и т.д )
            </span>
            <div className="w-1 h-1 rounded-full bg-white absolute -left-0 top-3"></div>
          </li>
        </ul>
        {/* Second ul */}
        <ul className="flex flex-col max-w-xl gap-6 text-[#EAEAEA] text-lg font-normal mt-5 md:mt-14 md:ml-[22%]">
          <li className="relative pl-4">
            Широкий спектр юрисдикций и компаний для специализированого
            обслуживания клиентов
            <div className="w-1 h-1 rounded-full bg-white absolute -left-0 top-3"></div>
          </li>
          <li className="relative pl-4">
            Прием/выставление инвойсов и контрактов
            <div className="w-1 h-1 rounded-full bg-white absolute -left-0 top-3"></div>
          </li>
          <li className="relative pl-4">
            Пополнение физ.лиц{" "}
            <span className="text-[#9F9F9F]">
              (оплаты квартир, обучений, переводы семье)
            </span>
            <div className="w-1 h-1 rounded-full bg-white absolute -left-0 top-3"></div>
          </li>
          <li className="relative pl-4">
            Оплата товаров и автомобильных аукционов по всему миру
            <div className="w-1 h-1 rounded-full bg-white absolute -left-0 top-3"></div>
          </li>
        </ul>
      </div>
      <Image
        alt="sepa"
        width={475}
        height={475}
        className="hidden lg:block absolute right-12 top-20 z-10"
        src={"./images/sepa.svg"}
        priority
      />
      <Image
        alt="dollar"
        width={1100}
        height={1100}
        className="hidden lg:block absolute -left-40 -bottom-80"
        src={"./images/dollar.svg"}
      />
      <Image
        alt="dollar-2"
        width={400}
        height={400}
        className="lg:hidden absolute -left-0 -bottom-44 "
        src={"./images/dollar-2.svg"}
      />
      <Image
        alt="swift"
        width={375}
        height={375}
        className="hidden lg:block absolute -right-2 bottom-10 "
        src={"./images/swift.svg"}
      />
      <Image
        alt="swift-mobile"
        width={250}
        height={250}
        className="absolute right-0 top-32 lg:hidden"
        src={"./images/swift-2.svg"}
      />
    </div>
  );
};

export default ServiceBox;

import BurgerMenu from "./BurgerMenu";

const MobileNavbar = () => {
  return (
    <div className="fixed inset-0 h-[70px] lg:hidden z-30">
      <div className="max-w-full m-auto mt-5 px-5 mb-5 flex items-center">
        <BurgerMenu />
        <div className="text-center flex flex-col font-medium ml-6 text-white">
          <span className="text-4xl tracking-[0.2rem]">KLTP</span>
          <span className="text-xs tracking-[0.2rem] lowercase font-normal">
            exchange
          </span>
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar;

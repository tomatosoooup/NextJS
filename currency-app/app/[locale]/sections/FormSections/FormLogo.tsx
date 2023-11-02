import { Reveal } from "@/components/Reveal";
import { useFonts } from "providers/FontProvider";

const FormLogo = () => {
  const fonts = useFonts();
  return (
    <>
      <div
        className="text-center font-medium text-white mx-auto mt-10 hidden lg:block lg:absolute lg:bottom-10 lg:left-[50%] lg:translate-x-[-50%] order-5 lg:order-none"
        style={{ fontFamily: `${fonts.cf}` }}
      >
        <Reveal options={{ x: 0, bottom: 100 }}>
          <>
            <div className="flex flex-col relative">
              <div className="w-12 md:w-24 lg:w-56 h-[1px] bg-gradient-to-l from-white to-white/10 absolute -left-16 md:-left-32 lg:-left-64 top-11 lg:top-16"></div>
              <span className="text-5xl lg:text-7xl  tracking-[0.7rem] font-extrabold">
                KLTP
              </span>
              <span
                className="text-sm md:text- lg:text-3xl tracking-[0.8rem] lowercase font-extralight leading-4"
                style={{ fontFamily: `${fonts.ct}` }}
              >
                exchange
              </span>
              <div className="w-12 md:w-24 lg:w-56 h-[1px] bg-gradient-to-r from-white to-white/10 absolute -right-16 md:-right-32 lg:-right-64 top-11 lg:top-16"></div>
            </div>
          </>
        </Reveal>
      </div>
    </>
  );
};

export default FormLogo;

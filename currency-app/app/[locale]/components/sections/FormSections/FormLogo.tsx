import { Reveal } from "@/components/Reveal";
import { useFonts } from "providers/FontProvider";

const FormLogo = () => {
  const fonts = useFonts();
  return (
    <>
      <div
        className="text-center font-medium text-white mx-auto  mt-10 lg:absolute lg:bottom-20 lg:left-[50%] lg:translate-x-[-50%] order-5 lg:order-none"
        style={{ fontFamily: `${fonts.ct}` }}
      >
        <Reveal options={{ opc: 0, x: 0, del: 0.45, bottom: 300 }}>
          <>
            <div className="flex flex-col relative">
              <Reveal options={{ opc: 0, x: -500, del: 0.25 }}>
                <div className="w-12 md:w-24 lg:w-56 h-[1px] bg-gradient-to-l from-white to-white/10 absolute -left-16 md:-left-32 lg:-left-64 top-11 lg:top-16"></div>
              </Reveal>
              <span className="text-5xl lg:text-7xl  tracking-[0.7rem] font-extrabold">
                KLTP
              </span>
              <span className="text-sm md:text- lg:text-3xl tracking-[0.7rem] lowercase font-light leading-4">
                exchange
              </span>
              <Reveal options={{ opc: 0, x: 500, del: 0.25 }}>
                <div className="w-12 md:w-24 lg:w-56 h-[1px] bg-gradient-to-r from-white to-white/10 absolute -right-16 md:-right-32 lg:-right-64 top-11 lg:top-16"></div>
              </Reveal>
            </div>
          </>
        </Reveal>
      </div>
    </>
  );
};

export default FormLogo;

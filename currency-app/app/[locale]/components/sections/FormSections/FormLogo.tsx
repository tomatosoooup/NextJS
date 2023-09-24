import { useFonts } from "providers/FontProvider"

const FormLogo = ()=> {
    const fonts = useFonts()
    return (<>          {/* Logo */}
    <div
      className="text-center flex flex-col font-medium relative text-white w-fit mx-auto mt-10 lg:absolute lg:bottom-20 lg:left-[50%] lg:translate-x-[-50%] order-5 lg:order-none"
      style={{ fontFamily: `${fonts.ct}` }}
    >
      <div className="w-12 md:w-24 lg:w-56 h-[1px] bg-gradient-to-l from-white to-white/10 absolute -left-16 md:-left-32 lg:-left-64 top-11 lg:top-16"></div>
      <span className="text-5xl lg:text-7xl  tracking-[0.7rem] font-extrabold">
        KLTP
      </span>
      <span className="text-sm md:text- lg:text-3xl tracking-[0.7rem] lowercase font-light leading-4">
        exchange
      </span>
      <div className="w-12 md:w-24 lg:w-56 h-[1px] bg-gradient-to-r from-white to-white/10 absolute -right-16 md:-right-32 lg:-right-64 top-11 lg:top-16"></div>
    </div></>)
}

export default FormLogo
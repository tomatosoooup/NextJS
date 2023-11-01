"use client";
import { useTranslations } from "next-intl";
import { useFonts } from "providers/FontProvider";

import { Link as ScrollLink } from "react-scroll";
import DropDown from "./DropDown";

interface SmoothScrollLinkProps {
  to: string;
  offset?: number;
  children: React.ReactNode;
  className?: string;
}

const SmoothScrollLink: React.FC<SmoothScrollLinkProps> = ({
  to,
  offset = 0,
  children,
  className,
}) => (
  <ScrollLink
    activeClass="active"
    to={to}
    smooth={true}
    offset={offset - 150}
    duration={1500}
    className={className}
  >
    {children}
  </ScrollLink>
);

const Navbar = ({ locale }: { locale?: string }) => {
  const t = useTranslations("Navbar");
  const fonts = useFonts();

  return (
    // fixed inset-0 w-screen z-20
    <div className="min-h-fit hidden lg:block">
      <div className="max-w-[1125px] 2xl:max-w-screen-2xl mx-auto mt-5 px-5 mb-5">
        <ul
          className="flex 
          list-none 
          items-center 
          justify-center 
          h-full text-[20px] 
          uppercase 
          text-white 
          w-full 
          font-extralight"
          style={{ fontFamily: `${fonts.tt}` }}
        >
          <SmoothScrollLink className="mt-7 cursor-pointer" to="main">
            {t("main")}
          </SmoothScrollLink>
          <SmoothScrollLink className="mt-7 cursor-pointer ml-auto" to="footer">
            {t("contacts")}
          </SmoothScrollLink>
          <div
            className="
          text-center 
          flex 
          flex-col 
          font-bold
          mx-auto
          relative"
          >
            <div className="w-16 h-[1px] bg-gradient-to-l from-white to-white/10 absolute -left-28 top-14"></div>
            <span
              className="text-6xl tracking-[0.5rem]"
              style={{ fontFamily: `${fonts.cf}` }}
            >
              KLTP
            </span>
            <span
              className="text-xl tracking-[0.7rem] lowercase font-light"
              style={{ fontFamily: `${fonts.ct}` }}
            >
              exchange
            </span>
            <div className="w-16 h-[1px] bg-gradient-to-r from-white to-white/10 absolute -right-28 top-14"></div>
          </div>
          <SmoothScrollLink className="mt-7 cursor-pointer mr-auto" to="about">
            {t("about")}
          </SmoothScrollLink>
          <SmoothScrollLink className="mt-7 cursor-pointer" to="services">
            {t("services")}
          </SmoothScrollLink>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

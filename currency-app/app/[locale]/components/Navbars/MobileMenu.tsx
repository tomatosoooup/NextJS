"use client";

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

import { Link as ScrollLink } from "react-scroll";

interface SmoothScrollLinkProps {
  to: string;
  offset?: number;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const SmoothScrollLink: React.FC<SmoothScrollLinkProps> = ({
  to,
  offset = 0,
  children,
  className,
  onClick,
}) => (
  <ScrollLink
    activeClass="active"
    to={to}
    spy={true}
    smooth={true}
    offset={offset - 120}
    duration={1000}
    className={className}
    onClick={onClick}
  >
    {children}
  </ScrollLink>
);

const MobileMenu = ({ isVisible, onClick }) => {
  return (
    <div
      className={clsx(
        `
    h-screen
    bg-[#121212] 
    w-screen 
    fixed 
    inset-0 
    -translate-x-full 
    transition-all 
    duration-500 
    py-20
    `,
        isVisible && "translate-x-0 flex flex-col"
      )}
      onClick={onClick}
    >
      <ul className="flex flex-col text-[#ffffff] px-5 gap-6 font-semibold text-2xl mt-5">
        <SmoothScrollLink to="form" onClick={onClick}>
          Головна
        </SmoothScrollLink>
        <SmoothScrollLink to="footer" onClick={onClick}>
          Контакти
        </SmoothScrollLink>
        <SmoothScrollLink to="about" onClick={onClick}>
          О нас
        </SmoothScrollLink>
        <SmoothScrollLink to="services" onClick={onClick}>
          Послуги
        </SmoothScrollLink>
      </ul>

      <ul className="flex flex-col px-5 gap-3 text-[#D3D3D3] text-lg font-light mt-10">
        <span className="text-white text-xl font-normal">Контакт</span>
        <Link href={"/"}>About us</Link>
        <Link href={"/"}>Contacts for mass media</Link>
        <Link href={"/"}>How else to pay</Link>
        <Link href={"/"}>Add a podcast</Link>
      </ul>

      <ul className="flex flex-col px-5 text-right gap-3 text-[#D3D3D3] text-lg font-light">
        <span className="text-white text-xl font-normal">Адреса</span>
        <Link href={"/"}>Крислаотя 2</Link>
        <Link href={"/"}>Mobile devices</Link>
        <Link href={"/"}>Computer</Link>
        <Link href={"/"}>Connect to TV</Link>
      </ul>

      <Image
        alt="Bitcoin Mobile"
        src={"./images/Bitcoin.svg"}
        width={375}
        height={375}
        className="absolute left-0 -bottom-36 pointer-events-none"
      />
    </div>
  );
};

export default MobileMenu;

import { useFonts } from "providers/FontProvider";
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
    offset={offset}
    duration={1000}
    className={className}
    onClick={onClick}
  >
    {children}
  </ScrollLink>
);

const MobileMenu = ({ isVisible, onClick }) => {
  const fonts = useFonts();

  return (
    <div
      className={clsx(
        `
        h-screen
        w-72
        md:w-80
        bg-[#121212]/95
        fixed 
        inset-0 
        -translate-x-full 
        transition-all 
        duration-1000 
        py-20
        rounded-tr-3xl
    `,
        isVisible && "translate-x-0 flex flex-col"
      )}
      onClick={onClick}
    >
      <div className="z-10 w-full h-screen absolute bg-[#121212]/95 blur-sm inset-0 rounded-tr-3xl"></div>
      <ul
        className="flex flex-col text-[#ffffff] px-5 gap-10 font-bold text-2xl mt-5 relative uppercase z-20"
        style={{ fontFamily: `${fonts.tt}` }}
      >
        <SmoothScrollLink to="form" onClick={onClick} className="ml-5 pt-2">
          Головна
        </SmoothScrollLink>
        <div className="absolute h-[1px] left-0 top-14 w-full bg-white/10"></div>
        <SmoothScrollLink to="about" onClick={onClick} className="ml-5">
          О нас
        </SmoothScrollLink>
        <div className="absolute h-[1px] left-0 top-32 w-full bg-white/10"></div>
        <SmoothScrollLink to="services" onClick={onClick} className="ml-5">
          Послуги
        </SmoothScrollLink>
        <div className="absolute h-[1px] left-0 top-[200px] w-full bg-white/10"></div>
        <SmoothScrollLink to="footer" onClick={onClick} className="ml-5">
          Контакти
        </SmoothScrollLink>
        <div className="absolute h-[1px] left-0 -bottom-4 w-full bg-white/10"></div>
      </ul>

      <div className="flex flex-col px-5 mt-8 text-[#D9D9D9] font-extrabold z-20">
        <span>Wrocław</span>
        <span className="font-medium">Ofiar Oswiecimskich 17</span>
        <span className="text-right my-6">10:00-20:00</span>
        <span>Poznań</span>
        <span className="font-medium">Poznańska 1/36 60-848</span>
        <Link href={"/"} className="my-4 font-medium">
          kltp.finance@gmail.com
        </Link>

        <div className="flex gap-5 mt-4" style={{ fontFamily: `${fonts.ct}` }}>
          <Link href={"/"}>
            <Image
              alt="telegram"
              src={"./images/telegram.svg"}
              width={30}
              height={30}
            />
          </Link>
          <Link href={"/"}>
            <Image
              alt="instagram"
              src={"./images/instagram.svg"}
              width={30}
              height={30}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;

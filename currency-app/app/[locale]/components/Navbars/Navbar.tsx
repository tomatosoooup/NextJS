"use client";
import { useTranslations } from "next-intl";
import { useFonts } from "providers/FontProvider";
import { useEffect } from "react";
import Link from "next/link";

const Navbar = () => {
  // { locale }: { locale?: string }
  const t = useTranslations("Navbar");
  const fonts = useFonts();

  useEffect(() => {
    if (typeof document !== "undefined") {
      const scrollLinks = document.querySelectorAll('a[href^="#"]');

      scrollLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
          e.preventDefault();

          const targetId = link.getAttribute("href").substring(1);
          const targetElement = document.getElementById(targetId);

          if (targetElement) {
            const yOffset = -150; // Adjust this value as needed
            const targetY =
              targetElement.getBoundingClientRect().top +
              window.pageYOffset +
              yOffset;
            const initialY = window.pageYOffset;
            const duration = 2500; // Set your desired animation duration in milliseconds
            let start = null;

            function step(timestamp) {
              if (!start) start = timestamp;
              const progress = (timestamp - start) / duration;

              window.scrollTo(
                0,
                initialY + (targetY - initialY) * Math.min(progress, 1)
              );

              if (progress < 1) {
                requestAnimationFrame(step);
              }
            }

            requestAnimationFrame(step);
          }
        });
      });
    }
  }, []);

  return (
    <div className="min-h-fit hidden lg:block">
      <div className="max-w-[1150px] 2xl:max-w-screen-2xl mx-auto mt-5 px-5 mb-5">
        <ul
          className="flex 
          list-none 
          items-center 
          justify-center 
          h-full 
          text-[20px] 
          uppercase 
          text-white 
          w-full 
          font-light"
          style={{ fontFamily: `${fonts.tt}` }}
        >
          <Link className="mt-7 cursor-pointer mr-auto" href="#main">
            {t("main")}
          </Link>
          <Link className="mt-7 cursor-pointer mr-auto" href="#footer">
            {t("contacts")}
          </Link>
          <div
            className="
          text-center 
          flex 
          flex-col 
          font-bold
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
          <Link className="mt-7 cursor-pointer ml-auto" href="#about">
            {t("about")}
          </Link>
          <Link className="mt-7 cursor-pointer ml-auto" href="#services">
            {t("services")}
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

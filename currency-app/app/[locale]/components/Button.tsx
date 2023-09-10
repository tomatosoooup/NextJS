"use client";

import { useFonts } from "@/providers/FontProvider";
import clsx from "clsx";
import { TfiReload } from "react-icons/tfi";

interface ButtonProps {
  type?: "button" | "submit" | "reset" | undefined;
  fullWidth?: boolean;
  children?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  type,
  fullWidth,
  children,
  onClick,
}) => {
  const fonts = useFonts();
  return (
    <button
      onClick={onClick}
      type={type}
      style={{ fontFamily: `${fonts.tt}` }}
      className={clsx(
        `
        uppercase
        text-sm 
        font-medium
        leading-6
        flex 
        items-center
        gap-5
        rounded-md
        px-6 
        py-3
        bg-gradient-to-r 
        from-[#D9D9D917] 
        to-[#D9D9D917] 
        relative
        z-10

  `,
        fullWidth && "w-full"
      )}
    >
      {children}
      <TfiReload size={18} color="#828282" />
    </button>
  );
};

export default Button;

"use client";

import { useFonts } from "providers/FontProvider";
import clsx from "clsx";
import { TfiReload } from "react-icons/tfi";
import classes from "./Button.module.css";

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
        text-base 
        leading-6
        flex 
        items-center
        gap-4
        rounded-md
        px-5 
        py-3
        relative
        justify-center
        ${classes.btn}
  `,
        fullWidth && "w-full"
      )}
    >
      {children}
      <TfiReload size={16} color="#828282" />
    </button>
  );
};

export default Button;

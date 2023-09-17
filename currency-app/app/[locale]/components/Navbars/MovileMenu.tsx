"use client"

import clsx from "clsx"
import Image from "next/image";
import Link from "next/link";

const MobileMenu = ({isVisible, onChange})=> {
    return <div className={clsx(`
    h-screen
    bg-[#121212] 
    w-screen 
    absolute 
    inset-0 
    -translate-x-full 
    transition-all 
    duration-500 
    z-50
    py-20
    flex
    flex-col`
    , isVisible && "translate-x-0")} onClick={onChange}>
        <ul className="flex flex-col text-[#ffffff] px-5 gap-6 font-semibold text-2xl mt-5">
        <Link href={"/"}>Головна</Link>
        <Link href={"/"}>Контакти</Link>
        <Link href={"/"}>О нас</Link>
        <Link href={"/"}>Послуги</Link>
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
}

export default MobileMenu;
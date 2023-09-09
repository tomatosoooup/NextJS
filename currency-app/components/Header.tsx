"use client";

import Navbar from "@/app/[locale]/components/Navbars/Navbar";
import MobileNavbar from "@/app/[locale]/components/Navbars/MobileNavbar";

const Header = () => {
  return (
    <>
      <Navbar />
      <MobileNavbar />
    </>
  );
};

export default Header;

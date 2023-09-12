"use client";

import Navbar from "@/app/[locale]/components/navbars/Navbar";
import MobileNavbar from "@/app/[locale]/components/navbars/MobileNavbar";

const Header = () => {
  return (
    <>
      <Navbar />
      <MobileNavbar />
    </>
  );
};

export default Header;

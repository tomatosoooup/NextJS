"use client";

import MobileNavbar from "../app/[locale]/components/navbars/MobileNavbar";
import Navbar from "../app/[locale]/components/navbars/Navbar";

const Header = () => {
  return (
    <>
      <Navbar />
      <MobileNavbar />
    </>
  );
};

export default Header;

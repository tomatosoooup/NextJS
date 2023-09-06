"use client";

import { useRouter } from "next/navigation";
import Navbar from "./components/Navbars/Navbar";
import MobileNavbar from "./components/Navbars/MobileNavbar";
import Section from "./components/Section";
import SectionBox from "./components/SectionBox";

export default function Index() {
  const router = useRouter();

  return (
    <>
      <Navbar />
      <MobileNavbar />
      <Section>
        <SectionBox></SectionBox>
      </Section>
    </>
  );
}

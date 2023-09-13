"use client";
// import { useRouter } from "next/navigation"

import Header from "@/components/Header";
import Body from "@/components/Body";
import Footer from "@/components/Footer";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);
  // const router = useRouter();

  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
}

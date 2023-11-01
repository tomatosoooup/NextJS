"use client";
import Main from "./components/sections/Main";
import Form from "./components/sections/Form";
import About from "./components/sections/About";
import Services from "./components/sections/Services";
import Footer from "components/Footer";

export default function Home() {
  return (
    <>
      <Main />
      <Form />
      <About />
      <Services />
      <Footer />
    </>
  );
}

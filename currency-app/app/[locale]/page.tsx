"use client";
import About from "./sections/About";
import Form from "./sections/Form";
import Main from "./sections/Main";
import Services from "./sections/Services";
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

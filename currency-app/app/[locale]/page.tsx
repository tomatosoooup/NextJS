// import { useRouter } from "next/navigation";

import Header from "@/components/Header";
import Section from "./components/Section";
import Main from "./components/Main";
import About from "./components/About";
import Services from "./components/Services";
import Footer from "@/components/Footer";
import Form from "./components/Form";

export default function Home() {
  // const router = useRouter();

  return (
    <>
      <Header />
      <Section>
        <Main />
      </Section>
      <Section>
        <Form />
      </Section>
      <Section>
        <About />
      </Section>
      <Section>
        <Services />
      </Section>
      <Footer />
    </>
  );
}

// import { useRouter } from "next/navigation";

import Header from "@/components/Header";
import Section from "./components/Section";
import Main from "./components/Main";

import Services from "./components/Services";
import Footer from "@/components/Footer";

export default function Home() {
  // const router = useRouter();

  return (
    <>
      <Header />
      <Section>
        <Main />
      </Section>
      <Section>
        <Services />
      </Section>
      <Footer />
    </>
  );
}

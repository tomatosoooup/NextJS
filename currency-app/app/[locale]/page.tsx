import Footer from "@/components/Footer";

// import { useRouter } from "next/navigation";

import Section from "./components/Section";
import SectionBox from "./components/SectionBox";
import Header from "@/components/Header";
import ServiceBox from "./components/ServicesBox";

export default function Home() {
  // const router = useRouter();

  return (
    <>
      <Header />
      <Section>
        <SectionBox />
      </Section>
      {/* <Section>hello</Section> */}
      <Section>
        <ServiceBox />
      </Section>
      <Footer />
    </>
  );
}

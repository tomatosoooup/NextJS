"use client";

interface SectionProps {
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ children }) => {
  return (
    <section className="min-h-screen max-w-screen-2xl m-auto ">
      {children}
    </section>
  );
};

export default Section;

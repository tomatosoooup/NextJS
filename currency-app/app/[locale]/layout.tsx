import "../globals.css";
import type { Metadata } from "next";

import { FontProvider } from "providers/FontProvider";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import DropDown from "./components/Navbars/DropDown";

export const metadata: Metadata = {
  title: "KLTP",
  description: "KLTP ",
};
interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

export default async function RootLayout({
  children,
  params: { locale },
}: RootLayoutProps) {
  let messages: Record<string, any>;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body>
        <FontProvider>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <DropDown locale={locale} />
            {children}
          </NextIntlClientProvider>
        </FontProvider>
      </body>
    </html>
  );
}

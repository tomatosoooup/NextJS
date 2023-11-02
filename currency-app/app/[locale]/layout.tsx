import "../globals.css";
import type { Metadata } from "next";

import { FontProvider } from "providers/FontProvider";
import { NextIntlClientProvider } from "next-intl";
import Navbar from "./components/Navbars/Navbar";
import MobileNavbar from "./components/Navbars/MobileNavbar";

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
    return;
  }

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <FontProvider>
            <Navbar />
            {/* locale={locale} */}
            <MobileNavbar locale={locale} />
            {children}
          </FontProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

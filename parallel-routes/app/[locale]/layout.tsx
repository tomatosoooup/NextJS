import { useTranslations } from "next-intl";
import Link from "next/link";

export default function MainLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const t = useTranslations("Index");
  return (
    <>
      <nav className="flex flex-col gap-y-2 p-2">
        <Link href={`/${locale}/page_one`}>To the first page</Link>
        <Link href={`/${locale}/page_two`}>To the second page</Link>
        <Link href={`/${locale}/page_three`}>To the third page</Link>
      </nav>
      <div className="flex gap-x-4 p-2">
        <div className="w-full h-full flex justify-center items-center">
          {children}
        </div>
      </div>
    </>
  );
}

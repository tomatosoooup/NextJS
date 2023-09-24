import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["en", "ua", "pl", "ru"],

  defaultLocale: "en",
});

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};

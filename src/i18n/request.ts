import { getRequestConfig } from "next-intl/server";
import { hasLocale } from "next-intl";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  const common = (await import(`../locales/${locale}/common.json`)).default;
  const nav = (await import(`../locales/${locale}/nav.json`)).default;
  const about = (await import(`../locales/${locale}/about.json`)).default;
  const history = (await import(`../locales/${locale}/ourHistory.json`))
    .default;
  const footer = (await import(`../locales/${locale}/footer.json`)).default;

  return {
    locale,
    messages: { common, nav, about, history, footer },
  };
});

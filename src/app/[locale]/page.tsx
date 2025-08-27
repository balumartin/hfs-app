import AboutUs from "@/components/AboutUs";
import News from "@/components/News";

export function generateStaticParams() {
  return [{ locale: "hu" }, { locale: "en" }];
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <main className="flex min-h-screen flex-col lg:p-6">
      <div className="mx-auto z-0">
        <AboutUs lang={locale} />
        {/* <News lang={locale} /> */}
      </div>
    </main>
  );
}

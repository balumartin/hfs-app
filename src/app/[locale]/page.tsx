import AboutUs from "@/components/AboutUs";
import ImageSlider from "@/components/ImageSlider";

import { MEMBERS } from "@/constants";
import { IMAGES } from "@/constants";

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
        <AboutUs lang={locale} members={MEMBERS} />
        <ImageSlider imageUrls={IMAGES} />
      </div>
    </main>
  );
}

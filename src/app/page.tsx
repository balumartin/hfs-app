import AboutUs from "@/components/AboutUs";
import News from "@/components/News";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col lg:p-6">
      <div className="mx-auto z-0">
        <AboutUs />
        <News />
      </div>
    </main>
  );
}

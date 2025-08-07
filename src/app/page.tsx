import AboutUs from "@/components/AboutUs";
import BreadCrumb from "@/components/BreadCrumb";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import News from "@/components/News";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className=" mx-auto z-0">
        <AboutUs />
        <News />
      </div>
    </main>
  );
}

import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadCrumb from "@/components/BreadCrumb";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Magyar Szómaesztétikai Fórum",
    default: "Magyar Szómaesztétikai Fórum",
  },
  description:
    "A Magyar Szómaesztétikai Fórum hivatalos weboldala – kutatások, események, publikációk és tagok bemutatása.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="hu" className="scroll-smooth">
      <body>
        <Header />
        <BreadCrumb />
        {children}
        <Footer />
      </body>
    </html>
  );
}

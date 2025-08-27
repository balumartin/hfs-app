import "./globals.css";
import type { Metadata } from "next";
import { inter } from "./ui/fonts";

export const metadata: Metadata = {
  title: {
    template: "%s | Magyar Szómaesztétikai Fórum",
    default: "Magyar Szómaesztétikai Fórum",
  },
  description:
    "A Magyar Szómaesztétikai Fórum hivatalos weboldala – kutatások, események, publikációk és tagok bemutatása.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="hu" className={`${inter.className} antialised scroll-smooth`}>
      <body>{children}</body>
    </html>
  );
}

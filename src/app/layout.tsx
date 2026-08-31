import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingConsult from "@/components/FloatingConsult";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://glucersen.vercel.app"),
  title: "GLUCERSEN | Sublingual Film for Diabetes (Muntingia calabura L.)",
  description: "Inovasi sediaan sublingual film ekstrak daun kersen (Muntingia calabura L.) dengan aktivitas antioksidan sebagai terapi pendamping (adjuvant) pengontrol gula darah.",
  icons: {
    icon: "/logo-glucersen.png",
    apple: "/logo-glucersen.png",
  },
  openGraph: {
    title: "GLUCERSEN | Sublingual Film for Diabetes",
    description: "Inovasi sediaan sublingual film ekstrak daun kersen (Muntingia calabura L.) dengan aktivitas antioksidan sebagai terapi pendamping (adjuvant) pengontrol gula darah.",
    images: [{ url: "/logo-glucersen.png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`scroll-smooth ${jakarta.variable}`} data-scroll-behavior="smooth">
      <body className="antialiased font-sans min-h-full flex flex-col selection:bg-salmon/30">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <FloatingConsult />
      </body>
    </html>
  );
}

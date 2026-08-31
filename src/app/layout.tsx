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
  title: "GLUCERSEN | Glucose-Regulating & Antioxidant Sublingual Film (Muntingia calabura L.)",
  description: "An innovative adjuvant therapy for Diabetes Mellitus utilizing Indonesian Muntingia calabura L. cherry leaves in a fast-dissolving sublingual biofilm format.",
  icons: {
    icon: "/logo-glucersen.png",
    apple: "/logo-glucersen.png",
  },
  openGraph: {
    title: "GLUCERSEN | Sublingual Film for Diabetes Mellitus",
    description: "An innovative adjuvant therapy for Diabetes Mellitus utilizing Indonesian Muntingia calabura L. cherry leaves in a fast-dissolving sublingual biofilm format.",
    images: [{ url: "/logo-glucersen.png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${jakarta.variable}`} data-scroll-behavior="smooth">
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

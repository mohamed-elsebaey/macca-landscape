import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import Header from "@/components/sections/header/Header";
import FooterSection from "@/components/sections/Footer";
import { companyName } from "@/constants";
import { CartProvider } from "@/contexts/CartContext";


const cairo = Cairo({
  weight: ["400", "500", "600", "700"],
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  display: "swap",
  adjustFontFallback: false,
  preload: true,
});

export const metadata: Metadata = {
  title: {
    default: `${companyName.ar}`,
    template: `${companyName.ar} | %s`,
  },
  description: "مكة لاندسكيب - تصميم وتنفيذ الحدائق",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      suppressHydrationWarning
      className="max-w-[2200px] mx-auto"
    >
      <body className={`${cairo.variable} antialiased`}>
        <CartProvider>
          <Header />
          {children}
          <FooterSection />
          {/* <Toaster /> */}
        </CartProvider>
      </body>
    </html>
  );
}

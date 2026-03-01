import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next"
import { Geist_Mono, Lato } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chinesiologo Buscaglia",
  description: "Personal trainer: coaching online e in presenza. Allenamento personalizzato, metodologia chiara, obiettivi misurabili.",
  icons: {
    icon: "/logo/LOGO-COLORATO.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body
        className={`${lato.variable} ${geistMono.variable} antialiased`}
      >
        <SpeedInsights />
        <Analytics />
        <div className="min-h-screen bg-transparent text-foreground">
          <SiteHeader />
          {children}
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { BackToTop } from "@/components/layout/BackToTop";
import { CustomCursor } from "@/components/shared/CustomCursor";
import { MouseGradient } from "@/components/shared/MouseGradient";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ByteCraft Technologies | Digital Product Agency",
  description:
    "We build websites, SaaS applications, mobile apps, AI solutions and cloud software that help businesses grow.",
  keywords: [
    "web development",
    "mobile apps",
    "SaaS",
    "AI solutions",
    "cloud software",
    "digital agency",
    "ByteCraft",
  ],
  openGraph: {
    title: "ByteCraft Technologies | Digital Product Agency",
    description:
      "We build websites, SaaS applications, mobile apps, AI solutions and cloud software that help businesses grow.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <ThemeProvider>
          <ScrollProgress />
          <CustomCursor />
          <MouseGradient />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}

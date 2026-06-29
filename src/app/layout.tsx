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
import { PageTransition } from "@/components/shared/PageTransition";

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
    siteName: "ByteCraft Technologies",
    url: "https://bytecraft.tech",
  },
  twitter: {
    card: "summary_large_image",
    title: "ByteCraft Technologies | Digital Product Agency",
    description:
      "We build websites, SaaS applications, mobile apps, AI solutions and cloud software that help businesses grow.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ByteCraft Technologies",
  url: "https://bytecraft.tech",
  logo: "https://bytecraft.tech/favicon.ico",
  description:
    "We build websites, SaaS applications, mobile apps, AI solutions and cloud software that help businesses grow.",
  foundingDate: "2018",
  founders: [{ "@type": "Person", name: "Manthan Jaiswal" }],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Hyderabad",
    addressRegion: "Telangana",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-8125629601",
    contactType: "sales",
    email: "24951A05C3@iare.ac.in",
  },
  sameAs: [
    "https://github.com/Manthan-13521",
  ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <ThemeProvider>
          <ScrollProgress />
          <CustomCursor />
          <MouseGradient />
          <Navbar />
          <PageTransition>
            <main className="flex-1">{children}</main>
          </PageTransition>
          <Footer />
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "700", "800"],
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "VOCI | Voice Of Change Initiative | Leadership & Public Speaking Training for Emerging Leaders in Africa",
  description: "VOCI develops emerging leaders through public speaking, personal branding, and principled leadership workshops. Join our cohort program at MUT Campus, Africa.",
  keywords: "leadership training South Africa, public speaking workshop, personal branding students, emerging leaders Africa, VOCI, communication skills training",
  openGraph: {
    title: "VOCI | Voice Of Change Initiative | Leadership & Public Speaking Training for Emerging Leaders in Africa",
    description: "VOCI develops emerging leaders through public speaking, personal branding, and principled leadership workshops. Join our cohort program at MUT Campus, Africa.",
    url: "https://vociglobal.site",
    siteName: "VOCI",
    images: [
      {
        url: "VOCI OFFICIAL LOGO.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VOCI | Voice Of Change Initiative | Leadership & Public Speaking Training for Emerging Leaders in Africa",
    description: "VOCI develops emerging leaders through public speaking, personal branding, and principled leadership workshops. Join our cohort program at MUT Campus, Africa.",
    images: ["VOCI OFFICIAL LOGO.png"],
  },
  alternates: {
    canonical: "https://vociglobal.site",
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
      className={`${montserrat.variable} ${openSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

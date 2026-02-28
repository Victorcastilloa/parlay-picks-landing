import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "AI Parlay Picks — AI-Powered Sports Betting Picks on Telegram",
  description:
    "Get AI-powered sports parlay picks delivered to your Telegram. Real-time odds from 40+ bookmakers, Claude AI analysis, 8 sports covered. Free to start.",
  keywords: [
    "parlay picks",
    "AI sports betting",
    "telegram bot",
    "sports picks",
    "parlay generator",
    "NFL picks",
    "NBA picks",
    "betting analysis",
  ],
  metadataBase: new URL("https://aiparlaypicks.com"),
  openGraph: {
    title: "AI Parlay Picks — AI-Powered Sports Betting Picks",
    description:
      "Real-time odds from 40+ bookmakers. Claude AI analysis. Delivered straight to your Telegram.",
    url: "https://aiparlaypicks.com",
    siteName: "AI Parlay Picks",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AI Parlay Picks",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@AIParlayPicksTG",
    title: "AI Parlay Picks — AI-Powered Sports Betting Picks",
    description:
      "Real-time odds from 40+ bookmakers. Claude AI analysis. Delivered straight to your Telegram.",
    images: ["/twitter-image.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

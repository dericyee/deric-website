import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import ThemeToggle from "@/components/ThemeToggle";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

const inter = Inter({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Deric Yee - Tech Entrepreneur & AI Educator",
  description: "Tech & AI entrepreneur working on the future of education & work. Founded Sigma School, Malaysia's top coding bootcamp, and scaled multiple tech ventures to $80k/month.",
  keywords: ["tech entrepreneur", "AI educator", "Sigma School", "coding bootcamp", "Malaysia", "Deric Yee", "tech education", "Codeo.ai", "Jobier"],
  authors: [{ name: "Deric Yee" }],
  icons: {
    icon: '/profile.jpg',
    apple: '/profile.jpg',
  },
  openGraph: {
    title: "Deric Yee - Tech Entrepreneur & AI Educator",
    description: "Tech & AI entrepreneur working on the future of education & work. Founded Sigma School, Malaysia's top coding bootcamp.",
    url: "https://dericyee.com",
    siteName: "Deric Yee",
    images: [
      {
        url: "/profile.jpg",
        width: 1024,
        height: 1024,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Deric Yee - Tech Entrepreneur & AI Educator",
    description: "Tech & AI entrepreneur working on the future of education & work. Founded Sigma School, Malaysia's top coding bootcamp.",
    creator: "@dericjyyee",
    images: ["/profile.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Add your Google verification code
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <div className="fixed top-1 right-1 sm:top-6 sm:right-6 md:top-8 md:right-8 z-[60] scale-50 sm:scale-100 md:scale-150 bg-[var(--background)]/80 backdrop-blur-sm p-2 rounded-full">
            <ThemeToggle />
          </div>
          {children}
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}

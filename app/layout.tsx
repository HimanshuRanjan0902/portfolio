import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider";
import Background from "@/components/background";
import CursorGlow from "@/components/cursor-glow";
import ScrollProgress from "@/components/scroll-progress";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const siteUrl = "https://himanshuranjan.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Himanshu Ranjan | Full Stack Developer",
    template: "%s | Himanshu Ranjan",
  },
  description:
    "Portfolio of Himanshu Ranjan, a Full Stack Developer specializing in React, Next.js, Node.js, Express.js, MongoDB and Django.",
  keywords: [
    "Himanshu Ranjan",
    "Portfolio",
    "Full Stack Developer",
    "React",
    "Next.js",
    "Node.js",
    "MongoDB",
    "Django",
  ],
  authors: [
    {
      name: "Himanshu Ranjan",
    },
  ],
  creator: "Himanshu Ranjan",
  openGraph: {
    title: "Himanshu Ranjan | Full Stack Developer",
    description:
      "Portfolio showcasing full-stack web applications built with React, Next.js, Node.js, Express.js, MongoDB and Django.",
    url: siteUrl,
    siteName: "Himanshu Ranjan",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Himanshu Ranjan | Full Stack Developer",
    description:
      "Portfolio showcasing full-stack web applications built with React, Next.js, Node.js, Express.js, MongoDB and Django.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-body antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {/* Scroll Progress Bar */}
          <ScrollProgress />

          {/* Animated Background */}
          <Background />

          {/* Cursor Glow */}
          <CursorGlow />

          {/* Skip Link */}
          <a
            href="#top"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-cyan-500 focus:px-4 focus:py-2 focus:text-white"
          >
            Skip to content
          </a>

          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
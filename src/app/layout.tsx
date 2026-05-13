import type { Metadata } from "next";
import { Space_Grotesk, IBM_Plex_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import ModernMesh from "@/components/ModernMesh";
import ScrollReset from "@/components/ScrollReset";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
});

const plexMono = IBM_Plex_Mono({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-plex-mono",
});

export const metadata: Metadata = {
  title: "Nitescu George-Eduard | Full-Stack Developer",
  description:
    "Personal portfolio of Nitescu George-Eduard — Full-Stack Developer specializing in React, Next.js, and modern web technologies.",
  keywords: [
    "Nitescu George-Eduard",
    "full-stack developer",
    "web developer",
    "React",
    "Next.js",
    "TypeScript",
    "portfolio",
  ],
  authors: [{ name: "Nitescu George-Eduard" }],
  openGraph: {
    title: "Nitescu George-Eduard | Full-Stack Developer",
    description:
      "Personal portfolio showcasing web development projects and skills.",
    type: "website",
    locale: "en_US",
    siteName: "Nitescu George-Eduard Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nitescu George-Eduard | Full-Stack Developer",
    description:
      "Personal portfolio showcasing web development projects and skills.",
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
    <html
      lang="en"
      suppressHydrationWarning
      className={`${spaceGrotesk.variable} ${plexMono.variable}`}
    >
      <body className="bg-[#f4f4f0] text-[#111] dark:bg-[#111111] dark:text-[#f4f4f0] font-mono selection:bg-blue-600 selection:text-white">
        <ThemeProvider>
          <ScrollReset />
          <ModernMesh />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

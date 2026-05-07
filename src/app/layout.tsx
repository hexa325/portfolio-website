import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import ModernMesh from "@/components/ModernMesh";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const syne = Syne({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-syne",
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
      className={`${inter.variable} ${syne.variable}`}
    >
      <body className="bg-white text-black dark:bg-[#050505] dark:text-[#ededed] font-sans">
        <ThemeProvider>
          <ModernMesh />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

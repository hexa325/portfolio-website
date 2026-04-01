import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en" className="dark">
      <body className="bg-[#0a0a0a] text-[#ededed]">{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Respawn Gaming",
  description: "Gaming reimagined in Kochi; Best Gaming Experience in Kochi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.svg" />
        <link rel="canonical" href="https://www.respawngaming.in/" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

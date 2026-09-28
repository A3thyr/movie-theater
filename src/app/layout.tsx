import { RootProvider } from "fumadocs-ui/provider/next";
import type { Metadata } from "next";

import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aetherys Movie Theater",
  description: "Could be the next big thing in movie theaters",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} dark h-full antialiased`} // hardcoded to dark mode, TODO: gotta tie this to the fumadocs theme toggle
    >
      <body className={`${geistSans.variable} ${geistMono.variable} flex min-h-screen flex-col`}>
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {InteractiveHeader} from "@/app/ui/interactive-header";
import {Socials} from "@/app/ui/socials";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ombre da svelare",
  description: "Created by Alessia Pratolongo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <div className="font-sans flex flex-col min-h-screen">
        <InteractiveHeader />
        <main className="flex-grow bg-white text-black">
          {children}
        </main>
        <footer className="flex flex-row justify-center gap-[5px] p-2 bg-black text-white">
          <Socials />
        </footer>
      </div>
      </body>
    </html>
  );
}

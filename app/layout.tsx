// app/layout.tsx (Cleaned up)
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css"; // Global CSS import

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HODLOTTO",
  description: "HODLOTTO Landing Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* No extra divs inside body for parallax */}
      <body className={inter.className}>
         {children} {/* Page content renders directly */}
      </body>
    </html>
  );
}
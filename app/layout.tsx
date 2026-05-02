import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tithe Calculator AI",
  description: "Calculate your tithe instantly by income, percentage, and frequency.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

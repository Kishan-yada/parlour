import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ShareHub Nepal",
  description: "NEPSE stock market platform for Nepal",
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

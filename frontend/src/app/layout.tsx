import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TipJar | Web3Proof Challenge",
  description: "Fullstack dApp Challenge",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

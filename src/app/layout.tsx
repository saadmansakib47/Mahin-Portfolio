import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mahin Ibn Mahmud | Public Health Professional",
  description:
    "Portfolio of Mahin Ibn Mahmud — public health graduate, researcher, and community health advocate.",
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

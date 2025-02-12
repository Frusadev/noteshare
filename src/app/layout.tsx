import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Noteshare",
  description: "A simple note sharing app 😁",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="relative">
      <body className="overflow-x-hidden">{children}</body>
      <footer className="absolute bottom-0 text-center w-full text-secondary-foreground/50 mb-3">
        © 2025 Frusadev
      </footer>
    </html>
  );
}

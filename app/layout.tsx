import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ECWelding — Licensed Welding & Metal Fabrication",
  description: "ECWelding provides residential welding, commercial welding, mobile welding, and custom metal fabrication. Licensed & insured. Free estimates.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

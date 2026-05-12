import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "Krisis sa Langis, Krisis sa Sikmura | Ang Kadugyutan",
  description:
    "A news feature prototype on how global oil pressures affect karinderyas and student meals in Batong Malake."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

import "globals.css";
import { Manrope } from "@next/font/google";

const manrope = Manrope({
  variable: "--manrope",
  subsets: [
    "cyrillic",
    "cyrillic-ext",
    "greek",
    "latin",
    "latin-ext",
    "vietnamese",
  ],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={manrope.className} lang="en">
      <head />
      <body>{children}</body>
    </html>
  );
}

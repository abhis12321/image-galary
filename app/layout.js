import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Image Galary",
  description: "created using cloudinay cloud storage",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-[100vh] w-[100vw]">{children}</body>
    </html>
  );
}

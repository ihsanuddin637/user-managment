// Import global styles and fonts
import "./globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "404 - Page Not Found",
  description: "The page you are looking for does not exist.",
};

export default function GlobalNotFound() {
  return (
    <html lang="en" className={inter.className}>
      <body className="flex flex-col items-center justify-center min-h-screen">
        <h1>404 - Page Not Found</h1>
        <p>This page does not exist.</p>
        <Link href="/">
          <button className="btn btn-primary cursor-pointer">Return Home</button>
        </Link>
      </body>
    </html>
  );
}

import React from "react";
import Navbar from "./components/Navbar";
import "./globals.css";

if (typeof window === "undefined") {
  global.localStorage = {
    getItem: () => null,
    setItem: () => null,
    removeItem: () => null,
    clear: () => null,
    key: () => null,
    length: 0,
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans bg-white dark:bg-gray-900 transition-colors">
        <header className="fixed top-0 left-0 w-full z-50 shadow-sm">
          <Navbar />
        </header>

        <main className="pt-20 min-h-screen px-4 md:px-6">{children}</main>

        <footer className="bg-gray-100 dark:bg-gray-800 py-6 text-center text-sm text-gray-600 dark:text-gray-400">
          <p>© {new Date().getFullYear()} Sangeetha</p>
          <p className="mt-1">Frontend Developer • React • Next.js</p>
        </footer>
      </body>
    </html>
  );
}

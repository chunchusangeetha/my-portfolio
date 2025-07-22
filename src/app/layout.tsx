import React from 'react';
import Navbar from './components/Navbar';
import './globals.css';
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans">
        <header className="p-4 bg-gray-900 text-white flex justify-between">
         <Navbar />
        </header>
        <main className="min-h-screen p-4">{children}</main>
        <footer className="bg-gray-100 p-4 text-center text-sm text-gray-600">
          &copy; 2025 Sangeetha. All rights reserved.
        </footer>
      </body>
    </html>
  );
}

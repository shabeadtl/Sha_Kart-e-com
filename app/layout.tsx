import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { ReactNode } from 'react';
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: 'Sha_kart | e_com',
  description: 'A simple e-commerce app built with Next.js App Router',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-800 min-h-screen flex flex-col">

        {/* Navbar */}
        <Navbar />

        {/* Toast for entire app */}
        <Toaster position="top-center" />

        {/* Main content */}
        <main className="flex-1 w-full px-2 sm:px-4">
          {children}
        </main>

        {/* Footer */}
        <Footer />

      </body>
    </html>
  );
}

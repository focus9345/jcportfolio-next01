
import type { Metadata } from "next";
import { Providers } from "./providers";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import { Poppins} from "next/font/google";
import "./globals.css";

const poppins = Poppins({ 
  weight: ['200','300','400', '500', '600', '800'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap' 
});

export const metadata: Metadata = {
  title: "Joshua Connor Next Portfolio",
  description: "Details on the workings and development of Joshua Connor.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.className} suppressHydrationWarning>
      <body className="bg-gray-50 dark:bg-slate-800">
        <Providers>
          <Navbar />
          <main className="text-slate-900 dark:text-gray-50">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}


import type { Metadata } from "next";
import { Providers } from "./providers";
import Header from "@/components/header";
import HeaderMobile from "@/components/header-mobile";
import MainNav from "@/components/main-nav";
import Footer from "@/components/footer";
import PageWrapper from "@/components/page-wrapper";
import MarginWidthWrapper from "@/components/margin-width-wrapper";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
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
          <div className="flex">
            <MainNav />
            <main className="flex-1">
              <MarginWidthWrapper>
              <Header />
              <HeaderMobile />
              <PageWrapper>
              {children}
              </PageWrapper>
              <Footer />
              </MarginWidthWrapper>
            </main>
          </div>

        </Providers>
      </body>
    </html>
  );
}

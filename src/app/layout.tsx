
import type { Metadata } from "next";
import { Providers } from "./providers";
import Header from "@/components/header";
import HeaderMobile from "@/components/header-mobile";
import Footer from "@/components/footer";
import PageWrapper from "@/components/page-wrapper";
import { Poppins } from "next/font/google";
import { NextUIProvider } from "@nextui-org/system";
import "./globals.css";

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap'
});

export const metadata: Metadata = {
  title: "Joshua Connor Next Portfolio",
  description: "Details on projects and development of Joshua Connor a fullstack developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
    <html lang="en" className={poppins.className} suppressHydrationWarning>
      <body className="bg-gray-100 dark:bg-slate-800 text-slate-950 dark:text-zinc-100">
      <NextUIProvider>
        <Providers>
          <div className="flex flex-col justify-between min-h-screen">
            <main className="flex-1">
              
                <Header />
                <HeaderMobile />
                <PageWrapper>
                  {children}
                  <Footer />
                </PageWrapper>
      
            </main>
          </div>
        </Providers>
        </NextUIProvider>
      </body>
    </html>
  );
}

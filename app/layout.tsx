"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import ReactQueryClientProviders from "config/ReactQueryClientProvider";
import { ThemeProvider } from "components/material-tailwind";
import { RecoilRoot } from "recoil";
import Header from "components/header";
import Footer from "components/footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <RecoilRoot>
      <ReactQueryClientProviders>
        <ThemeProvider>
          {/* @ts-ignore */}
          <html lang="en">
            <head>
              <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
                integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
                crossOrigin="anonymous"
                referrerPolicy="no-referrer"
              />
            </head>
            <body className={inter.className}>
              <Header />
              {children}
              <Footer />
            </body>
          </html>
        </ThemeProvider>
      </ReactQueryClientProviders>
    </RecoilRoot>
  );
}

import type { AppProps } from "next/app";

import { Geist, Geist_Mono } from "next/font/google";
import "@/core/themes/globals.css";
import { Suspense } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div style={{
      height: "100vh",
      display: "flex",
      flex: 1,
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "16px",
    }}>
      <Suspense fallback={<div>Loading...</div>}>
        <Component
          {...pageProps}
          className={`${geistSans.variable} ${geistMono.variable}`}
        />
      </Suspense>
    </div>
  );
}

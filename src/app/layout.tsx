"use client";

import "../styles/global.css";
import type { Metadata } from "next";

import Script from "next/script";
import { QueryClient, QueryClientProvider } from "react-query";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const queryClient = new QueryClient();
  return (
    <html lang="en">
      <QueryClientProvider client={queryClient}>
        <body> {children}</body>
      </QueryClientProvider>
    </html>
  );
}
//<Script src={kakaoKey} strategy="beforeInteractive" />
//const kakaoKey = process.env.NEXT_PUBLIC_API_KAKAO_SDK_URL;

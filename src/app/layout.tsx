"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { QueryClient, QueryClientProvider } from "react-query";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const queryClient = new QueryClient();
  const kakaoKey = process.env.NEXT_PUBLIC_API_KAKAO_SDK_URL;
  return (
    <html lang="en">
      <QueryClientProvider client={queryClient}>
        <body className={inter.className}>
          {" "}
          <Script src={kakaoKey} strategy="beforeInteractive" />
          {children}
        </body>
      </QueryClientProvider>
    </html>
  );
}

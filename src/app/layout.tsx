import type { Metadata } from "next";
import "./globalTheme.css";

import Header from "@/assets/components/Header";
import * as fontCss from "@/app/font.css";
import Providers from "./components/Providers";

export const metadata: Metadata = {
  title: "Cock!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo_img.png" />
      </head>
      <body className={fontCss.fontText}>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}

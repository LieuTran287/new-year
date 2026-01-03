import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import cn from "classnames";
import { ThemeSwitcher } from "./_components/theme-switcher";

import "./globals.css";

const config = require("../../next.config");
const fontFamily = Lexend({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Lieu year 2025",
  description: "Kỉ niệm trong năm 2025",
  metadataBase: new URL("https://lieutran287.github.io/new-year"),
  openGraph: {
    images: [`/assets/home/metadata.png`],
  },
};

const basePath = config.basePath;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" translate="no" suppressHydrationWarning>
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${basePath}/favicon/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={`${basePath}/favicon/favicon-32x32.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={`${basePath}/favicon/favicon-16x16.png`}
        />
        <link rel="manifest" href={`${basePath}/favicon/site.webmanifest`} />
        <link
          rel="mask-icon"
          href={`${basePath}/favicon/safari-pinned-tab.svg`}
          color="#000000"
        />
        <link rel="shortcut icon" href={`${basePath}/favicon/favicon.ico`} />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta
          name="msapplication-config"
          content={`${basePath}/favicon/browserconfig.xml`}
        />
        <meta name="theme-color" content="#000" />
      </head>
      <body
        className={cn(
          fontFamily.className,
          "dark:bg-slate-900 dark:text-slate-400",
        )}
      >
        <ThemeSwitcher />
        <div className="min-h-screen">{children}</div>
      </body>
    </html>
  );
}

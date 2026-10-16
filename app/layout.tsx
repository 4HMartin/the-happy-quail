import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const serif = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" });
const sans = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "The Happy Quail | Restaurant & Bar",
  description: "Coming soon to Sundew Court, The Happy Quail. Bar and restaurant ran by Emma and Heber of Rodriguez Events. Opening 19th October for breakfast, lunch, hot & soft drinks. Opening for evenings & weekends with wine, cocktails & G&Ts from late November."
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", serif.variable, sans.variable)}
    >
      <body className="min-h-full flex flex-col font-sans antialiased">{children}</body>
    </html>
  );
}

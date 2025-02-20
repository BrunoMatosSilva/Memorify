import type { Metadata } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import "../styles/globals.css";
import { cn } from "@/src/lib/utils";
import ClientProviders from "../components/shared/client-providers";

const fontSans = Inter({ subsets: ["latin"], variable: "--font-sans" });
const fontTitle = Inter_Tight({ subsets: ["latin"], variable: "--font-title" });

export const metadata: Metadata = {
  title: "Memorify",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={cn(
        "min-hg-screen bg-background font-sans antialiased",
        fontTitle.variable, fontSans.variable,
      )}>
        <ClientProviders>
            {children}
        </ClientProviders>
        </body>
    </html>
  );
}

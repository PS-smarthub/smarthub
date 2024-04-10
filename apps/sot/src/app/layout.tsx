import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@smarthub/ui/src/globals.css";
import MsalProvider from "../components/MsalProvider";
import SessionProvider from "@/src/providers/session-provider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Service Order Tool",
  description: "Web app to manage service orders",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "@smarthub/ui/src/globals.css";
import SessionProvider from "@/src/providers/session-provider";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
import { TooltipProvider } from "@smarthub/ui";
import Auth from "../services/msal/Auth";
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
    <html lang="pt-br" className="h-full">
      <body className={`${poppins.className} h-full`}>
        <SessionProvider>
          <TooltipProvider>
            {children}
            <Auth />
          </TooltipProvider>
        </SessionProvider>
      </body>
    </html>
  );
}

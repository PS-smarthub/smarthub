import type { Metadata } from "next";
import { bosch_sans_global } from "@smarthub/fonts";
import "@smarthub/ui/src/globals.css";
import { TooltipProvider } from "@smarthub/ui";
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
    <html lang="pt-br" className="overflow-hidden h-full">
      <body className={`${bosch_sans_global.className} h-full`}>
        <TooltipProvider>{children}</TooltipProvider>
      </body>
    </html>
  );
}

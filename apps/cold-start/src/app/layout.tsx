import "@smarthub/ui/src/globals.css";
import type { Metadata } from "next";
import MsalProvider from "@/providers/MsalProvider";
import { bosch_sans_global } from "@smarthub/fonts";

export const metadata: Metadata = {
  title: "Cold Start",
  authors: [
    { name: "Ângelo Carnevale", url: "https://github.com/AngeloCarnevale" },
    { name: "Diego Lopes", url: "https://github.com/diegwl" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="h-full"
    >
      <body className={`${bosch_sans_global.className} h-full overflow-hidden`}>
        <MsalProvider>{children}</MsalProvider>
      </body>
    </html>
  );
}

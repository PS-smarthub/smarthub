import "@smarthub/ui/src/globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import MsalProvider from "@/providers/MsalProvider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

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
      className="h-full lg:overflow-y-hidden sm:overflow-auto"
    >
      <body className={`${poppins.className} h-full`}>
        <MsalProvider>{children}</MsalProvider>
      </body>
    </html>
  );
}

import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import MSALProvider from "@/providers/MsalProvider";

const poppins = Poppins({
  preload: false,
  weight: ["100", "200", "300", "400", "500", "600", "700"],
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
    <html lang="en" className="h-full overflow-y-hidden sm:overflow-auto">
      <body className={`bg-white ${poppins} h-full`}>
        <MSALProvider>{children}</MSALProvider>
      </body>
    </html>
  );
}

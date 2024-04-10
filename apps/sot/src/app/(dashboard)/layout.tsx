import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "@smarthub/ui/src/globals.css";
import SessionProvider from "@/src/providers/session-provider";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
import { Header, TooltipProvider } from "@smarthub/ui";
import SideMenu from "@smarthub/ui/src/base/side-menu";

export const metadata: Metadata = {
  title: "Service Order Tool",
  description: "Web app to manage service orders",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <main className="flex h-screen sm:h-[87%]">
        <SideMenu />
        <div className="flex-1 h-full">{children}</div>
      </main>
    </>
  );
}

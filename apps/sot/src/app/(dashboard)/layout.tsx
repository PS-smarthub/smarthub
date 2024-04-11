import "@smarthub/ui/src/globals.css";
import { Header } from "@smarthub/ui";
import SideMenu from "@smarthub/ui/src/base/side-menu";
import Auth from "@/src/services/msal/Auth";
import { MdMiscellaneousServices } from "react-icons/md";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Auth />
      <Header />
      <main className="flex h-screen sm:h-[87%]">
        <SideMenu
          options={[
            { app_name: "OS", href: "/os", icon: <MdMiscellaneousServices /> },
          ]}
        />
        <div className="flex-1 h-full">{children}</div>
      </main>
    </>
  );
}

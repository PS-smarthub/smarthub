import "@smarthub/ui/src/globals.css";
import { Header } from "@smarthub/ui";
import SideMenu from "@smarthub/ui/src/base/side-menu";
import { MdMiscellaneousServices } from "react-icons/md";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="h-full">
      <Header logo="SOT"/>
      <section className="flex h-full">
        <SideMenu
          options={[
            { app_name: "OS", href: "/os", icon: <MdMiscellaneousServices className="w-[40px] h-[40px]"/>   },
          ]}
        />
        <div className="flex-1">{children}</div>
      </section>
    </main>
  );
}

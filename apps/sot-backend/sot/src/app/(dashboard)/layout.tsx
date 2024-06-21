import "@smarthub/ui/src/globals.css";
import { Header } from "@smarthub/ui";
import { SideMenu } from "@smarthub/ui";
import { MdMiscellaneousServices } from "react-icons/md";
import { OptionMenu } from "@/types";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const MENU_OPTIONS: OptionMenu[] = [
    {
      app_name: "OS",
      href: "/os",
      icon: <MdMiscellaneousServices className="w-[40px] h-[40px]" />,
    },
  ];

  return (
    <main className="h-full">
      <Header logo="SOT" />
      <section className="flex h-full">
        <SideMenu options={MENU_OPTIONS} />
        <div className="flex-1">{children}</div>
      </section>
    </main>
  );
}

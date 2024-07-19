import "@smarthub/ui/src/globals.css";
import { Toaster } from "@smarthub/ui";
import { OptionMenu } from "@/types";
import { SideMenu } from "@/components/SideMenu";
import ToastProvider from "@/providers/ToastProvider";
import { Header } from "@/components/Header";
import { GrProjects } from "react-icons/gr";
import QueryProvider from "@/providers/QueryProvider";
import { MdMiscellaneousServices } from "react-icons/md";

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
    {
      app_name: "Projetos",
      href: "/projects",
      icon: <GrProjects className="w-[35px] h-[53px]" />,
    },
  ];

  return (
    <QueryProvider>
      <ToastProvider>
        <main className="h-full">
          <Header />
          <section className="flex h-full">
            <SideMenu options={MENU_OPTIONS} />
            <div className="min-h-screen w-full">{children}</div>
          </section>
        </main>
        <Toaster />
      </ToastProvider>
    </QueryProvider>
  );
}

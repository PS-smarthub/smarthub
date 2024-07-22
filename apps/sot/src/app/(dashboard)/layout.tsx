import "@smarthub/ui/src/globals.css";
import { Toaster } from "@smarthub/ui";
import { SideMenu } from "@/components/SideMenu";
import ToastProvider from "@/providers/ToastProvider";
import { Header } from "@/components/Header";
import QueryProvider from "@/providers/QueryProvider";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <QueryProvider>
      <ToastProvider>
        <main className="h-full">
          <Header />
          <section className="flex h-full">
            <SideMenu />
            <div className="min-h-screen w-full">{children}</div>
          </section>
        </main>
        <Toaster />
      </ToastProvider>
    </QueryProvider>
  );
}

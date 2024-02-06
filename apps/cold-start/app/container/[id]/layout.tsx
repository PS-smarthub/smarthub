import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cold Start | Container",
};

export default function ContainerLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return <>{children}</>;
}

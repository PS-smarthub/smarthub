import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cold Start | Login",
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

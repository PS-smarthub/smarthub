import React from "react";

export default function HomeContainer({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <main className="flex flex-col h-full w-full">
      {children}
    </main>
  );
}

"use client";
import { useTheme } from "next-themes";

import React from "react";

export function ValidateTheme({
  light,
  dark,
}: {
  light: React.ReactNode;
  dark: React.ReactNode;
}) {
  const { theme } = useTheme();
  return <>{theme == "dark" ? dark : light}</>;
}

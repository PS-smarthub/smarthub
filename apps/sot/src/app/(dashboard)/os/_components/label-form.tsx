import React from "react";

export default function LabelForm({ children }: { children: React.ReactNode }) {
  return <label className="text-[#43464A] font-semibold">{children}</label>;
}

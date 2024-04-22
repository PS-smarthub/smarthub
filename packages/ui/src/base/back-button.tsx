"use client";

import { useRouter } from "next/navigation";
import { MdArrowBackIosNew } from "react-icons/md";

export const BackButton = ({ page_name }: { page_name?: string }) => {
  const { push } = useRouter();
  return (
    <>
      <button
        onClick={back}
        data-tooltip-target="tooltip-default"
        className="font-bold text-xl flex items-center"
      >
        <div className="p-4">
          <MdArrowBackIosNew />
        </div>
        {page_name}
      </button>
    </>
  );
};

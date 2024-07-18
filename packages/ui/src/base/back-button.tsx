"use client";

import { useRouter } from "next/navigation";
import { MdArrowBackIosNew } from "react-icons/md";

export const BackButton = ({ page_name }: { page_name?: string }) => {
  const { back } = useRouter();
  return (
    <>
      <button
        onClick={back}
        data-tooltip-target="tooltip-default"
        className="font-bold text-xl gap-2 flex items-center"
      >
        <div>
          <MdArrowBackIosNew />
        </div>
        {page_name}
      </button>
    </>
  );
};

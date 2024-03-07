"use client";

// import { SparkIcon } from "@bosch-web-dds/spark-ui-react";
import { useRouter } from "next/navigation";
import { MdArrowBackIosNew } from "react-icons/md";

export const BackButton = ({ page_name }: { page_name?: string }) => {
  const { back } = useRouter();
  return (
    <>
      <div
        id="tooltip-default"
        role="tooltip"
        className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
      >
        Tooltip content
        <div className="tooltip-arrow" data-popper-arrow></div>
      </div>
      <button
        onClick={() => back()}
        data-tooltip-target="tooltip-default"
        className="font-bold text-xl bg-white flex items-center"
      >
        {/* <SparkIcon icName="back-left"/>  */}
        <div className="p-4">
          <MdArrowBackIosNew />
        </div>
        {page_name}
      </button>
    </>
  );
};

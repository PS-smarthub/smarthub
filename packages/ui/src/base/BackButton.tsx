"use client";

// import { SparkIcon } from "@bosch-web-dds/spark-ui-react";
import { useRouter } from "next/navigation";
import { MdArrowBackIosNew } from "react-icons/md";

export const BackButton = ({
  page_name,
}: {
  page_name?: string;
}) => {
  const { back } = useRouter();
  return (
    <button
      onClick={() => back()}
      className="font-bold text-xl bg-white flex items-center"
    >
      {/* <SparkIcon icName="back-left"/>  */}
      <div className="p-4">
        <MdArrowBackIosNew />
      </div>
      {page_name}
    </button>
  );
};

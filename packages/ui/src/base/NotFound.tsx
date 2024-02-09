"use client";

import Link from "next/link";
// import { SparkLink } from "@bosch-web-dds/spark-ui-react";

export const NotFound = () => {
  return (
    <div className="flex justify-center items-center m-auto select-none text-center h-full flex-col">
      <h1 className="text-6xl mb-[2rem] text-blue-50 font-bold">404</h1>
      <p className="mb-[1rem] text-m leading-6">
        A página que você está procurando não existe, <br /> clique no link para
        voltar para a tela principal
      </p>
      <Link href={"/"} className="flex items-center text-blue-50">
        {/* Voltar <SparkLink icon="arrow-right" type="primary" /> */}
      </Link>
    </div>
  );
}

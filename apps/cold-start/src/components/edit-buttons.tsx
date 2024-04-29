import { MouseEventHandler } from "react";

export default function UpdateAndDelete({
  functionOnCLick,
}: {
  functionOnCLick: MouseEventHandler;
}) {
  return (
    <div className="flex justify-center gap-6 mt-6">
      <button
        onClick={functionOnCLick}
        className="bg-red-500 hover:bg-red-600 rounded text-white font-semibold p-1 w-[30%] disabled:bg-gray-600 disabled:cursor-not-allowed"
      >
        Excluir
      </button>
      <button
        disabled
        className="bg-green-400 hover:bg-green-500 rounded text-white font-semibold p-1 w-[30%] disabled:bg-gray-600 disabled:cursor-not-allowed"
      >
        Atualizar
      </button>
    </div>
  );
}

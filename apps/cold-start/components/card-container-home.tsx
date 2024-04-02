import ContainerIcon from "@/public/icon-card-container.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Container } from "../types";

export const CardContainerHome = ({
  container,
}: {
  container: Container;
}): JSX.Element => {
  const { push } = useRouter();

  const handleClick = (id: number) => {
    push(`/container/${id}`);
  };
  return (
    <div
      onClick={() => handleClick(container.id)}
      className={`shadow-md transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105 bg-gray-300 rounded flex flex-col items-center cursor-pointer sm:pb-0 sm:pt-8 pt-16 border-l-[10px] border-blue-50`}
    >
      <Image src={ContainerIcon} alt="Container icon" width={60} />
      <div className="self-end mr-3 sm:pt-4 pb-1 font-bold pt-8 text-xl sm:text-l">
        #{container.id}
      </div>
    </div>
  );
};

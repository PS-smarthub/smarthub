import ContainerIcon from "../public/Container-icon.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Container } from "../types"; 

export const CardContainerHome = ({
 container
}: {
  container: Container
}): JSX.Element => {
  const { push } = useRouter();

  const handleClick = (id: number) => {
    push(`/container/${id}`, );
  };
  return (
    <div
      onClick={() => handleClick(container.id)}
      className="bg-gray-300 rounded flex flex-col items-center py-16 cursor-pointer sm:py-8 border-l-[10px] border-blue-50"
    >
      <div>
        <Image src={ContainerIcon} alt="Container icon" width={60}/>
      </div>
    </div>
  );
};

import ContainerIcon from "../../public/Container-icon.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Container } from "../../types"; 

export const CardContainerHome = ({
 container
}: {
  container: Container
}): JSX.Element => {
  const { push } = useRouter();

  const handleClick = (id: string) => {
    push(`/container/${id}`, );
  };
  return (
    <div
      onClick={() => handleClick(container.id)}
      className="bg-gray-300 rounded flex flex-col items-center py-12 cursor-pointer sm:py-8"
    >
      <div>
        <Image src={ContainerIcon} alt="Container icon" width={screen.width < 1900 ? (70) : (100)}/>
      </div>
    </div>
  );
};

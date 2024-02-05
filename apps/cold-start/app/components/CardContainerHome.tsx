import ContainerIcon from '../../public/Container-icon.svg'
import Image from "next/image";
import Link from 'next/link'

export const CardContainerHome = ({
  id,
  name,
}: {
  id: String;
  name: string;
}): JSX.Element => {
  return (
    <Link href="/container" className="bg-gray-300 rounded flex flex-col items-center p-16">
      <div>
        <Image src={ContainerIcon} alt="Container icon"/>
      </div>
    </Link>
  );
};

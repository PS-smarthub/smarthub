import SignInButton from "@/components/sign-in-button";
import Image from "next/image";
import ServiceOrderImage from "@/assets/images/menu_service_orders.png";

export default function LoginPage() {
  return (
    <>
      <div className="w-full h-full flex">
        <div className="w-[50%] h-full bg-blue-600 dark:bg-blue-25 flex items-center justify-center">
          <Image src={ServiceOrderImage} alt="Service order image" priority className="w-full h-full" />
        </div>
        <div className="w-[50%] h-full flex justify-center items-center">
          <div className="flex flex-col gap-8 w-[50%] text-center">
            <h1 className="font-bold text-xl">Login para funcionários</h1>
            <SignInButton />
          </div>
        </div>
      </div>
    </>
  );
}

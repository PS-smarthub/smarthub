import SignInButton from "@/components/sign-in-button";
import Image from "next/image";
import login_image from "@/public/mockup-mac.svg";

export default function LoginPage() {
  return (
    <>
      <div className="w-full h-full flex">
        <div className="w-[50%] h-full bg-blue-600 dark:bg-blue-25 flex items-center justify-center">
          <Image alt="Image login page" src={login_image} priority/>
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

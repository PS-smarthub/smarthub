import { signIn } from "next-auth/react";

export default function LoginButton() {
  return (
    <button
      onClick={() => signIn("azure-ad")}
      className="bg-green-500 font-semibold text-white p-2 rounded"
    >
      Login
    </button>
  );
}

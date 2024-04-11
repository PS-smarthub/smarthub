import { useMsal } from "@azure/msal-react";

export default function LoginButton() {
  const { instance } = useMsal();
  return (
    <button
      onClick={() => instance.loginRedirect()}
      className="bg-green-500 font-semibold text-white p-2 rounded"
    >
      Login
    </button>
  );
}

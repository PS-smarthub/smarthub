"use client";

import { useMsal } from "@azure/msal-react";

const SignOutButton = () => {
  const { instance } = useMsal();

  return <button onClick={() => instance.logoutRedirect()}>Log out</button>;
}

export default SignOutButton;

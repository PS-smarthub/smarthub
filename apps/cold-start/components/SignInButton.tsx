"use client";

import { useMsal } from "@azure/msal-react";

const SignInButton = () => {
  const { instance } = useMsal();

  return <button onClick={() => instance.loginPopup()}>Log in</button>;
}

export default SignInButton;
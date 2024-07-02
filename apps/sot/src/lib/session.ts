import "server-only"

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { SignJWT } from "jose";

const key = new TextEncoder().encode(process.env.JWT_SECRET_KEY)

const cookie_options = {
  name: "sot-user-token",
  options: { httpOnly: true, secure: true, sameSite: "lax", path: "/" },
  duration: 24 * 60 * 60 * 1,
};

export const getToken = async () => {
  const token = cookies().get("sot-user-token")?.value;
  return token;
};

export async function encrypt(payload: any) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("1day")
    .sign(key);
}

export async function verifySession() {
  const session = cookies().get(cookie_options.name)?.value;

  if (!session) {
    redirect("/auth/signin")
  }

  return session;
}
export async function deleteSession() {
  cookies().delete(cookie_options.name);
  redirect("/auth/signin");
}
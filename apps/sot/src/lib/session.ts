import "server-only"

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { SignJWT, jwtVerify } from "jose";
import { NextRequest, NextResponse } from "next/server";

const key = new TextEncoder().encode(process.env.JWT_SECRET_KEY)

const cookie_options = {
  name: "sot-user-token",
  options: { httpOnly: true, secure: true, sameSite: "lax", path: "/" },
  duration: 24 * 60 * 60 * 1000,
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

export async function decrypt(session: any) {
  try {
    const { payload } = await jwtVerify(session, key, {
      algorithms: ["HS256"],
    });

    return payload;
  } catch (err) {
    return null;
  }
}

export async function verifySession() {
  const cookie = cookies().get(cookie_options.name)?.value;
  const session = await decrypt(cookie);

  if (!session) {
    try {
      redirect("/auth/signin");
    } catch {
      return NextResponse.next()
    }
  }

  return cookie;
}
export async function deleteSession() {
  cookies().delete(cookie_options.name);
  redirect("/auth/signin");
}
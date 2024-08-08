import { verifySession } from "@/lib/session";
import { SimpleUserDto } from "@/types/user";
import { jwtDecode } from "jwt-decode";

import { cache } from "react";

export const getUser = cache(async (): Promise<SimpleUserDto> => {
  const token = await verifySession();
  const user: any = jwtDecode(token);
  return {
    name: user.name,
    email: user.preferred_username,
    roles: user.roles,
  };
});


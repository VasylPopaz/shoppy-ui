"use server";

import { cookies } from "next/headers";

import { AUTHENTICATION_COOKIE } from "../auth-cookie";

export const getAuthentication = async () => {
  const cookieStore = await cookies();
  return cookieStore.get(AUTHENTICATION_COOKIE);
};

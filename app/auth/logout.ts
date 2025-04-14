"use server";

import { redirect } from "next/navigation";
import { cookies } from "next/headers";

import { AUTHENTICATION_COOKIE } from "./auth-cookie";

export const logout = async () => {
  const cookieStore = await cookies();
  cookieStore.delete(AUTHENTICATION_COOKIE);
  redirect("/auth/signin");
};

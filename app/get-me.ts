"use server";

import { get } from "./common/util/fetch";

export const getMe = async () => {
  return get("users/me");
};

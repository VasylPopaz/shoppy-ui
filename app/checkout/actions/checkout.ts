"use server";

import { post } from "@/app/common/util/fetch";

export const checkout = async (productId: number) => {
  return post("checkout/session", { productId });
};

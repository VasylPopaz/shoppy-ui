"use server";

import { post } from "@/app/common/util/fetch";
import { revalidateTag } from "next/cache";

export const createProduct = async (formData: FormData) => {
  const response = await post("products", formData);
  revalidateTag("products");
  return response;
};

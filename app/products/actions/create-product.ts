"use server";

import { revalidateTag } from "next/cache";

import { API_URL } from "@/app/common/constants/api";
import { getHeaders, post } from "@/app/common/util/fetch";

export const createProduct = async (formData: FormData) => {
  const response = await post("products", formData);
  const productImage = formData.get("image");

  if (productImage instanceof File && !response.error) {
    await uploadProductImage(response.data.id, productImage);
  }

  revalidateTag("products");
  return response;
};

const uploadProductImage = async (productId: number, file: File) => {
  const formData = new FormData();
  formData.append("image", file);
  await fetch(`${API_URL}/products/${productId}/image`, {
    method: "POST",
    body: formData,
    headers: getHeaders(),
  });
};

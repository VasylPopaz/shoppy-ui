"use server";

import { post } from "../common/util/fetch";

export const createProduct = async (formData: FormData) => {
  return post("products", formData);
};

"use server";

import { get } from "@/app/common/util/fetch";
import { Product } from "../interfaces/product.interface";

export const getProducts = async () => {
  return get<Product[]>("products");
};

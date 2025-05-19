"use server";

import { get } from "@/app/common/util/fetch";
import type { Product } from "../interfaces/product.interface";

export const getProducts = async () => {
  return get<Product[]>(
    "products",
    ["products"],
    new URLSearchParams({ status: "available" })
  );
};

import { get } from "./../../common/util/fetch";
import type { Product } from "../interfaces/product.interface";

export const getProduct = (productId: number) => {
  return get<Product>(`products/${productId}`);
};

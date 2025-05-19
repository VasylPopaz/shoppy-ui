import { ProductsGrid } from "./products-grid";

import { getProducts } from "./actions/get-products";

export const Products = async () => {
  const products = await getProducts();

  return <ProductsGrid products={products} />;
};

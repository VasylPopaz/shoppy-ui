import Grid from "@mui/material/Grid";

import { Product } from "./product";

import { getProducts } from "./actions/get-products";

export const Products = async () => {
  const products = await getProducts();

  return (
    <Grid container spacing={3} sx={{ height: "85vh", overflow: "auto" }}>
      {products.map((product) => (
        <Grid key={product.id} size={{ xs: 12, sm: 6, lg: 4 }}>
          <Product product={product} />
        </Grid>
      ))}
    </Grid>
  );
};

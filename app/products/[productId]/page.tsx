import { Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";

import { getProduct } from "./get-product";
import { getProductImage } from "../product-image";

interface SingleProductProps {
  params: {
    productId: string;
  };
}

const SingleProduct = async ({ params }: SingleProductProps) => {
  const product = await getProduct(+params.productId);
  return (
    <Grid container marginBottom="2rem" spacing={3}>
      {product.imageExists && (
        <Grid size={{ xs: 12, md: 6 }}>
          {" "}
          <Image
            src={`${getProductImage(product.id)}`}
            width="0"
            height="0"
            sizes="100vw"
            className="w-full h-auto sm:3/4 rounded-md"
            alt={product.name}
          />
        </Grid>
      )}
      <Grid size={{ xs: 12, md: 6 }}>
        <Stack gap={3}>
          <Typography variant="h2">{product.name}</Typography>

          <Typography>{product.description}</Typography>
          <Typography variant="h4">${product.price}</Typography>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default SingleProduct;

import { Card, Stack, Typography } from "@mui/material";
import Image from "next/image";

import { Product as IProduct } from "./interfaces/product.interface";
import { API_URL } from "../common/constants/api";

interface ProductProps {
  product: IProduct;
}
export const Product = ({ product }: ProductProps) => {
  return (
    <Card className="p-4">
      <Stack gap={3}>
        <Typography variant="h4">{product.name}</Typography>
        {product.imageExists && (
          <Image
            src={`${API_URL}/products/${product.id}.jpg`}
            width="0"
            height="0"
            sizes="100vw"
            className="w-full h-auto"
            alt={product.name}
          />
        )}
        <Typography>{product.description}</Typography>
        <Typography>${product.price}</Typography>
      </Stack>
    </Card>
  );
};

"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { Card, CardActionArea, Stack, Typography } from "@mui/material";

import { getProductImage } from "./product-image";
import type { Product as IProduct } from "./interfaces/product.interface";

interface ProductProps {
  product: IProduct;
}
export const Product = ({ product }: ProductProps) => {
  const router = useRouter();
  return (
    <CardActionArea onClick={() => router.push(`/products/${product.id}`)}>
      <Card className="p-4 rounded-md">
        <Stack gap={3}>
          <Typography variant="h4">{product.name}</Typography>
          {product.imageExists && (
            <Image
              src={`${getProductImage(product.id)}`}
              width="0"
              height="0"
              sizes="100vw"
              className="w-full h-auto rounded-md"
              alt={product.name}
            />
          )}
          <Typography>{product.description}</Typography>
          <Typography>${product.price}</Typography>
        </Stack>
      </Card>
    </CardActionArea>
  );
};

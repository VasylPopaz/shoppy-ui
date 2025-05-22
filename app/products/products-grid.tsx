"use client";

import { useEffect } from "react";
import { io, Socket } from "socket.io-client";
import Grid from "@mui/material/Grid";

import { Product } from "./product";

import { revalidateProducts } from "./actions/revalidate-products";
import type { Product as IProduct } from "./interfaces/product.interface";
import { API_URL } from "../common/constants/api";
import { getAuthentication } from "../auth/actions/get-authentication";

interface ProductsGridProps {
  products: IProduct[];
}

export const ProductsGrid = ({ products }: ProductsGridProps) => {
  useEffect(() => {
    let socket: Socket;

    const createSocket = async () => {
      socket = io(API_URL!, {
        auth: { Authentication: await getAuthentication() },
      });
      socket.on("productUpdated", () => {
        revalidateProducts();
      });
    };

    createSocket();

    return () => {
      socket?.disconnect();
    };
  }, []);

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

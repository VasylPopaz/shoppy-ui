import { CreateProductFab } from "./products/create-product/create-product-fab";
import { Products } from "./products/products";

const Home = async () => {
  return (
    <>
      <Products />
      <CreateProductFab />
    </>
  );
};

export default Home;

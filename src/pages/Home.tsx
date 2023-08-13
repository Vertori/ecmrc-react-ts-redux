import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ClipLoader from "react-spinners/ClipLoader";
import { fetchProducts } from "../features/productsSlice";
import Hero from "../components/Hero";
import Product from "../components/Product";
import { RootState, AppDispatch } from "../app/store";
import { ProductsType } from "../types";

const Home = () => {
  const dispatch: AppDispatch = useDispatch();
  const products = useSelector((state: RootState) => state.products.products);
  const status = useSelector((state: RootState) => state.products.status);
  const error = useSelector((state: RootState) => state.products.error);

  const [filteredProducts, setFilteredProducts] = useState<ProductsType[]>([]);

  // Fetching products
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  //   Setting filtered products
  useEffect(() => {
    if (status === "succeeded" && products.length > 0) {
      const filteredItems = products.filter((product) => {
        return (
          product.category === "men's clothing" ||
          product.category === "women's clothing" ||
          product.category === "jewelery"
        );
      });
      setFilteredProducts(filteredItems);
    }
  }, [products, status]);

  //   Displaying loading
  if (status === "loading") {
    return (
      <section className="h-screen flex justify-center items-center ">
        <ClipLoader color={"red"} />
      </section>
    );
  }

  //   Displaying error
  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <Hero />
      <section className="py-16 border-b">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm md:max-w-none mx-auto md:mx-0">
            {filteredProducts.map((product) => {
              return <Product product={product} key={product.id} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

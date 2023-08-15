import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState, AppDispatch } from "../app/store";
import ClipLoader from "react-spinners/ClipLoader";
import Product from "../components/Product";
import CategorizedHero from "../components/CategorizedHero";
import { BiChevronRight } from "react-icons/bi";
import { AiOutlineHome } from "react-icons/ai";
import { fetchProducts } from "../features/productsSlice";
import { ProductsType } from "../types";

const MensClothing = () => {
  const dispatch = useDispatch<AppDispatch>();
  const products = useSelector((state: RootState) => state.products.products);
  const status = useSelector((state: RootState) => state.products.status);
  const error = useSelector((state: RootState) => state.products.error);
  const [mensProducts, setMensProducts] = useState<ProductsType[]>([]);

  // Fetching products
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  // Setting men's products
  useEffect(() => {
    if (status === "succeeded" && products.length > 0) {
      const filteredMensProducts = products.filter((product) => {
        return product.category === "men's clothing";
      });
      if (filteredMensProducts) {
        setMensProducts(filteredMensProducts);
      }
    }
  }, [products, status]);

  // Displaying loading
  if (status === "loading") {
    return (
      <section className="h-screen flex justify-center items-center ">
        <ClipLoader color={"red"} />
      </section>
    );
  }

  // Displaying error
  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <CategorizedHero category="Men's clothing" />
      <section className="py-16 border-b ">
        <div className="container mx-auto">
          {/* location nav */}
          <div className="pb-8 flex md:block">
            <nav className="mx-auto px-4">
              <ol className="flex items-center gap-1 text-sm text-gray-600">
                <li>
                  <Link to="/">
                    <AiOutlineHome />
                  </Link>
                </li>
                <li>
                  <BiChevronRight />
                </li>
                <li>Men's clothing</li>
              </ol>
            </nav>
          </div>
          {/* displayed products */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm md:max-w-none mx-auto md:mx-0">
            {mensProducts.map((product) => {
              return <Product product={product} key={product.id} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MensClothing;

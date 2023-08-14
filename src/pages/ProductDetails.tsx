import { Link, useParams } from "react-router-dom";
import { RootState, AppDispatch } from "../app/store";
import ClipLoader from "react-spinners/ClipLoader";
import { AiOutlineHome } from "react-icons/ai";
import { BiChevronRight } from "react-icons/bi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import SliderCard from "../components/SliderCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../features/productsSlice";
import { useEffect, useState } from "react";
import { addToCart } from "../features/cartSlice";
import { ProductsType } from "../types";

const ProductDetails = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { id } = useParams();
  const products = useSelector((state: RootState) => state.products.products);
  const status = useSelector((state: RootState) => state.products.status);
  const error = useSelector((state: RootState) => state.products.error);
  const [searchedProduct, setSearchedProduct] = useState<ProductsType | null>(
    null
  );

  // Fetching products
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  // Setting searched product
  useEffect(() => {
    if (status === "succeeded" && products.length > 0) {
      const foundProduct = products.find((product) => {
        return product.id === Number(id);
      });
      if (foundProduct) {
        setSearchedProduct(foundProduct);
      }
    }
  }, [products, status, id]);

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

  // Setting other products
  const otherProducts = products.filter((item) => {
    return item.id !== Number(id) && item.category !== "electronics";
  });

  const { title, price, description, image, category } = searchedProduct || {};

  return (
    <div className="flex flex-col pt-32 pb-12 lg:py-32  gap-28">
      {/* location nav */}
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
          <li>
            {/* {category === "men's clothing" ? (
              <Link to="/men">{category}</Link>
            ) : (
              <Link to="/women">{category}</Link>
            )} */}
            {category === "men's clothing" ? (
              <Link to="/men">{category}</Link>
            ) : category === "women's clothing" ? (
              <Link to="/women">{category}</Link>
            ) : category === "jewelery" ? (
              <Link to="/jewelery">{category}</Link>
            ) : (
              <span>{category || "Unknown category"}</span>
            )}
          </li>
          <li>
            <BiChevronRight />
          </li>
          <li>{title || "Unknown title"}</li>
        </ol>
      </nav>
      {/* product section */}
      <section className="flex items-center">
        <div className="container mx-auto">
          {/* image and text wrapper */}
          <div className="flex flex-col lg:flex-row items-center">
            {/* image */}
            <div className="flex flex-1 justify-center items-center mb-8 lg:mb-0">
              <img
                className="max-w-[200px] lg:max-w-sm"
                src={image}
                alt={title || "Unknown title"}
              />
            </div>
            {/* text */}
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-[26px] font-medium mb-2 max-2-[450px] mx-auto lg:mx-0">
                {title || "Unknown title"}
              </h1>
              <div className="text-xl text-red-500 font-medium mb-6">
                {price || "Unknown price"} zł
              </div>
              <p className="mb-8 ">
                {description || "Sorry, couldn't load description"}
              </p>
              <button
                onClick={() => {
                  if (searchedProduct) {
                    dispatch(
                      addToCart({
                        id: searchedProduct.id,
                        product: searchedProduct,
                      })
                    );
                  }
                }}
                className="bg-red-500 hover:bg-red-400 transition py-6 px-8 text-white rounded-full"
              >
                Add to cart
              </button>
            </div>
          </div>
          {/* SLIDER */}
          <div className="mt-32">
            <div className="text-xl mb-4 text-center md:text-start">
              <span>Check other Products</span>
            </div>
            <Swiper
              modules={[Navigation]}
              loop={true}
              spaceBetween={10}
              slidesPerView={1}
              slidesPerGroup={1}
              navigation={true}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                  slidesPerGroup: 2,
                },
                1024: {
                  slidesPerView: 3,
                  slidesPerGroup: 2,
                },
                1440: {
                  slidesPerView: 4,
                  slidesPerGroup: 2,
                },
              }}
            >
              <div className="flex">
                {otherProducts.map((product) => {
                  return (
                    <SwiperSlide key={product.title}>
                      <SliderCard product={product} key={product.id} />
                    </SwiperSlide>
                  );
                })}
              </div>
            </Swiper>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetails;

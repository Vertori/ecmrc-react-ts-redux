import { Link } from "react-router-dom";
import { ProductsType } from "../types";

type Props = {
  product: ProductsType;
};

const SliderCard = ({ product }: Props) => {
  const { id, image, category, title, price } = product;
  return (
    <Link to={`/product/${id}`}>
      <div className="shadow-lg border border-gray-100 hover:border-gray-400 group transition rounded-md cursor-pointer">
        <div className="h-[250px] mb-4 relative overflow-hidden">
          <div className="w-full h-full flex justify-center items-center">
            {/* image */}
            <div className="w-[200px] mx-auto flex justify-center items-center">
              <img className="max-h-[160px]" src={image} alt={title} />
            </div>
          </div>
        </div>
        {/* category, title, price */}
        <div className="px-2 py-1.5 text-center md:text-left">
          <div className="text-sm capitalize text-gray-500 mb-1">
            {category}
          </div>
          <h2 className="font-medium mb-1">
            {title.substring(0, 30).concat("...")}
          </h2>
          <div className="font-semibold text-red-400">{price} zł</div>
        </div>
      </div>
    </Link>
  );
};

export default SliderCard;

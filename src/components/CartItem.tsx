import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { IoMdClose, IoMdAdd, IoMdRemove } from "react-icons/io";
import {
  removeFromCart,
  increaseAmount,
  decreaseAmount,
} from "../features/cartSlice";
import { ProductsType } from "../types";

type Props = {
  item: ProductsType;
};

const CartItem = ({ item }: Props) => {
  const dispatch = useDispatch();
  const { id, title, image, price, amount } = item;

  return (
    <div className="flex gap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full font-light text-gray-500">
      <div className="w-full min-h-[150px] flex items-center gap-x-4">
        {/* image */}
        <Link to={`/product/${id}`}>
          <img className="max-w-[80px]" src={image} alt={title} />
        </Link>
        <div className="w-full flex flex-col ">
          {/* title amd remove icon*/}
          <div className="flex justify-between mb-2 ">
            {/* title */}
            <Link
              to={`/product/${id}`}
              className="text-sm uppercase font-medium max-w-[240px] text-primary hover:underline"
            >
              {title}
            </Link>
            {/* remove icon */}
            <div
              onClick={() => dispatch(removeFromCart(id))}
              className="text-xl cursor-pointer "
            >
              <IoMdClose className="text-gray-500 hover:text-red-500 transition" />
            </div>
          </div>
          <div className="flex gap-x-2 h-[36px] text-sm">
            {/* quantity */}
            <div className="flex flex-1 max-w-[100px] items-center h-full border text-primary font-medium">
              {/* minus icon */}
              <div
                onClick={() => dispatch(decreaseAmount(id))}
                className="flex flex-1 justify-center items-center cursor-pointer"
              >
                <IoMdRemove />
              </div>
              {/* amount */}
              <div className="h-full flex justify-center items-center px-2">
                {amount}
              </div>
              {/* plus icon */}
              <div
                onClick={() => dispatch(increaseAmount(id))}
                className=" flex flex-1 h-full justify-center items-center cursor-pointer"
              >
                <IoMdAdd />
              </div>
            </div>
            {/* item price */}
            <div className="flex flex-1 items-center justify-around">
              {price} zł
            </div>
            {/* final price */}
            <div className="flex flex-1 justify-end items-center text-primary font-medium">{`${
              amount !== undefined && (price * amount).toFixed(2)
            } zł`}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;

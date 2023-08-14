import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";
import { handleClose } from "../features/sidebarSlice";
import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";
import CartItem from "./CartItem";
import {
  clearCart,
  updateTotal,
  updateItemAmount,
} from "../features/cartSlice";

const Sidebar = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state: RootState) => state.sidebar.isOpen);
  const cart = useSelector((state: RootState) => state.cart.cart);
  const itemAmount = useSelector((state: RootState) => state.cart.itemAmount);
  const total = useSelector((state: RootState) => state.cart.total);

  useEffect(() => {
    dispatch(updateTotal());
    dispatch(updateItemAmount());
  }, [cart, dispatch]);

  return (
    <div
      className={`${
        isOpen ? "right-0 shadow-2xl" : "-right-full"
      } w-full bg-white fixed top-0 h-full md:w-[35vw] lg:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}
    >
      <div className="flex items-center justify-between py-6 border-b">
        <div className="uppercase text-sm font-semibold ">
          Shopping Cart ({itemAmount})
        </div>
        <div
          onClick={() => dispatch(handleClose())}
          className="cursor-pointer w-8 h-8 flex justify-center items-center"
        >
          <IoMdArrowForward className="text-2xl" />
        </div>
      </div>
      <div className="flex flex-col gap-y-2 h-[520px] lg:h-[640px] overflow-y-auto overflow-x-hidden border-b ">
        {cart.map((item) => {
          return <CartItem item={item} key={item.id} />;
        })}
      </div>
      <div className="flex flex-col gap-y-3 py-4 mt-4">
        <div className="flex w-full justify-between items-center">
          {/* total */}
          <div className="uppercase font-semibold ">
            <span className="mr-2 ">Total:</span>
            {total.toFixed(2)} zł
          </div>
          {/* clear cart icon*/}
          <div
            onClick={() => dispatch(clearCart())}
            className="cursor-pointer py-4 bg-red-500 text-white w-12 h-12 flex justify-center items-center text-xl"
          >
            <FiTrash2 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

import { useEffect, useState } from "react";
import { RootState } from "../app/store";
import { BsBag } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { setIsOpen } from "../features/sidebarSlice";
import { Link } from "react-router-dom";
import storeLogo from "../assets/store_logo.png";
import { updateTotal, updateItemAmount } from "../features/cartSlice";

const Header = () => {
  const dispatch = useDispatch();
  const [isActive, setIsActive] = useState<boolean>(false);
  const isOpen = useSelector((state: RootState) => state.sidebar.isOpen);
  const cart = useSelector((state: RootState) => state.cart.cart);
  const itemAmount = useSelector((state: RootState) => state.cart.itemAmount);

  useEffect(() => {
    dispatch(updateTotal());
    dispatch(updateItemAmount());
  }, [cart]);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 40 ? setIsActive(true) : setIsActive(false);
    });
  });

  return (
    <header
      className={`${
        isActive ? "bg-white py-4 shadow-md" : "bg-none py-6"
      } fixed w-full z-10 transition-all`}
    >
      <div className="container flex mx-auto items-center justify-between h-full ">
        {/* logo */}
        <Link to="/">
          <div className="bg-white rounded-full w-[44px] h-[44px] flex justify-center items-center">
            <img className="w-[40px]" src={storeLogo} alt="logo" />
          </div>
        </Link>
        {/* cart */}
        <div
          onClick={() => dispatch(setIsOpen(!isOpen))}
          className="cursor-pointer flex justify-center items-center relative bg-white w-[40px] h-[40px] rounded-full"
        >
          <BsBag className="text-2xl " />
          <div className="bg-red-500 absolute -right-1 -bottom-2 text-[12px] w-[20px] h-[20px] text-white rounded-full flex justify-center items-center">
            {itemAmount}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

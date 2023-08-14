import { Link } from "react-router-dom";
import modelImg from "../assets/model.png";

const Hero = () => {
  return (
    <section className="h-[800px] bg-hero bg-no-repeat bg-cover bg-center py-24">
      <div className="container mx-auto flex justify-around h-full">
        {/* text */}
        <div className="flex flex-col justify-center">
          <div className="font-semibold flex items-center uppercase">
            <div className="w-10 h-[2px] bg-white mr-3 "></div>
            <span className="text-white">New Trends</span>
          </div>
          <h1 className="text-[70px] leading-[1.1] font-light mb-4 text-white">
            AUTUMN STYLISH SALE
            <br />
            <span className="font-semibold">WOMEN & MEN</span>
          </h1>
          <Link
            to={"/"}
            className="self-start uppercase font-semibold border-b-2 border-white text-white"
          >
            Discover More
          </Link>
        </div>
        {/* image */}
        <div className="hidden lg:block">
          <img className="max-w-[550px]" src={modelImg} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

type Props = {
  category: string;
};

const CategorizedHero = ({ category }: Props) => {
  return (
    <section className="h-[500px] bg-hero bg-no-repeat bg-cover bg-center py-24">
      <div className="container mx-auto flex justify-center h-full mt-12">
        {/* text */}
        <div className="flex flex-col justify-center">
          <div className="font-semibold flex items-center uppercase">
            <div className="w-10 h-[2px] bg-white mr-3 "></div>
            <span className="text-white">New Trends</span>
          </div>
          <h1 className="text-[70px] leading-[1.1] font-light mb-4 text-white uppercase">
            {category}
          </h1>
        </div>
      </div>
    </section>
  );
};

export default CategorizedHero;

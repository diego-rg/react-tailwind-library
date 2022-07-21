import product from "../static/images/product.jpeg";

const Card = () => {
  return (
    <div className="flex flex-wrap bg-white lg:max-w-xs m-2">
      <div className="p-2 h-56 w-full">
        <img
          className="object-cover w-full h-full"
          src={product}
          alt="Imagen de un pc."
        />
      </div>
      <div className="p-2">
        <h1 className="text-xl font-bold">Product Name</h1>
        <p className="py-2">
          Product description Lorem ipsum dolor sit amet consectetur adipisicing
          elit.
        </p>
        <p className="pb-2 text-slate-500 text-lg font-semibold">300€</p>
        <div className="flex justify-evenly">
          <button className="w-full mr-1 px-2.5 py-1.5 font-medium bg-slate-900 hover:bg-slate-800 text-white border border-transparent">
            Button
          </button>
          <button className="w-full ml-1 px-2.5 py-1.5 font-medium bg-white hover:bg-slate-100 text-slate-900 border border-slate-900">
            Button
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;

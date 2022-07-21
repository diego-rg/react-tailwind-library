import product from "../static/images/product.jpeg";

import Button from "./Button";
import ButtonOutlined from "./ButtonOutlined";

const Card = () => {
  return (
    <div className="flex flex-wrap bg-gray-100 max-w-full w-52 m-2">
      <div className="p-2">
        <img
          className="object-cover w-full h-full"
          src={product}
          alt="Imagen de un pc."
        />
      </div>
      <div className="p-2">
        <h1>Product Name</h1>
        <p>
          Product description Lorem ipsum dolor sit amet consectetur adipisicing
          elit.
        </p>
        <Button />
        <ButtonOutlined />
      </div>
    </div>
  );
};

export default Card;

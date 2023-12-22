import React from "react";

type ProductCardProps = {
  product: {
    id: number;
    name: string;
    category: string;
    description: string;
    price: string;
    phone: string;
  };
};

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="md:w-[500px] sm:w-[90%] cursor-pointer m-2 bg-gray-100  mx-auto  rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105">
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">{product.name}</h2>
        <p className="text-sm text-gray-600 mb-2">
          Category: {product.category}
        </p>
        <p className="text-gray-700">Description:{product.description}</p>
        <div className="mt-4 flex justify-between items-center">
          <p className="text-xl font-bold text-indigo-600">${product.price}</p>
          <p className="text-gray-600">Phone: {product.phone}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

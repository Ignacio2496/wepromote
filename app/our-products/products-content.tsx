import React from "react";
import ProductCard from "../components/product-card";

export type ProductCardProps = {
  products: {
    id: number;
    name: string;
    category: string;
    description: string;
    price: string;
    phone: string;
  }[];
};

const ProductsContent: React.FC<ProductCardProps> = ({ products }) => {
  if (products.length === 0) {
    return <p>Please upload a product</p>;
  } else {
    return (
      <div className="w-full flex flex-col overflow-x-auto gap-5 ">
        {products.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    );
  }
};

export default ProductsContent;

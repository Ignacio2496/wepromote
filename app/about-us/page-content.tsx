import React from "react";

interface ProductCardProps {
  name: string;
  description: string;
  price: string;
}
const ProductCard = ({ name, description, price }: ProductCardProps) => (
  <div className="bg-white p-4 shadow-md rounded-md cursor-pointer">
    <h3 className="text-lg font-semibold mb-2">{name}</h3>
    <p className="text-gray-600">{description}</p>
    <span className="text-gray-800 font-bold mt-2">{price}</span>
  </div>
);

const AboutUsContent = () => {
  return (
    <div className="w-full">
      <section className="bg-white py-16">
        <div className="container mx-auto flex items-center justify-center">
          <div className="w-1/2">
            <h2 className="text-4xl font-bold mb-4">
              Welcome to Your Fancy Shop
            </h2>
            <p className="text-gray-600">
              At Your Fancy Shop, we strive to bring you the finest products
              with a touch of elegance. Our curated collection includes a
              variety of high-quality items that cater to your unique tastes and
              preferences.
            </p>
            <p className="text-gray-600">
              Discover a world of style and sophistication as you explore our
              carefully selected products. From fashion to home decor, each item
              is chosen to add a touch of luxury to your life.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto flex justify-between flex-col">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Explore Our Products
          </h2>
          <div className="flex gap-5 justify-between">
            <ProductCard
              name="Product Name 1"
              description="Description of the product. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              price="$99.99"
            />
            <ProductCard
              name="Product Name 2"
              description="Description of the product. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              price="$129.99"
            />
            <ProductCard
              name="Product Name 3"
              description="Description of the product. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              price="$79.99"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsContent;

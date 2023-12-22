import { Metadata } from "next";
import { getAllProducts } from "../lib/getProduct";
import ProductsContent, { ProductCardProps } from "./products-content";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Products",
  };
}

export default async function UploadProducts() {
  const allProducts = await getAllProducts();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between my-5">
      <ProductsContent products={allProducts} />
    </main>
  );
}

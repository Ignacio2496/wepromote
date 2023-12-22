import { Metadata } from "next";
import { getAllProducts } from "../lib/getProduct";
import AboutUsContent from "./page-content";
import HomeContent from "./page-content";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Home",
  };
}

export default async function UploadProducts() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between my-5">
      <HomeContent />
    </main>
  );
}

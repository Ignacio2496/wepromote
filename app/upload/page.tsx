import { Metadata } from "next";
import UploadContent from "./upload-content";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Upload your product",
  };
}

export default async function UploadProducts() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <UploadContent />
    </main>
  );
}

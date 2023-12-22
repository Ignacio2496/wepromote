import { useForm } from "react-hook-form";
import { UploadProductForm } from "../validations/upload-product";
import { useState } from "react";
import axios from "axios";
import { useToast } from "@chakra-ui/toast";

const useUploadProduct = () => {
  const [isLoading, setIsLoading] = useState(false);
  const UploadProductForm = useForm<UploadProductForm>();
  const toast = useToast();

  const productCategories = [
    "Electronics",
    "Clothing and Apparel",
    "Home and Kitchen",
    "Sports and Outdoors",
    "Beauty and Personal Care",
    "Books and Literature",
    "Toys and Games",
    "Health and Wellness",
    "Furniture and Decor",
    "Automotive and Tools",
  ];
  const onSubmit = UploadProductForm.handleSubmit((data) => {
    setIsLoading(true);
    axios({
      data,
      method: "POST",
      url: "/api/product",
    })
      .then(() => {
        toast({
          title: "Product Uploaded.",
          description: "Your product was successfully uploaded.",
          status: "success",
          duration: 9000,
          isClosable: true,
        }),
          setIsLoading(false);
      })
      .catch(() => {
        toast({
          title: "Something went wrong.",
          description: "Please try again.",
          status: "warning",
          duration: 9000,
          isClosable: true,
        });
      });
  });

  return { UploadProductForm, isLoading, onSubmit, productCategories };
};

export default useUploadProduct;

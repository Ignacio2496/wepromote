"use client";
import { Button } from "@chakra-ui/button";
import {
  Input,
  InputGroup,
  InputLeftAddon,
  InputLeftElement,
} from "@chakra-ui/input";
import { Select } from "@chakra-ui/select";
import useUploadProduct from "../hooks/use-upload-product";

const UploadContent = () => {
  const { UploadProductForm, isLoading, productCategories, onSubmit } =
    useUploadProduct();

  return (
    <div className="w-full">
      <form onSubmit={onSubmit} className="flex flex-col gap-5  md:px-28">
        <Input
          {...UploadProductForm.register("name")}
          variant="flushed"
          placeholder="Product's name"
        />
        <Input
          {...UploadProductForm.register("description")}
          variant="flushed"
          placeholder="Description"
        />
        <Select
          {...UploadProductForm.register("category")}
          placeholder="Product's category"
        >
          {productCategories.map((product, index) => (
            <option key={index} value={product}>
              {product}
            </option>
          ))}
        </Select>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            color="gray.300"
            fontSize="1.2em"
          >
            $
          </InputLeftElement>
          <Input {...UploadProductForm.register("price")} placeholder="Price" />
        </InputGroup>
        <InputGroup>
          <InputLeftAddon>+1 408</InputLeftAddon>
          <Input
            {...UploadProductForm.register("phone")}
            type="tel"
            placeholder="Contact number"
          />
        </InputGroup>
        <Button
          type="submit"
          isLoading={isLoading}
          loadingText="Uploading"
          colorScheme="teal"
          variant="outline"
        >
          Upload product
        </Button>
      </form>
    </div>
  );
};

export default UploadContent;

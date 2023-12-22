import { UploadProductForm } from "@/app/validations/upload-product";
import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  const prisma = new PrismaClient();
  const body = await req.json();
  console.log("body", body);

  try {
    const newProduct = await prisma.product.create({
      data: {
        name: body.name,
        description: body.description,
        phone: body.phone,
        category: body.category,
        price: body.price,
      },
    });

    return NextResponse.json(
      {
        message: "Product uploaded successfully",
        product: newProduct,
      },
      {
        status: 200,
      }
    );
  } catch (err) {
    const error = err as { message: string };

    return NextResponse.json(
      {
        message: error.message,
      },
      {
        status: 400,
      }
    );
  }
};

type ParamsID = {
  params: {
    productId: number;
  };
};

export const GET = async (_req: NextRequest) => {
  const prisma = new PrismaClient();

  try {
    const products = await prisma.product.findMany();

    return NextResponse.json(
      {
        message: "Products retrieved successfully",
        products,
      },
      {
        status: 200,
      }
    );
  } catch (err) {
    const error = err as { message: string };

    return NextResponse.json(
      {
        message: error.message,
      },
      {
        status: 400,
      }
    );
  } finally {
    await prisma.$disconnect(); // Disconnect the Prisma Client
  }
};
export const DELETE = async (_req: NextRequest, { params }: ParamsID) => {
  const prisma = new PrismaClient();

  try {
    const deletedProduct = await prisma.product.delete({
      where: {
        id: params.productId,
      },
    });

    return NextResponse.json(
      {
        message: "Product deleted successfully",
        deletedProduct,
      },
      {
        status: 200,
      }
    );
  } catch (err) {
    const error = err as { message: string };

    return NextResponse.json(
      {
        message: error.message,
      },
      {
        status: 400,
      }
    );
  }
};

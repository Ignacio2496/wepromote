"use client";
import Link from "next/link";
import HomeIcon from "./icons/home";
import AboutUs from "./icons/about-us";
import OurProductsIcon from "./icons/our-products";
import UploadIcon from "./icons/upload";

const Navbar = () => {
  return (
    <div className="w-full bg-blue-800 h-[70px] shadow-lg flex justify-between px-10">
      <Link className="flex items-center justify-center" href={"/home"}>
        <button>
          <p className="text-white sm:hidden md:flex">Home</p>
          <HomeIcon
            width="24px"
            height="24px"
            className="sm:flex md:hidden fill-white "
          />
        </button>
      </Link>

      <Link className="flex items-center justify-center" href={"/about-us"}>
        <button>
          <p className="text-white sm:hidden md:flex">About us</p>
          <AboutUs
            height="24px"
            width="24px"
            className="sm:flex md:hidden fill-white "
          />
        </button>
      </Link>

      <Link className="flex items-center justify-center" href={"/our-products"}>
        <button>
          <p className="text-white sm:hidden md:flex">Our products</p>
          <OurProductsIcon
            height="24px"
            width="24px"
            className="sm:flex md:hidden fill-white"
          />
        </button>
      </Link>

      <Link className="flex items-center justify-center" href={"/upload"}>
        <button>
          <p className="text-white sm:hidden md:flex">Upload your products</p>
          <UploadIcon
            height="24px"
            width="24px"
            className="sm:flex md:hidden fill-white"
          />
        </button>
      </Link>
    </div>
  );
};

export default Navbar;

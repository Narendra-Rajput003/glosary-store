"use client";
import Image from "next/image";
import { Star } from "lucide-react";
import { popularProducts, selectCategory } from "../../constants/data";
import React from "react";
export default function Home() {
  const [count, setCount] = React.useState(0);

  return (
    <div className="w-full h-full my-5">
      <div className="flex justify-center items-center bg-[#F6F6F699]">
        <div className="flex flex-row border-2 border-gray-200 rounded-lg bg-black">
          <div className="p-5 space-y-4">
            <p className="text-[#EF3F23]">All Essentials</p>
            <h2 className="text-[#30B44A] font-bold text-2xl">
              Great Value <br /> Vegetables
            </h2>
            <p className="text-white text-sm">
              Urna porttitor rhoncus dolor purus non enim praesent <br />
              elementum facilisis arcu non sodales neque sodales.
            </p>
            <button className="bg-red-500 p-2 text-white rounded">
              Buy Now
            </button>
          </div>
          <div className="relative">
            <Image
              src="/assets/images/homepagebanner.png"
              alt="Picture of the author"
              width={400}
              height={350}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Select Category */}
      <div className="flex flex-col items-center my-5">
        <div className="flex justify-between w-3/4">
          <p className="text-3xl text-black font-bold">Shop By Category</p>
          <div className="flex space-x-2">
            <div className="flex space-x-2 border-2 border-gray-200 rounded-full p-2 rotate-180 cursor-pointer">
              <Image
                src="/assets/icons/arrow-icon.svg"
                alt="arrow"
                width={10}
                height={10}
              />
            </div>
            <div className="flex space-x-2 border-2 border-gray-200 rounded-full p-2 cursor-pointer">
              <Image
                src="/assets/icons/arrow-icon.svg"
                alt="arrow"
                width={10}
                height={10}
              />
            </div>
          </div>
        </div>

        <div className="w-3/4 mt-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {selectCategory.map((category) => (
              <div
                key={category.id}
                className="flex flex-col items-center p-4 rounded-lg shadow-md"
                style={{ backgroundColor: category.bgColor }}
              >
                <Image
                  src={category.image}
                  alt={category.name}
                  width={50}
                  height={50}
                  className="rounded-lg"
                />
                <p className="text-black text-lg font-semibold mt-2">
                  {category.name}
                </p>
                <span className="text-gray-500 text-sm">
                  {category.totalItems} Items
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Discounts Products */}

      {/* first main dic */}

      <div className="flex justify-center space-x-8 my-10">
        <div className="flex flex-row items-center  bg-[#E7EAF3]  shadow-[#B4B8C540] rounded-lg shadow-lg">
          <div className="text-center  mb-4 space-y-3">
            <p className="text-red-500 text-lg font-semibold">Flat 30% OFF</p>
            <h3 className="text-black text-2xl ">
              Hurry Up <br />
              This Weekend
            </h3>
            <button className="bg-red-500 text-white py-2 px-4 rounded-sm mb-4">
              Buy Now
            </button>
          </div>

          <div className="ml-5">
            <Image
              src="/assets/images/vegetable-add.png"
              width={300}
              height={180}
              alt="Vegetable Ad"
              className="rounded-r-xl"
            />
          </div>
        </div>

        <div className="flex flex-row items-center  bg-[url('/assets/images/wave.png')]  bg-cover rounded-lg shadow-xl ">
          <div className="text-center  mb-4 space-y-3">
            <p className="text-red-500 text-lg font-semibold">Flat 30% OFF</p>
            <h3 className="text-black  text-2xl font-bold">
              Hurry Up <br />
              This Weekend
            </h3>
            <button className="bg-red-500 text-white py-2 px-4 rounded-sm mb-4">
              Buy Now
            </button>
          </div>

          <div className="ml-5">
            <Image
              src="/assets/images/group-milk-bottle.png"
              width={150}
              height={80}
              alt="Vegetable Ad"
              className="rounded-lg z-0"
            />
            {/* overlapping the second image */}
          </div>
        </div>
      </div>

      {/* Popular Products */}

      <div className="flex flex-col items-center my-8">
  <p className="text-3xl text-black font-bold mb-6">Popular Products</p>

  <div className="w-full lg:w-3/4 px-4">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {popularProducts.map((product) => (
        <div
          key={product.id}
          className="flex flex-col items-center rounded-lg shadow-md bg-white p-4"
        >
          <div className="w-full flex justify-center mb-4 ">
            <div className="py-1 px-2 bg-white rounded-full">
              <Image src="/assets/icons/heart-icon.svg" alt="star" width={20} height={20} className="text-pink " />
            </div>
            <Image
              src={product.image}
              alt={product.name}
              width={100}
              height={100}
              className="rounded-lg object-cover"
            />
          </div>
          <div className="flex flex-col items-start w-full">
            <p className="text-black text-lg font-semibold mb-2">{product.name}</p>
            <div className="flex items-center space-x-1 mb-3">
              {[...Array(5)].map((_, index) => (
                <Star
                  key={index}
                  className={`w-4 h-4 ${
                    index < Number(product.rating) ? "text-yellow-500" : "text-gray-300"
                  }`}
                />
              ))}
              <span className="text-gray-500 text-sm">{product.totalReviews}</span>
            </div>
            <div className="flex items-center justify-between w-full mt-2">
              <div className="flex items-center border rounded-lg border-gray-300">
                <button
                  onClick={() => setCount(count - 1)}
                  className="px-3 py-1 text-xl text-gray-700 hover:bg-gray-100"
                >
                  -
                </button>
                <span className="px-4 py-1 text-gray-700 font-bold">{count}</span>
                <button
                  onClick={() => setCount(count + 1)}
                  className="px-3 py-1 text-xl text-gray-700 hover:bg-gray-100"
                >
                  +
                </button>
              </div>
              <span className="text-black text-lg font-bold">{product.price}</span>
            </div>
            <button className="mt-4 flex items-center justify-center w-full py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all">
              <Image
                src="/assets/icons/shopping-icon.svg"
                alt="cart"
                width={20}
                height={20}
                className="mr-2"
              />
                Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>


            <div className="flex flex-col item-center"> 
            <p className="text-2xl font-bold text-center">Deal Of The Week</p>
            </div>
    </div>
  );
}

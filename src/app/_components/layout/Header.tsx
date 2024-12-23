import Image from "next/image";
import React from "react";
import { Search } from "lucide-react";

// https://www.figma.com/design/rBLyOfnrfVAkLqPmfYOnOR/Super-Market-Store?node-id=589-5120&p=f&t=jtW3FbTD4BruL1uC-0
function Header() {
  return (
    <header className="w-full border-b border-gray-300 bg-white">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row items-center justify-between h-20 px-4 md:px-8">
        <div className="flex items-center space-x-4 md:space-x-20 w-full md:w-auto">
          {/* Logo Section */}
          <div className="flex items-center space-x-2">
            <Image
              src="/assets/icons/main-icon.svg"
              width={49}
              height={44}
              alt="Grosary Main Icon"
              priority
            />
            <div>
              <h2 className="text-green-600 font-bold text-xl md:text-2xl">
                GROSARY
              </h2>
              <div className="flex space-x-1 md:space-x-2 text-xs md:text-sm text-gray-600">
                <span>Super</span>
                <span>Market</span>
              </div>
            </div>
          </div>
          {/* Search Section */}
          <div className="relative w-full max-w-sm">
            <input
              type="text"
              placeholder="Search for Products ..."
              className="w-full h-10 pl-4 pr-10 border rounded-lg bg-gray-100 text-xs md:text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-green-600"
            />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600" />
          </div>
        </div>

        {/* Contact and Icons */}
        <div className="flex items-center space-x-4 md:space-x-6 mt-4 md:mt-0">
          {/* Contact Info */}
          <div className="hidden md:flex items-center space-x-2">
            <Image
              src="/assets/icons/phone-icon.svg"
              width={20}
              height={20}
              alt="Phone Icon"
            />
            <span className="text-sm text-gray-600">+1 1800-000-000</span>
          </div>

          {/* Offers */}
          <div className="hidden md:flex items-center space-x-2">
            <Image
              src="/assets/icons/offer-icon.svg"
              width={20}
              height={20}
              alt="Offers Icon"
            />
            <span className="text-sm text-gray-600">Offers</span>
          </div>

          {/* Favorites */}
          <div className="flex items-center space-x-2">
            <div className="rounded-full bg-[#EF3F234D] p-2">
              <Image
                src="/assets/icons/heart-icon.svg"
                width={20}
                height={20}
                alt="Favorites Icon"
              />
            </div>
          </div>

          {/* Profile */}
          <div className="flex items-center space-x-2">
            <Image
              src="/assets/icons/person-icon.svg"
              width={20}
              height={20}
              alt="Profile Icon"
            />
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="flex flex-wrap items-center h-13  bg-gray-50 border-t border-gray-300">
        {/* Categories */}
        <div className="flex items-center space-x-4">
          <Image
            src="/assets/icons/category-icon.svg"
            width={20}
            height={20}
            alt="Category Icon"
          />
          <span className="text-sm md:text-base text-[#3A3A3A]">
            Select Categories
          </span>
          <Image
            src="/assets/icons/line.svg"
            width={2}
            height={2}
            alt="Divider Line"
          />
        </div>

        {/* Navigation Links */}
        <div className="flex items-center space-x-4 md:space-x-6 ml-4">
          <ul className="flex flex-row items-center space-x-4 md:space-x-6 text-sm md:text-base text-gray-700">
            <li className="hover:text-green-600 cursor-pointer">Home</li>
            <li className="hover:text-green-600 cursor-pointer">
              New Products
            </li>
            <li className="hover:text-green-600 cursor-pointer">
              Featured Products
            </li>
            <li className="hover:text-green-600 cursor-pointer">Shop</li>
            <li className="relative group">
              <div className="flex items-center space-x-1 md:space-x-2 cursor-pointer">
                <span>Pages</span>
                <Image
                  src="/assets/icons/dropdown-menu.svg"
                  width={12}
                  height={12}
                  alt="Dropdown Menu Icon"
                />
              </div>
              {/* Dropdown */}
              <ul className="absolute hidden group-hover:block bg-white shadow-lg rounded-lg mt-2 py-2 w-32">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  About
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Checkout
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Cart
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  My Account
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Contact
                </li>
              </ul>
            </li>
          </ul>
        </div>

        {/* Cart */}
        <div className="flex items-center ml-auto px-5 py-5 space-x-2 md:space-x-4 bg-[#EF3F23] ">
          <Image
            src="/assets/icons/cart.svg"
            width={25}
            height={28}
            alt="Cart Icon"
          />
          <span className="text-sm md:text-base text-white">Cart(5)</span>
        </div>
      </div>
    </header>
  );
}

export default Header;

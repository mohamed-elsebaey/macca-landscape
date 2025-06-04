"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { AlignJustify, ShoppingBag, X } from "lucide-react";
import OutsideClickHandler from "react-outside-click-handler";

import logo from "@/public/logo/logo-circle.png";
import { navigationLinks } from "@/constants";
import { useCart } from "@/contexts/CartContext";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { getCartItemsCount } = useCart();



  const openMenuHandler = () => {
    setIsMenuOpen(() => !isMenuOpen);
  };
  const closeMenuHandler = () => {
    setIsMenuOpen(() => false);
  };
  return (
    <OutsideClickHandler onOutsideClick={closeMenuHandler}>
      <header className="header-gradient backdrop-blur-md shadow-2xl border-b border-green-600/30 fixed w-full top-0 z-50" >
        <div className="content-width flex flex-wrap items-center justify-between">
          <Link href="/" className="z-50" onClick={closeMenuHandler}>
            <Image
              src={logo}
              alt="Alpha Herb Logo"
              width={75}
              height={75}
              priority={true}
              loading="eager"
              className="translate-y-4 scale-125"
              // className="w-auto h-auto"
              title=""
            />
          </Link>
          {/* *************** Menu Icon in small devices ************** */}
          <button
            onClick={openMenuHandler}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
          >
            {!isMenuOpen ? (
              <AlignJustify className="text-primary" />
            ) : (
              <X className="text-red-600" />
            )}
          </button>
          {/* ***************************** */}
          <div
            className={`${isMenuOpen ? "flex" : "hidden"
              } w-full md:block md:w-auto`}
            id="navbar-default"
          >
            <ul className="w-full font-medium flex flex-col gap-5 md:gap-4 lg:gap-8 items-center p-4 md:p-0 mt-4 mb-4 md:mb-0 rounded-lg md:flex-row  md:mt-0 md:border-0 md:bg-transparent ">
              {navigationLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="py-2 px-3 rounded md:hover:bg-transparent md:border-0 hover:text-primary md:p-0"
                    onClick={closeMenuHandler}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              {/* line in small devices */}
              <li className="mt-2 md:mt-0">
                <Link href="/" className="relative p-3 text-green-50 hover:text-green-200 transition-all duration-300 group">
                  <ShoppingBag className="w-7 h-7" />
                  <span className="absolute top-3 lg:top-5 lg:right-6  natural-gradient text-white text-xs rounded-full p-1 min-w-6 min-h-6 max-w-10 flex items-center justify-center font-bold shadow-lg animate-pulse">
                    {getCartItemsCount() > 100 ? "100+" : getCartItemsCount()}
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </OutsideClickHandler>
  );
}

export default Header;

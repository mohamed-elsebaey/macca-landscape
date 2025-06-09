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
          <div className="flex items-center gap-2 inline-flex md:hidden">
            <CartIconButton itemsCount={getCartItemsCount()} />
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
          </div>
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
              <li className="md:mt-0 hidden md:block">
                <CartIconButton itemsCount={getCartItemsCount()} />
              </li>
            </ul>
          </div>
        </div>
      </header>
    </OutsideClickHandler>
  );
}

export default Header;


const CartIconButton = ({ itemsCount }: { itemsCount: number }) => {
  return (
    <Link href="/cart" className="relative p-3 group">
      <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-tr from-green-600 to-green-400 shadow-lg transition-transform duration-200 group-hover:scale-110">
        <ShoppingBag className="w-6 h-6 text-white drop-shadow" />
      </span>
      <span className="absolute -top-1 -right-1 natural-gradient text-white text-xs rounded-full px-2 py-0.5 min-w-6 min-h-6 flex items-center justify-center font-bold shadow-md border-2 border-white animate-bounce">
        {itemsCount > 100 ? "100+" : itemsCount}
      </span>
    </Link>
  )
}
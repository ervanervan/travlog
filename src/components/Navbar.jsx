import React, { useState } from "react";
import logo from "../assets/logo-travlog.svg";
import menu from "../assets/hamburger-menu.svg";
import Button from "./Button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-bgWhite">
      <nav className="container mx-auto">
        <div className="px-4 py-8 flex justify-between items-center">
          <div className="flex gap-4 items-center">
            <img src={logo} alt="Logo Travlog" className="w-10 h-10" />
            <h1 className="font-black text-2xl text-textBlack">Travlog</h1>
          </div>
          <div>
            <img src={menu} alt="menu" onClick={handleOpen} />
          </div>
        </div>
        <div
          className={`fixed top-0 right-0 w-full h-screen z-30 bg-black/5 backdrop-blur-md md:hidden ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } transition-all`}
        >
          <div className="absolute top-0 right-0 h-screen w-3/4 bg-bgWhite px-10 py-20 flex">
            <img
              src={menu}
              alt="menu"
              className="h-12 w-12 text-textPrimary absolute top-7 right-7 cursor-pointer"
              onClick={handleOpen}
            />
            <ul className="flex flex-col basis-full justify-center gap-8 list-none text-base font-semibold text-textGray">
              <li className="hover:text-textBlack duration-300">
                <a href="/">Home</a>
              </li>
              <li className="hover:text-textBlack duration-300">
                <a href="#discover">Discover</a>
              </li>
              <li className="hover:text-textBlack duration-300">
                <a href="#specialdeals">Special Deals</a>
              </li>
              <li className="hover:text-textBlack duration-300">
                <a href="#contactus">Contact</a>
              </li>
              <div className="flex flex-col gap-2">
                <Button isWhite>Log In</Button>
                <Button isPrimary>Sign Up</Button>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

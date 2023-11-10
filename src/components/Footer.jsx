import React from "react";
import logo from "../assets/logo-travlog.svg";
import iconFB from "../assets/icon-facebook.svg";
import iconTW from "../assets/icon-twitter.svg";
import iconIG from "../assets/icon-instagram.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="container mx-auto">
      <div className="px-4 xl:px-20 py-8 md:py-16">
        <div className="flex gap-16 items-start flex-col lg:flex-row">
          <div className="lg:w-1/2">
            <div className="flex gap-4 items-center mb-8">
              <img src={logo} alt="Logo Travlog" width={40} height={40} />
              <h1 className="font-black text-2xl text-textBlack">Travlog</h1>
            </div>
            <p className="text-textGray text-xl mb-8 lg:mb-16">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC.
            </p>
            <div className="flex gap-8">
              <img src={iconFB} alt="facebook" />
              <img src={iconTW} alt="twitter" />
              <img src={iconIG} alt="instagram" />
            </div>
          </div>
          <div className="w-full gap-6 flex-row flex-wrap lg:w-1/2 flex items-start justify-between">
            <div className="flex gap-4 md:gap-8 flex-col">
              <h3 className="font-bold text-textBlack text-xl">Company</h3>
              <Link className="text-textGray text-lg hover:underline">
                About
              </Link>
              <Link className="text-textGray text-lg hover:underline">
                Career
              </Link>
              <Link className="text-textGray text-lg hover:underline">
                Mobile
              </Link>
            </div>
            <div className="flex gap-4 md:gap-8 flex-col">
              <h3 className="font-bold text-textBlack text-xl">Contact</h3>
              <Link className="text-textGray text-lg hover:underline">
                Why Travlog?
              </Link>
              <Link className="text-textGray text-lg hover:underline">
                Partner with us
              </Link>
              <Link className="text-textGray text-lg hover:underline">
                FAQ's
              </Link>
              <Link className="text-textGray text-lg hover:underline">
                Blog
              </Link>
            </div>
            <div className="flex gap-4 md:gap-8 flex-col">
              <h3 className="font-bold text-textBlack text-xl">Meet Us</h3>
              <Link className="text-textGray text-lg hover:underline">
                +00 92 1234 56789
              </Link>
              <Link className="text-textGray text-lg hover:underline">
                info@travlog.com
              </Link>
              <Link className="text-textGray text-lg hover:underline">
                205. R Street, New York <br /> BD23200
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

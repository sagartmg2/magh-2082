import React, { useState } from "react";
import {
  Cross,
  Mail,
  Menu,
  Phone,
  Search,
  ShoppingCart,
  User,
  X,
} from "lucide-react";
import { Link, useLocation } from "react-router";

export default function Header() {
  const [menuOpened, setMenuOpened] = useState(false);
  const location = useLocation();

  return (
    <>
      <div className=" bg-primary text-[#F1F1F1] font-lato">
        <div className="container py-3 md:py-5 flex flex-col gap-4 items-center  sm:flex-row sm:justify-between  ">
          <div className="flex gap-8">
            <div className="flex gap-2">
              <Mail />
              <span>mhhasanul@gmail.com</span>
            </div>
            <div className="flex gap-2">
              <Phone />
              <span>(12345)67890</span>
            </div>
          </div>

          <div className="flex gap-6 ">
            <div className="flex gap-2">
              <Link to="/login">Login</Link>
              <User />
            </div>
            <ShoppingCart />
          </div>
        </div>
      </div>
      <div className="container py-4 flex justify-between">
        <span className="text-[#0D0E43] font-josefin">Hekto</span>
        <div
          className={`${menuOpened ? "p-8 fixed bg-orange-400 top-0 bottom-0 right-0" : "hidden lg:block"} `}
        >
          <X
            className="lg:hidden"
            onClick={() => {
              setMenuOpened(false);
            }}
          />
          <ul className="lg:flex lg:gap-4">
            <li>
              <Link to="/">home </Link>
            </li>
            <li>products </li>
            <li>orders</li>
          </ul>
        </div>
        <div className=" flex gap-0.5">
          <input className="border " />
          <Search />
        </div>
        <Menu
          className="lg:hidden"
          onClick={() => {
            setMenuOpened(true);
          }}
        />
      </div>
    </>
  );
}

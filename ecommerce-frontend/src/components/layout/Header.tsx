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
import {
  Link,
  Navigate,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import { logout } from "../../redux/features/userSlice";

export default function Header() {
  const reduxUser = useSelector(
    (globalStore: RootState) => globalStore.user.value,
  );

  const [menuOpened, setMenuOpened] = useState(false);
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [searchParams, setSearchParms] = useSearchParams();

  console.log("query q:", searchParams.get("q"));

  function handleSubmit(e) {
    e.preventDefault();
    e.target.searchText;

    // setCount((prev) =>{return prev + 1})

    setSearchParms((prev) => {
      const newParms = new URLSearchParams(prev);
      newParms.set("q", e.target.searchText.value);
      return newParms;
    });

    if (location.pathname !== "/products") {
      navigate("/products?q=" + e.target.searchText.value);
    }
  }

  console.log("HEADER-RENDER");

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
              {reduxUser ? (
                <>
                  <span>
                    {reduxUser.firstName} {reduxUser.lastName}
                  </span>
                  <span
                    onClick={() => {
                      dispatch(logout());
                    }}
                  >
                    logout
                  </span>
                </>
              ) : (
                <Link to="/login">Login</Link>
              )}
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
            <li>
              <Link to="/products">products </Link>
            </li>
            {reduxUser && (
              <li>
                <Link to="/orders">orders </Link>
              </li>
            )}
          </ul>
        </div>
        <form onSubmit={handleSubmit} className=" flex gap-0.5">
          <input
            defaultValue={searchParams.get("q") || ""}
            className="border "
            name="searchText"
          />
          <button>
            <Search />
          </button>
        </form>
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

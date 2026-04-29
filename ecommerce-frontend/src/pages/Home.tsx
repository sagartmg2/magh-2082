import { Mail, Phone, ShoppingCart, User } from "lucide-react";
import { Link } from "react-router";

export default function Home() {
  return (
    <div className=" bg-[#7E33E0] text-[#F1F1F1]">
      <div className="container mx-auto px-3 py-3 md:py-5 flex flex-col gap-4 items-center  sm:flex-row sm:justify-between  ">
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
  );
}

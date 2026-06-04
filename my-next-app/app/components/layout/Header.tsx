import Link from "next/link";
import React from "react";

function Header() {
  return (
    <div className="flex gap-4 p-8 mb-8">
      <Link href={"/"}>home</Link>
      <Link href={"/products"}>products</Link>
      <Link href={"/login"}>login</Link>
    </div>
  );
}

export default Header;

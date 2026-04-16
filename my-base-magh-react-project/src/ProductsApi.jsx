import React, { useState, useEffect } from "react";
import Input from "./components/ui/Input";

/* 
  lifecycle of components

  mount
  udpate
  unmount

  useEffect

*/

let dataFetched = false;
export default function ProductsApi() {
  console.log("render | re-render");

  const [products, setProducts] = useState([]);
  const [searchText, setSearchText] = useState("");

  function fetchApiData(searchText="") {
    // fetch(`https://dummyjson.com/products/search?q=${searchText}&limit=10&skip=0`)  page 1
    // fetch(`https://dummyjson.com/products/search?q=${searchText}&limit=10&skip=10`)  page 2
    fetch(`https://dummyjson.com/products/search?q=${searchText}&limit=10&skip=20`)    // page 3
      .then((response) => response.json())
      .then((res) => {
        setProducts(res.products);
        dataFetched = true;
      });
  }

  const searchProduct = (e) => {
    setSearchText(e.target.value);
    fetchApiData(e.target.value)
  };

  useEffect(() => {
    console.log("useEFFECT mount | update");
  });

  if (!dataFetched) {
    fetchApiData();
  }

  return (
    <div>
      <button className="border px-3 py-1" onClick={fetchApiData}>
        fetch products
      </button>

      <form>
        <Input
          value={searchText}
          placeholder="search..."
          onChange={searchProduct}
        />
      </form>
      <ul className="grid mt-8 grid-cols-5 gap-4">
        {products.map((el) => (
          <li
            key={el.id}
            className="border border-gray-400 p-4 rounded-xl flex flex-col gap-2"
          >
            <img src={el.thumbnail} />
            <p className="font-medium">{el.title}</p>
            <p>${el.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

import React, { useState, useEffect } from "react";
import axios from "axios";
// import Pagination from '@rc-component/pagination';
import Pagination from "rc-pagination";
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
  const [pagination, setPagination] = useState({
    currentPage: 1,
    total: 0,
    perPage: 10,
  });

  function fetchApiData() {
    /*  
        fetch(`https://dummyjson.com/products/search?q=${searchText}&limit=10&skip=0`,{
            method:"GET"
          })  //page 1
          // fetch(`https://dummyjson.com/products/search?q=${searchText}&limit=10&skip=10`)  page 2
          // fetch(`https://dummyjson.com/products/search?q=${searchText}&limit=10&skip=20`,) // page 3
            .then((response) => response.json())
            .then((res) => {
              setProducts(res.products);
              dataFetched = true;
            }); 
      */

    axios
      .get(
        `https://dummyjson.com/products/search?q=${searchText}&limit=${pagination.perPage}&skip=${(pagination.currentPage - 1) * pagination.perPage}&categr=&pricefrom&priceTo`,
      )
      .then((res) => {
        setProducts(res.data.products);

        console.log(res.data.total);
        setPagination({ ...pagination, total: res.data.total });
      });
  }

  const searchProduct = (e) => {
    
    setSearchText(e.target.value);

    // fetchApiData(e.target.value)
    // fetchApiData();
  };

  useEffect(() => {
    console.log("useEFFECT mount | update");
    fetchApiData();
  }, [searchText, pagination.currentPage]); // [...dependency array]

  // if (!dataFetched) {
  //   fetchApiData();
  // }

  const handlePageClick = () => {};

  //  const pageCount = Math.ceil(products.length / itemsPerPage);
  const pageCount = Math.ceil(194 / 10);
  console.log({ pageCount });

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

      <Pagination
        className="rc-pagination"
        onChange={(pageNumber) => {
          setPagination({ ...pagination, currentPage: pageNumber });
        }}
        current={pagination.currentPage}
        total={pagination.total}
        pageSize={pagination.perPage}
        prevIcon={"< prev"}
        nextIcon={"next >"}
        hideOnSinglePage={true}
      />
    </div>
  );
}

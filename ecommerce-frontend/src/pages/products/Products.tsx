import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import { Link, useSearchParams } from "react-router";
import axios from "axios";
import { ShoppingCart } from "lucide-react";
import { toast } from "react-toastify";

const accentGold = "#C8A96E";
const serifFont = { fontFamily: "'Cormorant Garamond', serif" };

function SectionTitle({ children }) {
  return (
    <span
      className="font-semibold text-gray-900 pb-1 mb-3 inline-block border-b-2"
      style={{ ...serifFont, fontSize: "1.05rem", borderColor: accentGold }}
    >
      {children}
    </span>
  );
}

function ProductCard({ product }) {
  const reduxUser = useSelector(
    (globalStore: RootState) => globalStore.user.value,
  );

  const addToCart = (product) => {
    if (reduxUser) {
      axios.post(
        "http://localhost:4000/api/carts",
        {
          productId: product.id,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        },
      );
    } else {
      toast.error("login required.");
    }
  };

  return (
    <div className="flex bg-white border border-gray-100 rounded-sm overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div
        className="flex-shrink-0 overflow-hidden bg-gray-50"
        style={{ width: 192, height: 168 }}
      >
        <img
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          src={`http://localhost:4000/${product.images[0]?.path}`}
          alt={product.title}
        />
      </div>
      <div className="flex flex-col justify-center px-6 py-5 flex-1">
        <h3
          className="font-semibold tracking-wide text-gray-900 mb-1"
          style={{ ...serifFont, fontSize: "1.18rem" }}
        >
          {product.title}
        </h3>
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs text-gray-400 line-through">
            {product.oldPrice}
          </span>
          <span className="text-sm font-medium text-red-600">
            {product.newPrice}
          </span>
          <span
            className="text-xs tracking-widest"
            style={{ color: accentGold }}
          >
            {product.stars}
          </span>
        </div>
        <p className="text-xs text-gray-400 leading-relaxed mb-3 max-w-md">
          {product.desc}
        </p>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => {
              addToCart(product);
            }}
            className=" flex items-center justify-center border border-gray-200 rounded-full text-xs cursor-pointer bg-secondary text-white px-3  py-2  hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-colors duration-200"
          >
            add to cart <ShoppingCart />
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Products() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [searchParams, setSearchParms] = useSearchParams();

  console.log("product page", searchParams.get("q"));

  const [filter, setFilters] = useState({
    limit: searchParams.get("limit") || 15,
    sort: "oldest",
    categoryIds: [],
  });

  useEffect(() => {
    let searchText = searchParams.get("q") || "";
    let limit = searchParams.get("limit") || 15;

    axios
      .get(
        `http://localhost:4000/api/products?q=${searchText}&categoryIds=${filter.categoryIds.join()}&limit=${limit}&sort=${filter.sort}`,
      )
      .then((res) => {
        setProducts(res.data.data.products);
      });
  }, [filter, searchParams]);

  useEffect(() => {
    axios.get("http://localhost:4000/api/categories").then((res) => {
      setCategories(res.data.data);
    });
  }, []);

  const changeCategory = (e, cat) => {
    setFilters((prev) => {
      let newCategoryIds = [...prev.categoryIds];
      if (e.target.checked) {
        newCategoryIds.push(cat.id);
      } else {
        newCategoryIds = newCategoryIds.filter((el) => el != cat.id);
      }

      return {
        ...prev,
        categoryIds: newCategoryIds,
      };
    });
  };

  const reduxUser = useSelector(
    (globalStore: RootState) => globalStore.user.value,
  );

  const changePerPage = (e) => {
    setFilters((prev) => {
      return { ...prev, limit: e.target.value };
    });

    setSearchParms((prev) => {
      const newParms = new URLSearchParams(prev);
      newParms.set("limit", e.target.value);
      return newParms;
    });
  };

  return (
    <div className="min-h-screen container">
      {/* Page Header */}
      <div className="bg-white border-b border-gray-200 py-4">
        <h1
          className="font-semibold tracking-wide text-gray-900"
          style={{ ...serifFont, fontSize: "1.4rem" }}
        >
          Ecommerce Accessories &amp; Fashion Item
        </h1>
        <p className="text-xs text-gray-400 mt-0.5">
          About 14,521 results (0.62 seconds)
        </p>
      </div>
      {reduxUser?.isSeller && (
        <Link
          to="/sellers/products/add"
          className="border p-4 bg-secondary text-white"
        >
          CREATE Product
        </Link>
      )}

      {/* Layout */}
      <div className=" flex gap-9 px-5 py-8">
        {/* Sidebar */}
        <aside className="flex-shrink-0" style={{ width: 168 }}>
          {/* Categories */}
          <div className="mb-7">
            <SectionTitle>Categories</SectionTitle>
            <div className="flex flex-col mt-1">
              {categories.map((cat) => (
                <>
                  <div className={`flex gap-2 ${cat.parentId ? "pl-8" : ""}`}>
                    <input
                      id={`cat-${cat.id}`}
                      type="checkbox"
                      className="rounded"
                      onChange={(e) => {
                        changeCategory(e, cat);
                      }}
                    />
                    <label htmlFor={`cat-${cat.id}`}>{cat.title}</label>
                  </div>

                  {cat.subCategories.map((sub) => {
                    return (
                      <div
                        className={`flex gap-2 ${sub.parentId ? "pl-8" : ""}`}
                      >
                        <input
                          id={`cat-${sub.id}`}
                          type="checkbox"
                          className="rounded"
                          onChange={(e) => {
                            changeCategory(e, sub);
                          }}
                        />
                        <label htmlFor={`cat-${sub.id}`}>{sub.title}</label>
                      </div>
                    );
                  })}
                </>
              ))}
              {/*
              <CheckboxItem label="Bags" />
              {subCategories.map((cat) => (
                <CheckboxItem key={cat} label={cat} indent />
              ))} */}
            </div>
          </div>
        </aside>

        {/* Main */}
        <main className="flex-1 min-w-0">
          {/* Top Bar */}
          <div className="flex items-center justify-between pb-4 mb-5 border-b border-gray-200">
            <div className="flex items-center gap-3">
              <span className="text-xs text-gray-400">Per Page:</span>
              <select
                onChange={changePerPage}
                value={filter.limit}
                className="text-xs border border-gray-200 bg-white text-gray-800 px-2 py-1 rounded-sm outline-none cursor-pointer"
              >
                <option value="2">2</option>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="15">15</option>
              </select>
              <span className="text-xs text-gray-400 ml-2">Sort By:</span>
              <select className="text-xs border border-gray-200 bg-white text-gray-800 px-2 py-1 rounded-sm outline-none cursor-pointer">
                <option>Best Match</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest</option>
              </select>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-xs text-gray-400">View:</span>
              <button className="text-xs border border-gray-800 bg-gray-800 text-white px-2.5 py-1 rounded-sm cursor-pointer">
                &#9776;
              </button>
              <button className="text-xs border border-gray-200 bg-transparent text-gray-400 px-2.5 py-1 rounded-sm cursor-pointer hover:bg-gray-800 hover:text-white hover:border-gray-800">
                &#9783;
              </button>
            </div>
          </div>

          {/* Product List */}
          <div className="flex flex-col gap-4">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

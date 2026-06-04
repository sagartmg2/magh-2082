import Link from "next/link";

export default async function Products() {
  let filter = {
    limit: 15,
    sort: "oldest",
    categoryIds: [],
  };

  let data = await fetch(
    `http://localhost:4000/api/products?q=${""}&categoryIds=${filter.categoryIds.join()}&limit=${filter.limit}&sort=${filter.sort}`,
    {
      next: {
        revalidate: 240, // 4 minutes = 240 seconds
      },
    },
  );

  let jsonData = await data.json();
  let products: any[] = jsonData.data.products;

  return (
    <div className="min-h-screen container">
      {/* Page Header */}
      <div className="bg-white border-b border-gray-200 py-4">
        <h1
          className="font-semibold tracking-wide text-gray-900"
          style={{ fontSize: "1.4rem" }}
        >
          Ecommerce Accessories &amp; Fashion Item
        </h1>
        <p className="text-xs text-gray-400 mt-0.5">
          About 14,521 results (0.62 seconds)
        </p>
      </div>

      {/* Layout */}
      <div className=" flex gap-9 px-5 py-8">
        {/* Sidebar */}
        <aside className="flex-shrink-0" style={{ width: 168 }}>
          {/* Categories */}
        </aside>

        {/* Main */}
        <main className="flex-1 min-w-0">
          {/* Top Bar */}
          <div className="flex items-center justify-between pb-4 mb-5 border-b border-gray-200">
            <div className="flex items-center gap-3">
              <span className="text-xs text-gray-400">Per Page:</span>
              <select
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
          <div className="flex flex-col gap-4 products">
            {products.map((product: any) => (
              <Link href={`/products/${product.id}`} className="block">
                <div className="flex bg-white border border-gray-100 rounded-sm overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer">
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
                      style={{ fontSize: "1.18rem" }}
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
                      <span className="text-xs tracking-widest">
                        {product.stars}
                      </span>
                    </div>
                    <p className="text-xs text-gray-400 leading-relaxed mb-3 max-w-md">
                      {product.desc}
                    </p>
                    <div className="flex gap-2">
                      <button
                        type="button"
                        // onClick={(e) => addToCart(product, e)}
                        className=" flex items-center justify-center border border-gray-200 rounded-full text-xs cursor-pointer bg-secondary text-black px-3  py-2  hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-colors duration-200"
                      >
                        add to cart{" "}
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

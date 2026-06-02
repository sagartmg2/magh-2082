import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router";
import { ShoppingCart, ArrowLeft } from "lucide-react";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";

const BASE_URL = "http://localhost:4000";
const accentGold = "#C8A96E";
const serifFont = { fontFamily: "'Cormorant Garamond', serif" };

interface ProductImage {
  id: number;
  path: string;
}

interface Category {
  id: number;
  title: string;
  parentId: number | null;
}

interface Product {
  id: number;
  title: string;
  categoryId: number;
  price: string;
  description: string | null;
  stock: number;
  userId: number;
  createdAt: string;
  updatedAt: string;
  category: Category;
  images: ProductImage[];
}

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const reduxUser = useSelector((globalStore: RootState) => globalStore.user.value);

  useEffect(() => {
    if (id) {
      axios
        .get(`${BASE_URL}/api/products/${id}`)
        .then((res) => {
          setProduct(res.data.data);
          if (res.data.data.images.length > 0) {
            setSelectedImage(`${BASE_URL}/${res.data.data.images[0].path}`);
          }
        })
        .finally(() => setLoading(false));
    }
  }, [id]);

  const addToCart = (product: Product) => {
    if (reduxUser) {
      axios.post(
        `${BASE_URL}/api/carts`,
        { productId: product.id },
        { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
      ).then(() => {
        toast.success("Added to cart!");
      });
    } else {
      toast.error("Login required.");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading product details...
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Product not found.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8f9fc]">
      <div className="container py-10">
        <Link to="/products" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6">
          <ArrowLeft size={20} />
          Back to Products
        </Link>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Image Section */}
            <div>
              <div className="aspect-square bg-gray-50 rounded-lg overflow-hidden mb-4">
                {selectedImage ? (
                  <img
                    src={selectedImage}
                    alt={product.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400 text-4xl">
                    🛍️
                  </div>
                )}
              </div>
              {product.images.length > 1 && (
                <div className="flex gap-3">
                  {product.images.map((img) => (
                    <button
                      key={img.id}
                      onClick={() => setSelectedImage(`${BASE_URL}/${img.path}`)}
                      className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                        selectedImage === `${BASE_URL}/${img.path}`
                          ? "border-gray-900"
                          : "border-gray-200 hover:border-gray-400"
                      }`}
                    >
                      <img
                        src={`${BASE_URL}/${img.path}`}
                        alt={product.title}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Details Section */}
            <div>
              <p className="text-sm text-gray-500 mb-1">
                {product.category.title}
              </p>
              <h1
                className="text-3xl font-semibold text-gray-900 mb-4"
                style={serifFont}
              >
                {product.title}
              </h1>
              <p className="text-3xl font-bold text-gray-900 mb-4">
                ${parseFloat(product.price).toFixed(2)}
              </p>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {product.description || "No description available."}
              </p>

              <div className="flex items-center gap-4 mb-8">
                <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium ${
                  product.stock > 0 ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"
                }`}>
                  {product.stock > 0 ? "In Stock" : "Out of Stock"}
                </span>
                {product.stock > 0 && (
                  <span className="text-gray-500 text-sm">
                    {product.stock} available
                  </span>
                )}
              </div>

              <div className="flex gap-4">
                {product.stock > 0 && (
                  <button
                    onClick={() => addToCart(product)}
                    className="flex-1 flex items-center justify-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
                  >
                    <ShoppingCart size={20} />
                    Add to Cart
                  </button>
                )}
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100">
                <p className="text-xs text-gray-500">
                  SKU: {product.id} | Added: {new Date(product.createdAt).toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

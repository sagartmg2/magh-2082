import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const BASE_URL = import.meta.env.VITE_API_URL

interface ProductImage {
  id: number;
  path: string;
  productId: number;
  createdAt: string;
  updatedAt: string;
}

interface Product {
  id: number;
  title: string;
  categoryId: number;
  price: string;
  description: string;
  stock: number;
  userId: number;
  createdAt: string;
  updatedAt: string;
  images: ProductImage[];
}

interface CartItem {
  id: number;
  quantity: number;
  userId: number;
  productId: number;
  createdAt: string;
  updatedAt: string;
  product: Product;
}

function Cart() {
  const [carts, setCarts] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(true);

  // Order form state
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [note, setNote] = useState("");
  const [payment, setPayment] = useState<"cash" | "esewa">("cash");

  useEffect(() => {
    axios
      .get(`${BASE_URL}/carts`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        setCarts(res.data.data ?? []);
      })
      .catch(() => setCarts([]))
      .finally(() => setLoading(false));
  }, []);

  const updateQty = (
    productId: number,
    quantity: number,
    id: number,
    delta: number,
  ) => {
    axios.post(
      `${BASE_URL}/api/carts`,
      { productId, quantity: quantity + delta },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      },
    );
    setCarts((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item,
      ),
    );
  };

  const removeItem = (id: number) => {
    setCarts((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = carts.reduce(
    (sum, item) => sum + parseFloat(item.product.price) * item.quantity,
    0,
  );

  const getImageUrl = (item: CartItem) => {
    if (item.product.images && item.product.images.length > 0) {
      return `${BASE_URL}/${item.product.images[0].path}`;
    }
    return null;
  };

  const handlePlaceOrder = () => {
    if (!name || !phone || !city || !address) {
      alert("Please fill in all required fields.");
      return;
    }

    axios
      .post(
        `${import.meta.env.VITE_API_URL}/orders`,
        {
          phone: phone,
          paymentMode: payment,
          address: address,
          secondaryAddress: "putalisdak",
          products: carts.map((el) => ({
            quantity: el.quantity,
            productId: el.productId,
          })),
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        },
      )
      .then((res) => {
        // toast("order placed");

        /*
        res.data.esewa =  "esewa": {
        "amount": 27276,
        "failure_url": "https://developer.esewa.com.np/failure",
        "success_url": "https://developer.esewa.com.np/success",
        "product_delivery_charge": "0",
        "product_service_charge": "0",
        "product_code": "EPAYTEST",
        "signature": "ouv29SZKm1zIY4vTwToW65fmJ1KIVXwOfKwFLRQAYnQ=",
        "signed_field_names": "total_amount,transaction_uuid,product_code",
        "tax_amount": "0",
        "total_amount": 27276,
        "transaction_uuid": 1780197706022
    }
        
    
            <form action="https://rc-epay.esewa.com.np/api/epay/main/v2/form" method="POST">
            <input type="text" id="amount" name="amount" value="100" required>
            <input type="text" id="tax_amount" name="tax_amount" value ="10" required>
            <input type="text" id="total_amount" name="total_amount" value="110" required>
            <input type="text" id="transaction_uuid" name="transaction_uuid" value="241028" required>
            <input type="text" id="product_code" name="product_code" value ="EPAYTEST" required>
            <input type="text" id="product_service_charge" name="product_service_charge" value="0" required>
            <input type="text" id="product_delivery_charge" name="product_delivery_charge" value="0" required>
            <input type="text" id="success_url" name="success_url" value="https://developer.esewa.com.np/success" required>
            <input type="text" id="failure_url" name="failure_url" value="https://developer.esewa.com.np/failure" required>
            <input type="text" id="signed_field_names" name="signed_field_names" value="total_amount,transaction_uuid,product_code" required>
            <input type="text" id="signature" name="signature" value="i94zsd3oXF6ZsSr/kGqT4sSzYQzjj1W/waxjWyRwaME=" required>
            <input value="Submit" type="submit">
            </form>

        */

        // let form = document.createElement("form");
        // let amount = document.createElement("input");
        // amount.setAttribute("id", "amout");
        // amount.setAttribute("value", res.data.esewa.total_amount);
        // form.appendChild(amount);

        const esewa = res.data.data.esewa;

        const form = document.createElement("form");
        form.setAttribute(
          "action",
          "https://rc-epay.esewa.com.np/api/epay/main/v2/form",
        );
        form.setAttribute("method", "POST");

        const fields: Record<string, string> = {
          amount: esewa.amount,
          tax_amount: esewa.tax_amount,
          total_amount: esewa.total_amount,
          transaction_uuid: esewa.transaction_uuid,
          product_code: esewa.product_code,
          product_service_charge: esewa.product_service_charge,
          product_delivery_charge: esewa.product_delivery_charge,
          success_url: esewa.success_url,
          failure_url: esewa.failure_url,
          signed_field_names: esewa.signed_field_names,
          signature: esewa.signature,
        };

        Object.entries(fields).forEach(([key, value]) => {
          const input = document.createElement("input");
          input.setAttribute("type", "hidden");
          input.setAttribute("name", key);
          input.setAttribute("value", String(value));
          form.appendChild(input);
        });

        document.body.appendChild(form);
        form.submit();
      });

    console.log({ name, phone, city, address, note, payment, carts, subtotal });
  };

  return (
    <div className="min-h-screen bg-[#f8f9fc] px-6 py-10 text-[#1a1f36]">
      <div className="mx-auto max-w-[1200px] grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-8 items-start">
        {/* ── Left: Product Table ── */}
        <div>
          {/* Table Header */}
          <div className="grid grid-cols-[2fr_1fr_1fr_1fr] px-4 pb-3 border-b-2 border-[#e4e7f0] text-[#1a2e6f] font-bold text-[15px] tracking-wide hidden md:grid">
            <span>Product</span>
            <span className="text-center">Price</span>
            <span className="text-center">Quantity</span>
            <span className="text-center">Total</span>
          </div>

          {/* Rows */}
          {loading ? (
            <div className="py-16 text-center text-[#8892b0] text-[15px]">
              Loading your cart…
            </div>
          ) : carts.length === 0 ? (
            <div className="py-16 text-center text-[#8892b0] text-base">
              🛒 Your cart is empty.
            </div>
          ) : (
            <div className="flex flex-col">
              {carts.map((item) => {
                const imgUrl = getImageUrl(item);
                const lineTotal =
                  parseFloat(item.product.price) * item.quantity;
                return (
                  <div
                    key={item.id}
                    className="grid grid-cols-[2fr_1fr_1fr_1fr] items-center px-4 py-5 border-b border-[#eceef5] transition-colors duration-200 hover:bg-white hover:rounded-xl"
                  >
                    {/* Product Cell */}
                    <div className="flex items-center gap-3.5 relative">
                      <button
                        onClick={() => removeItem(item.id)}
                        title="Remove"
                        className="absolute -top-1.5 -left-1.5 w-[22px] h-[22px] rounded-full bg-[#1a2e6f] text-white text-xs flex items-center justify-center z-10 transition-all duration-150 hover:bg-[#ff2d6b] hover:scale-110 cursor-pointer"
                      >
                        ✕
                      </button>

                      <div className="relative w-[74px] h-[74px] rounded-xl overflow-hidden shrink-0 bg-[#e9ecf5]">
                        {imgUrl ? (
                          <img
                            src={imgUrl}
                            alt={item.product.title}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-[28px] text-[#b0b8d4]">
                            🛍️
                          </div>
                        )}
                      </div>

                      <div>
                        <p className="font-semibold text-sm text-[#1a1f36] mb-1">
                          {item.product.title}
                        </p>
                        <p className="text-xs text-[#8892b0] leading-relaxed">
                          {item.product.description}
                          <br />
                          {item.product.stock} items in stock
                        </p>
                      </div>
                    </div>

                    {/* Price */}
                    <div className="text-center font-semibold text-sm text-[#1a1f36]">
                      ${parseFloat(item.product.price).toFixed(2)}
                    </div>

                    {/* Quantity */}
                    <div className="flex justify-center">
                      <div className="flex items-center border border-[#dde1f0] rounded-lg overflow-hidden bg-white">
                        <button
                          onClick={() =>
                            updateQty(
                              item.product.id,
                              item.quantity,
                              item.id,
                              -1,
                            )
                          }
                          className="w-[30px] h-[30px] flex items-center justify-center text-base text-[#5a6488] hover:bg-[#f0f2fb] hover:text-[#1a2e6f] transition-colors duration-150 cursor-pointer"
                        >
                          −
                        </button>
                        <span className="w-9 text-center text-sm font-semibold text-[#1a1f36]">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQty(
                              item.product.id,
                              item.quantity,
                              item.id,
                              1,
                            )
                          }
                          className="w-[30px] h-[30px] flex items-center justify-center text-base text-[#5a6488] hover:bg-[#f0f2fb] hover:text-[#1a2e6f] transition-colors duration-150 cursor-pointer"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    {/* Total */}
                    <div className="text-center font-semibold text-sm text-[#1a1f36]">
                      ${lineTotal.toFixed(2)}
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Actions */}
          <div className="flex items-center justify-between mt-7">
            <button className="bg-[#ff2d6b] text-white font-bold text-sm px-7 py-3 rounded-lg tracking-wide transition-all duration-150 hover:opacity-90 hover:-translate-y-px cursor-pointer">
              Update Cart
            </button>
            <button
              onClick={() => setCarts([])}
              className="bg-[#ff2d6b] text-white font-bold text-sm px-7 py-3 rounded-lg tracking-wide transition-all duration-150 hover:opacity-90 hover:-translate-y-px cursor-pointer"
            >
              Clear Cart
            </button>
          </div>
        </div>

        {/* ── Right: Order Panel ── */}
        <div className="bg-[#eef0f8] rounded-2xl p-7 flex flex-col gap-0">
          {/* Order Summary */}
          <h2 className="text-[18px] font-bold text-[#1a2e6f] text-center mb-6 tracking-wide">
            Order Summary
          </h2>

          <div className="flex justify-between items-center py-3 border-b border-[#d8dced] text-[15px]">
            <span className="font-medium text-[#1a1f36]">Subtotal:</span>
            <span className="font-bold text-[#1a1f36]">
              ${subtotal.toFixed(2)}
            </span>
          </div>
          <div className="flex justify-between items-center py-3 text-[15px]">
            <span className="font-medium text-[#1a1f36]">Total:</span>
            <span className="font-bold text-[#1a1f36]">
              ${subtotal.toFixed(2)}
            </span>
          </div>

          <div className="flex items-center gap-1.5 text-xs text-green-500 mt-3">
            <span className="w-2 h-2 rounded-full bg-green-500 shrink-0" />
            Shipping &amp; taxes calculated at checkout
          </div>

          <hr className="border-t border-[#d8dced] my-5" />

          {/* Delivery Details */}
          <h2 className="text-[18px] font-bold text-[#1a2e6f] text-center mb-5 tracking-wide">
            Delivery Details
          </h2>

          <div className="flex flex-col gap-4">
            {/* Full Name */}
            <div>
              <p className="text-[11px] font-semibold text-[#7b82a8] uppercase tracking-widest mb-1">
                Full Name <span className="text-[#ff2d6b]">*</span>
              </p>
              <input
                type="text"
                placeholder="e.g. Ram Bahadur Thapa"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-transparent border-0 border-b border-[#c8cce0] pb-2.5 pt-2 px-1 text-sm text-[#1a1f36] placeholder-[#b0b8d0] outline-none focus:border-[#1a2e6f] transition-colors duration-150 w-full"
              />
            </div>

            {/* Phone */}
            <div>
              <p className="text-[11px] font-semibold text-[#7b82a8] uppercase tracking-widest mb-1">
                Phone Number <span className="text-[#ff2d6b]">*</span>
              </p>
              <input
                type="tel"
                placeholder="+977 98XXXXXXXX"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="bg-transparent border-0 border-b border-[#c8cce0] pb-2.5 pt-2 px-1 text-sm text-[#1a1f36] placeholder-[#b0b8d0] outline-none focus:border-[#1a2e6f] transition-colors duration-150 w-full"
              />
            </div>

            {/* City */}
            <div>
              <p className="text-[11px] font-semibold text-[#7b82a8] uppercase tracking-widest mb-1">
                City / District <span className="text-[#ff2d6b]">*</span>
              </p>
              <input
                type="text"
                placeholder="e.g. Kathmandu"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="bg-transparent border-0 border-b border-[#c8cce0] pb-2.5 pt-2 px-1 text-sm text-[#1a1f36] placeholder-[#b0b8d0] outline-none focus:border-[#1a2e6f] transition-colors duration-150 w-full"
              />
            </div>

            {/* Address */}
            <div>
              <p className="text-[11px] font-semibold text-[#7b82a8] uppercase tracking-widest mb-1">
                Delivery Address <span className="text-[#ff2d6b]">*</span>
              </p>
              <textarea
                placeholder="Street, area, landmark…"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                rows={3}
                className="bg-transparent border border-[#c8cce0] rounded-lg px-2 py-2.5 text-sm text-[#1a1f36] placeholder-[#b0b8d0] outline-none focus:border-[#1a2e6f] transition-colors duration-150 w-full resize-none"
              />
            </div>

            {/* Note */}
            <div>
              <p className="text-[11px] font-semibold text-[#7b82a8] uppercase tracking-widest mb-1">
                Order Note
              </p>
              <input
                type="text"
                placeholder="Any special instructions?"
                value={note}
                onChange={(e) => setNote(e.target.value)}
                className="bg-transparent border-0 border-b border-[#c8cce0] pb-2.5 pt-2 px-1 text-sm text-[#1a1f36] placeholder-[#b0b8d0] outline-none focus:border-[#1a2e6f] transition-colors duration-150 w-full"
              />
            </div>
          </div>

          <hr className="border-t border-[#d8dced] my-5" />

          {/* Payment Method */}
          <p className="text-sm font-bold text-[#1a2e6f] mb-3">
            Payment Method
          </p>
          <div className="flex gap-3">
            {(["cash", "esewa"] as const).map((method) => (
              <label
                key={method}
                onClick={() => setPayment(method)}
                className={`flex-1 flex items-center gap-2.5 border-[1.5px] rounded-xl p-3 cursor-pointer transition-all duration-150 ${
                  payment === method
                    ? "border-[#1a2e6f] bg-[#e8ecf8]"
                    : "border-[#d8dced] bg-white"
                }`}
              >
                <input
                  type="radio"
                  name="payment"
                  value={method}
                  checked={payment === method}
                  onChange={() => setPayment(method)}
                  className="accent-[#1a2e6f] w-4 h-4 shrink-0"
                />
                <div>
                  <p className="text-sm font-bold text-[#1a2e6f]">
                    {method === "cash" ? (
                      "💵 Cash"
                    ) : (
                      <span>
                        <span className="text-green-500">e</span>Sewa
                      </span>
                    )}
                  </p>
                  <p className="text-[11px] text-[#7b82a8]">
                    {method === "cash" ? "Pay on delivery" : "Digital wallet"}
                  </p>
                </div>
              </label>
            ))}
          </div>

          <button
            onClick={handlePlaceOrder}
            className="w-full mt-5 bg-green-500 text-white font-bold text-[15px] py-4 rounded-xl tracking-wide transition-all duration-150 hover:opacity-90 hover:-translate-y-px cursor-pointer"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;

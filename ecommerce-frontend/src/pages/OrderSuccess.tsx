import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router";
import { toast } from "react-toastify";
import { 
  CheckCircle2, 
  XCircle, 
  Loader2, 
  ShoppingBag, 
  ArrowRight, 
  Package, 
  Truck, 
  Mail 
} from "lucide-react";

const BASE_URL = "http://localhost:4000";

function OrderSuccess() {
  const [searchParams] = useSearchParams();
  const esewaToken = searchParams.get("data");
  const [status, setStatus] = useState<"loading" | "success" | "error">("loading");
  const [message, setMessage] = useState("Verifying your payment...");
  const [orderId, setOrderId] = useState<string | null>(null);

  useEffect(() => {
    if (!esewaToken) {
      setStatus("error");
      setMessage("Invalid payment session or missing verification data.");
      return;
    }

    axios
      .post(
        `${BASE_URL}/api/orders/order-verify`,
        { esewaToken },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        },
      )
      .then((res) => {
        setStatus("success");
        setOrderId(res.data.data?.orderId || res.data.orderId || null);
        setMessage("Your payment was successful and your order has been confirmed.");
        toast.success("Order verified successfully!");
      })
      .catch((err) => {
        setStatus("error");
        setMessage(err.response?.data?.message || "We couldn't verify your payment. Please contact our support team.");
        toast.error("Payment verification failed.");
      });
  }, [esewaToken]);

  return (
    <div className="min-h-screen bg-[#f8f9fc] flex items-center justify-center px-4 py-12">
      <div className="max-w-2xl w-full">
        {status === "loading" && (
          <div className="bg-white rounded-3xl shadow-xl p-12 text-center border border-[#eceef5] flex flex-col items-center">
            <Loader2 className="w-16 h-16 text-[#1a2e6f] animate-spin mb-6" />
            <h2 className="text-2xl font-bold text-[#1a2e6f] mb-2">Verifying Your Order</h2>
            <p className="text-[#8892b0] max-w-sm mx-auto">
              Please wait a moment while we confirm your payment with eSewa. Do not refresh the page.
            </p>
          </div>
        )}

        {status === "success" && (
          <div className="space-y-6 animate-in fade-in zoom-in duration-500">
            {/* Main Success Card */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-[#eceef5]">
              <div className="bg-green-500 p-8 flex flex-col items-center text-white">
                <div className="bg-white/20 p-4 rounded-full mb-4">
                  <CheckCircle2 className="w-12 h-12" />
                </div>
                <h1 className="text-3xl font-bold mb-1">Order Confirmed!</h1>
                <p className="opacity-90">Thank you for your purchase</p>
              </div>
              
              <div className="p-8 text-center">
                <p className="text-[#5a6488] text-lg mb-8">
                  {message}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                  <div className="p-4 rounded-2xl bg-[#f0f2fb] border border-[#e4e7f0] flex flex-col items-center">
                    <Package className="w-6 h-6 text-[#1a2e6f] mb-2" />
                    <span className="text-xs font-bold text-[#1a2e6f] uppercase tracking-wider mb-1">Order Number</span>
                    <span className="text-sm font-semibold text-[#1a1f36]">#{orderId || "ORD-" + Math.floor(Math.random() * 1000000)}</span>
                  </div>
                  <div className="p-4 rounded-2xl bg-[#f0f2fb] border border-[#e4e7f0] flex flex-col items-center">
                    <Truck className="w-6 h-6 text-[#1a2e6f] mb-2" />
                    <span className="text-xs font-bold text-[#1a2e6f] uppercase tracking-wider mb-1">Delivery</span>
                    <span className="text-sm font-semibold text-[#1a1f36]">2-4 Business Days</span>
                  </div>
                  <div className="p-4 rounded-2xl bg-[#f0f2fb] border border-[#e4e7f0] flex flex-col items-center">
                    <Mail className="w-6 h-6 text-[#1a2e6f] mb-2" />
                    <span className="text-xs font-bold text-[#1a2e6f] uppercase tracking-wider mb-1">Confirmation</span>
                    <span className="text-sm font-semibold text-[#1a1f36]">Sent to your email</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/orders"
                    className="flex-1 bg-[#1a2e6f] text-white font-bold py-4 rounded-xl hover:opacity-90 hover:-translate-y-px transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-900/10"
                  >
                    Track My Order <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    to="/"
                    className="flex-1 bg-[#f0f2fb] text-[#1a2e6f] font-bold py-4 rounded-xl hover:bg-[#e4e7f0] transition-all flex items-center justify-center gap-2"
                  >
                    <ShoppingBag className="w-4 h-4" /> Continue Shopping
                  </Link>
                </div>
              </div>
            </div>

            {/* Help/Next Steps Card */}
            <div className="bg-[#eef0f8] rounded-2xl p-6 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="bg-white p-3 rounded-xl shadow-sm">
                  <Mail className="w-5 h-5 text-[#1a2e6f]" />
                </div>
                <div className="text-left">
                  <h4 className="font-bold text-[#1a2e6f] text-sm">Need any help?</h4>
                  <p className="text-xs text-[#7b82a8]">Contact our support team 24/7</p>
                </div>
              </div>
              <button className="text-[#1a2e6f] font-bold text-sm underline cursor-pointer">
                Support Center
              </button>
            </div>
          </div>
        )}

        {status === "error" && (
          <div className="bg-white rounded-3xl shadow-xl p-12 text-center border border-[#eceef5] animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="bg-red-50 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 border border-red-100">
              <XCircle className="w-12 h-12 text-red-500" />
            </div>
            <h2 className="text-3xl font-bold text-[#1a2e6f] mb-3">Verification Failed</h2>
            <p className="text-[#8892b0] mb-10 max-w-sm mx-auto leading-relaxed">
              {message}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => window.location.reload()}
                className="bg-[#ff2d6b] text-white font-bold px-8 py-4 rounded-xl hover:opacity-90 hover:-translate-y-px transition-all cursor-pointer shadow-lg shadow-pink-500/20"
              >
                Retry Verification
              </button>
              <Link
                to="/carts"
                className="bg-[#f0f2fb] text-[#1a2e6f] font-bold px-8 py-4 rounded-xl hover:bg-[#e4e7f0] transition-all flex items-center justify-center"
              >
                Return to Cart
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default OrderSuccess;

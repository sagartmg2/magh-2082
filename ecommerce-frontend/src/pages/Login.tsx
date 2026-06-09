import axios from "axios";
import React from "react";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { login } from "../redux/features/userSlice";
import { useDispatch } from "react-redux";

const DEV_USERS = [
  { label: "Buyer", email: "buyer@gmail.com", password: "password" },
  { label: "Seller", email: "seller@gmail.com", password: "password" },
  { label: "Admin", email: "admin@gmail.com", password: "password" },
];

export default function Login({ setUser }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    submitLogin(e.target.email.value, e.target.password.value);
  };

  const submitLogin = (email, password) => {
    axios
      .post(`${import.meta.env.VITE_API_URL}/login`, { email, password })
      .then((res) => {
        toast("login success!");
        localStorage.setItem("token", res.data.token);
        dispatch(login(res.data.user));
        if (res.data.user.isAdmin) {
          navigate("/admin/dashboard");
        } else {
          navigate("/");
        }
      })
      .catch((err) => {
        if (err.response.status === 401) {
          toast.error("Invalid Credentials");
        } else {
          toast.error(err.response.data.msg);
        }
      });
  };

  const handleDevLogin = (user) => {
    submitLogin(user.email, user.password);
  };

  return (
    <div className="min-h-screen bg-[#f8f8fb] flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white w-[544px] px-[56px] py-[50px] shadow-[0px_0px_25px_10px_#f8f8fb] flex flex-col items-center"
      >
        {/* Title */}
        <p className="font-['Josefin_Sans',sans-serif] font-bold text-[32px] text-black leading-normal mb-3">
          Login
        </p>

        {/* Subtitle */}
        <p className="font-['Lato',sans-serif] not-italic text-[17px] text-[#9096b2] leading-normal mb-7 text-center">
          Please login using account detail bellow.
        </p>

        {/* Email Input */}
        <div className="w-[432px] h-[52px] bg-white border border-[#c2c5e1] rounded-[2px] flex items-center px-3 mb-[23px]">
          <input
            defaultValue={"buyer@gmail.com"}
            type="email"
            name="email"
            placeholder="Email Address"
            className="w-full h-full outline-none font-['Lato',sans-serif] not-italic text-[16px] text-[#9096b2] placeholder-[#9096b2] bg-transparent"
          />
        </div>

        {/* Password Input */}
        <div className="w-[432px] h-[52px] bg-white border border-[#c2c5e1] rounded-[2px] flex items-center px-3 mb-4">
          <input
            defaultValue={"password"}
            name="password"
            type="password"
            placeholder="Password"
            className="w-full h-full outline-none font-['Lato',sans-serif] not-italic text-[16px] text-[#9096b2] placeholder-[#9096b2] bg-transparent"
          />
        </div>

        {/* Forgot Password */}
        <div className="w-[432px] mb-5">
          <p className="font-['Lato',sans-serif] not-italic text-[17px] text-[#9096b2] leading-normal cursor-pointer hover:underline">
            Forgot your password?
          </p>
        </div>

        {/* Sign In Button */}
        <button className="w-[432px] h-[52px] bg-[#f03e7a] text-white font-bold text-[16px] rounded-[2px] mb-5 hover:opacity-90 transition-opacity">
          Sign In
        </button>

        {/* Footer */}
        <p className="font-['Lato',sans-serif] not-italic text-[17px] text-[#9096b2] leading-normal">
          Don't have an Account?{" "}
          <Link to="/signup" className="cursor-pointer hover:underline">
            Create account
          </Link>
        </p>

        {/* Dev Quick Login — remove before production */}
        {process.env.NODE_ENV === "development" && (
          <div className="w-[432px] mt-7 border border-dashed border-[#c2c5e1] rounded-[4px] p-4">
            <p className="font-['Lato',sans-serif] text-[12px] font-bold text-[#9096b2] uppercase tracking-widest mb-3">
              🛠 Dev Quick Login
            </p>
            <div className="flex gap-2">
              {DEV_USERS.map((user) => (
                <button
                  key={user.label}
                  type="button"
                  onClick={() => handleDevLogin(user)}
                  className="flex-1 py-2 text-[13px] font-['Lato',sans-serif] font-bold text-[#9096b2] border border-[#c2c5e1] rounded-[2px] hover:bg-[#f8f8fb] hover:border-[#f03e7a] hover:text-[#f03e7a] transition-all"
                >
                  {user.label}
                </button>
              ))}
            </div>
            <p className="font-['Lato',sans-serif] text-[11px] text-[#c2c5e1] mt-2 text-center">
              All accounts use password: <span className="font-bold">password</span>
            </p>
          </div>
        )}
      </form>
    </div>
  );
}